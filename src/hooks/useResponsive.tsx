// Mobile Navigation Hook
import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, screenSize };
};

// Responsive Image Component
export const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '',
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`image-responsive ${className}`}
      sizes={sizes}
      loading="lazy"
    />
  );
};

// Touch-friendly Button Component
export const TouchButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  fullWidth = false,
  className = ''
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}) => {
  const baseClasses = 'touch-target font-medium rounded-xl transition-all duration-300 focus-ring';
  const variantClasses = {
    primary: 'bg-terracotta-500 dark:bg-terracotta-400 text-white hover:bg-terracotta-600 dark:hover:bg-terracotta-500',
    secondary: 'bg-sage-100 dark:bg-sage-800 text-sage-700 dark:text-sage-300 hover:bg-sage-200 dark:hover:bg-sage-700',
    outline: 'border-2 border-terracotta-500 dark:border-terracotta-400 text-terracotta-600 dark:text-terracotta-400 hover:bg-terracotta-500 dark:hover:bg-terracotta-400 hover:text-white'
  };
  
  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Responsive Container Component
export const ResponsiveContainer = ({ 
  children, 
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container-responsive ${className}`}>
      {children}
    </div>
  );
};

// Responsive Grid Component
export const ResponsiveGrid = ({ 
  children, 
  columns = 4,
  gap = 'md',
  className = ''
}: {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const gapClasses = {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6 lg:gap-8', 
    lg: 'gap-6 sm:gap-8 lg:gap-12'
  };

  return (
    <div className={`grid-responsive-${columns} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};