import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "lucide-react";

const NavBar = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Apple",
      href: "/docs/primitives/alert-dialog",
      description:
        "Apple",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "Programming",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "News",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Next.js",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "Artificial intelligence",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "Google",
    },
  ];
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <NavigationMenuLink
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar;
