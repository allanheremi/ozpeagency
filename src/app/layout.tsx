import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { League_Gothic } from "next/font/google";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata = {
  title: "Ozpe Agency - Photography, Film, Graphic Design, Music & Sound",
  description:
    "Ozpe Agency specializes in photography, film, graphic design, music & sound. We provide creative direction, brand identity, and management services. Located in Västerås, Sweden",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#000000"/>
      <body
        className={`bg-black font-sans text-white ${leagueGothic.variable}`}
      >
        <Toaster
          position="top-left"
          toastOptions={{
            duration: 3500,
            error: {
              style: {
                background: "black",
                color: "white",
                fontSize: "2rem",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "white",
              },
              iconTheme: { primary: "black", secondary: "white" },
            },

            success: {
              duration: 3500,
              style: {
                background: "black",
                color: "white",
                fontSize: "2rem",
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "white",
              },
              iconTheme: { primary: "black", secondary: "white" },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
