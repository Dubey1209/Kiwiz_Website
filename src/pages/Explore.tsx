import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import galleryDino from "@/assets/gallery-dino.png";
import galleryForest from "@/assets/gallery-forest.png";
import galleryUnicorn from "@/assets/gallery-unicorn.png";
import galleryOrange from "@/assets/gallery-orange.png";
import galleryMonster from "@/assets/gallery-monster.png";
import galleryRainbow from "@/assets/gallery-rainbow.png";
import galleryKnight from "@/assets/gallery-knight.png";
import galleryAlien from "@/assets/gallery-alien.png";

const Explore = () => {
  const categories = [
    { name: "All", active: true },
    { name: "Animals", active: false },
    { name: "Nature", active: false },
    { name: "Characters", active: false },
    { name: "Abstract", active: false },
    { name: "Food", active: false },
    { name: "Fantasy", active: false }
  ];

  const artworks = [
    {
      title: "Happy Dino Adventure",
      category: "Animals",
      image: galleryDino,
      bgColor: "bg-green-100"
    },
    {
      title: "Enchanted Forest",
      category: "Nature", 
      image: galleryForest,
      bgColor: "bg-blue-900"
    },
    {
      title: "Sunny Day Fun",
      category: "Abstract",
      image: galleryRainbow,
      bgColor: "bg-yellow-100"
    },
    {
      title: "Sparkle Unicorn",
      category: "Characters",
      image: galleryUnicorn, 
      bgColor: "bg-pink-100"
    },
    {
      title: "Fruity Friends",
      category: "Food",
      image: galleryOrange,
      bgColor: "bg-orange-100"
    },
    {
      title: "Little Monster Buddy",
      category: "Characters",
      image: galleryMonster,
      bgColor: "bg-purple-100"
    },
    {
      title: "Rainbow Rain",
      category: "Abstract",
      image: galleryRainbow,
      bgColor: "bg-blue-100"
    },
    {
      title: "Brave Knight Adventure", 
      category: "Characters",
      image: galleryKnight,
      bgColor: "bg-gray-200"
    },
    {
      title: "Galactic Friend",
      category: "Fantasy",
      image: galleryAlien,
      bgColor: "bg-purple-300"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-bubblegum">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-primary-light rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search for coloring pages or characters..."
                className="pl-10 bg-white"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 ${
                    category.active 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-white text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
            
            <Button variant="outline" className="bg-white">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Our Creative Gallery</h1>
          <p className="text-muted-foreground">Discover amazing coloring pages and printable activities</p>
        </div>

        {/* Artworks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className={`${artwork.bgColor} h-48 rounded-t-lg flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1">{artwork.title}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {artwork.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground">
                      Color Now
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Artworks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;