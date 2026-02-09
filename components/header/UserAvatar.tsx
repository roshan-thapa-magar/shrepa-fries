import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-6 h-6 cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem>View Profile</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAvatar
