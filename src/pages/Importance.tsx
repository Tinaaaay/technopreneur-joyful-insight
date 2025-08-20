import { BarChart3, Brain, Briefcase, Rocket, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Importance = () => {
  const modernImportance = [
    {
      icon: Rocket,
      title: "Economic Growth",
      description: "Technopreneurship drives GDP growth, creates high-value jobs, and attracts foreign investment through innovative industries."
    },
    {
      icon: Brain,
      title: "Digital Transformation",
      description: "Enables traditional businesses to modernize, improves efficiency, and creates new digital business models."
    },
    {
      icon: Shield,
      title: "Competitive Advantage",
      description: "Nations and businesses with strong technopreneur ecosystems maintain competitive edge in global markets."
    },
    {
      icon: Zap,
      title: "Innovation Culture",
      description: "Fosters a culture of innovation, creativity, and problem-solving that benefits entire societies."
    }
  ];

  const youthBenefits = [
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Creates diverse career paths in emerging fields like AI, blockchain, IoT, and digital marketing."
    },
    {
      icon: BarChart3,
      title: "Financial Independence",
      description: "Provides pathways to financial success through scalable digital businesses and innovative solutions."
    },
    {
      icon: Brain,
      title: "21st Century Skills",
      description: "Develops critical thinking, digital literacy, and entrepreneurial mindset essential for future success."
    }
  ];

  const businessImpact = [
    "Enhanced operational efficiency through automation and AI",
    "Access to global markets through digital platforms",
    "Reduced costs and improved profit margins",
    "Better customer insights through data analytics",
    "Sustainable competitive advantage through innovation",
    "Ability to adapt quickly to market changes"
  ];

  const technologyDrivers = [
    "Artificial Intelligence and Machine Learning",
    "Cloud Computing and Edge Technologies",
    "Internet of Things (IoT) and Smart Devices",
    "Blockchain and Cryptocurrency",
    "Augmented and Virtual Reality",
    "5G Networks and Connectivity",
    "Renewable Energy Technologies",
    "Biotechnology and HealthTech"
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Why Technopreneurship Matters</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding the critical role of technology-driven entrepreneurship in shaping our economic, 
              social, and technological future.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Era Importance */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Essential in the Modern Era</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technopreneurship has become a cornerstone of modern economic development and social progress.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modernImportance.map((item, index) => (
                <Card key={index} className="card-hover border-0 bg-card shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Students and Youth */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Crucial for Students & Youth</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why young people should embrace technopreneurship for their future success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {youthBenefits.map((benefit, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft text-center">
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

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-center">Future-Ready Skills</h3>
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Technopreneurship education equips students with essential skills for the digital economy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Digital Literacy", "Problem-Solving", "Innovation Thinking",
                  "Data Analysis", "Project Management", "Global Mindset",
                  "Risk Assessment", "Technology Integration", "Leadership Skills"
                ].map((skill, index) => (
                  <div key={index} className="bg-primary/5 rounded-lg p-3 text-center">
                    <span className="font-medium text-primary">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Transforming Business Landscape</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technopreneurship is revolutionizing how businesses operate, compete, and create value 
                in the digital age. Organizations that embrace technological innovation gain significant advantages.
              </p>
              
              <div className="space-y-3">
                {businessImpact.map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Key Business Benefits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Efficiency Increase</span>
                    <span className="text-primary font-bold">40-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cost Reduction</span>
                    <span className="text-primary font-bold">20-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Market Reach Expansion</span>
                    <span className="text-primary font-bold">5-10x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Innovation Speed</span>
                    <span className="text-primary font-bold">3-5x Faster</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Drivers */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Driving Technologies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key technologies that are shaping the future of technopreneurship and business innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technologyDrivers.map((tech, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm leading-tight">{tech}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">The Future is Now</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technopreneurship isn't just about the future—it's about understanding and shaping the present. 
              As technology continues to evolve at an unprecedented pace, those who master the intersection 
              of technology and entrepreneurship will lead the way in creating solutions for tomorrow's challenges.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground">
                Whether you're a student, professional, or aspiring entrepreneur, understanding technopreneurship 
                is essential for success in the digital economy. Start learning, start innovating, start creating the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Importance;