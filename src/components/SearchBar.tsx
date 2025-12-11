import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { City, searchCities } from '../data/cities';

interface SearchBarProps {
  onCitySelect: (city: City) => void;
  selectedCity: City | null;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onCitySelect, selectedCity }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const results = searchCities(query);
      setSuggestions(results);
      setIsOpen(results.length > 0);
      setHighlightedIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleCitySelect = (city: City) => {
    onCitySelect(city);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
          handleCitySelect(suggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const clearSelection = () => {
    onCitySelect(null as any);
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {selectedCity ? (
        <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary-600" />
            <div>
              <div className="font-medium text-gray-900">{selectedCity.name}</div>
              <div className="text-sm text-gray-500">{selectedCity.state}</div>
            </div>
          </div>
          <button
            onClick={clearSelection}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Clear selection"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      ) : (
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Search for a city in India..."
              className="input-field pl-12 pr-4"
              autoComplete="off"
            />
          </div>

          {isOpen && suggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
            >
              {suggestions.map((city, index) => (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(city)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                    index === highlightedIndex ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{city.name}</div>
                      <div className="text-sm text-gray-500">{city.state}</div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {(city.population / 100000).toFixed(1)}L people
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};