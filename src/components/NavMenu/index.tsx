"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface NavigationBarProps {
  items: {
    trigger: string;
    href?: string;
    list: {
      title: string;
      href: string;
      description: string;
    }[]
  }[];
}

const defaultNavigationData = {
  items: [
    {
      trigger: "Primitives",
      list: [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        }
      ]
    },
    {
      trigger: "Components",
      list: [
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          description:
            "A user's profile image, often circular.",
        },
        {
          title: "Button",
          href: "/docs/components/button",
          description:
            "A clickable button.",
        }
      ]
    },
    {
      trigger: "Layouts",
      list: [
        {
          title: "Card",
          href: "/docs/layouts/card",
          description:
            "A container for content, actions, and images.",
        },
        {
          title: "Grid",
          href: "/docs/layouts/grid",
          description:
            "A layout system that uses rows and columns to organize content.",
        }
      ]
    }
  ]
}

export default function NavigationBar(props: NavigationBarProps = defaultNavigationData) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {props.items && props.items.map((menu, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{menu.trigger}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" key={menu.trigger}>
                  {menu.list && menu.list.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
