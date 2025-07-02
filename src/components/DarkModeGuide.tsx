import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink, Palette, Shield, Eye } from 'lucide-react';

export const DarkModeGuide = () => {
  const contrastTools = [
    {
      name: "WebAIM Contrast Checker",
      url: "https://webaim.org/resources/contrastchecker/",
      description: "Industry standard for WCAG compliance"
    },
    {
      name: "Coolors Contrast Checker", 
      url: "https://coolors.co/contrast-checker",
      description: "Visual and easy to use"
    },
    {
      name: "Colour Contrast Analyser",
      url: "https://www.tpgi.com/color-contrast-checker/",
      description: "Desktop app with advanced features"
    }
  ];

  const features = [
    "System preference detection",
    "Smooth 300ms transitions",
    "Brand-adapted color scheme",
    "Local storage persistence", 
    "Accessible contrast ratios",
    "Mobile browser theme-color"
  ];

  const brandColors = {
    light: {
      background: "hsl(32 20% 97%)", // cream-50
      foreground: "hsl(30 25% 15%)", // earth-800
      primary: "hsl(14 65% 45%)", // terracotta-500
      accent: "hsl(120 6% 50%)" // sage-500
    },
    dark: {
      background: "hsl(30 15% 8%)", // dark earth
      foreground: "hsl(32 20% 95%)", // light cream  
      primary: "hsl(14 75% 55%)", // bright terracotta
      accent: "hsl(120 8% 70%)" // light sage
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Dark Mode Implementation Guide
          </CardTitle>
          <CardDescription>
            Your website now has a complete dark mode system that preserves your organic dairy brand identity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Implemented Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="justify-start">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Color Scheme */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Palette className="h-4 w-4 text-blue-600" />
              Adapted Brand Colors
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Light Mode</h4>
                {Object.entries(brandColors.light).map(([key, color]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm font-mono">{key}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Dark Mode</h4>
                {Object.entries(brandColors.dark).map(([key, color]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm font-mono">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contrast Tools */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4 text-purple-600" />
              Contrast & Accessibility Tools
            </h3>
            <div className="space-y-3">
              {contrastTools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Notes */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              Implementation Notes
            </h3>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>• Colors use HSL format for better manipulation</p>
              <p>• Smooth 300ms transitions for theme changes</p>
              <p>• Reduced motion support for accessibility</p>
              <p>• Theme preference saved in localStorage</p>
              <p>• Meta theme-color updates for mobile browsers</p>
              <p>• System preference detection with manual override</p>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};