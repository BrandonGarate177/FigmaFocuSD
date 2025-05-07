import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu"; // Fixed the import path
import { ChevronDown } from "./icons"; // Fixed the import path

const Button = ({ 
  children, 
  className = "", 
  variant = "default", 
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const classes = `${baseStyle} ${variants[variant] || ""} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default function UlMenuMainMenu() {
  // Navigation menu items data
  const menuItems = [
    { label: "HOME", hasDropdown: false },
    { label: "PRODUCTS", hasDropdown: true },
    { label: "ABOUT US", hasDropdown: false },
  ];

  return (
    <NavigationMenu className="relative w-[504px] h-11">
      <NavigationMenuList className="flex items-center justify-between">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index} className="px-6 first:pl-0 last:pr-0">
            {item.hasDropdown ? (
              <NavigationMenuTrigger className="h-6 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0.53px] leading-6 flex items-center gap-2 bg-transparent hover:bg-transparent focus:bg-transparent">
                {item.label}
                <ChevronDown className="w-[11px] h-[11px] text-white transform rotate-[-45deg] border-b border-l border-white" />
              </NavigationMenuTrigger>
            ) : (
              <span className="h-6 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0.53px] leading-6 cursor-pointer">
                {item.label}
              </span>
            )}

            {item.hasDropdown && (
              <NavigationMenuContent>
                {/* Dropdown content would go here */}
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { Button };