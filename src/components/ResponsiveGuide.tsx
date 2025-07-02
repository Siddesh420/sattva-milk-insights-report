import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Monitor, Smartphone, Tablet, Eye, Target, Zap } from 'lucide-react';

export const ResponsiveDesignGuide = () => {
  const implementations = [
    {
      title: "Mobile-First Typography",
      description: "Responsive text scaling with semantic classes",
      code: `// Usage examples:
.text-responsive-4xl  // 4xl on lg, 5xl on sm, 6xl base
.text-responsive-lg   // lg on mobile, xl on tablet+
.space-responsive-lg  // y-6 on mobile, y-8 on tablet+`
    },
    {
      title: "Touch-Optimized Targets", 
      description: "44px minimum touch targets for mobile usability",
      code: `.touch-target {
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}`
    },
    {
      title: "Responsive Grids",
      description: "Mobile-first grid system with breakpoint adaptation",
      code: `// Utility classes:
.grid-responsive-2  // 1 col mobile, 2 cols tablet+
.grid-responsive-4  // 1 col mobile, 2 tablet, 3 lg, 4 xl`
    },
    {
      title: "Safe Area Support",
      description: "iPhone notch and gesture area handling",
      code: `.safe-area-top { padding-top: env(safe-area-inset-top); }
.safe-area-bottom { padding-bottom: env(safe-area-inset-bottom); }`
    }
  ];

  const bestPractices = [
    "✅ Touch targets minimum 44px",
    "✅ Font size minimum 16px (prevent zoom)",
    "✅ Tap spacing minimum 8px",
    "✅ Thumb-friendly navigation zones",
    "✅ Readable contrast ratios (4.5:1+)",
    "✅ Reduced motion support"
  ];

  const testingTools = [
    {
      name: "Chrome DevTools",
      description: "Built-in responsive testing, network throttling",
      url: "chrome://devtools"
    },
    {
      name: "Responsive Design Mode (Firefox)",
      description: "Device simulation with touch events",
      url: "about:devtools"
    },
    {
      name: "BrowserStack",
      description: "Real device testing across platforms",
      url: "https://browserstack.com"
    },
    {
      name: "LambdaTest",
      description: "Cross-browser responsive testing",
      url: "https://lambdatest.com"
    }
  ];

  const breakpoints = {
    sm: "640px",
    md: "768px", 
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Responsive Design Implementation
          </CardTitle>
          <CardDescription>
            Your website now follows mobile-first principles with comprehensive responsive optimizations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Key Implementations */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Key Implementations
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {implementations.map((item, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                    <code>{item.code}</code>
                  </pre>
                </Card>
              ))}
            </div>
          </div>

          {/* Breakpoints */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-blue-600" />
              Tailwind Breakpoints Used
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {Object.entries(breakpoints).map(([key, value]) => (
                <div key={key} className="bg-muted p-3 rounded text-center">
                  <div className="font-mono text-sm font-medium">{key}</div>
                  <div className="text-xs text-muted-foreground">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Usability */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-600" />
              Mobile Usability Best Practices
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {bestPractices.map((practice, index) => (
                <Badge key={index} variant="secondary" className="justify-start p-2">
                  {practice}
                </Badge>
              ))}
            </div>
          </div>

          {/* Testing Tools */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Eye className="h-4 w-4 text-orange-600" />
              Responsive Testing Tools
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {testingTools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{tool.name}</h4>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                  <Zap className="h-4 w-4 text-primary" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Testing Steps */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Tablet className="h-4 w-4 text-green-600" />
              Quick Testing Workflow
            </h3>
            <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
              <p><strong>1. Chrome DevTools (F12):</strong> Click device icon, test all breakpoints</p>
              <p><strong>2. Network Throttling:</strong> Test "Slow 3G" for mobile performance</p>
              <p><strong>3. Touch Simulation:</strong> Enable touch events in DevTools</p>
              <p><strong>4. Real Devices:</strong> Test on actual phones/tablets when possible</p>
              <p><strong>5. Accessibility:</strong> Check contrast, focus states, screen readers</p>
            </div>
          </div>

          {/* Performance Notes */}
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
            <h4 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Performance Optimizations</h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Images use responsive sizing and lazy loading</li>
              <li>• CSS uses mobile-first media queries for efficiency</li>
              <li>• Touch targets meet WCAG 2.1 AA standards</li>
              <li>• Reduced motion preferences are respected</li>
              <li>• Safe area insets handle modern mobile browsers</li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};