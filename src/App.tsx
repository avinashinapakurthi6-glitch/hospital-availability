import React, { useState, useMemo, useEffect } from 'react';
import { HealthIssueSelector } from './components/HealthIssueSelector';
import { HealthGuidance } from './components/HealthGuidance';
import { SearchBar } from './components/SearchBar';
import { HospitalCard } from './components/HospitalCard';
import { StatsCard } from './components/StatsCard';
import { FilterBar } from './components/FilterBar';
import { City } from './data/cities';
import { HealthIssue } from './data/healthIssues';
import { Hospital, fetchHospitalsByCity, getHospitalsByCity, generateHospitalData, getAvailabilityStatus } from './data/hospitals';
import { Building2, Bed, AlertTriangle, CheckCircle, MapPin, Activity } from 'lucide-react';

function App() {
  const [selectedHealthIssue, setSelectedHealthIssue] = useState<HealthIssue | null>(null);
  const [showGuidance, setShowGuidance] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCity || !selectedHealthIssue) {
      setHospitals([]);
      return;
    }

    const loadHospitals = async () => {
      setLoading(true);
      try {
        const dbHospitals = await fetchHospitalsByCity(selectedCity.id);

        let cityHospitals = dbHospitals;
        if (cityHospitals.length === 0) {
          cityHospitals = generateHospitalData(selectedCity.id, selectedCity.name, selectedHealthIssue?.requiredSpecialties);
        }

        // Apply filters and prioritize based on health issue
        let filteredHospitals = cityHospitals.filter(hospital => {
          if (selectedType !== 'all' && hospital.type !== selectedType) return false;
          if (selectedSpecialty !== 'All Specialties' && !hospital.specialties.includes(selectedSpecialty)) return false;
          if (emergencyOnly && !hospital.emergencyServices) return false;
          return true;
        });

        // Prioritize hospitals based on health issue requirements
        if (selectedHealthIssue) {
          filteredHospitals = filteredHospitals.sort((a, b) => {
            const aHasSpecialty = selectedHealthIssue.requiredSpecialties.some(specialty =>
              a.specialties.includes(specialty)
            );
            const bHasSpecialty = selectedHealthIssue.requiredSpecialties.some(specialty =>
              b.specialties.includes(specialty)
            );

            if (aHasSpecialty && !bHasSpecialty) return -1;
            if (!aHasSpecialty && bHasSpecialty) return 1;

            if (selectedHealthIssue.urgency === 'immediate') {
              if (a.emergencyServices && !b.emergencyServices) return -1;
              if (!a.emergencyServices && b.emergencyServices) return 1;
            }

            return b.availableBeds - a.availableBeds;
          });
        }

        setHospitals(filteredHospitals);
      } catch (error) {
        console.error('Error loading hospitals:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHospitals();
  }, [selectedCity, selectedHealthIssue, selectedType, selectedSpecialty, emergencyOnly]);

  const stats = useMemo(() => {
    if (hospitals.length === 0) return null;

    const totalBeds = hospitals.reduce((sum, h) => sum + h.totalBeds, 0);
    const availableBeds = hospitals.reduce((sum, h) => sum + h.availableBeds, 0);
    const emergencyHospitals = hospitals.filter(h => h.emergencyServices).length;

    const availabilityStats = hospitals.reduce((acc, h) => {
      const status = getAvailabilityStatus(h.availableBeds, h.totalBeds);
      acc[status]++;
      return acc;
    }, { available: 0, limited: 0, full: 0 });

    return {
      totalHospitals: hospitals.length,
      totalBeds,
      availableBeds,
      emergencyHospitals,
      availabilityStats
    };
  }, [hospitals]);

  const handleHealthIssueSelect = (healthIssue: HealthIssue) => {
    setSelectedHealthIssue(healthIssue);
    setShowGuidance(true);
  };

  const handleBackToHealthIssues = () => {
    setShowGuidance(false);
    setSelectedHealthIssue(null);
    setSelectedCity(null);
  };

  const handleProceedToHospitals = () => {
    setShowGuidance(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">India Hospital Availability</h1>
                <p className="text-gray-600">
                  {selectedHealthIssue 
                    ? `Finding hospitals for: ${selectedHealthIssue.name}`
                    : 'Real-time hospital bed availability across India'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedHealthIssue && (
          <HealthIssueSelector onHealthIssueSelect={handleHealthIssueSelect} />
        )}

        {selectedHealthIssue && showGuidance && (
          <div>
            <HealthGuidance 
              healthIssue={selectedHealthIssue} 
              onBack={handleBackToHealthIssues}
            />
            <div className="text-center mt-8">
              <button
                onClick={handleProceedToHospitals}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Find Hospitals for {selectedHealthIssue.name}
              </button>
            </div>
          </div>
        )}

        {selectedHealthIssue && !showGuidance && (
          <div>
            {/* Health Issue Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedHealthIssue.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedHealthIssue.name}</h3>
                    <p className="text-sm text-gray-600">{selectedHealthIssue.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowGuidance(true)}
                    className="btn-secondary text-sm"
                  >
                    View Guidance
                  </button>
                  <button
                    onClick={handleBackToHealthIssues}
                    className="btn-secondary text-sm"
                  >
                    Change Issue
                  </button>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Find Hospitals for {selectedHealthIssue.name}
                </h2>
                <p className="text-gray-600">
                  We'll prioritize hospitals with {selectedHealthIssue.requiredSpecialties.join(', ')} specialties
                </p>
              </div>
              <SearchBar 
                onCitySelect={setSelectedCity} 
                selectedCity={selectedCity}
              />
            </div>
          </div>
        )}
        {selectedCity && selectedHealthIssue && !showGuidance && (
          <div className="animate-fade-in">
            {/* City Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCity.name}</h2>
                    <p className="text-gray-600">{selectedCity.state} • Population: {(selectedCity.population / 100000).toFixed(1)}L</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatsCard
                  title="Total Hospitals"
                  value={stats.totalHospitals}
                  icon={Building2}
                  color="blue"
                  subtitle="In this city"
                />
                <StatsCard
                  title="Available Beds"
                  value={stats.availableBeds}
                  icon={Bed}
                  color="green"
                  subtitle={`of ${stats.totalBeds} total beds`}
                />
                <StatsCard
                  title="Emergency Services"
                  value={stats.emergencyHospitals}
                  icon={AlertTriangle}
                  color="red"
                  subtitle="24/7 availability"
                />
                <StatsCard
                  title="Good Availability"
                  value={stats.availabilityStats.available}
                  icon={CheckCircle}
                  color="green"
                  subtitle="Hospitals with >20% beds"
                />
              </div>
            )}

            {/* Filters */}
            <FilterBar
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              selectedSpecialty={selectedSpecialty}
              onSpecialtyChange={setSelectedSpecialty}
              emergencyOnly={emergencyOnly}
              onEmergencyToggle={setEmergencyOnly}
            />

            {/* Hospital List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Hospitals in {selectedCity.name} ({hospitals.length})
                </h3>
              </div>

              {hospitals.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {hospitals.map((hospital) => (
                    <HospitalCard key={hospital.id} hospital={hospital} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No hospitals found</h3>
                  <p className="text-gray-600">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {!selectedCity && selectedHealthIssue && !showGuidance && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Select a City to Find Hospitals
              </h3>
              <p className="text-gray-600 mb-8">
                Choose from over 100+ cities across India to find hospitals that can treat {selectedHealthIssue.name}.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div className="bg-gray-50 rounded-lg p-4">
                  <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-medium">Specialized Care</div>
                  <div>Hospitals with required specialties</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Activity className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-medium">Immediate Help</div>
                  <div>Emergency services available</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">India Hospital Availability System</p>
            <p className="text-sm">
              Helping you find available hospital beds across India • Data updated in real-time
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;