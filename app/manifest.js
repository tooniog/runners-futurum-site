export default function manifest() {
  return {
    name: "Runners Futurum",
    short_name: "Runners Futurum",
    description:
      "Runners Futurum builds practical AI platforms and technology businesses for Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#071033",
    theme_color: "#071033",
    icons: [
      {
        src: "/runners-futurum-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/runners-futurum-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
