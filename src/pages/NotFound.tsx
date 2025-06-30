
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Users, Heart, Code, Palette, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Patel", 
      role: "UI/UX Designer",
      icon: Palette,
      contribution: "Designed the beautiful user experience",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Rohan Kumar",
      role: "Backend Engineer", 
      icon: Coffee,
      contribution: "Crafted robust server infrastructure",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Sneha Reddy",
      role: "Product Manager",
      icon: Users,
      contribution: "Orchestrated product vision & strategy",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sage-50 to-terracotta-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sage-200 rounded-full opacity-30 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-earth-200 rounded-full opacity-15 animate-bounce delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-cream-300 rounded-full opacity-25 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* 404 Section */}
        <div className="text-center mb-16">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-terracotta-500 via-earth-600 to-sage-600 bg-clip-text text-transparent animate-scale-in">
              404
            </h1>
          </div>
          
          <div className="mb-8 animate-fade-in delay-300">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-earth-600 max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off like a curious cow in our pasture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="border-sage-300 text-sage-700 hover:bg-sage-50 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              size="lg"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Return Home
            </Button>
          </div>
        </div>

        {/* Credits Section */}
        <div className="max-w-6xl mx-auto animate-fade-in delay-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-earth-800 mb-4">
              Meet Our Amazing Team
            </h3>
            <p className="text-earth-600 max-w-2xl mx-auto">
              The passionate individuals who crafted this organic dairy experience with love and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card 
                  key={member.name}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-sage-200 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${member.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-earth-800 mb-1">
                      {member.name}
                    </h4>
                    
                    <p className="text-sm font-medium text-terracotta-600 mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-xs text-earth-600 leading-relaxed">
                      {member.contribution}
                    </p>
                    
                    <div className="mt-4 flex justify-center">
                      <Heart className="h-4 w-4 text-terracotta-400 group-hover:text-terracotta-500 group-hover:scale-125 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-in delay-1000">
            <p className="text-earth-600 text-sm">
              Made with <Heart className="inline h-4 w-4 text-terracotta-500 mx-1" /> and lots of organic milk in India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
