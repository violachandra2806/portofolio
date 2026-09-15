import { themeVars } from "./themes/theme";
import siteSeo from "../public/seo/site-seo.json";
// import backgroundImage from "../src/image/jelly.jpg";

export const metadata = {
  metadataBase: new URL(siteSeo.metadataBaseUrl),
  title: {
    default: siteSeo.title,
    template: siteSeo.titleTemplate,
  },
  description: siteSeo.description,
  keywords: siteSeo.keywords,
  authors: siteSeo.authors,
  creator: siteSeo.creator,
  publisher: siteSeo.publisher,
  robots: siteSeo.robots,
  alternates: siteSeo.alternates,
  openGraph: siteSeo.openGraph,
  twitter: siteSeo.twitter,
  icons: {
    icon: "/portofolio/favicon.ico",
    shortcut: "/portofolio/favicon.ico",
    apple: "/portofolio/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          ...themeVars,
          margin: 0,
          minHeight: "100vh",
          overflowX: "hidden",
          background: themeVars["--bg"],
          color: themeVars["--text"],
          fontFamily: themeVars["--font-body"],
          lineHeight: 1.6,
        //   backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "#f6f2e9",
        }}
      >
        {children}
      </body>
    </html>
  );
}
