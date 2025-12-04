import "./globals.css";

export const metadata = {
  title: "Eleve Church",
  description: "Aplicativo da Eleve Church",
  icons: {
    icon: "/app-icons/icon.png",
    apple: "/app-icons/icon.png",
  },
  appleWebApp: {
    capable: true,
    display: "standalone",
    statusBarStyle: "default",
    title: "Eleve Church",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if(typeof window !== "undefined" && "serviceWorker" in navigator) {
                window.addEventListener("load", () => {
                  navigator.serviceWorker.register("/sw.js").catch(err => {
                    console.log("SW registration failed:", err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
