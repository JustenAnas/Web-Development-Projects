import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SessionWrapper from "./component/SessionWrapper";

export const metadata = {
  title: "Get Me a CHai  - found your projects",
  description:
    "This app is created by anas for your projects to shine to the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[83.6vh]  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
