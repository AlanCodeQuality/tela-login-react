import React from 'react';
import { cn } from '../../lib/utils';  

// Cria o componente Button com suporte para forwardRef
const Button = React.forwardRef(({ 
  className,  
  variant = 'default',  
  size = 'default',  
  ...props 
}, ref) => {
 
  // Define os estilos básicos que serão aplicados em todos os botões
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  // Estilos para os diferentes tipos (variantes) de botões
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",  
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",  
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",  
  };

  // Estilos para os diferentes tamanhos de botão
  const sizeStyles = {
    default: "h-10 px-4 py-2",  
    sm: "h-9 rounded-md px-3",  
    lg: "h-11 rounded-md px-8",  
  };

  return (
    
    // Cria o elemento <button>, aplicando as classes dinamicamente
    <button
      ref={ref}  
      className={cn(
        baseStyles,  
        variantStyles[variant],  
        sizeStyles[size],  
        className  
      )}
      {...props}  // Passa quaisquer outras propriedades para o botão, como onClick ou texto
    />
  );
});

// Define o nome do componente, útil para depuração
Button.displayName = 'Button';

export default Button;
