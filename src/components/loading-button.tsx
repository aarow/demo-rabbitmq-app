"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export function LoadingButton({
  isLoading,
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: LoadingButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className={`${className}`}
      type={type}
      aria-disabled={isLoading}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
