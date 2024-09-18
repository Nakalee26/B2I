import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronDown, DollarSign, LineChart, MessageSquare, PieChart, Plus, Search, Star, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CampaignCard = ({ campaign }) => (
  <Card className="mb-4 border-red-600">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle>{campaign.name}</CardTitle>
        <CardDescription>{campaign.status}</CardDescription>
      </div>
      <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'} className="bg-red-600 text-white">
        {campaign.status}
      </Badge>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between mb-2">
        <span>Budget:</span>
        <span className="font-bold">${campaign.budget}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Influencers:</span>
        <span className="font-bold">{campaign.influencers}</span>
      </div>
      <div className="flex justify-between">
        <span>Engagement:</span>
        <span className="font-bold">{campaign.engagement}%</span>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" className="border-red-600 text-red-600">View Details</Button>
      <Button className="bg-red-600 text-white">Manage</Button>
    </CardFooter>
  </Card>
)

const InfluencerCard = ({ influencer }) => (
  <Card className="mb-4 border-red-600">
    <CardHeader className="flex flex-row items-center space-x-4">
      <Avatar>
        <AvatarImage src={influencer.avatar} />
        <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle>{influencer.name}</CardTitle>
        <CardDescription>{influencer.niche}</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between mb-2">
        <span>Followers:</span>
        <span className="font-bold">{influencer.followers}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Engagement Rate:</span>
        <span className="font-bold">{influencer.engagementRate}%</span>
      </div>
      <div className="flex items-center">
        <Star className="w-4 h-4 text-red-600 mr-1" />
        <span className="font-bold">{influencer.rating}</span>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" className="border-red-600 text-red-600">View Profile</Button>
      <Button className="bg-red-600 text-white">Contact</Button>
    </CardFooter>
  </Card>
)

export default function BusinessDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const campaigns = [
    { name: 'Summer Sale', status: 'Active', budget: 5000, influencers: 10, engagement: 8.5 },
    { name: 'Product Launch', status: 'Pending', budget: 10000, influencers: 20, engagement: 0 },
    { name: 'Brand Awareness', status: 'Completed', budget: 3000, influencers: 5, engagement: 12.3 },
  ]

  const suggestedInfluencers = [
    { name: 'Emma Johnson', niche: 'Fashion', followers: '250K', engagementRate: 3.8, rating: 4.7, avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Alex Chen', niche: 'Tech', followers: '500K', engagementRate: 2.5, rating: 4.9, avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Sophia Lee', niche: 'Lifestyle', followers: '1M', engagementRate: 4.2, rating: 4.8, avatar: 'https://i.pravatar.cc/150?img=3' },
  ]

  return (
    <div className="flex-1 overflow-y-auto pt-16 pb-20 bg-white px-4">
      <h1 className="text-3xl font-bold mb-6">Business Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full bg-red-100 p-1 rounded-lg">
          <TabsTrigger value="overview" className="flex-1 text-red-600">Overview</TabsTrigger>
          <TabsTrigger value="campaigns" className="flex-1 text-red-600">Campaigns</TabsTrigger>
          <TabsTrigger value="influencers" className="flex-1 text-red-600">Influencers</TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1 text-red-600">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-red-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
                <DollarSign className="w-4 h-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$18,000</div>
                <p className="text-xs text-gray-500">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-red-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <LineChart className="w-4 h-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-gray-500">2 pending approval</p>
              </CardContent>
            </Card>
            <Card className="border-red-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Influencers</CardTitle>
                <Users className="w-4 h-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124</div>
                <p className="text-xs text-gray-500">+12 this week</p>
              </CardContent>
            </Card>
            <Card className="border-red-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Engagement Rate</CardTitle>
                <PieChart className="w-4 h-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.8%</div>
                <p className="text-xs text-gray-500">+0.5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-red-600">
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                {campaigns.map((campaign, index) => (
                  <CampaignCard key={index} campaign={campaign} />
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 text-white">View All Campaigns</Button>
              </CardFooter>
            </Card>

            <Card className="border-red-600">
              <CardHeader>
                <CardTitle>Suggested Influencers</CardTitle>
              </CardHeader>
              <CardContent>
                {suggestedInfluencers.map((influencer, index) => (
                  <InfluencerCard key={index} influencer={influencer} />
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 text-white">Find More Influencers</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Campaign Management</h2>
            <Button className="bg-red-600 text-white"><Plus className="w-4 h-4 mr-2" /> Create Campaign</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} campaign={campaign} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="influencers">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Influencer Search</h2>
            <div className="flex items-center">
              <Input placeholder="Search influencers..." className="mr-2 border-red-600" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-red-600 text-red-600">
                    Filter <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Followers</DropdownMenuItem>
                  <DropdownMenuItem>Engagement Rate</DropdownMenuItem>
                  <DropdownMenuItem>Niche</DropdownMenuItem>
                  <DropdownMenuItem>Location</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedInfluencers.map((influencer, index) => (
              <InfluencerCard key={index} influencer={influencer} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Performance Analytics</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-red-600 text-red-600">
                  Last 30 Days <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
                <DropdownMenuItem>Last Year</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-600">
              <CardHeader>
                <CardTitle>Engagement Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-red-100 text-red-600">
                  Engagement Chart Placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="border-red-600">
              <CardHeader>
                <CardTitle>Top Performing Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-red-100 text-red-600">
                  Top Campaigns Chart Placeholder
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-4 right-4">
        <Button className="bg-red-600 text-white rounded-full p-4">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}