import { Book, ExternalLink, Globe, GraduationCap, Newspaper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const References = () => {
  const academicSources = [
    {
      title: "Entrepreneurship and Small Business Management",
      authors: "Scarborough, N. M., & Cornwall, J. R.",
      year: "2019",
      publisher: "Pearson",
      description: "Comprehensive guide to entrepreneurship principles and small business management practices."
    },
    {
      title: "Technology Entrepreneurship: Creating, Capturing, and Protecting Value",
      authors: "Bailetti, T.",
      year: "2020",
      publisher: "Academic Press",
      description: "In-depth analysis of technology-based entrepreneurship and value creation strategies."
    },
    {
      title: "Digital Entrepreneurship: Impact on Business and Society",
      authors: "Kraus, S., Palmer, C., Kailer, N., Kallinger, F. L., & Spitzer, J.",
      year: "2019",
      publisher: "Springer",
      description: "Examination of digital transformation's effect on entrepreneurial practices and society."
    },
    {
      title: "Innovation and Entrepreneurship",
      authors: "Drucker, P. F.",
      year: "2015",
      publisher: "Routledge",
      description: "Classic work on innovation-driven entrepreneurship and systematic innovation practices."
    }
  ];

  const webSources = [
    {
      title: "Harvard Business Review - Entrepreneurship",
      url: "https://hbr.org/topic/entrepreneurship",
      description: "Leading business publication's insights on entrepreneurship trends and case studies."
    },
    {
      title: "MIT Technology Review",
      url: "https://www.technologyreview.com/",
      description: "Technology news and analysis covering innovation and emerging technologies."
    },
    {
      title: "TechCrunch - Startups",
      url: "https://techcrunch.com/category/startups/",
      description: "Technology startup news, funding announcements, and industry trends."
    },
    {
      title: "World Economic Forum - Fourth Industrial Revolution",
      url: "https://www.weforum.org/focus/fourth-industrial-revolution/",
      description: "Global perspective on technological transformation and its economic impact."
    },
    {
      title: "McKinsey & Company - Digital",
      url: "https://www.mckinsey.com/business-functions/mckinsey-digital",
      description: "Digital transformation insights and business strategy recommendations."
    }
  ];

  const organizationalSources = [
    {
      title: "Department of Trade and Industry Philippines",
      url: "https://www.dti.gov.ph/",
      description: "Philippine government initiatives supporting entrepreneurship and business development."
    },
    {
      title: "Asian Development Bank - Technology",
      url: "https://www.adb.org/what-we-do/sectors/information-communication-technology",
      description: "Regional development bank's technology and innovation programs in Asia."
    },
    {
      title: "ASEAN Innovation Network",
      url: "https://www.asean.org/our-communities/economic-community/innovation/",
      description: "Southeast Asian regional cooperation on innovation and technology development."
    },
    {
      title: "Philippine Software Industry Association",
      url: "https://psia.org.ph/",
      description: "Local IT industry association promoting software development and digital innovation."
    }
  ];

  const researchJournals = [
    {
      title: "Journal of Business Venturing",
      publisher: "Elsevier",
      description: "Peer-reviewed research on entrepreneurship, innovation, and venture creation."
    },
    {
      title: "Technological Forecasting and Social Change",
      publisher: "Elsevier",
      description: "Academic journal focusing on technology's impact on society and business."
    },
    {
      title: "International Journal of Technology Management",
      publisher: "Inderscience",
      description: "Research on technology management, innovation, and strategic planning."
    },
    {
      title: "Small Business Economics",
      publisher: "Springer",
      description: "Academic research on small business development and entrepreneurial economics."
    }
  ];

  const caseStudySourcesData = [
    {
      title: "Harvard Business School Case Studies",
      description: "Real-world business cases studying successful technology companies and startups."
    },
    {
      title: "Stanford Graduate School of Business Cases",
      description: "Academic case studies on entrepreneurship and technology venture development."
    },
    {
      title: "Company Annual Reports and SEC Filings",
      description: "Official corporate documents providing financial and strategic information."
    },
    {
      title: "Founder Interviews and Biographies",
      description: "First-person accounts and biographical materials from successful technopreneurs."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">References & Sources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive list of academic sources, research materials, and authoritative references 
              used in creating this educational resource on technopreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Sources */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Book className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Academic Publications</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scholarly books and academic publications that provide the theoretical foundation for this content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicSources.map((source, index) => (
                <Card key={index} className="border-0 bg-card shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{source.title}</CardTitle>
                    <CardDescription>
                      <span className="font-medium">{source.authors}</span> ({source.year})
                      <br />
                      <span className="italic">{source.publisher}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Sources */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Globe className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Online Resources</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Reputable online publications and websites providing current insights on technology and entrepreneurship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {webSources.map((source, index) => (
                <Card key={index} className="card-hover border-0 bg-background shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">{source.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm break-all">{source.url}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Sources */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Institutional Sources</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Government agencies, international organizations, and industry associations providing authoritative data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {organizationalSources.map((source, index) => (
                <Card key={index} className="card-hover border-0 bg-card shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">{source.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm break-all">{source.url}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                    <Button asChild variant="outline" size="sm">
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Journals */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Newspaper className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Academic Journals</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Peer-reviewed academic journals providing research-based insights on entrepreneurship and technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchJournals.map((journal, index) => (
                <Card key={index} className="border-0 bg-background shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">{journal.title}</CardTitle>
                    <CardDescription>
                      <span className="font-medium">Publisher:</span> {journal.publisher}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{journal.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Sources */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Case Study Sources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Primary and secondary sources used for researching successful technopreneur examples and case studies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudySourcesData.map((source, index) => (
                <Card key={index} className="border-0 bg-card shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{source.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Information */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Citation & Usage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Information about citing this educational resource and acknowledgments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 bg-background shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">How to Cite This Website</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-mono">
                      Nisurtado, K. J. (2024). <em>Technopreneurship Educational Website</em>. 
                      Retrieved from [Website URL]
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When using content from this website for academic or educational purposes, 
                    please provide appropriate attribution using the citation format above.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-background shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">Research Methodology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This educational resource was developed through comprehensive research using 
                    a combination of academic literature review, industry analysis, case study 
                    examination, and synthesis of current trends in technology entrepreneurship.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Research Standards</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Multiple source verification</li>
                      <li>• Academic credibility assessment</li>
                      <li>• Current data prioritization</li>
                      <li>• Balanced perspective inclusion</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-muted/20 shadow-soft">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Educational Use Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                This website is created for educational purposes to promote understanding of technopreneurship 
                concepts and practices. All information is compiled from publicly available sources and is 
                intended to supplement formal education. While every effort has been made to ensure accuracy, 
                readers are encouraged to verify information and consult primary sources for critical applications. 
                The content reflects the current understanding of technopreneurship as of the publication date 
                and may evolve as the field continues to develop.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default References;