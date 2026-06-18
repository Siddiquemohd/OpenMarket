from html.parser import HTMLParser
import re

class JSXParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []
        
    def handle_starttag(self, tag, attrs):
        # Ignore self-closing tags or tags that are empty
        # JSX specific: we will treat all standard tags.
        # But wait, in HTMLParser, self-closing tags like <img ... /> or <input ... />
        # are handled by handle_startendtag if the slash is there, but otherwise
        # HTMLParser might think they are open tags.
        # So let's check if the tag is a known self-closing tag in HTML or custom self-closing.
        self_closing = {'img', 'input', 'br', 'hr', 'meta', 'link', 'image', 'svg', 'path', 'ellipse', 'line'}
        
        # If we have an Image or other tag, we check if it is closed or if it's self-closing.
        # For our parser, let's treat lowercase tags plus common capital ones like Image.
        # But wait, in JSX, any tag can be self-closing if it ends with />.
        # HTMLParser doesn't give us the raw tag text easily, but we can check the line contents.
        # Actually, let's just keep track of lines and tags.
        pass

def parse_jsx():
    with open(r"c:\workspace\OpenMarket\src\app\contact-us\page.tsx", "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    # We want to trace curly brace blocks and tags manually by scanning character by character.
    # This is extremely robust!
    content = "".join(lines)
    
    # Let's find "return ("
    start = content.find("return (")
    if start == -1:
        print("No return ( found")
        return
        
    # Let's scan character by character from start
    # We keep track of JSX tags.
    # A JSX tag starts with '<' followed by an alphabet character, and ends with '>'
    # A closing tag starts with '</'
    # A self-closing tag ends with '/>'
    # We ignore comments {/* ... */} and string literals.
    
    i = start + 8
    stack = []
    
    # Simple scanner
    in_comment = False
    in_tag = False
    tag_buffer = ""
    in_string = False
    string_char = ""
    
    while i < len(content):
        # Check for HTML comment start {/*
        if not in_comment and content[i:i+3] == "{/*":
            in_comment = True
            i += 3
            continue
        # Check for HTML comment end */}
        if in_comment and content[i:i+3] == "*/}":
            in_comment = False
            i += 3
            continue
            
        if in_comment:
            i += 1
            continue
            
        char = content[i]
        
        # Check for tag start
        if not in_tag and char == '<':
            # Check if it's a comment or JS expression
            # If next char is alphabet or '/'
            next_char = content[i+1] if i+1 < len(content) else ''
            if next_char.isalpha() or next_char == '/' or next_char == '!':
                in_tag = True
                tag_buffer = "<"
                i += 1
                continue
                
        if in_tag:
            tag_buffer += char
            if char == '>':
                in_tag = False
                # Process the tag
                tag_text = tag_buffer
                # Clean up tag text (remove attributes)
                # Check if it is a closing tag </tag>
                if tag_text.startswith("</"):
                    tag_name = tag_text[2:-1].strip()
                    if stack:
                        last_tag, last_line = stack.pop()
                        if last_tag != tag_name:
                            # Print surrounding context
                            line_num = content[:i].count('\n') + 1
                            print(f"Error: Mismatched tag </{tag_name}> at line {line_num} (expected </{last_tag}> opened at line {last_line})")
                    else:
                        line_num = content[:i].count('\n') + 1
                        print(f"Error: Unexpected closing tag </{tag_name}> at line {line_num}")
                # Check if it is self-closing <tag />
                elif tag_text.endswith("/>"):
                    pass # ignore self-closing
                elif tag_text.startswith("<!--"):
                    pass # ignore comments
                else:
                    # Opening tag
                    # extract tag name
                    match = re.match(r"<([a-zA-Z0-9\-:]+)", tag_text)
                    if match:
                        tag_name = match.group(1)
                        # Filter out common HTML self-closing tags if they don't have />
                        if tag_name.lower() not in {'br', 'hr', 'img', 'input', 'meta', 'link'}:
                            line_num = content[:i].count('\n') + 1
                            stack.append((tag_name, line_num))
            i += 1
            continue
            
        i += 1
        
    print("Tags remaining on stack:")
    for tag_name, line in stack:
        print(f"  <{tag_name}> opened at line {line}")

if __name__ == "__main__":
    parse_jsx()
