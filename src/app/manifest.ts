import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eleve Church",
    short_name: "Eleve",
    description: "Aplicativo da Eleve Church",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4A3AFF",
    icons: [
      {
        src: "/app-icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/app-icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
