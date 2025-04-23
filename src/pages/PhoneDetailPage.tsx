
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { phones } from "@/data/phones";
import { Phone } from "@/types";
import { ChevronLeft, Heart, Minus, Plus, Share, ShieldCheck, Star, Truck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";
import PhoneGrid from "@/components/products/PhoneGrid";

const PhoneDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cart = useCart();
  
  const phone = phones.find((p) => p.id === id);
  const relatedPhones = phones
    .filter((p) => p.brand === phone?.brand && p.id !== id)
    .slice(0, 4);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(phone?.colors[0] || "");
  const [selectedStorage, setSelectedStorage] = useState(phone?.storage[0] || "");
  
  if (!phone) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The phone you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/phones")}>
            Browse All Phones
          </Button>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    cart.addItem(phone, quantity, selectedColor, selectedStorage);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${phone.name} (${selectedColor}, ${selectedStorage})`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate(-1)} className="pl-0">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8 border flex items-center justify-center">
            <img src={phone.image} alt={phone.name} className="max-h-96 object-contain" />
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-muted-foreground mb-1">
              {phone.brand}
            </div>
            <h1 className="text-3xl font-bold mb-2">{phone.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(phone.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-muted-foreground">{phone.rating} Rating</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">${phone.price}</span>
                {phone.originalPrice && (
                  <span className="text-muted-foreground line-through text-lg">
                    ${phone.originalPrice}
                  </span>
                )}
                {phone.discountPercentage && phone.discountPercentage > 0 && (
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {phone.discountPercentage}% OFF
                  </span>
                )}
              </div>
              {phone.inStock ? (
                <p className="text-green-600 mt-2">In Stock</p>
              ) : (
                <p className="text-red-500 mt-2">Out of Stock</p>
              )}
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color: {selectedColor}</h3>
              <div className="flex flex-wrap gap-3">
                {phone.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border rounded-md py-2 px-3 text-sm ${
                      selectedColor === color
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Storage: {selectedStorage}</h3>
              <div className="flex flex-wrap gap-3">
                {phone.storage.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`border rounded-md py-2 px-4 text-sm ${
                      selectedStorage === storage
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border rounded-md w-fit">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="px-4 py-2 border-x">{quantity}</div>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={!phone.inStock}
                className="flex-1"
                size="lg"
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share className="h-5 w-5" />
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Free delivery</p>
                  <p className="text-sm text-muted-foreground">2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Warranty</p>
                  <p className="text-sm text-muted-foreground">1 year manufacturer warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p>
                  The {phone.name} is a high-end smartphone from {phone.brand}, featuring the latest technology and innovations.
                </p>
                <h3 className="text-lg font-medium mt-4 mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {phone.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specs" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-4">General</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Brand</td>
                        <td className="py-2 font-medium">{phone.brand}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Model</td>
                        <td className="py-2 font-medium">{phone.name}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Color Options</td>
                        <td className="py-2 font-medium">{phone.colors.join(", ")}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-muted-foreground">Storage Options</td>
                        <td className="py-2 font-medium">{phone.storage.join(", ")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-4">Features</h3>
                  <div className="space-y-2">
                    {phone.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2"></div>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-8">
                <h3 className="text-lg font-medium mb-2">Customer Reviews</h3>
                <div className="flex justify-center items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(phone.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium">{phone.rating} out of 5</span>
                </div>
                <p className="text-muted-foreground">Based on customer reviews</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedPhones.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <PhoneGrid phones={relatedPhones} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PhoneDetailPage;
