import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { formatPKR, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();

  return (
    <article className="card-3d group glass-panel overflow-hidden rounded-2xl">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && !product.comingSoon && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground">
            {product.tag.toUpperCase()}
          </span>
        )}
        {product.comingSoon && (
          <span className="absolute right-3 top-3 rounded-full bg-muted-foreground/20 px-3 py-1 text-[10px] font-bold tracking-widest text-foreground backdrop-blur-sm">
            COMING SOON
          </span>
        )}
      </div>
      <div className="space-y-3 p-5">
        <p className="text-[10px] tracking-[0.3em] text-accent">
          {product.category.toUpperCase()}
        </p>
        <h3 className="text-lg leading-snug sm:text-xl">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.blurb}</p>
        <div className="flex items-end justify-between gap-3 pt-1">
          <div>
            <p className={`text-lg font-semibold ${product.comingSoon ? "text-muted-foreground line-through" : "text-foreground"}`}>
              {formatPKR(product.price)}
            </p>
            {product.oldPrice && !product.comingSoon && (
              <p className="text-xs text-muted-foreground line-through">
                {formatPKR(product.oldPrice)}
              </p>
            )}
          </div>
          {product.comingSoon ? (
            <Button size="sm" disabled variant="secondary">
              Coming Soon
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => {
                add(product);
                setOpen(true);
                toast.success(`${product.name} added to cart`);
              }}
            >
              <ShoppingBag className="h-4 w-4" /> Add
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}