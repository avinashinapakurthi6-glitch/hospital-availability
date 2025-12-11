import React from 'react';
import { HealthIssue } from '../data/healthIssues';
import { AlertTriangle, Clock, Shield, CheckCircle, Phone, ArrowLeft } from 'lucide-react';

interface HealthGuidanceProps {
  healthIssue: HealthIssue;
  onBack: () => void;
}

export const HealthGuidance: React.FC<HealthGuidanceProps> = ({ healthIssue, onBack }) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'urgent':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'moderate':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'routine':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'immediate':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'urgent':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'moderate':
        return <Shield className="w-5 h-5 text-yellow-600" />;
      case 'routine':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const emergencyNumbers = [
    { name: 'National Emergency', number: '112' },
    { name: 'Ambulance', number: '108' },
    { name: 'Medical Emergency', number: '102' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to health issues</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-start space-x-4 mb-4">
          <span className="text-3xl">{healthIssue.icon}</span>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{healthIssue.name}</h1>
            <p className="text-gray-600 mb-4">{healthIssue.description}</p>
            <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg border ${getUrgencyColor(healthIssue.urgency)}`}>
              {getUrgencyIcon(healthIssue.urgency)}
              <span className="font-medium">
                {healthIssue.urgency.charAt(0).toUpperCase() + healthIssue.urgency.slice(1)} Care Needed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Numbers - Show for immediate/urgent cases */}
      {(healthIssue.urgency === 'immediate' || healthIssue.urgency === 'urgent') && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Phone className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-red-800">Emergency Contact Numbers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {emergencyNumbers.map((contact, index) => (
              <a
                key={index}
                href={`tel:${contact.number}`}
                className="flex items-center justify-between bg-white p-3 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900">{contact.name}</span>
                <span className="text-lg font-bold text-red-600">{contact.number}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Immediate Remedies */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Immediate Actions</h3>
          </div>
          <ul className="space-y-3">
            {healthIssue.immediateRemedies.map((remedy, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-700">{remedy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* When to Seek Help */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg font-semibold text-gray-900">When to Seek Medical Help</h3>
          </div>
          <ul className="space-y-2">
            {healthIssue.whenToSeekHelp.map((condition, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                <span className="text-gray-700">{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Common Symptoms</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {healthIssue.symptoms.map((symptom, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>

        {/* Preventive Measures */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Prevention Tips</h3>
          </div>
          <ul className="space-y-2">
            {healthIssue.preventiveMeasures.map((measure, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="flex-shrink-0 w-4 h-4 text-green-500 mt-0.5" />
                <span className="text-gray-700">{measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Required Specialties */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Specialties You May Need</h3>
        <div className="flex flex-wrap gap-2">
          {healthIssue.requiredSpecialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-primary-100 text-primary-800 px-3 py-2 rounded-lg text-sm font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-3">
          When searching for hospitals, we'll prioritize facilities that have these specialties available.
        </p>
      </div>
    </div>
  );
};