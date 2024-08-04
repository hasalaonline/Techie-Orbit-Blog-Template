import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../atoms/navigation-menu";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../../lib/api/ghost";

const NavBar = () => {
  const { data } = useQuery({ queryKey: ["tags"], queryFn: () => fetchTags() });
  const tags: { title: string; href: string; description: string }[] = [
    ...(data?.map((tag: any) => ({
      title: tag.name,
      href: `/tags/${tag.slug}`,
      description: tag.name,
    })) ?? []),
  ];

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col sm:flex-row items-center">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-full gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {tags.map((tag) => (
                  <NavigationMenuLink
                    key={tag.title}
                    title={tag.title}
                    href={tag.href}
                  >
                    {tag.description}
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/contact"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/about"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar;