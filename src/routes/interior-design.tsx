import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/interior-design")({
  head: () => ({
    meta: [
      { title: "Leather Wallets — Bifold, Card Holder & Zip | Shazib Outlet" },
      {
        name: "description",
        content:
          "Genuine leather bifold wallets, slim card holders and zip long wallets at Shazib Outlet — durable stitching at outlet prices.",
      },
      { property: "og:title", content: "Leather Wallets | Shazib Outlet" },
      {
        property: "og:description",
        content: "Bifolds, card holders and zip wallets in genuine leather.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <CategoryPage
      category="Wallets"
      eyebrow="WALLET COLLECTION"
      heading="Genuine Leather Wallets"
      intro="Bifolds, slim card holders and zip-around long wallets — soft genuine leather with strong stitching that ages beautifully."
      hero="/media/wallet-1.jpg"
      points={[
        { title: "Real Leather", text: "Full-grain and top-grain leather that develops a rich patina over time." },
        { title: "Smart Storage", text: "Plenty of card slots, note sections and hidden compartments." },
        { title: "Slim In Pocket", text: "Designed to stay flat so your pocket never bulges." },
      ]}
    />
  ),
});
