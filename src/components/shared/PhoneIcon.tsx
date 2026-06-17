import { FiPhoneCall } from "react-icons/fi";
import type { IconBaseProps } from "react-icons";

type PhoneIconProps = IconBaseProps & {
  decorative?: boolean;
};

export function PhoneIcon({
  size = 24,
  strokeWidth = 2.2,
  decorative = true,
  ...props
}: PhoneIconProps) {
  return (
    <FiPhoneCall
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={decorative ? "true" : undefined}
      focusable={decorative ? "false" : undefined}
      {...props}
    />
  );
}
