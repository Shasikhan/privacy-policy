import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dear Diary",
  description: "Privacy Policy for Dear Diary",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
