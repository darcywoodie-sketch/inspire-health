import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Inspire Health Osteo",
  description: "Comprehensive osteopathic services including General Osteopathy, Sports & Rehab, and Pregnancy & Paediatrics care.",
  openGraph: {
    title: "Our Services - Inspire Health Osteo",
    description: "Comprehensive osteopathic services tailored to your needs.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

