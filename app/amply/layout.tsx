import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amply",
  description: "Privacy Policy for Amply",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
