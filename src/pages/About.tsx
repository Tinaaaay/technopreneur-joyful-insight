import { Calendar, Globe, Target, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import techWorkspace from "@/assets/tech-workspace.jpg";

const About = () => {
  const timelineEvents = [
    {
      year: "1970s-1980s",
      title: "Early Computing Era",
      description: "Personal computers emerge, creating first wave of tech entrepreneurs like Bill Gates and Steve Jobs."
    },
    {
      year: "1990s",
      title: "Internet Revolution",
      description: "The World Wide Web transforms business, enabling companies like Amazon and eBay to flourish."
    },
    {
      year: "2000s",
      title: "Social Media & Mobile",
      description: "Social platforms and smartphones create new opportunities for digital entrepreneurs."
    },
    {
      year: "2010s-Present",
      title: "AI & Digital Transformation",
      description: "Artificial intelligence, cloud computing, and digital transformation drive modern technopreneurship."
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Technology enables businesses to reach customers worldwide instantly."
    },
    {
      icon: Target,
      title: "Scalable Solutions",
      description: "Digital products can scale rapidly without proportional increase in costs."
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Technology-based solutions can address societal challenges effectively."
    },
    {
      icon: Calendar,
      title: "Future-Ready",
      description: "Prepares individuals for the increasingly digital future economy."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">About Technopreneurship</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the intersection of technology and entrepreneurship that's driving innovation in the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">What is Technopreneurship?</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Technopreneurship</strong> is the fusion of technology and entrepreneurship, 
                  representing a modern approach to creating and managing businesses that leverage 
                  technological innovations to solve problems and create value.
                </p>
                <p>
                  Unlike traditional entrepreneurship, technopreneurship specifically focuses on 
                  technology-based solutions, digital platforms, and innovative products that 
                  can scale rapidly and reach global markets.
                </p>
                <p>
                  Technopreneurs are individuals who identify opportunities where technology 
                  can be applied to create new products, services, or business models that 
                  disrupt existing markets or create entirely new ones.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={techWorkspace} 
                  alt="Modern technology workspace" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Evolution of Technopreneurship</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tracing the development of technology-driven entrepreneurship through the decades.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineEvents.map((event, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft">
                  <CardHeader>
                    <div className="text-primary font-bold text-sm">{event.year}</div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Benefits of Technopreneurship</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the advantages that technology-driven entrepreneurship offers to individuals and society.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover border-0 bg-card shadow-soft text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Key Characteristics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets technopreneurship apart from traditional business approaches.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-background shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Innovation-Driven</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Focuses on creating novel solutions using cutting-edge technology, 
                    constantly pushing boundaries and challenging conventional approaches.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-background shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Scalable Business Models</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leverages digital platforms and automation to create businesses 
                    that can grow rapidly without proportional increases in resources.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-background shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Agile and Adaptive</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Embraces rapid prototyping, iterative development, and quick 
                    adaptation to market feedback and technological changes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-background shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizes analytics, metrics, and data science to inform 
                    strategic decisions and optimize business performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;