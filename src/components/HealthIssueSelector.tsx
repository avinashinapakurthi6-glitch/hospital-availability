import React, { useState } from 'react';
import { HealthIssue, healthIssues, getHealthIssuesByCategory } from '../data/healthIssues';
import { Search, AlertTriangle, Clock, Activity, Stethoscope } from 'lucide-react';

interface HealthIssueSelectorProps {
  onHealthIssueSelect: (healthIssue: HealthIssue) => void;
}

export const HealthIssueSelector: React.FC<HealthIssueSelectorProps> = ({ onHealthIssueSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Issues', icon: Activity },
    { id: 'emergency', name: 'Emergency', icon: AlertTriangle },
    { id: 'chronic', name: 'Chronic Conditions', icon: Clock },
    { id: 'general', name: 'General Health', icon: Stethoscope },
    { id: 'specialty', name: 'Specialty Care', icon: Activity }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'urgent':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'routine':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredIssues = healthIssues.filter(issue => {
    const matchesCategory = selectedCategory === 'all' || issue.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      issue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.symptoms.some(symptom => symptom.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What health issue are you experiencing?
        </h2>
        <p className="text-gray-600">
          Select your health concern to find the most suitable hospitals and get immediate guidance
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by symptoms or condition..."
          className="input-field pl-12"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Health Issues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIssues.map(issue => (
          <div
            key={issue.id}
            onClick={() => onHealthIssueSelect(issue)}
            className="card cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{issue.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{issue.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(issue.urgency)}`}>
                    {issue.urgency.charAt(0).toUpperCase() + issue.urgency.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{issue.description}</p>
            
            <div className="mb-3">
              <h4 className="text-xs font-medium text-gray-700 mb-1">Common Symptoms:</h4>
              <div className="flex flex-wrap gap-1">
                {issue.symptoms.slice(0, 3).map((symptom, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {symptom}
                  </span>
                ))}
                {issue.symptoms.length > 3 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    +{issue.symptoms.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs text-gray-500">
              <strong>Specialties needed:</strong> {issue.requiredSpecialties.slice(0, 2).join(', ')}
              {issue.requiredSpecialties.length > 2 && ` +${issue.requiredSpecialties.length - 2} more`}
            </div>
          </div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="text-center py-12">
          <Stethoscope className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No health issues found</h3>
          <p className="text-gray-600">
            Try adjusting your search or category filter to find relevant health issues.
          </p>
        </div>
      )}
    </div>
  );
};