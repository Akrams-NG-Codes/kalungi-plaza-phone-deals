import Layout from "@/components/layout/Layout";
import PhoneGrid from "@/components/products/PhoneGrid";
import { Button } from "@/components/ui/button";
import { dealPhones, featuredPhones, phones } from "@/data/phones";
import { ArrowRight, Award, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Phone at Unbeatable Prices
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the latest smartphones with exclusive deals at Tyga Gadget Stores
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/phones">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/deals">View Deals</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/lovable-uploads/cb7b32ce-c776-4da5-8ecd-0ee9aff4d457.png"
                alt="Latest iPhone"
                className="max-h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Phones</h2>
          <Button variant="ghost" asChild className="group">
            <Link to="/phones" className="flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <PhoneGrid phones={featuredPhones} />
      </div>

      {/* Special Deals Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Special Deals</h2>
            <Button variant="ghost" asChild className="group">
              <Link to="/deals" className="flex items-center">
                View All Deals
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <PhoneGrid phones={dealPhones.slice(0, 4)} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tyga Gadget Stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Genuine Products</h3>
            <p className="text-muted-foreground">
              All our phones are 100% genuine with manufacturer warranty and after-sales support.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Get your phone delivered to your doorstep within 24 hours in the city.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-muted-foreground">
              Multiple secure payment options including mobile money and cash on delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-center text-muted-foreground mb-8">
            Top Brands Available
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {['Apple', 'Samsung'].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

