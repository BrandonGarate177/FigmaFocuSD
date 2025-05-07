import React from "react";
import UlMenuMainMenu from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { ArrowRight, ChevronDown } from "../components/ui/icons";

export default function GravityteamCo() {
  // Navigation items
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "PRODUCTS", href: "#", hasDropdown: true },
    { label: "ABOUT US", href: "#" },
  ];

  // Create gradient background style
  const gradientBg =
    "bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]";

  return (
    <div className="bg-[#141619] flex flex-row justify-center w-full">
      <div className="bg-[#141619] overflow-x-hidden w-full max-w-[1440px] relative">
        {/* Background blobs - using empty divs with absolute positioning for visual effect */}
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute w-[2768px] h-[2775px] top-[877px] left-[3.5px] opacity-20">
            <img
              src=""
              alt="Background blob"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-[2345px] h-[2359px] top-[-857px] left-[300px] opacity-20">
            <img
              src=""
              alt="Background blob"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-[2302px] h-[1861px] top-[476px] left-[-557px] opacity-20">
            <img
              src=""
              alt="Background blob"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header */}
        <header className="relative w-full h-[88px] flex items-center justify-between px-8 z-10">
          {/* Logo */}
          <div className="relative h-[38px] w-[127px]">
            <img src="" alt="FocuSD Logo" className="h-full" />
          </div>

          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-12">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="flex items-center text-white text-[15px] tracking-[0.53px] font-normal"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-2 h-[11px] w-[11px] -rotate-45 border-b border-l border-white" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Waitlist Button */}
          <Button
            variant="ghost"
            className="text-white text-[15px] tracking-[0.53px] font-normal relative pl-7"
          >
            <span
              className={`absolute w-4 h-4 top-[5px] left-0 rounded-lg ${gradientBg}`}
            ></span>
            WAITLIST
          </Button>
        </header>

        {/* Hero Section */}
        <section className="relative w-full h-[810px] flex flex-col items-center justify-center pt-[145px]">
          <div className="flex flex-col items-center gap-6 max-w-[584px]">
            <h1 className="text-[74px] leading-[64px] text-white font-medium text-center mt-24">
              Stay FocuSD
            </h1>

            <p className="text-[19px] leading-[22px] text-white font-medium text-center mt-16 max-w-[418px]">
              A SMART, AI-POWERED DESK LAMP THAT HELPS YOU
              STAY&nbsp;&nbsp;FOCUSED
            </p>

            <Button
              className={`${gradientBg} rounded-sm h-[58px] w-48 text-[19px] font-medium text-white mt-10`}
            >
              WAITLIST
            </Button>
          </div>

          {/* Gradient overlay */}
          <div className="absolute w-full h-[308px] bottom-0 bg-gradient-to-b from-[#141619] via-[#141619] to-transparent"></div>
        </section>

        {/* About Section */}
        <section className="relative w-full flex flex-col items-center py-16">
          <div className="max-w-[1056px] flex flex-col items-center">
            <h2 className="text-[56px] leading-[78px] text-white font-medium text-center">
              About FocuSD
            </h2>

            <div className="flex mt-10">
              <div className="w-1/2 flex justify-center">
                <img src="" alt="FocuSD Logo" className="w-[660px]" />
              </div>

              <div className="w-1/2 flex justify-center">
                <p className="text-xl leading-[30px] text-neutral-200 text-center max-w-[612px]">
                  If your focus slips, the lamp gives a gentle signal—like
                  turning red—so you can get back on track before losing
                  momentum.
                  <br />
                  <br />
                  Our companion app includes an intelligent tutor and
                  productivity coach to guide your sessions and help you build
                  better study habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="relative w-full flex py-16">
          <div className="w-1/2 flex justify-center">
            <div className="relative w-[530px] h-[530px]">
              <img src="" alt="FocuSD Product" className="w-full h-full" />
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-center px-16">
            <h3 className="text-xl font-bold text-white leading-7 max-w-[392px]">
              In a world of growing distractions, we created the ultimate Focus
              tool.
            </h3>

            <div className="flex items-center mt-10">
              <div className="relative">
                <span className="text-lg text-white">Learn more</span>
                <div className={`w-[100px] h-0.5 mt-1 ${gradientBg}`}></div>
              </div>
              <ArrowRight className="ml-4 h-5 w-5 text-white" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative w-full py-16 flex flex-col items-center">
          <Card className="bg-transparent border-none max-w-[1056px]">
            <CardContent className="flex flex-col items-center pt-16">
              <h2 className="text-[56px] leading-[78px] text-white font-medium text-center">
                Contact Us
              </h2>

              <p className="text-lg leading-[30px] text-neutral-200 text-center max-w-[624px] mt-6">
                We are always open to discuss new value-adding partnerships. Do
                reach out if you are an exchange or a project looking for
                liquidity; an algorithmic trader or a software developer looking
                to improve the markets with us or just have a great idea you
                can&apos;t wait to share with us!
              </p>

              <Button
                className={`${gradientBg} rounded-sm h-[58px] w-48 text-[19px] font-medium text-white mt-10`}
              >
                GET IN TOUCH
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#ffffff40] pt-24 pb-16 px-40">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-3">
              <h4 className="text-[15px] tracking-[0.53px] text-white font-normal">
                FOCUSD
              </h4>
              <span className="text-sm text-[#bcbcbc] font-normal">
                About Us
              </span>
            </div>

            <div className="w-[179px] h-[54px]">
              <img src="" alt="FocuSD Logo" className="w-full h-full" />
            </div>
          </div>

          <div className="flex justify-between mt-24">
            <span className="text-sm text-[#bcbcbc] font-normal">
              Terms of Use &amp; Privacy Policy
            </span>

            <span className="text-sm text-[#bcbcbc] font-normal">
              ©2025 FOCUSD All Rights Reserved
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}