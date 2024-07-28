import { Six_Caps, Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor/Cursor";
import PreLoader from "@/components/PreLoader/PreLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Zeeshan",
  description: "Portfolio App Zeeshan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${poppins.className}`}>
      {/* <PreLoader /> */}
      <div id="main-content" >
        <Cursor />
        {children}
      </div>
    </body>
  </html>
  );
}
