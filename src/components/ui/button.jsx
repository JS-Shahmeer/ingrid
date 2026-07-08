import * as React from "react";
import { cn } from "@/components/lib/utils";

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const baseClass = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

export const Button = React.forwardRef(function Button(
  { className, variant = "default", type = "button", asChild = false, children, ...props },
  ref,
) {
  const classes = cn(baseClass, buttonVariants[variant] || buttonVariants.default, className);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ref,
      className: cn(classes, children.props.className),
    });
  }
  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {children}
    </button>
  );
});
