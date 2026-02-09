import { ShoppingBag } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Bag = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingBag className="h-5 w-5 cursor-pointer" />

          {/* item count */}
          <span
            className="absolute -top-1 -right-1 h-4 w-4 text-xs
            flex items-center justify-center rounded-full
            bg-black text-white dark:bg-white dark:text-black"
          >
            2
          </span>
        </button>
      </SheetTrigger>

      {/* LEFT SIDE SLIDE */}
      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle>Your Bag</SheetTitle>
        </SheetHeader>

        {/* Bag Items */}
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Your cart is empty.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Bag
