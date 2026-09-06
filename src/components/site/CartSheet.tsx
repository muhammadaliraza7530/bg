import * as React from "react";
import { Minus, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const DELIVERY = 250;

type Step = "cart" | "checkout" | "done";

export function CartSheet() {
  const { lines, setQty, remove, subtotal, clear, open, setOpen } = useCart();
  const [step, setStep] = React.useState<Step>("cart");
  const [orderId, setOrderId] = React.useState("");
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });

  const total = subtotal + (lines.length ? DELIVERY : 0);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && step === "done") setStep("cart");
  };

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.city) {
      toast.error("Please fill in your name, phone, city and address.");
      return;
    }
    const id = `SZO-${Date.now().toString().slice(-6)}`;
    setOrderId(id);
    try {
      const prev = JSON.parse(window.localStorage.getItem("szo-orders") ?? "[]") as unknown[];
      window.localStorage.setItem(
        "szo-orders",
        JSON.stringify([...prev, { id, form, lines, total, at: new Date().toISOString() }]),
      );
    } catch {
      /* ignore */
    }
    clear();
    setStep("done");
    toast.success("Order placed successfully");
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col bg-card sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl">
            {step === "cart" ? "Your Cart" : step === "checkout" ? "Checkout" : "Order Confirmed"}
          </SheetTitle>
        </SheetHeader>

        {step === "cart" && (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-4">
              {lines.length === 0 && (
                <p className="py-16 text-center text-sm text-muted-foreground">
                  Your cart is empty. Explore the collection to add products.
                </p>
              )}
              {lines.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-3 rounded-xl border border-border/60 p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-accent">{formatPKR(product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-7 w-7"
                        aria-label="Decrease quantity"
                        onClick={() => setQty(product.id, qty - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm">{qty}</span>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-7 w-7"
                        aria-label="Increase quantity"
                        onClick={() => setQty(product.id, qty + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="ml-auto h-7 w-7 text-muted-foreground"
                        aria-label="Remove item"
                        onClick={() => remove(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border/60 p-4">
              <Row label="Subtotal" value={formatPKR(subtotal)} />
              <Row label="Delivery" value={lines.length ? formatPKR(DELIVERY) : "—"} />
              <Separator />
              <Row label="Total" value={formatPKR(total)} bold />
              <Button
                className="w-full"
                disabled={lines.length === 0}
                onClick={() => setStep("checkout")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}

        {step === "checkout" && (
          <form onSubmit={placeOrder} className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex-1 space-y-4 px-4">
              <Field id="name" label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field id="phone" label="Phone number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <Field id="city" label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
              <div className="space-y-2">
                <Label htmlFor="address">Delivery address</Label>
                <Textarea
                  id="address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                />
              </div>
              <p className="rounded-lg bg-secondary/60 p-3 text-xs text-muted-foreground">
                Payment method: Cash on delivery / bank transfer. Our team confirms every order
                on WhatsApp at 0314 484 9045 or email at shazibbhai338@gmail.com.
              </p>
            </div>
            <div className="space-y-3 border-t border-border/60 p-4">
              <Row label="Total payable" value={formatPKR(total)} bold />
              <Button type="submit" className="w-full">Place Order</Button>
              <Button type="button" variant="ghost" className="w-full" onClick={() => setStep("cart")}>
                Back to cart
              </Button>
            </div>
          </form>
        )}

        {step === "done" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <h3 className="text-2xl">Thank you, {form.name.split(" ")[0] || "friend"}!</h3>
            <p className="text-sm text-muted-foreground">
              Your order <span className="text-accent">{orderId}</span> has been received. We will
              call you shortly on {form.phone} to confirm delivery.
            </p>
            <Button className="mt-2 w-full" onClick={() => handleOpenChange(false)}>
              Continue shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={bold ? "text-base font-semibold" : ""}>{value}</span>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}