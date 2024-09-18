import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, BookOpen, Camera, DollarSign, Gift, Heart, Home, MessageCircle, Search, Settings, Star, ThumbsUp, User } from "lucide-react";

const NavBar = ({ activePage, setActivePage }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 px-4 flex justify-between items-center">
    {[
      { icon: <Home className="w-6 h-6" />, label: 'Home', page: 'home' },
      { icon: <Search className="w-6 h-6" />, label: 'Discover', page: 'discover' },
      { icon: <Camera className="w-6 h-6" />, label: 'Create', page: 'create' },
      { icon: <User className="w-6 h-6" />, label: 'Profile', page: 'profile' },
    ].map((item) => (
      <button
        key={item.page}
        className={`flex flex-col items-center ${activePage === item.page ? 'text-black' : 'text-white'}`}
        onClick={() => setActivePage(item.page)}
      >
        {item.icon}
        <span className="text-xs mt-1">{item.label}</span>
      </button>
    ))}
  </div>
);

const Header = ({ title }) => (
  <div className="fixed top-0 left-0 right-0 bg-black text-white py-4 px-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">{title}</h1>
    <div className="flex items-center space-x-4">
      <Bell className="w-6 h-6" />
      <Settings className="w-6 h-6" />
    </div>
  </div>
);

