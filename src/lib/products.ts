
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  blurb: string;
  tag?: string;
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    id: "chrono-steel-watch",
    name: "Chrono Steel Navy Dial Watch",
    category: "Watches",
    price: 8500,
    oldPrice: 11000,
    image: "/media/watch-1.jpg",
    blurb: "Stainless steel chronograph with a deep navy dial and orange rim accents.",
    tag: "Bestseller",
    comingSoon: true,
  },
  {
    id: "classic-leather-watch",
    name: "Classic Minimal Leather Watch",
    category: "Watches",
    price: 5500,
    image: "/media/watch-2.jpg",
    blurb: "Clean white dial, black leather strap and a signature orange second hand.",
    comingSoon: true,
  },
  {
    id: "sport-smart-watch",
    name: "Sport Orange Smart Watch",
    category: "Watches",
    price: 7200,
    oldPrice: 9000,
    image: "/media/watch-3.jpg",
    blurb: "Fitness tracking, bright display and a bold orange sport strap.",
    tag: "New",
    comingSoon: true,
  },
  {
    id: "balisi-zip-wallet",
    name: "Balisi Zip-Around Leather Wallet",
    category: "Wallets",
    price: 2400,
    oldPrice: 3200,
    image: "/media/wallet-real-1.jpg",
    blurb: "Tan leather zip wallet with golden interior, card slots and snap flap.",
    tag: "Bestseller",
  },
  {
    id: "leather-wallet-set",
    name: "Premium Leather Wallet Duo",
    category: "Wallets",
    price: 3200,
    image: "/media/wallet-real-2.jpg",
    blurb: "Black and tan genuine leather wallets with smooth gold zippers.",
  },
  {
    id: "balisi-snap-wallet",
    name: "Balisi Snap Button Wallet",
    category: "Wallets",
    price: 2100,
    image: "/media/wallet-real-3.jpg",
    blurb: "Two-tone brown leather wallet with snap button and gold Balisi logo.",
    tag: "New",
  },
  {
    id: "powerbank-20000",
    name: "Titan 20000mAh Power Bank",
    category: "Power Banks",
    price: 4800,
    oldPrice: 6000,
    image: "/media/powerbank-1.jpg",
    blurb: "High-capacity 20000mAh with USB-C fast charging and LED indicators.",
    tag: "Bestseller",
    comingSoon: true,
  },
  {
    id: "powerbank-slim-digital",
    name: "Slim Digital Display Power Bank",
    category: "Power Banks",
    price: 3600,
    image: "/media/powerbank-2.jpg",
    blurb: "Slim aluminum body with live battery percentage display.",
    comingSoon: true,
  },
  {
    id: "powerbank-rugged",
    name: "Rugged Fast-Charge Power Bank",
    category: "Power Banks",
    price: 5400,
    image: "/media/powerbank-3.jpg",
    blurb: "Shockproof orange-and-black shell with built-in fast-charge cables.",
    tag: "New",
    comingSoon: true,
  },
];

export const categories = ["All", "Watches", "Wallets", "Power Banks"];

export const formatPKR = (value: number) =>
  `PKR ${value.toLocaleString("en-PK")}`;
