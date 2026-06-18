import re

def check_balance():
    with open(r"c:\workspace\OpenMarket\src\app\contact-us\page.tsx", "r", encoding="utf-8") as f:
        content = f.read()
        
    # We want to parse tags inside the return () block.
    # Let's find "return ("
    start_idx = content.find("return (")
    if start_idx == -1:
        print("Could not find 'return ('")
        return
        
    return_block = content[start_idx:]
    
    # We will strip out comments to avoid matching commented tags
    # HTML comments: {/* ... */}
    return_block = re.sub(r'\{\/\*.*?\*\/\s*\}', '', return_block, flags=re.DOTALL)
    # Javascript comments: // ... or /* ... */
    # (just basic stripping)
    return_block = re.sub(r'\/\/.*?\n', '\n', return_block)
    
    # Match tags
    # We will find tags like <section className="...">, <div ...>, </section>, </div>, etc.
    # Note: Self-closing tags like <Image ... /> or <input ... /> should not be counted.
    tags = re.findall(r'<([a-zA-Z0-9\-]+)(?:\s+[^>]*?)?>|</([a-zA-Z0-9\-]+)>', return_block)
    
    stack = []
    for open_tag, close_tag in tags:
        # Check if it's self closing in raw text (ends with />)
        # Note: the regex might capture self-closing tags if we're not careful.
        # But we can check if it has "/>" in the original tag match.
        pass
        
    # A simpler way is to just do a manual inspection or print out the tags line by line.
    lines = return_block.splitlines()
    for idx, line in enumerate(lines):
        # Find any non-self-closing tags
        # Opening tags:
        open_tags = re.findall(r'<([a-zA-Z0-9]+)(?:\s+[^>]*?[^/])?>', line)
        # Closing tags:
        close_tags = re.findall(r'</([a-zA-Z0-9]+)>', line)
        
        # Self closing tags:
        self_closing = re.findall(r'<([a-zA-Z0-9]+)(?:\s+[^>]*?\/)>', line)
        
        # We filter out items that match both opening and self-closing
        open_tags = [t for t in open_tags if t not in self_closing]
        
        for t in open_tags:
            stack.append((t, idx + start_idx))
            print(f"[{idx+1}] OPEN: {t}")
        for t in close_tags:
            if stack:
                last_t, last_line = stack.pop()
                if last_t != t:
                    print(f"ERROR: Mismatched tag </{t}> at line {idx+1} (expected </{last_t}> opened at line {last_line - start_idx + 1})")
                else:
                    print(f"[{idx+1}] CLOSE: {t}")
            else:
                print(f"ERROR: Unexpected CLOSE </{t}> at line {idx+1}")
                
    if stack:
        print("Unclosed tags remaining on stack:")
        for t, line in stack:
            print(f"  <{t}> opened at line {line - start_idx + 1}")

if __name__ == "__main__":
    check_balance()
