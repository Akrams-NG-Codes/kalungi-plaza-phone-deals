
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="text-center py-12">
      <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-muted-foreground mb-8">
        It looks like you haven't added any phones to your cart yet.
      </p>
      <Button asChild>
        <Link to="/phones">Browse Phones</Link>
      </Button>
    </div>
  );
};

export default EmptyCart;
