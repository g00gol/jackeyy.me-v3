export function Footer() {
  return (
    <footer className="sticky bottom-0 z-[-100]">
      <div className="text-muted-foreground mx-auto max-w-7xl px-4 py-8 text-center text-sm">
        © {new Date().getFullYear()} jackey yang. All rights reserved.
      </div>
    </footer>
  );
}
