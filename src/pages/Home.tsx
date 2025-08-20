import { ArrowRight, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-technopreneurship.jpg";

const Home = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Learn how to think creatively and solve problems using technology."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Understand how technology drives modern business success."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Discover how technopreneurs create positive change in society."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Welcome to{" "}
                  <span className="gradient-text">Technopreneurship</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover the fascinating world where technology meets entrepreneurship. 
                  Learn how innovative minds are shaping the future through technology-driven businesses.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/examples">View Examples</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={heroImage} 
                  alt="Technopreneurship concept illustration" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">What is Technopreneurship?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technopreneurship combines technology and entrepreneurship to create innovative solutions 
              that address real-world problems. It's about leveraging technological advances to build 
              sustainable businesses that drive economic growth and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Key Aspects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the core elements that make technopreneurship essential in today's world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 bg-background shadow-soft">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Ready to Explore?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive deeper into the world of technopreneurship and discover how it's 
                shaping the future of business and society.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/importance">
                  Why It Matters <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/creator">About the Creator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;