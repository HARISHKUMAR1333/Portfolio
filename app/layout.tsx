import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://harishkumar.dev"; // placeholder canonical
const description = `${profile.name} — ${profile.title}. ${profile.intro}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Harishkumar A",
    "Full-Stack AI Engineer",
    "React Developer",
    "Node.js",
    "AI Agent Developer",
    "RAG",
    "LLM",
    "Portfolio",
    "Madurai",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} · ${profile.title}`,
    description,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9A%A1%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: profile.company },
  knowsAbout: [
    "React",
    "Node.js",
    "AI Agents",
    "RAG",
    "LLM Tool Calling",
    "Cloud & DevOps",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
