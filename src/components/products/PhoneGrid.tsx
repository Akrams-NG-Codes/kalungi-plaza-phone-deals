
import { Phone } from "@/types";
import PhoneCard from "./PhoneCard";

interface PhoneGridProps {
  phones: Phone[];
  title?: string;
}

const PhoneGrid: React.FC<PhoneGridProps> = ({ phones, title }) => {
  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  );
};

export default PhoneGrid;
