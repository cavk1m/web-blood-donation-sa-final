import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
};