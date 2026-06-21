import { type ReactNode, type MouseEventHandler } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler;
  "aria-label"?: string;
}

interface ButtonAsButton extends BaseProps {
  as?: "button";
  href?: never;
}

interface ButtonAsAnchor extends BaseProps {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-red-arena text-text-white hover:bg-red-arena/90 shadow-[0_0_0_1px_rgba(255,77,77,0.4)]",
  secondary:
    "bg-blue-accent text-text-white hover:bg-blue-accent/90 shadow-[0_0_0_1px_rgba(45,91,255,0.4)]",
  outline:
    "bg-transparent text-text-white border border-border hover:border-red-arena hover:text-red-arena",
  ghost: "bg-transparent text-text-white hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-wide rounded-sm transition-colors duration-200 whitespace-nowrap";

/** Shared CTA button used across the site (Register, Create Account, etc.). */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    children,
    className = "",
    type = "button",
    disabled,
    onClick,
    ...rest
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="text-base">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="text-base">{icon}</span>}
    </>
  );

  if (rest.as === "a") {
    const { href, target, rel } = rest;
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        aria-label={rest["aria-label"]}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      aria-label={rest["aria-label"]}
    >
      {content}
    </motion.button>
  );
}
