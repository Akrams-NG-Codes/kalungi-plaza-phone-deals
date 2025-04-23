
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  isCheckingOut: boolean;
  onCheckout: () => void;
}

const OrderSummary = ({ subtotal, isCheckingOut, onCheckout }: OrderSummaryProps) => {
  const tax = subtotal * 0.16;
  const total = subtotal * 1.16;

  return (
    <div className="bg-white rounded-lg border p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-bold mb-6">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      
      <Button 
        className="w-full" 
        size="lg"
        onClick={onCheckout}
        disabled={isCheckingOut}
      >
        {isCheckingOut ? "Processing..." : "Checkout"}
      </Button>
      
      <div className="mt-4 text-center">
        <Link to="/phones" className="text-sm text-primary hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
