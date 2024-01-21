"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { LogOutIcon, UserCircleIcon } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  return (
    <nav className="flex relative items-center w-full justify-between flex-wrap bg-gray-800 p-6 sm:px-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Next Todo</span>
      </div>
      <Popover>
        <PopoverTrigger className="">
          {user?.picture ? (
            <Image
              src={user?.picture}
              className="h-10 w-10 aspect-square rounded-full"
              height={40}
              width={40}
              alt="user-image"
            />
          ) : (
            <UserCircleIcon className="h-10 w-10 text-gray-500" />
          )}
        </PopoverTrigger>
        <PopoverContent className="absolute top-0 right-6 w-auto p-0 backdrop-blur-sm">
          <Button variant={"outline"} className="whitespace-nowrap w-full">
            Name : {user?.nickname}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => router.push("/api/auth/logout")}
            className="whitespace-nowrap w-full justify-between flex"
          >
            <LogOutIcon /> Logout
          </Button>
        </PopoverContent>
      </Popover>
    </nav>
  );
};
