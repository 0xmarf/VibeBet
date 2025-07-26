import React from "react";

export const MainContentSection = (): React.JSX.Element => {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="hover:text-gray-700 hover:underline cursor-pointer transition-all duration-200">Home</span>
            <span>›</span>
            <span className="hover:text-gray-700 hover:underline cursor-pointer transition-all duration-200">Settings</span>
            <span>›</span>
            <span className="text-gray-900">Breadcrumb</span>
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold leading-tight">
              <span className="text-orange-500">Price</span>
              <span className="text-black"> meets </span>
              <span className="text-sky-400">Popularity</span>
              <span className="text-black">. Trade what&apos;s trending on X.</span>
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
              This page tracks a trending topic&apos;s tweet count and its corresponding IFT price 
              from the moment it appears in X&apos;s U.S. Top 50. Data updates hourly and topics 
              remain on the chart for up to 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};