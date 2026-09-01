import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartScan: PDF Maker",
  description: "Privacy Policy for SmartScan: PDF Maker",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
