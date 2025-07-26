"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { CartesianGrid, XAxis, YAxis, Tooltip, Line, LineChart, ResponsiveContainer } from "recharts"
import { handleTopicClick, generateChartData, formatTooltipTimestamp, formatPrice, formatTweetCount, TOPIC_CONFIGS } from "@/lib/chartUtils"

interface ChartRowProps {
  topicKey: keyof typeof TOPIC_CONFIGS
  className?: string
}

export default function ChartRow({ topicKey, className = "" }: ChartRowProps) {
  const topicConfig = TOPIC_CONFIGS[topicKey]
  const chartData = generateChartData(topicConfig)
  
  // Transform data for dual-line chart
  const dualLineData = chartData.map(point => ({
    name: point.displayTime,
    price: point.price,
    tweetCount: point.tweetCount,
    fullTimestamp: point.fullTimestamp,
    // Scale tweet count for better visualization (divide by 1000 for K values)
    scaledTweetCount: point.tweetCount / 1000
  }))

  // Calculate price range for more dramatic slopes
  const priceValues = dualLineData.map(d => d.price)
  const minPrice = Math.min(...priceValues)
  const maxPrice = Math.max(...priceValues)
  const priceRange = maxPrice - minPrice
  const pricePadding = priceRange * 0.1 // 10% padding
  const priceDomain = [minPrice - pricePadding, maxPrice + pricePadding]

  // Calculate tweet count range for more dramatic slopes
  const tweetValues = dualLineData.map(d => d.scaledTweetCount)
  const minTweets = Math.min(...tweetValues)
  const maxTweets = Math.max(...tweetValues)
  const tweetRange = maxTweets - minTweets
  const tweetPadding = tweetRange * 0.1 // 10% padding
  const tweetDomain = [minTweets - tweetPadding, maxTweets + tweetPadding]

  return (
    <div 
      className={`w-full max-w-[1280px] h-48 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200 flex flex-col md:flex-row justify-between items-start ${className}`}
      style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Left Section - Topic Info */}
      <div className="w-full md:w-52 h-auto md:h-48 p-4 md:p-6 flex flex-col justify-start items-start gap-2 md:gap-4">
        <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-1.5">
          <div 
            className="self-stretch text-base font-semibold leading-4 cursor-pointer hover:text-primary transition-colors duration-200"
            style={{ 
              color: 'var(--base-card-foreground, #0A0A0A)', 
              fontFamily: 'Geist, sans-serif' 
            }}
            onClick={() => handleTopicClick(topicKey)}
            title={`Search for ${topicConfig.name} on X`}
          >
            {topicConfig.name}
          </div>
          <div 
            className="self-stretch flex-1 text-sm font-normal leading-5"
            style={{ 
              color: 'var(--base-muted-foreground, #737373)', 
              fontFamily: 'Geist, sans-serif' 
            }}
          >
            {topicConfig.description}
          </div>
        </div>
      </div>

      {/* Middle Section - Chart */}
      <div className="w-full md:w-[816px] h-40 md:h-48 relative flex justify-start items-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dualLineData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={false}
              interval={0}
            />
            <YAxis 
              yAxisId="price"
              orientation="left"
              className="text-xs text-muted-foreground"
              tick={{ fontSize: 10 }}
              width={50}
              domain={priceDomain}
              tickFormatter={(value: number) => `$${value.toFixed(3)}`}
            />
            <YAxis 
              yAxisId="tweets"
              orientation="right"
              className="text-xs text-muted-foreground"
              tick={{ fontSize: 10 }}
              width={50}
              domain={tweetDomain}
              tickFormatter={(value: number) => `${Math.round(value * 1000)}`}
            />
            <Tooltip 
              position={{ y: -60 }}
              allowEscapeViewBox={{ x: true, y: true }}
              wrapperStyle={{ zIndex: 1000 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length > 0) {
                  const data = payload[0].payload;
                  return (
                    <div 
                      style={{
                        background: 'var(--base-primary, #171717)',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        maxWidth: '384px'
                      }}
                    >
                      <div style={{ flex: '1 1 0' }}>
                        <span style={{ color: 'var(--tailwind-colors-base-white, white)', fontSize: '12px', fontFamily: 'Geist', fontWeight: '400', lineHeight: '16px' }}>
                          {formatTooltipTimestamp(data.fullTimestamp)}
                          <br />
                        </span>
                        <span style={{ color: 'var(--tailwind-colors-sky-400, #00bcff)', fontSize: '12px', fontFamily: 'Geist', fontWeight: '400', lineHeight: '16px' }}>
                          Price: {formatPrice(data.price)}
                          <br />
                        </span>
                        <span style={{ color: 'var(--tailwind-colors-orange-500, #F97316)', fontSize: '12px', fontFamily: 'Geist', fontWeight: '400', lineHeight: '16px' }}>
                          Tweet Count: {formatTweetCount(data.tweetCount)}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Price line - sky-400 solid */}
            <Line 
              yAxisId="price"
              type="monotone" 
              dataKey="price" 
              stroke="#00bcff" 
              strokeWidth={2}
              dot={{ fill: '#00bcff', strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, stroke: '#00bcff', strokeWidth: 2, fill: '#ffffff' }}
            />
            {/* Tweet count line - orange dashed */}
            <Line 
              yAxisId="tweets"
              type="monotone" 
              dataKey="scaledTweetCount" 
              stroke="#F97316" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#F97316', strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, stroke: '#F97316', strokeWidth: 2, fill: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Right Section - Buy Button */}
      <div className="w-full md:w-52 h-auto md:h-48 p-4 md:p-6 flex flex-col justify-center items-center md:items-end">
        <Button 
          className="h-10 px-4 py-2 bg-[var(--base-primary,#171717)] text-[var(--base-primary-foreground,#FAFAFA)] text-sm font-medium leading-5 rounded-lg shadow-sm hover:bg-gray-800 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Buy
        </Button>
      </div>
    </div>
  )
}