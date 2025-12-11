import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: 'green' | 'yellow' | 'red' | 'blue';
  subtitle?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  subtitle 
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'yellow':
        return 'bg-yellow-50 text-yellow-600 border-yellow-200';
      case 'red':
        return 'bg-red-50 text-red-600 border-red-200';
      case 'blue':
        return 'bg-blue-50 text-blue-600 border-blue-200';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg border ${getColorClasses()}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};