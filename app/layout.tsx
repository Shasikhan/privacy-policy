import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policies",
  description: "Privacy Policies for Applications",
};

export default function RootLayout({
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
