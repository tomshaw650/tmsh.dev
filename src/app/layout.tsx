import "./globals.css";
import Providers from "@/utils/provider";
import { League_Spartan } from "next/font/google";

const ls = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Tom Shaw",
    default: "Portfolio | Tom Shaw",
  },
  description: "Homepage for the portfolio",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ls.className}>
      <body className="max-w-2xl h-full mx-auto px-6 my-8 bg-hero text-white">
        <nav className="mb-5 gap-x-5 flex">
          <a className="hover:text-[#FDD641] text-xl" href="/">
            home
          </a>
          <a className="hover:text-[#FDD641] text-xl" href="/about">
            about
          </a>
          <a className="hover:text-[#FDD641] text-xl" href="/projects">
            projects
          </a>
          <a className="hover:text-[#FDD641] text-xl" href="/contact">
            email
          </a>
        </nav>
        <Providers>
          <main className="flex flex-col h-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
