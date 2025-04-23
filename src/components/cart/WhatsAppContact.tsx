
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface WhatsAppContactProps {
  numbers: string[];
  selectedNumber: string;
  onNumberSelect: (number: string) => void;
  whatsappLink: string;
}

const WhatsAppContact = ({ 
  numbers, 
  selectedNumber, 
  onNumberSelect,
  whatsappLink 
}: WhatsAppContactProps) => {
  return (
    <div className="mt-8 flex flex-col items-center space-y-3">
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {numbers.map((num) => (
          <label key={num} className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sellerNumber"
              value={num}
              checked={selectedNumber === num}
              onChange={() => onNumberSelect(num)}
              className="accent-green-600"
            />
            <span className="text-sm font-medium">{`Contact seller: ${num}`}</span>
          </label>
        ))}
      </div>

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
        You'll be redirected to WhatsApp with your cart details.
      </p>
    </div>
  );
};

export default WhatsAppContact;
