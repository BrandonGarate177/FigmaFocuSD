import React from 'react';

const NavigationMenu = ({ 
  className = "", 
  children, 
  ...props 
}) => {
  return (
    <nav 
      className={`relative ${className}`} 
      {...props}
    >
      {children}
    </nav>
  );
};

const NavigationMenuList = ({ 
  className = "", 
  children, 
  ...props 
}) => {
  return (
    <ul 
      className={`group flex flex-1 list-none items-center justify-center space-x-1 ${className}`} 
      {...props}
    >
      {children}
    </ul>
  );
};

const NavigationMenuItem = ({ 
  className = "", 
  children, 
  ...props 
}) => {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
};

const NavigationMenuLink = ({ 
  className = "", 
  children, 
  href = "#",
  ...props 
}) => {
  return (
    <a 
      href={href} 
      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`} 
      {...props}
    >
      {children}
    </a>
  );
};

// Add the missing components
const NavigationMenuTrigger = ({ 
  className = "", 
  children, 
  ...props 
}) => {
  return (
    <button 
      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const NavigationMenuContent = ({ 
  className = "", 
  children, 
  ...props 
}) => {
  return (
    <div 
      className={`absolute top-0 left-0 w-full sm:w-auto bg-popover rounded-md border border-border p-2 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent 
};