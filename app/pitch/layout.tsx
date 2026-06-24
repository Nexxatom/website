import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Pitch - Nexxatom",
    template: "%s | Nexxatom"
  },
  description: "Nexxatom Technologies Pvt Ltd - Pitch Presentations",
};

export default function PitchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
