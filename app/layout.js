import { Montserrat, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cursive",
  display: "swap",
});

export const metadata = {
  title: "Rajbir Aujla | Independent Artist",
  description: "Where Words Fail, Music Speaks 🎤",

  openGraph: {
    title: "Rajbir Aujla",
    description: "Where Words Fail, Music Speaks 🎤",
    url: "https://yourdomain.com",
    siteName: "Rajbir Aujla",
    images: [
      {
        url: "/RajbirAujlaOfficialProfile.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajbir Aujla",
    description: "Where Words Fail, Music Speaks 🎤",
    images: ["/RajbirAujlaOfficialProfile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${dancingScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}