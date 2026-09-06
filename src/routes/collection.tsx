import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Watches — Chronograph, Classic & Smart | Shazib Outlet" },
      {
        name: "description",
        content:
          "Shop original chronograph, classic leather and sport smart watches at Shazib Outlet with outlet pricing and nationwide delivery.",
      },
      { property: "og:title", content: "Watches | Shazib Outlet" },
      {
        property: "og:description",
        content: "Chronograph, classic leather and smart watches at outlet prices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      category="Watches"
      eyebrow="WATCH COLLECTION"
      heading="Watches For Every Day"
      intro="From steel chronographs to minimal leather classics and sport smart watches — each piece is checked and tested before it reaches you."
      hero="/media/watch-1.jpg"
      points={[
        { title: "Original Movements", text: "Reliable quartz and smart movements, tested for accuracy before dispatch." },
        { title: "Straps That Last", text: "Genuine leather, stainless steel and soft silicone sport straps." },
        { title: "Gift Ready", text: "Every watch ships in a clean presentation box, perfect for gifting." },
      ]}
    />
  ),
});
