"use client";
import * as React from "react";
import {
  IconButton,
  Typography,
  Collapse,
  Navbar,
  Input,
} from "@material-tailwind/react";
import {
  Menu,
  Search,
  Xmark,
  HomeSecure,
  Cart,
  BookLock,
  DatabaseScript,
} from "iconoir-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  LogOutIcon,
  ShoppingBasket,
  UserRoundPenIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContex";
import { logoutUser } from "@/actions/user";
import Image from "next/image";

const LINKS = [
  {
    icon: HomeSecure,
    title: "Home",
    href: "/",
  },
  {
    icon: BookLock,
    title: "Products",
    href: "/products",
  },
  {
    icon: DatabaseScript,
    title: "About",
    href: "/about",
  },
  {
    icon: Cart,
    title: "Cart",
    href: "/cart",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function NavbarWithSearch() {
  const router = useRouter();
  const { user, setIsLoading } = useUser();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleLogout = () => {
    logoutUser();
    setIsLoading(true);

    router.push("/login");
  };
  return (
    <Navbar className="mx-auto  max-w-7xl p-4 border-none shadow-none">
      <div className="flex items-center justify-between">
        <Link href="/" type="small" className="flex gap-1 items-center ">
          <Image
            src="/logo.avif"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full object-cover "
          />
          <p className="font-bold hidden sm:block">Next Mart</p>
        </Link>

        <div className="hidden lg:block  justify-center items-center mx-auto">
          <NavList />
        </div>

        <div className="relative w-40 mr-2 ">
          <Input
            size="md"
            type="search"
            placeholder="Search here..."
            className="pl-10 relative"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </Input>
        </div>

        <IconButton
          size="md"
          variant="ghost"
          onClick={() => setOpenNav(!openNav)}
          className="ml-1 grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </IconButton>
        {user ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    className="object-cover "
                    src="https://media.gettyimages.com/id/1090837964/photo/handsome-man-laughing.jpg?s=612x612&w=0&k=20&c=Z7cynOxU1v7Fe-CRzh2C_dgR0URgU4uzF2UbOH14vtE="
                  />
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserRoundPenIcon /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LayoutDashboard />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingBasket />
                  My Shop
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer  text-red-600 font-bold"
                  onClick={handleLogout}
                >
                  <LogOutIcon />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button className="rounded-full ml-2">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
