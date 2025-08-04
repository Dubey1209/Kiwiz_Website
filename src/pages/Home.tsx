import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, BookOpen, Palette } from "lucide-react";
import heroImage from "@/assets/hero-child-blocks.png";
import parentChildImage from "@/assets/parent-child-learning.jpg";
import progressImage from "@/assets/learning-progress.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-bubblegum">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Spark Imagination,<br />
              Foster Learning with<br />
              <span className="text-primary">Kiwiz</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Dive into a world of creativity and education tailored for 
              young learners, parents, and teachers. Explore 
              AI-powered activities, printable resources, and more!
            </p>
            
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Start Learning Now
            </Button>
          </div>
          
          <div className="relative">
            {/* Hero Image - Exact size as original */}
            <div className="relative z-10 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
              <img 
                src={heroImage} 
                alt="Child with alphabet blocks" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-light rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Playful Learning for Little Hands
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-primary-light border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">AI Image Generation</h3>
                <p className="text-muted-foreground">Create magical drawings and coloring pages with our AI-powered image generator designed for young minds.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Printable Learning</h3>
                <p className="text-muted-foreground">Access thousands of printable worksheets for alphabet tracing, numbers, and educational activities.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Creative Play</h3>
                <p className="text-muted-foreground">Upload colored artworks and watch AI transform them into beautiful illustrations for sharing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        {/* Parent Benefits Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Peace of Mind for Parents
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-2">
                      <img 
                        src={parentChildImage} 
                        alt="Parent helping child learn" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="lg:order-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground">Safe & Engaging Content</h3>
                      <p className="text-muted-foreground">
                        All activities and content are thoughtfully curated to 
                        ensure a secure and child-friendly environment, 
                        promoting positive learning experiences and 
                        development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <img 
                        src={progressImage} 
                        alt="Learning progress tracking" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Track Learning Progress</h3>
                      <p className="text-muted-foreground">
                        Monitor your child's development through intuitive 
                        dashboards that highlight their achievements and areas 
                        for growth, making learning a shared journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;