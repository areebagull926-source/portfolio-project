import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Areeba Gull | Web Developer",
  description: "Areeba Gull - Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}