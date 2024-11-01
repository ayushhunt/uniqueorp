import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
  }
  
  interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
  }
  
  // Card component
  const Card: React.FC<CardProps> = ({ className = '', ...props }) => (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
  );
  
  // CardHeader component
  const CardHeader: React.FC<CardProps> = ({ className = '', ...props }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  );
  
  // CardTitle component
  const CardTitle: React.FC<CardTitleProps> = ({ className = '', ...props }) => (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
  );
  
  // CardDescription component
  const CardDescription: React.FC<CardProps> = ({ className = '', ...props }) => (
    <p className={`text-sm text-muted-foreground ${className}`} {...props} />
  );
  
  // CardContent component
  const CardContent: React.FC<CardProps> = ({ className = '', ...props }) => (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  );
  
  export { Card, CardHeader, CardTitle, CardDescription, CardContent };
  