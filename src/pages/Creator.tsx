import { GraduationCap, Heart, Star, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Creator = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Pursuing studies with focus on technology and business innovation"
    },
    {
      icon: Target,
      title: "Educational Mission",
      description: "Committed to making technopreneurship knowledge accessible to everyone"
    },
    {
      icon: Heart,
      title: "Passion for Innovation",
      description: "Dedicated to inspiring the next generation of tech entrepreneurs"
    },
    {
      icon: Star,
      title: "Knowledge Sharing",
      description: "Believes in the power of education to transform lives and communities"
    }
  ];

  const goals = [
    "Educate students about the importance of technopreneurship in the modern economy",
    "Inspire young minds to consider technology-driven entrepreneurship as a career path",
    "Provide accessible, comprehensive information about successful technopreneurs",
    "Bridge the gap between academic knowledge and practical business applications",
    "Contribute to building a stronger entrepreneurial ecosystem in the Philippines"
  ];

  const values = [
    {
      title: "Innovation",
      description: "Embracing new ideas and creative solutions to drive progress and positive change."
    },
    {
      title: "Education",
      description: "Believing that knowledge and learning are the foundations of personal and societal growth."
    },
    {
      title: "Accessibility",
      description: "Making information and opportunities available to everyone, regardless of background."
    },
    {
      title: "Excellence",
      description: "Striving for the highest quality in research, content creation, and knowledge sharing."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Meet the Creator</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn about the vision and passion behind this educational initiative on technopreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Kristine Joy Nisurtado</h2>
                <p className="text-xl text-primary font-medium">Creator & Educational Researcher</p>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Hello! I'm Kristine Joy Nisurtado, the creator of this educational website dedicated 
                  to exploring the fascinating world of technopreneurship. As a passionate advocate for 
                  education and innovation, I believe that understanding the intersection of technology 
                  and entrepreneurship is crucial for today's students and young professionals.
                </p>
                <p>
                  My journey into researching technopreneurship began with a simple observation: 
                  while technology is rapidly transforming every aspect of our lives, many students 
                  lack comprehensive resources to understand how they can leverage these changes to 
                  create meaningful careers and businesses.
                </p>
                <p>
                  This website represents my commitment to bridging that knowledge gap by providing 
                  accessible, well-researched, and inspiring content about technopreneurship for 
                  students, educators, and anyone curious about the future of business and technology.
                </p>
              </div>
            </div>
            
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-large">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Focus Area:</span>
                    <span className="text-primary">Educational Technology</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Mission:</span>
                    <span className="text-primary">Knowledge Accessibility</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Goal:</span>
                    <span className="text-primary">Student Empowerment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Vision:</span>
                    <span className="text-primary">Innovation Culture</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Core Strengths</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The qualities and commitments that drive my educational mission.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-base">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goals */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Mission & Goals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The driving purpose behind this educational initiative and what I hope to achieve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 bg-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Educational Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    To democratize access to quality information about technopreneurship and inspire 
                    the next generation of innovators who will shape our technological future.
                  </p>
                  
                  <div className="space-y-3 mt-6">
                    {goals.map((goal, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{goal}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Future Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    I envision a future where every student has access to comprehensive, inspiring 
                    resources about technopreneurship, enabling them to make informed decisions about 
                    their careers and contributions to society.
                  </p>
                  
                  <div className="bg-primary/5 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-center">Long-term Impact Goals</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Increase technopreneurship awareness among Filipino students</li>
                      <li>• Support the growth of local tech startup ecosystem</li>
                      <li>• Foster innovation culture in educational institutions</li>
                      <li>• Create pathways for youth engagement in technology careers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The fundamental principles that guide my approach to education and content creation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 bg-background shadow-soft">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always excited to connect with fellow educators, students, and anyone passionate about 
              technopreneurship and innovation. Whether you have questions, suggestions, or would like to 
              collaborate on educational initiatives, I'd love to hear from you.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Thank You</h3>
              <p className="text-muted-foreground">
                Thank you for visiting this educational resource and for your interest in technopreneurship. 
                Together, we can inspire and empower the next generation of innovators who will create 
                positive change in our world through technology and entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creator;