import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container for grid layouts that allows responsive design.
 * @param className - [Optional]
 */
export function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`@container space-y-4 ${cn(className)}`}>{children}</div>
  );
}

type GridContentProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A responsive grid component that adapts to different screen sizes.
 * @param className - [Optional]
 */
Grid.Content = function GridContent({
  children,
  className = "",
}: GridContentProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 @md:grid-cols-3 ${cn(className)}`}>
      {children}
    </div>
  );
};
