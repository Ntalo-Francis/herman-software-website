import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal",
        className
      )}
    >
      {children}
    </span>
  );
}