import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bootstrapfile from "../components/bootstrapfile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Bootstrapfile />
      </body>
    </html>
  );
}
