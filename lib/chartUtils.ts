export interface ChartDataPoint {
  time: string;
  date: string;
  tweetCount: number;
  price: number;
  displayTime: string;
  fullTimestamp: Date;
}

export interface TopicConfig {
  name: string;
  description: string;
  startTime: string; // UTC format like "20250708 0800 UTC+0"
  data: Omit<ChartDataPoint, 'displayTime' | 'fullTimestamp'>[];
}

/**
 * Parses a date string in the format "YYYYMMDD HHMM UTC+0" to a Date object
 */
export function parseTimestamp(dateStr: string): Date {
  const match = dateStr.match(/(\d{4})(\d{2})(\d{2}) (\d{2})(\d{2}) UTC\+0/);
  if (!match) {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
  
  const [, year, month, day, hour, minute] = match;
  return new Date(Date.UTC(
    parseInt(year),
    parseInt(month) - 1, // Month is 0-indexed
    parseInt(day),
    parseInt(hour),
    parseInt(minute)
  ));
}

/**
 * Formats a timestamp for display in tooltips
 */
export function formatTooltipTimestamp(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

/**
 * Generates time labels for the X-axis (T, T+6hrs, T+12hrs, T+18hrs, T+24hrs)
 */
export function generateTimeLabels(): string[] {
  const labels: string[] = [];
  const intervals = [0, 6, 12, 18, 24];
  
  for (const hours of intervals) {
    if (hours === 0) {
      labels.push('T');
    } else {
      labels.push(`T+${hours}hrs`);
    }
  }
  
  return labels;
}

/**
 * Generates chart data with proper timestamps and display formatting
 */
export function generateChartData(topicConfig: TopicConfig): ChartDataPoint[] {
  const startTime = parseTimestamp(topicConfig.startTime);
  
  return topicConfig.data.map((point) => {
    const fullTimestamp = parseTimestamp(point.date);
    const hoursFromStart = Math.floor((fullTimestamp.getTime() - startTime.getTime()) / (1000 * 60 * 60));
    
    let displayTime: string;
    if (hoursFromStart === 0) {
      displayTime = 'T';
    } else {
      displayTime = `T+${hoursFromStart}hrs`;
    }
    
    return {
      ...point,
      displayTime,
      fullTimestamp
    };
  });
}

/**
 * Formats tweet count for display (e.g., 1500 -> "1.5K", 1500000 -> "1.5M")
 */
export function formatTweetCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

/**
 * Formats price for display with appropriate decimal places
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(5)}`;
}

/**
 * Creates a click handler for topic names that opens X.com search
 */
export function handleTopicClick(topicName: string): void {
  const searchUrl = `https://x.com/search?q=${topicName.toLowerCase()}`;
  window.open(searchUrl, '_blank', 'noopener,noreferrer');
}

/**
 * CSV data from the provided file converted to TopicConfig format
 */
export const TOPIC_CONFIGS: Record<string, TopicConfig> = {
  epstein: {
    name: 'Epstein',
    description: 'DOJ and FBI memo confirms Epstein died by suicide on August 2019; no "client list" found; no charges for uncharged individuals.',
    startTime: '20250708 0800 UTC+0',
    data: [
      { time: "T", date: "20250708 0800 UTC+0", tweetCount: 303, price: 0.01555 },
      { time: "T+1", date: "20250708 0900 UTC+0", tweetCount: 360, price: 0.01569 },
      { time: "T+2", date: "20250708 1000 UTC+0", tweetCount: 426, price: 0.01586 },
      { time: "T+3", date: "20250708 1100 UTC+0", tweetCount: 533, price: 0.01613 },
      { time: "T+4", date: "20250708 1200 UTC+0", tweetCount: 689, price: 0.01653 },
      { time: "T+5", date: "20250708 1300 UTC+0", tweetCount: 851, price: 0.01694 },
      { time: "T+6", date: "20250708 1400 UTC+0", tweetCount: 1000, price: 0.01795 },
      { time: "T+7", date: "20250708 1500 UTC+0", tweetCount: 1200, price: 0.01782 },
      { time: "T+8", date: "20250708 1600 UTC+0", tweetCount: 1400, price: 0.01833 },
      { time: "T+9", date: "20250708 1700 UTC+0", tweetCount: 1500, price: 0.01858 },
      { time: "T+10", date: "20250708 1800 UTC+0", tweetCount: 1700, price: 0.01908 },
      { time: "T+11", date: "20250708 1900 UTC+0", tweetCount: 1800, price: 0.01934 },
      { time: "T+12", date: "20250708 2000 UTC+0", tweetCount: 1900, price: 0.01959 },
      { time: "T+13", date: "20250708 2100 UTC+0", tweetCount: 1900, price: 0.01959 },
      { time: "T+14", date: "20250708 2200 UTC+0", tweetCount: 1500, price: 0.02105 },
      { time: "T+15", date: "20250708 2300 UTC+0", tweetCount: 1600, price: 0.01963 },
      { time: "T+16", date: "20250709 0000 UTC+0", tweetCount: 1550, price: 0.01284 },
      { time: "T+17", date: "20250709 0100 UTC+0", tweetCount: 1900, price: 0.01478 },
      { time: "T+18", date: "20250709 0200 UTC+0", tweetCount: 2000, price: 0.01984 },
      { time: "T+19", date: "20250709 0300 UTC+0", tweetCount: 2100, price: 0.0201 },
      { time: "T+20", date: "20250709 0400 UTC+0", tweetCount: 2000, price: 0.01984 }
    ]
  },
  bondi: {
    name: 'Bondi',
    description: 'Pam Bondi trending as DOJ clarifies: no Epstein "client list" existed, she walked back earlier assertions.',
    startTime: '20250707 1800 UTC+0',
    data: [
      { time: "T", date: "20250707 1800 UTC+0", tweetCount: 93, price: 0.01502 },
      { time: "T+1", date: "20250707 1900 UTC+0", tweetCount: 104, price: 0.01504 },
      { time: "T+2", date: "20250707 2000 UTC+0", tweetCount: 119, price: 0.01508 },
      { time: "T+3", date: "20250707 2100 UTC+0", tweetCount: 147, price: 0.0151 },
      { time: "T+4", date: "20250707 2200 UTC+0", tweetCount: 185, price: 0.01525 },
      { time: "T+5", date: "20250707 2300 UTC+0", tweetCount: 225, price: 0.01535 },
      { time: "T+6", date: "20250708 0000 UTC+0", tweetCount: 269, price: 0.01546 },
      { time: "T+7", date: "20250708 0100 UTC+0", tweetCount: 310, price: 0.01557 },
      { time: "T+8", date: "20250708 0200 UTC+0", tweetCount: 348, price: 0.01528 },
      { time: "T+9", date: "20250708 0300 UTC+0", tweetCount: 385, price: 0.01576 },
      { time: "T+10", date: "20250708 0400 UTC+0", tweetCount: 419, price: 0.01584 },
      { time: "T+11", date: "20250708 0500 UTC+0", tweetCount: 449, price: 0.01592 },
      { time: "T+12", date: "20250708 0600 UTC+0", tweetCount: 477, price: 0.016 },
      { time: "T+13", date: "20250708 0700 UTC+0", tweetCount: 490, price: 0.01602 },
      { time: "T+14", date: "20250708 0800 UTC+0", tweetCount: 500, price: 0.01478 },
      { time: "T+15", date: "20250708 0900 UTC+0", tweetCount: 520, price: 0.01525 },
      { time: "T+16", date: "20250708 1000 UTC+0", tweetCount: 490, price: 0.01478 },
      { time: "T+17", date: "20250708 1100 UTC+0", tweetCount: 480, price: 0.01478 },
      { time: "T+18", date: "20250708 1200 UTC+0", tweetCount: 471, price: 0.01589 },
      { time: "T+19", date: "20250708 1300 UTC+0", tweetCount: 470, price: 0.01597 },
      { time: "T+20", date: "20250708 1400 UTC+0", tweetCount: 446, price: 0.01591 },
      { time: "T+21", date: "20250708 1500 UTC+0", tweetCount: 458, price: 0.01594 },
      { time: "T+22", date: "20250708 1600 UTC+0", tweetCount: 421, price: 0.01587 },
      { time: "T+23", date: "20250708 1700 UTC+0", tweetCount: 494, price: 0.01599 },
      { time: "T+24", date: "20250708 1800 UTC+0", tweetCount: 500, price: 0.016 }
    ]
  },
  superman: {
    name: 'Superman',
    description: 'James Gunn\'s glossy reboot hits July 11, sparking buzz, controversy.',
    startTime: '20250707 2300 UTC+0',
    data: [
      { time: "T", date: "20250707 2300 UTC+0", tweetCount: 31, price: 0.01486 },
      { time: "T+1", date: "20250708 0000 UTC+0", tweetCount: 64, price: 0.01498 },
      { time: "T+2", date: "20250708 0100 UTC+0", tweetCount: 174, price: 0.01522 },
      { time: "T+3", date: "20250708 0200 UTC+0", tweetCount: 52, price: 0.015 },
      { time: "T+4", date: "20250708 0300 UTC+0", tweetCount: 68, price: 0.01495 },
      { time: "T+5", date: "20250708 0400 UTC+0", tweetCount: 75, price: 0.01497 },
      { time: "T+6", date: "20250708 0500 UTC+0", tweetCount: 80, price: 0.01498 },
      { time: "T+7", date: "20250708 0600 UTC+0", tweetCount: 244, price: 0.0154 },
      { time: "T+8", date: "20250708 0700 UTC+0", tweetCount: 255, price: 0.01543 },
      { time: "T+9", date: "20250708 0800 UTC+0", tweetCount: 263, price: 0.01524 }
    ]
  },
  americaparty: {
    name: 'America Party',
    description: 'Elon Musk launched a new fiscal-conservative third party challenging the Republican-Democrat duopoly.',
    startTime: '20250708 1500 UTC+0',
    data: [
      { time: "T", date: "20250708 1500 UTC+0", tweetCount: 122, price: 0.01509 },
      { time: "T+1", date: "20250708 1600 UTC+0", tweetCount: 119, price: 0.01508 },
      { time: "T+2", date: "20250708 1700 UTC+0", tweetCount: 108, price: 0.01505 }
    ]
  }
};