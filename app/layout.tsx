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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
