import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polymath — Independent Prototype",
  description:
    "An independent, unofficial prototype exploring one possible user flow for Polymath.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
