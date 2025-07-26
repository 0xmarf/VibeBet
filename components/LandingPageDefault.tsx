import { MessageCircle, Twitter } from "lucide-react";
import React from "react";
import { DataVisualizationSection } from "./DataVisualizationSection";
import { MainContentSection } from "./MainContentSection";
import { NavigationBarSection } from "./NavigationBarSection";

const LandingPageDefault = (): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex flex-col items-start relative self-stretch w-full bg-white">
        <NavigationBarSection />
        <MainContentSection />
        <DataVisualizationSection />
      </div>

      <footer className="flex flex-col items-center gap-8 pt-12 pb-12 px-0 relative self-stretch w-full bg-white">
        <div className="items-center gap-16 px-6 py-0 flex flex-col max-w-screen-xl relative w-full">
          <div className="flex items-center justify-between relative self-stretch w-full">
            <div className="relative w-fit text-sm font-normal text-gray-500 whitespace-nowrap">
              Copyright 2025 © Element Labs
            </div>

            <div className="inline-flex items-center gap-8 relative">
              <Twitter className="!relative !w-6 !h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
              <MessageCircle className="!relative !w-6 !h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageDefault;