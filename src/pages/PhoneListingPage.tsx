
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { phones } from "@/data/phones";
import PhoneGrid from "@/components/products/PhoneGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CheckIcon, SearchIcon, SlidersHorizontal } from "lucide-react";
import { Phone } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

const PhoneListingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const brands = Array.from(new Set(phones.map(phone => phone.brand)));
  
  // Filter and sort phones based on user's selection
  const filteredPhones = phones.filter(phone => {
    const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriceRange = phone.price >= priceRange[0] && phone.price <= priceRange[1];
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(phone.brand);
    
    return matchesSearch && matchesPriceRange && matchesBrand;
  });

  const sortedPhones = [...filteredPhones].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Phones</h1>
        
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search phones..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Best Rating</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 md:hidden"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`${filterOpen ? 'block' : 'hidden'} md:block md:w-1/4`}>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="mt-4">
                  <Slider 
                    defaultValue={[0, 2000]} 
                    max={2000} 
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-2 text-sm font-medium">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reset Filters Button */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSearchQuery("");
                  setPriceRange([0, 2000]);
                  setSelectedBrands([]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">{sortedPhones.length} products</p>
            </div>
            
            {sortedPhones.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPhones.map(phone => (
                  <PhoneGrid key={phone.id} phones={[phone]} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No phones match your filters.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchQuery("");
                    setPriceRange([0, 2000]);
                    setSelectedBrands([]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhoneListingPage;
