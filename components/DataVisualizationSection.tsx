import React from "react";
import ChartHeader from "./ChartHeader";
import ChartRow from "./ChartRow";

export const DataVisualizationSection = (): React.JSX.Element => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-4">
          {/* Chart Header */}
          <ChartHeader />
          
          {/* Chart Rows */}
          <div className="flex flex-col gap-4">
            <ChartRow topicKey="epstein" />
            <ChartRow topicKey="bondi" />
            <ChartRow topicKey="americaparty" />
            <ChartRow topicKey="superman" />
          </div>
        </div>
      </div>
    </section>
  );
};