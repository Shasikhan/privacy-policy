import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpendWise",
  description: "Privacy Policy for SpendWise",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
