"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "rounded";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      primary:
        "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500 rounded-md",
      secondary:
        "bg-gray-200 text-black hover:bg-gray-300 focus-visible:ring-gray-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 dark:focus-visible:ring-zinc-600 rounded-md",
      danger:
        "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500 rounded-md",
      rounded:
        "bg-black text-white dark:bg-white dark:text-black rounded-full w-fit",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
