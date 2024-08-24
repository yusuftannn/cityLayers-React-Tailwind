import React from "react";

const Button = ({ label, variant, onClick }) => {
  const baseStyles = "px-2 py-1 font-semibold rounded transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    remove: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300",
    details: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring focus:ring-blue-300",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
