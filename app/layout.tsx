import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./fonts.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/themeProvider";

export const metadata: Metadata = {
  title: "jackey yang",
  description:
    "I'm Jackey, a software developer in NYC building way too many things. I graduated from Stevens Institute of Technology with a degree in Computer Science. If you'd like to work together, feel free to reach out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
