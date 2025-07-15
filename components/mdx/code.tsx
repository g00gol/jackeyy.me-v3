export const pre = ({
  children,
}: {
  children: React.ReactNode & { props?: Record<string, unknown> };
}) => {
  const child = children?.props;
  const className = (child?.className as string) || "";
  const match = className.match(/hljs language-([^(]+)(?:\(([^)]+)\))?/); // regex to capture language and optional title in parentheses
  const language = match?.[1]?.trim() || "text";
  const title = match?.[2]?.trim() || "";

  const languageMap: Record<string, string> = {
    ts: "typescript",
    js: "javascript",
    jsx: "jsx",
    tsx: "tsx",
    py: "python",
    csharp: "c#",
    cpp: "c++",
  };

  return (
    <div className="relative mb-4 max-w-2xl">
      <pre className="bg-card overflow-x-auto rounded-lg p-4 text-sm">
        <div className="text-muted-foreground border-muted z-10 mb-4 flex w-full justify-between border-b text-xs">
          <span>{title}</span>
          <span>{languageMap[language] || language}</span>
        </div>
        <div className="[&>code]:p-0">{children}</div>
      </pre>
    </div>
  );
};

export const code = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="bg-card rounded px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  );
};
