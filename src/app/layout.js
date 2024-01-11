import "./globals.css";
import { Mulish } from "next/font/google";
import ReduxProvider from "@/Providers/ReduxProvider";
import AuthProvider from "@/Providers/AuthProvider/AuthProvider";

const mulish = Mulish({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}