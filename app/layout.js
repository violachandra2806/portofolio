import "./themes/globals.css";

export const metadata = {
  title: "Portofolio | Software Engineer",
  description: "Interactive portfolio website for a software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
