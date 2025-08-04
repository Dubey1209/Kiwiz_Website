import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, Upload, Eye } from "lucide-react";
import dashboardMonster from "@/assets/dashboard-monster.png";

const Dashboard = () => {
  const printableCategories = [
    {
      title: "Cursive Alphabets",
      description: "Practice beautiful cursive with our comprehensive alphabet worksheets designed for young learners.",
      color: "bg-yellow-100",
      icon: "T"
    },
    {
      title: "Simple Alphabets", 
      description: "Learn basic letter forms with simple, clear alphabet practice sheets perfect for beginners.",
      color: "bg-pink-100",
      icon: "B"
    },
    {
      title: "Capital Letters",
      description: "Master uppercase letters with fun and engaging capital letter tracing worksheets.",
      color: "bg-purple-100",
      icon: "O"
    },
    {
      title: "Cursive Numbers",
      description: "Practice numbers with our beautiful cursive number worksheets that make math fun.",
      color: "bg-yellow-100", 
      icon: "12345"
    },
    {
      title: "Numbers Logic",
      description: "Color, count and connect numbers to fun math concepts for early learners.",
      color: "bg-orange-100",
      icon: "6789"
    },
    {
      title: "Numbers 1-10",
      description: "Practice the essential numbers 1-10 with fun tracing worksheets that build confidence.",
      color: "bg-green-100",
      icon: "1234567890"
    }
  ];

  const artworkGallery = [
    { title: "Brave Dog", category: "Characters", image: "🐕" },
    { title: "Castle Dreams", category: "Fantasy", image: "🏰" },
    { title: "Space Odyssey", category: "Adventure", image: "🚀" },
    { title: "Friendly Animals", category: "Nature", image: "🦊" },
    { title: "Under the Sea", category: "Ocean", image: "🐠" },
    { title: "Magical Forest", category: "Nature", image: "🌳" }
  ];

  return (
    <div className="min-h-screen bg-background font-bubblegum">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* AI Art Generation Section */}
        <Card className="mb-12 bg-gradient-to-r from-primary-light to-secondary border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-primary-dark">
              Spark Your Imagination with AI Art
            </h1>
            
            <div className="bg-white rounded-xl p-6 max-w-md mx-auto mb-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Generate New Artworks</h3>
              <Input 
                placeholder="Describe your magical creation in few words..." 
                className="mb-4"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Image
              </Button>
            </div>
            
            {/* Generated Image Preview */}
            <div className="bg-white rounded-xl p-4 max-w-sm mx-auto">
              <img 
                src={dashboardMonster} 
                alt="Generated monster character" 
                className="w-full h-48 object-contain rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Printables Library */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">
            Dive Into Our Printables Library
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printableCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="font-bold text-foreground text-lg">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full">
                    View Printables
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Colorful Creations Gallery */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">
            Your Colorful Creations
          </h2>
          
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">Manage Your Masterpieces</h3>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworkGallery.map((artwork, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="bg-gradient-to-br from-primary-light to-secondary rounded-lg h-32 mb-4 flex items-center justify-center">
                    <span className="text-4xl">{artwork.image}</span>
                  </div>
                  <h4 className="font-bold text-foreground">{artwork.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{artwork.category}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View Creation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;