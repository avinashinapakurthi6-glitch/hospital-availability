import React from 'react';
import { Filter, Building2, Heart, Users } from 'lucide-react';

interface FilterBarProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  emergencyOnly: boolean;
  onEmergencyToggle: (emergency: boolean) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedType,
  onTypeChange,
  selectedSpecialty,
  onSpecialtyChange,
  emergencyOnly,
  onEmergencyToggle
}) => {
  const hospitalTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'government', label: 'Government' },
    { value: 'private', label: 'Private' },
    { value: 'charitable', label: 'Charitable' }
  ];

  const specialties = [
    'All Specialties',
    'Emergency',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Oncology',
    'Pediatrics',
    'General Medicine',
    'Surgery'
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="font-medium text-gray-900">Filter Hospitals</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 className="w-4 h-4 inline mr-1" />
            Hospital Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          >
            {hospitalTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Heart className="w-4 h-4 inline mr-1" />
            Specialty
          </label>
          <select
            value={selectedSpecialty}
            onChange={(e) => onSpecialtyChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Emergency Services
          </label>
          <div className="flex items-center space-x-3 pt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={emergencyOnly}
                onChange={(e) => onEmergencyToggle(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">24/7 Emergency Only</span>
            </label>
          </div>
        </div>

        <div className="flex items-end">
          <button
            onClick={() => {
              onTypeChange('all');
              onSpecialtyChange('All Specialties');
              onEmergencyToggle(false);
            }}
            className="btn-secondary w-full"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};