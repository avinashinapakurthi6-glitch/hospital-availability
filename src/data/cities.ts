export interface City {
  id: string;
  name: string;
  state: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const indianCities: City[] = [
  // Major Metropolitan Cities
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', population: 12442373, coordinates: { lat: 19.0760, lng: 72.8777 } },
  { id: 'delhi', name: 'Delhi', state: 'Delhi', population: 11007835, coordinates: { lat: 28.7041, lng: 77.1025 } },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', population: 8443675, coordinates: { lat: 12.9716, lng: 77.5946 } },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', population: 6809970, coordinates: { lat: 17.3850, lng: 78.4867 } },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', population: 5633927, coordinates: { lat: 23.0225, lng: 72.5714 } },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', population: 4681087, coordinates: { lat: 13.0827, lng: 80.2707 } },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', population: 4496694, coordinates: { lat: 22.5726, lng: 88.3639 } },
  { id: 'surat', name: 'Surat', state: 'Gujarat', population: 4467797, coordinates: { lat: 21.1702, lng: 72.8311 } },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', population: 3124458, coordinates: { lat: 18.5204, lng: 73.8567 } },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', population: 3046163, coordinates: { lat: 26.9124, lng: 75.7873 } },

  // Tier 2 Cities
  { id: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', population: 2817105, coordinates: { lat: 26.8467, lng: 80.9462 } },
  { id: 'kanpur', name: 'Kanpur', state: 'Uttar Pradesh', population: 2767031, coordinates: { lat: 26.4499, lng: 80.3319 } },
  { id: 'nagpur', name: 'Nagpur', state: 'Maharashtra', population: 2405421, coordinates: { lat: 21.1458, lng: 79.0882 } },
  { id: 'indore', name: 'Indore', state: 'Madhya Pradesh', population: 1964086, coordinates: { lat: 22.7196, lng: 75.8577 } },
  { id: 'thane', name: 'Thane', state: 'Maharashtra', population: 1818872, coordinates: { lat: 19.2183, lng: 72.9781 } },
  { id: 'bhopal', name: 'Bhopal', state: 'Madhya Pradesh', population: 1798218, coordinates: { lat: 23.2599, lng: 77.4126 } },
  { id: 'visakhapatnam', name: 'Visakhapatnam', state: 'Andhra Pradesh', population: 1730320, coordinates: { lat: 17.6868, lng: 83.2185 } },
  { id: 'pimpri-chinchwad', name: 'Pimpri-Chinchwad', state: 'Maharashtra', population: 1729359, coordinates: { lat: 18.6298, lng: 73.7997 } },
  { id: 'patna', name: 'Patna', state: 'Bihar', population: 1684222, coordinates: { lat: 25.5941, lng: 85.1376 } },
  { id: 'vadodara', name: 'Vadodara', state: 'Gujarat', population: 1666703, coordinates: { lat: 22.3072, lng: 73.1812 } },

  // Additional Major Cities
  { id: 'ghaziabad', name: 'Ghaziabad', state: 'Uttar Pradesh', population: 1636068, coordinates: { lat: 28.6692, lng: 77.4538 } },
  { id: 'ludhiana', name: 'Ludhiana', state: 'Punjab', population: 1618879, coordinates: { lat: 30.9010, lng: 75.8573 } },
  { id: 'agra', name: 'Agra', state: 'Uttar Pradesh', population: 1585704, coordinates: { lat: 27.1767, lng: 78.0081 } },
  { id: 'nashik', name: 'Nashik', state: 'Maharashtra', population: 1486973, coordinates: { lat: 19.9975, lng: 73.7898 } },
  { id: 'faridabad', name: 'Faridabad', state: 'Haryana', population: 1414050, coordinates: { lat: 28.4089, lng: 77.3178 } },
  { id: 'meerut', name: 'Meerut', state: 'Uttar Pradesh', population: 1305429, coordinates: { lat: 28.9845, lng: 77.7064 } },
  { id: 'rajkot', name: 'Rajkot', state: 'Gujarat', population: 1286995, coordinates: { lat: 22.3039, lng: 70.8022 } },
  { id: 'kalyan-dombivli', name: 'Kalyan-Dombivli', state: 'Maharashtra', population: 1246381, coordinates: { lat: 19.2403, lng: 73.1305 } },
  { id: 'vasai-virar', name: 'Vasai-Virar', state: 'Maharashtra', population: 1221233, coordinates: { lat: 19.4912, lng: 72.8054 } },
  { id: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', population: 1201815, coordinates: { lat: 25.3176, lng: 82.9739 } },

  // State Capitals and Important Cities
  { id: 'srinagar', name: 'Srinagar', state: 'Jammu and Kashmir', population: 1180570, coordinates: { lat: 34.0837, lng: 74.7973 } },
  { id: 'aurangabad', name: 'Aurangabad', state: 'Maharashtra', population: 1175116, coordinates: { lat: 19.8762, lng: 75.3433 } },
  { id: 'dhanbad', name: 'Dhanbad', state: 'Jharkhand', population: 1161561, coordinates: { lat: 23.7957, lng: 86.4304 } },
  { id: 'amritsar', name: 'Amritsar', state: 'Punjab', population: 1132761, coordinates: { lat: 31.6340, lng: 74.8723 } },
  { id: 'navi-mumbai', name: 'Navi Mumbai', state: 'Maharashtra', population: 1119477, coordinates: { lat: 19.0330, lng: 73.0297 } },
  { id: 'allahabad', name: 'Allahabad', state: 'Uttar Pradesh', population: 1117094, coordinates: { lat: 25.4358, lng: 81.8463 } },
  { id: 'ranchi', name: 'Ranchi', state: 'Jharkhand', population: 1073440, coordinates: { lat: 23.3441, lng: 85.3096 } },
  { id: 'howrah', name: 'Howrah', state: 'West Bengal', population: 1072161, coordinates: { lat: 22.5958, lng: 88.2636 } },
  { id: 'coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', population: 1061447, coordinates: { lat: 11.0168, lng: 76.9558 } },
  { id: 'jabalpur', name: 'Jabalpur', state: 'Madhya Pradesh', population: 1055525, coordinates: { lat: 23.1815, lng: 79.9864 } },

  // More Cities
  { id: 'gwalior', name: 'Gwalior', state: 'Madhya Pradesh', population: 1054420, coordinates: { lat: 26.2183, lng: 78.1828 } },
  { id: 'vijayawada', name: 'Vijayawada', state: 'Andhra Pradesh', population: 1048240, coordinates: { lat: 16.5062, lng: 80.6480 } },
  { id: 'jodhpur', name: 'Jodhpur', state: 'Rajasthan', population: 1033756, coordinates: { lat: 26.2389, lng: 73.0243 } },
  { id: 'madurai', name: 'Madurai', state: 'Tamil Nadu', population: 1016885, coordinates: { lat: 9.9252, lng: 78.1198 } },
  { id: 'raipur', name: 'Raipur', state: 'Chhattisgarh', population: 1010087, coordinates: { lat: 21.2514, lng: 81.6296 } },
  { id: 'kota', name: 'Kota', state: 'Rajasthan', population: 1001694, coordinates: { lat: 25.2138, lng: 75.8648 } },
  { id: 'chandigarh', name: 'Chandigarh', state: 'Chandigarh', population: 960787, coordinates: { lat: 30.7333, lng: 76.7794 } },
  { id: 'guwahati', name: 'Guwahati', state: 'Assam', population: 957352, coordinates: { lat: 26.1445, lng: 91.7362 } },
  { id: 'solapur', name: 'Solapur', state: 'Maharashtra', population: 951118, coordinates: { lat: 17.6599, lng: 75.9064 } },
  { id: 'hubli-dharwad', name: 'Hubli-Dharwad', state: 'Karnataka', population: 943857, coordinates: { lat: 15.3647, lng: 75.1240 } },

  // Additional Cities
  { id: 'bareilly', name: 'Bareilly', state: 'Uttar Pradesh', population: 903668, coordinates: { lat: 28.3670, lng: 79.4304 } },
  { id: 'moradabad', name: 'Moradabad', state: 'Uttar Pradesh', population: 889810, coordinates: { lat: 28.8386, lng: 78.7733 } },
  { id: 'mysore', name: 'Mysore', state: 'Karnataka', population: 887446, coordinates: { lat: 12.2958, lng: 76.6394 } },
  { id: 'gurgaon', name: 'Gurgaon', state: 'Haryana', population: 876824, coordinates: { lat: 28.4595, lng: 77.0266 } },
  { id: 'aligarh', name: 'Aligarh', state: 'Uttar Pradesh', population: 874408, coordinates: { lat: 27.8974, lng: 78.0880 } },
  { id: 'jalandhar', name: 'Jalandhar', state: 'Punjab', population: 868196, coordinates: { lat: 31.3260, lng: 75.5762 } },
  { id: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', population: 837737, coordinates: { lat: 20.2961, lng: 85.8245 } },
  { id: 'salem', name: 'Salem', state: 'Tamil Nadu', population: 831038, coordinates: { lat: 11.6643, lng: 78.1460 } },
  { id: 'warangal', name: 'Warangal', state: 'Telangana', population: 811844, coordinates: { lat: 17.9689, lng: 79.5941 } },
  { id: 'mira-bhayandar', name: 'Mira-Bhayandar', state: 'Maharashtra', population: 809378, coordinates: { lat: 19.2952, lng: 72.8544 } },

  // More Cities from Different States
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', state: 'Kerala', population: 784153, coordinates: { lat: 8.5241, lng: 76.9366 } },
  { id: 'bhiwandi', name: 'Bhiwandi', state: 'Maharashtra', population: 709665, coordinates: { lat: 19.3002, lng: 73.0635 } },
  { id: 'saharanpur', name: 'Saharanpur', state: 'Uttar Pradesh', population: 703345, coordinates: { lat: 29.9680, lng: 77.5552 } },
  { id: 'guntur', name: 'Guntur', state: 'Andhra Pradesh', population: 670073, coordinates: { lat: 16.3067, lng: 80.4365 } },
  { id: 'amravati', name: 'Amravati', state: 'Maharashtra', population: 647057, coordinates: { lat: 20.9374, lng: 77.7796 } },
  { id: 'bikaner', name: 'Bikaner', state: 'Rajasthan', population: 644406, coordinates: { lat: 28.0229, lng: 73.3119 } },
  { id: 'noida', name: 'Noida', state: 'Uttar Pradesh', population: 642381, coordinates: { lat: 28.5355, lng: 77.3910 } },
  { id: 'jamshedpur', name: 'Jamshedpur', state: 'Jharkhand', population: 629659, coordinates: { lat: 22.8046, lng: 86.2029 } },
  { id: 'bhilai-nagar', name: 'Bhilai Nagar', state: 'Chhattisgarh', population: 625697, coordinates: { lat: 21.1938, lng: 81.3509 } },
  { id: 'cuttack', name: 'Cuttack', state: 'Odisha', population: 606007, coordinates: { lat: 20.4625, lng: 85.8828 } },

  // Additional Cities
  { id: 'firozabad', name: 'Firozabad', state: 'Uttar Pradesh', population: 603797, coordinates: { lat: 27.1592, lng: 78.3957 } },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', population: 601574, coordinates: { lat: 9.9312, lng: 76.2673 } },
  { id: 'bhavnagar', name: 'Bhavnagar', state: 'Gujarat', population: 593768, coordinates: { lat: 21.7645, lng: 72.1519 } },
  { id: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', population: 578420, coordinates: { lat: 30.3165, lng: 78.0322 } },
  { id: 'durgapur', name: 'Durgapur', state: 'West Bengal', population: 566517, coordinates: { lat: 23.5204, lng: 87.3119 } },
  { id: 'asansol', name: 'Asansol', state: 'West Bengal', population: 563917, coordinates: { lat: 23.6739, lng: 86.9524 } },
  { id: 'nanded-waghala', name: 'Nanded-Waghala', state: 'Maharashtra', population: 550564, coordinates: { lat: 19.1383, lng: 77.3210 } },
  { id: 'kolhapur', name: 'Kolhapur', state: 'Maharashtra', population: 549236, coordinates: { lat: 16.7050, lng: 74.2433 } },
  { id: 'ajmer', name: 'Ajmer', state: 'Rajasthan', population: 542321, coordinates: { lat: 26.4499, lng: 74.6399 } },
  { id: 'akola', name: 'Akola', state: 'Maharashtra', population: 520516, coordinates: { lat: 20.7002, lng: 77.0082 } },

  // More Cities
  { id: 'gulbarga', name: 'Gulbarga', state: 'Karnataka', population: 532031, coordinates: { lat: 17.3297, lng: 76.8343 } },
  { id: 'jamnagar', name: 'Jamnagar', state: 'Gujarat', population: 529308, coordinates: { lat: 22.4707, lng: 70.0577 } },
  { id: 'ujjain', name: 'Ujjain', state: 'Madhya Pradesh', population: 515215, coordinates: { lat: 23.1765, lng: 75.7885 } },
  { id: 'loni', name: 'Loni', state: 'Uttar Pradesh', population: 512296, coordinates: { lat: 28.7506, lng: 77.2897 } },
  { id: 'siliguri', name: 'Siliguri', state: 'West Bengal', population: 509709, coordinates: { lat: 26.7271, lng: 88.3953 } },
  { id: 'jhansi', name: 'Jhansi', state: 'Uttar Pradesh', population: 507293, coordinates: { lat: 25.4484, lng: 78.5685 } },
  { id: 'ulhasnagar', name: 'Ulhasnagar', state: 'Maharashtra', population: 506098, coordinates: { lat: 19.2215, lng: 73.1645 } },
  { id: 'jammu', name: 'Jammu', state: 'Jammu and Kashmir', population: 502197, coordinates: { lat: 32.7266, lng: 74.8570 } },
  { id: 'sangli-miraj-kupwad', name: 'Sangli-Miraj-Kupwad', state: 'Maharashtra', population: 502697, coordinates: { lat: 16.8524, lng: 74.5815 } },
  { id: 'mangalore', name: 'Mangalore', state: 'Karnataka', population: 488968, coordinates: { lat: 12.9141, lng: 74.8560 } },

  // Additional Cities from Various States
  { id: 'erode', name: 'Erode', state: 'Tamil Nadu', population: 498129, coordinates: { lat: 11.3410, lng: 77.7172 } },
  { id: 'belgaum', name: 'Belgaum', state: 'Karnataka', population: 488292, coordinates: { lat: 15.8497, lng: 74.4977 } },
  { id: 'ambattur', name: 'Ambattur', state: 'Tamil Nadu', population: 478134, coordinates: { lat: 13.1143, lng: 80.1548 } },
  { id: 'tirunelveli', name: 'Tirunelveli', state: 'Tamil Nadu', population: 474838, coordinates: { lat: 8.7139, lng: 77.7567 } },
  { id: 'malegaon', name: 'Malegaon', state: 'Maharashtra', population: 471312, coordinates: { lat: 20.5579, lng: 74.5287 } },
  { id: 'gaya', name: 'Gaya', state: 'Bihar', population: 470839, coordinates: { lat: 24.7914, lng: 85.0002 } },
  { id: 'jalgaon', name: 'Jalgaon', state: 'Maharashtra', population: 460228, coordinates: { lat: 21.0077, lng: 75.5626 } },
  { id: 'udaipur', name: 'Udaipur', state: 'Rajasthan', population: 451735, coordinates: { lat: 24.5854, lng: 73.7125 } },
  { id: 'maheshtala', name: 'Maheshtala', state: 'West Bengal', population: 449423, coordinates: { lat: 22.5093, lng: 88.2482 } },
  { id: 'davanagere', name: 'Davanagere', state: 'Karnataka', population: 435128, coordinates: { lat: 14.4644, lng: 75.9218 } }
];

export const getStatesList = (): string[] => {
  const states = [...new Set(indianCities.map(city => city.state))];
  return states.sort();
};

export const getCitiesByState = (state: string): City[] => {
  return indianCities.filter(city => city.state === state).sort((a, b) => a.name.localeCompare(b.name));
};

export const searchCities = (query: string): City[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  return indianCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm) || 
    city.state.toLowerCase().includes(searchTerm)
  ).sort((a, b) => {
    // Prioritize exact matches
    const aExact = a.name.toLowerCase() === searchTerm;
    const bExact = b.name.toLowerCase() === searchTerm;
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    
    // Then prioritize starts with
    const aStarts = a.name.toLowerCase().startsWith(searchTerm);
    const bStarts = b.name.toLowerCase().startsWith(searchTerm);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    
    // Finally sort by population (larger first)
    return b.population - a.population;
  }).slice(0, 10); // Limit to top 10 results
};