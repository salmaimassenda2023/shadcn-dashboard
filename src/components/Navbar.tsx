import Link from "next/link";
import {LogOut, Moon, Settings, User} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between" >
      {/*Left*/}
        collapseButton
      {/*Right*/}
        <div className="flex items-center gap-4">
            <Link href='/'> Dashboard</Link>
            <Moon/>
            <DropdownMenu >
                <DropdownMenuTrigger render={<Button variant="outline" />}>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={8}>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="h-[1.2rem] h-[1.2rem] mr-2 " />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] h-[1.2rem] mr-2 "/>
                            Setting
                        </DropdownMenuItem>
                        <DropdownMenuItem variant={"destructive"}>
                            <LogOut className="h-[1.2rem] h-[1.2rem] mr-2 "/>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>
  );
};

export default Navbar;
