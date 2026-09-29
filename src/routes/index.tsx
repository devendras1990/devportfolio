import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devendra Singh Bisht — Senior UI/UX & Product Designer" },
      {
        name: "description",
        content:
          "Devendra Singh Bisht is a Senior UI/UX & Product Designer with 8 years of experience designing digital products, e-commerce experiences, responsive websites and AI-assisted product experiences.",
      },
      { property: "og:title", content: "Devendra Singh Bisht — Senior UI/UX & Product Designer" },
      {
        property: "og:description",
        content:
          "Senior UI/UX & Product Designer with 8 years of experience creating digital products and AI-assisted experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
