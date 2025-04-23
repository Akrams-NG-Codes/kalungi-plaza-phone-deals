
import { Phone } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface PhoneCardProps {
  phone: Phone;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const {
    id,
    name,
    brand,
    price,
    originalPrice,
    image,
    rating,
    inStock,
    isNew,
    discountPercentage,
  } = phone;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <Link to={`/phone/${id}`}>
        <div className="relative pt-4 px-4">
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-primary">New</Badge>
          )}
          {discountPercentage && discountPercentage > 0 && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              {discountPercentage}% OFF
            </Badge>
          )}
          <div className="h-48 flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              className="object-contain h-full w-full transition-transform group-hover:scale-105"
            />
          </div>
        </div>
        
        <CardContent className="pt-4">
          <div className="text-sm text-muted-foreground">{brand}</div>
          <h3 className="font-medium text-lg mt-1 group-hover:text-primary transition-colors">{name}</h3>
          
          <div className="flex items-center mt-2 text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-muted-foreground">({rating})</span>
          </div>
        </CardContent>
      
        <CardFooter className="flex justify-between items-center pt-0">
          <div className="flex items-end gap-2">
            <span className="font-bold text-lg">${price}</span>
            {originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <Badge variant={inStock ? "outline" : "secondary"} className="font-normal">
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default PhoneCard;
