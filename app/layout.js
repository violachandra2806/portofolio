import { themeVars } from "./themes/theme";
// import backgroundImage from "../src/image/jelly.jpg";

export const metadata = {
  title: "Portofolio | Software Engineer",
  description: "Interactive portfolio website for a software engineer",
  icons: {
    icon: "/icon.svg",
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
