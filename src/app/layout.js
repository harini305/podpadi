import { Comfortaa, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterSize from "@/components/FooterSize";
import Motion from "@/components/Motion";
import site from "@/data/site";
import "./globals.css";

// The only two families on the site. Comfortaa is the original Podpadi logotype face and
// carries the wordmark, headings and display text; Manrope carries body copy and controls.
// next/font downloads both at build time and serves them from this app.
const display = Comfortaa({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const text = Manrope({
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${site.name} — Private-pool villas in Ubud (demo)`,
    template: `%s · ${site.name} (demo)`,
  },
  description: `${site.summary} An independent UI redesign demo.`,
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#1E2E45",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FooterSize />
        <Motion />
      </body>
    </html>
  );
}
