'use client';
import React from 'react';

type ThemedButtonProps = {
  children: React.ReactNode; // Text or content inside the ThemedButton
  className?: string; // Additional styles
  href?: string; // URL for the button to act as a link
  target?: "_blank" | "_self" | "_parent" | "_top"; // Target attribute for links
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  children,
  className = "",
  href,
  target = "_self",
}) => {
  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`inline-block px-5 py-3 m-4 rounded-sm font-medium text-white hover:text-[rgb(219,13,13)] bg-[rgb(219,13,13)] hover:bg-white hover:border-[rgb(219,13,13)] border-transparent border-2 transition-all duration-300 ${className}`}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      className={`px-5 py-3 m-4 rounded-sm font-medium text-white hover:text-[rgb(219,13,13)] bg-[rgb(219,13,13)] hover:bg-white hover:border-[rgb(219,13,13)] border-transparent border-2 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
