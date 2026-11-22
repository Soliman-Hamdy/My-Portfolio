import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Soliman Hamdy | Front-End Developer",
  description:
    "Portfolio of Soliman Hamdy, a Front-End Developer building responsive interfaces with React, Next.js, TypeScript and Tailwind CSS.",
};

/*
  Runs before the page paints, so there is no dark/light flash.
  Dark is the default. Only a saved "light" choice switches it off.
*/
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var isDark = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${poppins.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
