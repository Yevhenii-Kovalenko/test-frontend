import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Test Task Frontend",
  description: "Develop a frontend for a test task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className} cz-shortcut-listen="true">
        <div id="modal-root"></div>
        {children}
      </body>
    </html>
  );
}
