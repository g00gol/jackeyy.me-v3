import { cn } from "@/lib/utils";

type GridContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container for grid layouts that allows responsive design.
 * @param className - [Optional]
 */
export function GridContainer({
  children,
  className = "",
}: GridContainerProps) {
  return (
    <div className={`@container space-y-4 ${cn(className)}`}>{children}</div>
  );
}

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A responsive grid component that adapts to different screen sizes.
 * @param className - [Optional]
 */
export function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 @md:grid-cols-3 ${cn(className)}`}>
      {children}
    </div>
  );
}
