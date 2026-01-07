import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Norsk Folkehjelp - Antirasisme",
  description: "Sammen mot rasisme. Vi jobber for et samfunn hvor alle mennesker har like muligheter, uavhengig av hudfarge, etnisitet eller kulturell bakgrunn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
