import { cn } from "@/lib/utils";

type ColumnProps = {
  children: React.ReactNode;
  span?: 1 | 2 | 3;
  className?: string;
};

/**
 * A column component that allows for flexible layout design.
 * @param className - [Optional]
 * @param span - [Optional] Default: 1
 */
export function Column({ children, span = 1, className = "" }: ColumnProps) {
  return (
    <div
      className={`space-y-4 ${cn({
        "col-span-1": span === 1,
        "col-span-2": span === 2,
        "col-span-3": span === 3,
        [className]: className,
      })}`}
    >
      {children}
    </div>
  );
}

type ColumnHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A heading component for columns, typically used for titles or labels.
 * @param className - [Optional]
 */
export function ColumnHeading({
  children,
  className = "",
}: ColumnHeadingProps) {
  return (
    <h2 className={`text-muted-foreground uppercase ${cn(className)}`}>
      {children}
    </h2>
  );
}

type ColumnBodyProps = { children: React.ReactNode; className?: string };

/**
 * A body component for columns, typically used for content.
 * @param className - [Optional]
 */
export function ColumnBody({ children, className = "" }: ColumnBodyProps) {
  return <div className={`${cn(className)}`}>{children}</div>;
}
