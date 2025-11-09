import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "👨‍💻 William Hudson Tang | Computer Science Student",
  description: "Computer Science student at Lehigh University with experience in full-stack development, machine learning, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
