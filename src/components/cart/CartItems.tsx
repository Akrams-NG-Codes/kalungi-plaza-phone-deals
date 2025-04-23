
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/types";

interface CartItemsProps {
  items: CartItem[];
  onQuantityChange: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartItems = ({ items, onQuantityChange, onRemoveItem }: CartItemsProps) => {
  return (
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
            {items.map((item) => (
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
                        onClick={() => onRemoveItem(item.id)}
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
                      onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <div className="px-3 py-1">{item.quantity}</div>
                    <button
                      onClick={() => onQuantityChange(item.id, item.quantity + 1)}
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
                      onClick={() => onRemoveItem(item.id)}
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
  );
};

export default CartItems;
