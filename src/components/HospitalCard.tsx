import React from 'react';
import { Hospital, getAvailabilityStatus } from '../data/hospitals';
import { MapPin, Phone, Star, Bed, AlertCircle, CheckCircle, Clock, Navigation, Shield, PhoneCall } from 'lucide-react';

interface HospitalCardProps {
  hospital: Hospital;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const status = getAvailabilityStatus(hospital.availableBeds, hospital.totalBeds);
  
  const getStatusIcon = () => {
    switch (status) {
      case 'available':
        return <CheckCircle className="w-4 h-4" />;
      case 'limited':
        return <Clock className="w-4 h-4" />;
      case 'full':
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'available':
        return 'Beds Available';
      case 'limited':
        return 'Limited Availability';
      case 'full':
        return 'Nearly Full';
    }
  };

  const getTypeColor = () => {
    switch (hospital.type) {
      case 'government':
        return 'bg-blue-100 text-blue-800';
      case 'private':
        return 'bg-purple-100 text-purple-800';
      case 'charitable':
        return 'bg-green-100 text-green-800';
    }
  };

  const handleCall = () => {
    window.open(`tel:${hospital.phone}`, '_self');
  };

  const handleGetDirections = () => {
    const query = encodeURIComponent(`${hospital.name}, ${hospital.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };
  return (
    <div className="card hover:shadow-lg transition-all duration-300 animate-slide-up">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{hospital.name}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor()}`}>
              {hospital.type.charAt(0).toUpperCase() + hospital.type.slice(1)}
            </span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{hospital.rating}</span>
            </div>
          </div>
        </div>
        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium status-${status}`}>
          {getStatusIcon()}
          <span>{getStatusText()}</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-2">
          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-600">
            <div className="font-medium">{hospital.location.area} - {hospital.location.pincode}</div>
            <div>{hospital.address}</div>
            {hospital.location.landmark && (
              <div className="text-xs text-gray-500 mt-1">{hospital.location.landmark}</div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm text-gray-600">{hospital.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCall}
              className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium hover:bg-green-200 transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Call</span>
            </button>
            <button
              onClick={handleGetDirections}
              className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
            >
              <Navigation className="w-3 h-3" />
              <span>Directions</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Bed className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">{hospital.availableBeds}</span> of {hospital.totalBeds} beds available
          </span>
        </div>

        {hospital.arogyasriEmpanelled && (
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm text-green-700 font-medium">Aarogyasri Empanelled</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Bed Availability</span>
          <span>{Math.round((hospital.availableBeds / hospital.totalBeds) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              status === 'available' ? 'bg-green-500' : 
              status === 'limited' ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${(hospital.availableBeds / hospital.totalBeds) * 100}%` }}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Specialties</span>
          <div className="flex items-center space-x-2">
            {hospital.arogyasriEmpanelled && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Aarogyasri
              </span>
            )}
            {hospital.emergencyServices && (
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                24/7 Emergency
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {hospital.specialties.slice(0, 4).map((specialty, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {specialty}
            </span>
          ))}
          {hospital.specialties.length > 4 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{hospital.specialties.length - 4} more
            </span>
          )}
        </div>
        
        {hospital.arogyasriEmpanelled && (
          <div className="mt-3 p-2 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-1">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Aarogyasri Benefits</span>
            </div>
            <p className="text-xs text-green-700">
              Free treatment available for eligible patients under Telangana/Andhra Pradesh Aarogyasri scheme. 
              Cashless treatment for covered procedures and conditions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};