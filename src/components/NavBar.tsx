"use client";

import Link from "next/link";
import { toast } from "react-hot-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation-menu";
import { Send, Copy, CalendarPlus } from "lucide-react";

function copy() {
  navigator.clipboard.writeText("tomshaw650@gmail.com");

  toast.success("Copied email to clipboard");
}

export const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="mb-5 gap-x-5 flex">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-[#FDD641] text-xl">
              home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-[#FDD641] text-xl">
              about
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className="hover:text-[#FDD641] text-xl">
              projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-[#FDD641] text-xl">
            contact
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-black w-[300px] sm:w-[350px] p-5 flex flex-col gap-y-3">
              <a
                href="mailto:tomshaw650@gmail.com"
                className="hover:bg-slate-300 hover:bg-opacity-40 p-1 flex justify-between items-center active:bg-slate-500"
              >
                <li>Email me</li>
                <Send className="h-5 w-5" />
              </a>
              <a
                rel="noopener noreferrer"
                onClick={() => copy()}
                className="hover:bg-slate-300 hover:bg-opacity-40 p-1 flex justify-between items-center cursor-pointer active:bg-slate-500"
              >
                <li>Copy email</li>
                <Copy className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cal.com/tom-shaw-8dy8st/15min"
                className="hover:bg-slate-300 hover:bg-opacity-40 flex justify-between items-center p-1 active:bg-slate-500"
              >
                <li>Schedule a call</li>
                <CalendarPlus className="h-5 w-5" />
              </a>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
