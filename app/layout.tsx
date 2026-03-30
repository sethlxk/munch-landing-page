import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munch - Discover Your Perfect Meal",
  description:
    "Munch helps you discover personalized meal recommendations based on your unique taste profile. Download the app and start your food journey today.",
  keywords: ["food", "meal", "recommendations", "personalized", "app", "munch"],
  openGraph: {
    title: "Munch - Discover Your Perfect Meal",
    description:
      "Personalized meal recommendations based on your unique taste profile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
