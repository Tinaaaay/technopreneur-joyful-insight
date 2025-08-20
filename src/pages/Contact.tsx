import { Mail, MessageCircle, Send, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me a message for inquiries, suggestions, or collaborations",
      contact: "nisurtadokristinejoy@gmail.com",
      action: "Send Email",
      link: "mailto:nisurtadokristinejoy@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "Facebook",
      description: "Connect with me on Facebook for updates and discussions",
      contact: "Kristine Joy Nisurtado",
      action: "Visit Facebook",
      link: "https://facebook.com/kristine.joy.nisurtado"
    }
  ];

  const inquiryTypes = [
    {
      title: "Educational Collaboration",
      description: "Partner with schools, universities, or educational institutions"
    },
    {
      title: "Content Suggestions",
      description: "Share ideas for improving or expanding the website content"
    },
    {
      title: "Research Partnerships",
      description: "Collaborate on technopreneurship research projects"
    },
    {
      title: "Speaking Opportunities",
      description: "Invite for talks, workshops, or educational events"
    },
    {
      title: "Student Inquiries",
      description: "Questions about technopreneurship for academic purposes"
    },
    {
      title: "General Feedback",
      description: "Share your thoughts about the website and its resources"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about technopreneurship? Want to collaborate on educational initiatives? 
              I'd love to hear from you and connect with fellow educators and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Contact Information</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Reach out through any of these channels. I'm always excited to connect with people 
                passionate about education and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-hover border-0 bg-card shadow-soft">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{method.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="font-medium text-lg">{method.contact}</p>
                    </div>
                    <Button asChild className="btn-primary w-full">
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.action} <Send className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Contact Me About */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">What Can We Discuss?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I welcome conversations about various topics related to technopreneurship, education, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inquiryTypes.map((type, index) => (
                <Card key={index} className="border-0 bg-background shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response Information */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Let's Start a Conversation</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm committed to responding to all inquiries thoughtfully and promptly. 
                  Whether you're a student with questions, an educator looking to collaborate, 
                  or someone interested in technopreneurship, I welcome your message.
                </p>
                <p>
                  When reaching out, please feel free to include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Your background and current role</li>
                  <li>• The specific topic you'd like to discuss</li>
                  <li>• How you discovered this website</li>
                  <li>• Any particular questions or collaboration ideas</li>
                </ul>
              </div>
            </div>
            
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5 shadow-large">
              <CardHeader className="text-center">
                <Users className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Building Community</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  My goal is to build a community of learners, educators, and innovators 
                  who are passionate about technopreneurship and its potential to create positive change.
                </p>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-center">Response Time</h4>
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond to emails within 24-48 hours during weekdays. 
                    Thank you for your patience!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Connect?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't hesitate to reach out! Whether you have a simple question or a complex collaboration idea, 
              I'm here to help and learn together. Let's explore how we can advance technopreneurship education and inspire the next generation of innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <a href="mailto:nisurtadokristinejoy@gmail.com">
                  Send Email <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://facebook.com/kristine.joy.nisurtado" target="_blank" rel="noopener noreferrer">
                  Facebook Message <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;