import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Users, Heart, Code, Palette, Coffee, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Full Stack Developer",
      icon: Code,
      contribution: "Built the entire platform architecture",
      color: "from-blue-500 to-cyan-500",
      initials: "AS",
      followers: "324",
      posts: "52"
    },
    {
      name: "Priya Patel", 
      role: "UI/UX Designer",
      icon: Palette,
      contribution: "Designed the beautiful user experience",
      color: "from-purple-500 to-pink-500",
      initials: "PP",
      followers: "287",
      posts: "41"
    },
    {
      name: "Rohan Kumar",
      role: "Backend Engineer", 
      icon: Coffee,
      contribution: "Crafted robust server infrastructure",
      color: "from-green-500 to-emerald-500",
      initials: "RK",
      followers: "195",
      posts: "38"
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager",
      icon: Users,
      contribution: "Orchestrated product vision & strategy",
      color: "from-orange-500 to-red-500",
      initials: "SR",
      followers: "412",
      posts: "67"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sage-50 to-terracotta-50 dark:from-background dark:via-card dark:to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta-200 dark:bg-terracotta-800/30 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sage-200 dark:bg-sage-800/30 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-earth-200 dark:bg-earth-800/30 rounded-full opacity-15 animate-bounce delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-cream-300 dark:bg-cream-800/30 rounded-full opacity-25 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* 404 Section */}
        <div className="text-center mb-16">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-terracotta-500 via-earth-600 to-sage-600 dark:from-terracotta-400 dark:via-earth-400 dark:to-sage-400 bg-clip-text text-transparent animate-scale-in">
              404
            </h1>
          </div>
          
          <div className="mb-8 animate-fade-in delay-300">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 dark:text-earth-200 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-earth-600 dark:text-earth-300 max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off like a curious cow in our pasture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="border-sage-300 dark:border-sage-600 text-sage-700 dark:text-sage-300 hover:bg-sage-50 dark:hover:bg-sage-800 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              size="lg"
              className="bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Return Home
            </Button>
          </div>
        </div>

        {/* Enhanced Credits Section */}
        <div className="max-w-7xl mx-auto animate-fade-in delay-700">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-earth-800 dark:text-earth-200 mb-6">
              Meet Our Amazing Team
            </h3>
            <p className="text-lg text-earth-600 dark:text-earth-300 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals who crafted this organic dairy experience with love and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card 
                  key={member.name}
                  className="group relative overflow-hidden bg-white/90 dark:bg-card/90 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl animate-fade-in border border-sage-200 dark:border-sage-700"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="relative p-8 text-center">
                    {/* Avatar Section */}
                    <div className="relative mb-6">
                      <Avatar className="w-24 h-24 mx-auto ring-4 ring-white dark:ring-card shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage src="/placeholder.svg" alt={member.name} />
                        <AvatarFallback className={`text-white text-xl font-bold bg-gradient-to-br ${member.color}`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Verified badge */}
                      <div className="absolute -bottom-1 -right-1">
                        <div className="bg-white dark:bg-card rounded-full p-1 shadow-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Name and Role */}
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-earth-800 dark:text-earth-200 mb-1 group-hover:text-earth-900 dark:group-hover:text-earth-100 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-sm font-semibold text-terracotta-600 dark:text-terracotta-400 uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Contribution */}
                    <p className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed mb-6 group-hover:text-earth-700 dark:group-hover:text-earth-200 transition-colors">
                      {member.contribution}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-center items-center gap-6 mb-6 text-sm text-earth-500 dark:text-earth-400">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">{member.followers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span className="font-medium">{member.posts}</span>
                      </div>
                    </div>
                    
                    {/* Follow Button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-2 border-sage-200 dark:border-sage-600 text-sage-700 dark:text-sage-300 hover:bg-sage-50 dark:hover:bg-sage-800 hover:border-sage-300 dark:hover:border-sage-500 transition-all duration-300 rounded-xl font-semibold group-hover:scale-105"
                    >
                      Follow +
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16 animate-fade-in delay-1000">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-full shadow-lg border border-sage-200 dark:border-sage-700">
              <span className="text-earth-600 dark:text-earth-300 text-sm font-medium">
                Made with
              </span>
              <Heart className="h-4 w-4 text-terracotta-500 dark:text-terracotta-400 animate-pulse" />
              <span className="text-earth-600 dark:text-earth-300 text-sm font-medium">
                and lots of organic milk in India
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;