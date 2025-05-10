import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  whatsappLink: string;
}

const OrderSummary = ({ subtotal, whatsappLink }: OrderSummaryProps) => {
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  // Helper function to format UGX
  const formatUGX = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg border p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>{formatUGX(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>{formatUGX(tax)}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-bold mb-6">
        <span>Total</span>
        <span>{formatUGX(total)}</span>
      </div>
      
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full block">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white" 
          size="lg"
          type="button"
        >
          Contact Seller on WhatsApp
        </Button>
      </a>
      
      <div className="mt-4 text-center">
        <Link to="/phones" className="text-sm text-primary hover:underline">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
