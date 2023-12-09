import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Inter, Young_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: '400',
})

export const metadata = {
  title: "Ozpe Agency",
  description: "Ozpe Agency",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      
      <body className={`bg-black font-sans text-white ${youngSerif.variable}`}>
      <Toaster
        position="top-left"
        toastOptions={{
          error: {
            style: {
              background: "black",
              color: "white",
            },
            iconTheme: { primary: "black", secondary: "white" },
          },

          success: {
            style: {
              background: "black",
              color: "white",
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
