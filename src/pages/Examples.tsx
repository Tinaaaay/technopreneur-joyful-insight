import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import entrepreneursImage from "@/assets/entrepreneurs.jpg";

const Examples = () => {
  const internationalTechnopreneurs = [
    {
      name: "Elon Musk",
      companies: ["Tesla", "SpaceX", "Neuralink"],
      industry: "Electric Vehicles, Space, AI",
      achievement: "Revolutionized electric vehicles and commercial space travel",
      country: "USA",
      founded: "2002 (SpaceX), 2003 (Tesla)"
    },
    {
      name: "Jeff Bezos",
      companies: ["Amazon", "Blue Origin"],
      industry: "E-commerce, Cloud Computing, Space",
      achievement: "Built world's largest e-commerce platform and AWS cloud services",
      country: "USA",
      founded: "1994 (Amazon)"
    },
    {
      name: "Jack Ma",
      companies: ["Alibaba Group", "Ant Financial"],
      industry: "E-commerce, Digital Payments",
      achievement: "Created China's largest e-commerce ecosystem",
      country: "China",
      founded: "1999 (Alibaba)"
    },
    {
      name: "Satya Nadella",
      companies: ["Microsoft"],
      industry: "Cloud Computing, AI, Software",
      achievement: "Transformed Microsoft into a cloud-first company",
      country: "USA",
      founded: "CEO since 2014"
    },
    {
      name: "Brian Chesky",
      companies: ["Airbnb"],
      industry: "Sharing Economy, Travel",
      achievement: "Disrupted the hospitality industry with peer-to-peer accommodation",
      country: "USA",
      founded: "2008 (Airbnb)"
    },
    {
      name: "Daniel Ek",
      companies: ["Spotify"],
      industry: "Music Streaming, Digital Media",
      achievement: "Revolutionized music consumption with streaming technology",
      country: "Sweden",
      founded: "2006 (Spotify)"
    }
  ];

  const localTechnopreneurs = [
    {
      name: "Lance Gokongwei",
      companies: ["Cebu Pacific", "JG Summit Holdings"],
      industry: "Aviation, Telecommunications",
      achievement: "Pioneered low-cost aviation in the Philippines",
      country: "Philippines",
      founded: "1996 (Cebu Pacific)"
    },
    {
      name: "Diane Eustaquio",
      companies: ["InvestED", "Impact Hub Manila"],
      industry: "EdTech, Social Innovation",
      achievement: "Advancing education technology and social entrepreneurship",
      country: "Philippines",
      founded: "2012 (InvestED)"
    },
    {
      name: "Earl Valencia",
      companies: ["Newlogic Technologies"],
      industry: "Software Development, IT Services",
      achievement: "Leading Filipino software company serving global clients",
      country: "Philippines",
      founded: "2002 (Newlogic)"
    },
    {
      name: "Gian Javelona",
      companies: ["Cropital"],
      industry: "AgTech, Fintech",
      achievement: "Digitizing agriculture through crowdfunding platform",
      country: "Philippines",
      founded: "2015 (Cropital)"
    },
    {
      name: "Paulo Campos",
      companies: ["QBO Innovation Hub"],
      industry: "Startup Incubation, Innovation",
      achievement: "Building the Philippines' startup ecosystem",
      country: "Philippines",
      founded: "2016 (QBO)"
    },
    {
      name: "Katrina Chan",
      companies: ["MyKuya"],
      industry: "On-demand Services, Platform Economy",
      achievement: "Connecting skilled workers with customers through mobile app",
      country: "Philippines",
      founded: "2015 (MyKuya)"
    }
  ];

  const successStories = [
    {
      title: "From Garage to Global Giant",
      company: "Apple Inc.",
      story: "Steve Jobs and Steve Wozniak started Apple in a garage in 1976, creating the first user-friendly personal computer. Today, Apple is the world's most valuable company.",
      impact: "Transformed multiple industries: computers, phones, tablets, and digital media."
    },
    {
      title: "Connecting the World",
      company: "Facebook (Meta)",
      story: "Mark Zuckerberg created Facebook in his Harvard dorm room in 2004. What started as a college networking site now connects billions of people worldwide.",
      impact: "Revolutionized social communication and digital advertising."
    },
    {
      title: "Organizing World's Information",
      company: "Google",
      story: "Larry Page and Sergey Brin developed Google's search algorithm at Stanford University. Their mission to organize the world's information changed how we access knowledge.",
      impact: "Made information instantly accessible to everyone with internet access."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Technopreneur Examples</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn from the stories of successful technopreneurs who have shaped the modern world 
              through innovation and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-large mb-12">
            <img 
              src={entrepreneursImage} 
              alt="Successful entrepreneurs and business leaders" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Innovation Leaders</h2>
                <p className="text-lg opacity-90">
                  Meet the visionaries who turned technological ideas into world-changing companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Technopreneurs */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Global Technopreneurs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                International leaders who have transformed entire industries through technology innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalTechnopreneurs.map((person, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{person.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {person.country}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {person.founded}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {person.companies.map((company, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-primary">Industry:</span>
                        <p className="text-sm text-muted-foreground">{person.industry}</p>
                      </div>
                      <div>
                        <span className="font-medium text-primary">Key Achievement:</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{person.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Technopreneurs */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Filipino Technopreneurs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Local innovators who are building the Philippine tech ecosystem and creating global impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localTechnopreneurs.map((person, index) => (
                <Card key={index} className="card-hover border-0 bg-card shadow-soft">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{person.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {person.country}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {person.founded}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {person.companies.map((company, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-primary">Industry:</span>
                        <p className="text-sm text-muted-foreground">{person.industry}</p>
                      </div>
                      <div>
                        <span className="font-medium text-primary">Key Achievement:</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{person.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Inspiring Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stories of how small tech ideas grew into companies that changed the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl">{story.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">{story.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">The Story</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{story.story}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Global Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{story.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">What We Can Learn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-0 bg-primary/5 shadow-soft text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Start Small</h3>
                  <p className="text-sm text-muted-foreground">Many tech giants started as simple ideas or small projects.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-primary/5 shadow-soft text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Solve Real Problems</h3>
                  <p className="text-sm text-muted-foreground">Successful technopreneurs address genuine market needs.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-primary/5 shadow-soft text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Embrace Failure</h3>
                  <p className="text-sm text-muted-foreground">Learning from setbacks is crucial for eventual success.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-primary/5 shadow-soft text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Think Global</h3>
                  <p className="text-sm text-muted-foreground">Technology enables businesses to scale worldwide quickly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;