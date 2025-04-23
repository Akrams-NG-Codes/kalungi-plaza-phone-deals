import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash2, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const SELLER_WHATSAPP_NUMBER = "1234567890";

const CartPage = () => {
  const cart = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    cart.updateQuantity(id, newQuantity);
  };
  
  const handleRemoveItem = (id: string) => {
    cart.removeItem(id);
  };
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      cart.clearCart();
      setIsCheckingOut(false);
      // In a real app, we would redirect to a success page
      // For this demo, we'll use an alert
      alert("Thank you for your order! This is a demo without actual payment processing.");
    }, 2000);
  };
  
  const generateWhatsAppMessage = () => {
    if (cart.items.length === 0) return "Hello, I'm interested in your products.";
    let msg = "Hi! I'm interested in the following products:%0A";
    cart.items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} - Color: ${item.selectedColor}, Storage: ${item.selectedStorage}, Qty: ${item.quantity}%0A`;
    });
    msg += `%0ATotal: $${cart.getCartTotal()}`;
    return msg;
  };

  const whatsappLink = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cart.items.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Options</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart.items.map((item) => (
                      <tr key={`${item.id}-${item.selectedColor}-${item.selectedStorage}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-16 w-16 object-contain mr-4" 
                            />
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{item.brand}</p>
                              <div className="sm:hidden text-xs text-muted-foreground mt-1">
                                {item.selectedColor}, {item.selectedStorage}
                              </div>
                              <button 
                                className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1 mt-1 sm:hidden"
                                onClick={() => handleRemoveItem(item.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          <p className="text-sm">{item.selectedColor}</p>
                          <p className="text-sm">{item.selectedStorage}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center border rounded-md w-fit">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <div className="px-3 py-1">{item.quantity}</div>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            <button 
                              className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1 mt-2 hidden sm:inline-flex"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg border p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${cart.getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(cart.getCartTotal() * 0.16).toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold mb-6">
                  <span>Total</span>
                  <span>${(cart.getCartTotal() * 1.16).toFixed(2)}</span>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleCheckout}
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
            </div>
          </div>
        )}
        
        {/* WhatsApp Contact Button */}
        {cart.items.length > 0 && (
          <div className="mt-8 flex flex-col items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center justify-center gap-2 w-full"
                type="button"
              >
                <PhoneCall className="h-5 w-5 text-green-600" />
                Contact Seller on WhatsApp
              </Button>
            </a>
            <p className="text-muted-foreground text-xs mt-2">
              You’ll be redirected to WhatsApp with your cart details.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
