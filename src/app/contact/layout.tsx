import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Inspire Health Osteo",
  description: "Get in touch with Inspire Health Osteo. Find our address, phone, email, and opening hours.",
  openGraph: {
    title: "Contact Us - Inspire Health Osteo",
    description: "Get in touch with Inspire Health Osteo.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

