"use client"

import { useState, memo } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Wallet, Search, Repeat2, MessageSquare, Heart, Eye, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/Logo"

// Lazy load the BentoCard component
const BentoCard = dynamic(() => import("@/components/OptimizedBentoCard"), {
  loading: () => <div className="h-[400px] bg-muted animate-pulse rounded-xl" />,
})

// Tweet data to avoid duplication
const tweets = [
  {
    id: 1,
    author: "Donald J. Trump",
    handle: "@realDonaldTrump",
    avatar: "https://github.com/shadcn.png",
    time: "Jul 02, 9:41PM",
    content: "Elon Musk knew, long before he so strongly Endorsed me for President, that I was strongly against the EV Mandate. It is ridiculous, and was always a major part of my campaign. Electric cars are fine, but not everyone should be forced to own one. Elon may get more subsidy than any human being in history, by far, and without subsidies, Elon would probably have to close up shop and head back home to South Africa. No more Rocket launches, Satellites, or Electric Car Production, and our Country would save a FORTUNE. Perhaps we should have DOGE take a good, hard, look at this? BIG MONEY TO BE SAVED!!!",
    stats: { retweets: 679, comments: 189, likes: 2598, views: "395k" }
  },
  {
    id: 2,
    author: "Clandestine",
    handle: "@WarCladestine",
    avatar: "https://github.com/shadcn.png",
    time: "Jul 02, 9:41PM",
    content: "In retrospect, I think the Trump/Elon public feud was 100% fabricated. If Trump already had the deals in place with Saudi, Qatar, and UAE, back in May, and Trump knew he would have to pull off this maneuver, that would explain why Elon and Trump had their \"fight\" 2 weeks later, and BEFORE Trump destroyed Iran's nuclear facilities.",
    hasMore: true,
    stats: { retweets: 679, comments: 189, likes: 2598, views: "395k" }
  }
]

// Memoized tweet card component
const TweetCard = memo(({ tweet }: { tweet: typeof tweets[0] }) => (
  <Card className="rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
    <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src={tweet.avatar} alt={tweet.author} />
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-sm sm:text-base font-semibold text-card-foreground">{tweet.author}</h4>
            <span className="text-xs font-semibold">{tweet.handle}</span>
          </div>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground">{tweet.time}</span>
      </div>
    </CardHeader>

    <CardContent className="px-4 sm:px-6">
      <p className="text-sm sm:text-base text-card-foreground">{tweet.content}</p>
      {"hasMore" in tweet && tweet.hasMore && (
        <span className="text-slate-500 text-xs font-semibold mt-2 block">View More</span>
      )}
    </CardContent>

    <CardFooter className="px-4 py-4 sm:px-6 sm:py-6 border-t flex gap-1 sm:gap-2">
      <button className="flex items-center gap-1 sm:gap-2 hover:bg-accent transition-colors duration-200 p-1.5 sm:p-2 rounded-md">
        <Repeat2 className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm text-muted-foreground">{tweet.stats.retweets}</span>
      </button>
      <button className="flex items-center gap-1 sm:gap-2 hover:bg-accent transition-colors duration-200 p-1.5 sm:p-2 rounded-md">
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm text-muted-foreground">{tweet.stats.comments}</span>
      </button>
      <button className="flex items-center gap-1 sm:gap-2 hover:bg-accent transition-colors duration-200 p-1.5 sm:p-2 rounded-md">
        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm text-muted-foreground">{tweet.stats.likes}</span>
      </button>
      <button className="flex items-center gap-1 sm:gap-2 hover:bg-accent transition-colors duration-200 p-1.5 sm:p-2 rounded-md">
        <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm text-muted-foreground">{tweet.stats.views}</span>
      </button>
    </CardFooter>
  </Card>
))

TweetCard.displayName = "TweetCard"

export default function OptimizedDetail2Col() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <nav className="h-14 sm:h-16 border-b bg-background shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" className="text-primary font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                World
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                Tech
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                Sports
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                Culture
              </Button>
              <Button variant="ghost" className="text-muted-foreground font-medium px-3 py-2 rounded-md hover:bg-accent transition-colors duration-200">
                Settings
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-accent transition-colors duration-200">
              <Search className="h-4 w-4" />
            </Button>

            <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" loading="lazy" />
            </Avatar>

            <Button className="h-8 sm:h-9 shadow-sm hover:shadow-lg transition-shadow duration-200 text-sm sm:text-base">
              <Wallet className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              <span className="hidden sm:inline">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-accent transition-colors duration-200">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 pt-8">
                  <Button variant="ghost" className="justify-start text-primary font-medium hover:bg-accent transition-colors duration-200">
                    World
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent transition-colors duration-200">
                    Tech
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent transition-colors duration-200">
                    Sports
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent transition-colors duration-200">
                    Culture
                  </Button>
                  <Button variant="ghost" className="justify-start text-muted-foreground font-medium hover:bg-accent transition-colors duration-200">
                    Settings
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="border-b py-3 sm:py-4 md:py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col gap-3 sm:gap-4 md:gap-6">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-xs sm:text-sm leading-tight">
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-card-foreground font-medium">Politics</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">PresidentvsElon</h1>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Badge className="transition-transform duration-200 cursor-pointer text-xs sm:text-sm px-2 py-0.5">$PVE</Badge>
                <div className="flex items-center gap-0.5 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                  <Image 
                    src="/Xlogo.png"
                    alt="X"
                    width={12}
                    height={12}
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                    quality={50}
                    loading="eager"
                  />
                  <span className="text-xs sm:text-sm font-semibold">@PresidentvsElon</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Trump and Elon are set to deliver a riveting live debate on the subject of H1B visas. Their contrasting views promise to captivate audiences worldwide, especially as fans of both eagerly anticipate the clash of these two influential voices.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-4 sm:py-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 sm:gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {/* Price Card - Lazy loaded */}
              <BentoCard />

              {/* Social Feed Card */}
              <Card className="p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative">
                <h3 className="text-sm sm:text-base font-semibold text-card-foreground mb-4">Smart Feed</h3>

                <div className="relative">
                  <div className="max-h-[600px] sm:max-h-[725px] overflow-y-auto space-y-4 pr-2 pb-16 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {tweets.map((tweet) => (
                      <TweetCard key={tweet.id} tweet={tweet} />
                    ))}
                  </div>
                  {/* Gradient overlay for smooth fade effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}