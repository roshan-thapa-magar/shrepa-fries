"use client"

import { useState } from "react"
import { Menu as MenuIcon, Tag, User, Power } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleNavigate = (path: string) => {
    setOpen(false)      // 👈 close sheet
    router.push(path)  // 👈 navigate
  }

  const handleLogout = () => {
    setOpen(false)
    console.log("Logout")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button aria-label="Open menu">
          <MenuIcon  />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 flex flex-col">
        {/* Logo */}
        <SheetHeader>
          <h1 className="text-3xl font-extrabold">
            NOVA
          </h1>
        </SheetHeader>

        {/* Menu items */}
        <div className="space-y-6 px-4">
          <button
            onClick={() => handleNavigate("/allOffers")}
            className="flex items-center gap-4 font-medium"
          >
            <Tag className="h-5 w-5" />
            Offers
          </button>

          <button
            onClick={() => handleNavigate("/myAccount")}
            className="flex items-center gap-4 transition"
          >
            <User className="h-5 w-5" />
            My Account
          </button>
        </div>

        {/* Logout at bottom */}
        <div className="mt-auto pb-6 px-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 text-muted-foreground hover:text-red-600 transition"
          >
            <Power className="h-5 w-5" />
            Log Out
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
