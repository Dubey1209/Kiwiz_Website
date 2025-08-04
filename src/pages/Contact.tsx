import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import contactImage from "@/assets/contact-robot-child.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background font-bubblegum">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Let's Connect!</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're excited to hear from you! Please fill out the form below, 
            and our friendly team will get in touch shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Full Name"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you'd like to know..."
                    rows={5}
                    className="mt-1 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent to-warning rounded-3xl p-8 shadow-2xl">
              <img 
                src={contactImage} 
                alt="Robot and child illustration" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-light rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary-foreground">📧</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">hello@kiwiz.com</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary-foreground">💬</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Live Chat</h3>
              <p className="text-muted-foreground">Available 24/7</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary-foreground">📱</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Follow Us</h3>
              <p className="text-muted-foreground">@KiwizEducation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;