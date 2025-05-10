import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummary";
import WhatsAppContact from "@/components/cart/WhatsAppContact";

const SELLER_WHATSAPP_NUMBERS = [
  "+256742088424",
  "+256786758249"
];

const CartPage = () => {
  const cart = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(SELLER_WHATSAPP_NUMBERS[0]);

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
    let msg = "Hi! I'm interested in the following products from TYGA GADGETS STORE:%0A";
    cart.items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} - Color: ${item.selectedColor}, Storage: ${item.selectedStorage}, Qty: ${item.quantity}%0A`;
    });
    msg += `%0ATotal: UGX ${cart.getCartTotal().toLocaleString()}`;
    return msg;
  };

  const whatsappLink = `https://wa.me/${selectedNumber.replace('+', '')}?text=${generateWhatsAppMessage()}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cart.items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <CartItems
                items={cart.items}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
              <div>
                <OrderSummary
                  subtotal={cart.getCartTotal()}
                  whatsappLink={whatsappLink}
                />
              </div>
            </div>
            
            <WhatsAppContact
              numbers={SELLER_WHATSAPP_NUMBERS}
              selectedNumber={selectedNumber}
              onNumberSelect={setSelectedNumber}
              whatsappLink={whatsappLink}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
