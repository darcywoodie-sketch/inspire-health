import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Inspire Health Osteo",
  description: "Learn about Inspire Health Osteo, our philosophy, values, and dedicated team of osteopathic practitioners.",
  openGraph: {
    title: "About Us - Inspire Health Osteo",
    description: "Learn about Inspire Health Osteo, our philosophy, values, and dedicated team.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

