import Layout from "@/components/layout/Layout";
import { dealPhones } from "@/data/phones";
import PhoneGrid from "@/components/products/PhoneGrid";
import { Percent, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DealsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Percent className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Special Deals & Offers</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our limited-time offers on premium smartphones. 
            All discounted phones come with full warranty and after-sales support.
          </p>
        </div>

        <Alert className="mb-8 bg-yellow-50 border-yellow-200">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800">Limited Time Offer</AlertTitle>
          <AlertDescription className="text-yellow-700">
            These deals are only available while stocks last. Don't miss out!
          </AlertDescription>
        </Alert>

        <PhoneGrid phones={dealPhones} />

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for something specific?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We constantly update our inventory with the latest models and best deals.
            Come back often or visit our store in Tyga Gadget Store.
          </p>
          <p className="font-medium">
            Contact us at <span className="text-primary">+256742088424</span> for personalized offers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DealsPage;
