import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const firaMono = Fira_Mono({
  weight: "500",
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roman Pavlenko",
  description: "Hi, this is my personal page. Feel free to look around",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialTheme = cookieStore.get("theme")?.value || "dark";
  return (
    <html lang="en" data-theme={initialTheme}>
      <body className={`${firaMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
