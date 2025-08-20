import { Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Contact Information</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with Kristine Joy Nisurtado for questions about technopreneurship 
              or educational collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <Card className="card-hover border-0 bg-card shadow-soft">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="font-medium text-lg text-primary">
                    nisurtadokristinejoy@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="card-hover border-0 bg-card shadow-soft">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Facebook</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="font-medium text-lg text-primary">
                    Kristine Joy Nisurtado
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;