import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Power Banks — Fast Charging & High Capacity | Shazib Outlet" },
      {
        name: "description",
        content:
          "Buy 20000mAh, slim digital and rugged fast-charge power banks at Shazib Outlet — tested capacity with nationwide delivery.",
      },
      { property: "og:title", content: "Power Banks | Shazib Outlet" },
      {
        property: "og:description",
        content: "High-capacity, fast-charging power banks at outlet prices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      category="Power Banks"
      eyebrow="POWER BANK COLLECTION"
      heading="Power That Keeps Up"
      intro="High-capacity backup power with USB-C fast charging, live battery displays and rugged builds for travel and long work days."
      hero="/media/powerbank-1.jpg"
      points={[
        { title: "True Capacity", text: "Every unit is charge-tested so the mAh you pay for is the mAh you get." },
        { title: "Fast Charging", text: "USB-C power delivery and quick charge for phones, buds and tablets." },
        { title: "Safe Circuits", text: "Overcharge, overheat and short-circuit protection built in." },
      ]}
    />
  ),
});