const HomePage = () => (
  <div className="flex-1 overflow-y-auto pt-16 pb-20 bg-white">
    <div className="flex space-x-2 p-4 overflow-x-auto">
      {[1, 2, 3, 4, 5].map((i) => (
        <Avatar key={i} className="w-16 h-16 border-2 border-red-600">
          <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} />
          <AvatarFallback>U{i}</AvatarFallback>
        </Avatar>
      ))}
    </div>
    <div className="space-y-4 p-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="overflow-hidden border-red-600">
          <CardHeader className="flex flex-row items-center p-4 bg-red-100">
            <Avatar className="w-10 h-10">
              <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 5}`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <CardTitle className="text-sm">Influencer{i}</CardTitle>
              <CardDescription className="text-xs">2h ago • Sponsored</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {i % 2 === 0 ? (
              <img src={`https://picsum.photos/seed/${i}/400/300`} alt="Post content" className="w-full aspect-video object-cover" />
            ) : (
              <video
                src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                controls
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </CardContent>
          <CardFooter className="flex justify-between p-4 bg-red-100">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm"><Heart className="w-4 h-4 mr-2 text-red-600" /> 1.2k</Button>
              <Button variant="ghost" size="sm"><MessageCircle className="w-4 h-4 mr-2 text-red-600" /> 84</Button>
              <Button variant="ghost" size="sm"><Gift className="w-4 h-4 mr-2 text-red-600" /> Gift</Button>
            </div>
            <Button variant="outline" size="sm" className="border-red-600 text-red-600">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="flex-1 overflow-y-auto pt-16 pb-20 bg-white">
    <div className="relative">
      <img src="https://picsum.photos/seed/profile/400/150" alt="Profile banner" className="w-full h-40 object-cover" />
      <Avatar className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 border-4 border-white">
        <AvatarImage src="https://i.pravatar.cc/150?img=68" />
        <AvatarFallback>SJ</AvatarFallback>
      </Avatar>
    </div>
    <div className="mt-16 px-4">
      <h2 className="text-2xl font-bold">Sarah Johnson</h2>
      <p className="text-gray-500">@sarahjstyle</p>
      <div className="flex items-center mt-2">
        <Badge variant="outline" className="mr-2 border-red-600 text-red-600">Fashion</Badge>
        <Badge variant="outline" className="mr-2 border-red-600 text-red-600">Lifestyle</Badge>
        <Badge variant="outline" className="border-red-600 text-red-600">Travel</Badge>
      </div>
      <p className="mt-2">Fashion enthusiast and lifestyle blogger. Sharing my passion for style and travel.</p>
      <div className="flex gap-4 mt-4">
        <div>
          <p className="font-semibold">250k</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-semibold">1.2M</p>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
        <div>
          <p className="font-semibold">4.8</p>
          <p className="text-sm text-gray-500"><Star className="w-4 h-4 inline text-red-600" /> Rating</p>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <Button className="flex-1 bg-red-600 text-white">Follow</Button>
        <Button variant="outline" className="flex-1 border-red-600 text-red-600">Message</Button>
      </div>
    </div>
    <Tabs defaultValue="posts" className="mt-6">
      <TabsList className="w-full bg-red-100">
        <TabsTrigger value="posts" className="flex-1 text-red-600">Posts</TabsTrigger>
        <TabsTrigger value="services" className="flex-1 text-red-600">Services</TabsTrigger>
        <TabsTrigger value="reviews" className="flex-1 text-red-600">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="mt-4">
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            i % 2 === 0 ? (
              <img key={i} src={`https://picsum.photos/seed/${i + 10}/150/150`} alt={`Post ${i}`} className="w-full aspect-square object-cover" />
            ) : (
              <video
                key={i}
                src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
                className="w-full aspect-square object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )
          ))}
        </div>
      </TabsContent>
      <TabsContent value="services" className="mt-4 px-4">
        <Card className="mb-4 border-red-600">
          <CardHeader>
            <CardTitle>Instagram Post</CardTitle>
            <CardDescription>Get your product featured in my Instagram feed.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p>Price</p>
              <DollarSign className="text-red-600 w-5 h-5" />
              <p className="font-semibold">$500</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-red-600 text-white">Book Now</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="reviews" className="mt-4 px-4">
        {[1, 2].map((i) => (
          <Card key={i} className="mb-4 border-red-600">
            <CardHeader className="flex justify-between items-center">
              <div className="flex items-center">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 50}`} />
                  <AvatarFallback>R{i}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <CardTitle className="text-sm">Reviewer{i}</CardTitle>
                  <CardDescription className="text-xs">2 weeks ago</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="text-red-600 w-5 h-5 mr-1" /> <span className="font-semibold">4.8</span>
              </div>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  </div>
);

const DiscoverPage = () => (
  <div className="flex-1 overflow-y-auto pt-16 pb-20 bg-white">
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Discover New Influencers</h2>
      {[1, 2, 3].map((i) => (
        <Card key={i} className="mb-4 border-red-600">
          <CardHeader className="flex flex-row items-center p-4 bg-red-100">
            <Avatar className="w-10 h-10">
              <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <CardTitle className="text-sm">Influencer{i}</CardTitle>
              <CardDescription className="text-xs">Fashion & Lifestyle</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-between p-4 bg-red-100">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm"><ThumbsUp className="w-4 h-4 mr-2 text-red-600" /> 1.2k</Button>
              <Button variant="ghost" size="sm"><Star className="w-4 h-4 mr-2 text-red-600" /> 4.9</Button>
            </div>
            <Button variant="outline" size="sm" className="border-red-600 text-red-600">Follow</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

const CreatePage = () => (
  <div className="flex-1 overflow-y-auto pt-16 pb-20 bg-white">
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
      <Input className="mb-4" placeholder="Enter post title..." />
      <Input className="mb-4" placeholder="Upload an image or video..." />
      <Switch className="mb-4" label="Promote post" />
      <Button className="w-full bg-red-600 text-white">Post</Button>
    </div>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={activePage === 'home' ? 'Home' : activePage === 'discover' ? 'Discover' : activePage === 'create' ? 'Create' : 'Profile'} />
      <main className="flex-1">
        {activePage === 'home' && <HomePage />}
        {activePage === 'discover' && <DiscoverPage />}
        {activePage === 'create' && <CreatePage />}
        {activePage === 'profile' && <ProfilePage />}
      </main>
      <NavBar activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};

export default App;
