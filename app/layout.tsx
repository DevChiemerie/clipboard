import type { Metadata } from "next";
import "@/app/global.css";

import { Bai_Jamjuree } from "next/font/google";

const baiFont = Bai_Jamjuree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    template: "The Clipboard",
    default: "The Clipboard",
  },
  description:
    "A simple way to keep track of everything you copy on the internet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${baiFont.className} bg-body`}>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
