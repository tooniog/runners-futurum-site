import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  variable: "--font-fraunces",
  src: [
    { path: "../public/fonts/Fraunces.ttf", style: "normal" },
    { path: "../public/fonts/FrauncesItalic.ttf", style: "italic" },
  ],
  display: "swap",
});

const plexSans = localFont({
  variable: "--font-plex-sans",
  src: [{ path: "../public/fonts/PlexSansVar.ttf", style: "normal" }],
  display: "swap",
});

const plexMono = localFont({
  variable: "--font-plex-mono",
  src: [
    {
      path: "../public/fonts/PlexMono-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PlexMono-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PlexMono-600.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Runners Futurum",
  description:
    "Runners Futurum builds practical AI platforms and technology businesses for Nigeria across institutional intelligence, agriculture and real-world services.",
  applicationName: "Runners Futurum",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Runners Futurum",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}