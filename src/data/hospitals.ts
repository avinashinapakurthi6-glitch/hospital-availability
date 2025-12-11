import { supabase } from '../lib/supabase';

export interface Hospital {
  id: string;
  name: string;
  cityId: string;
  address: string;
  phone: string;
  type: 'government' | 'private' | 'charitable';
  specialties: string[];
  totalBeds: number;
  availableBeds: number;
  emergencyServices: boolean;
  rating: number;
  arogyasriEmpanelled: boolean;
  location: {
    area: string;
    pincode: string;
    landmark?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const fetchHospitalsByCity = async (cityId: string): Promise<Hospital[]> => {
  try {
    const { data, error } = await supabase
      .from('hospitals')
      .select('*')
      .eq('city_id', cityId);

    if (error) throw error;

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(hospital => ({
      id: hospital.id,
      name: hospital.name,
      cityId: hospital.city_id,
      address: hospital.address,
      phone: hospital.phone || '',
      type: hospital.type as 'government' | 'private' | 'charitable',
      specialties: hospital.specialties || [],
      totalBeds: hospital.total_beds,
      availableBeds: hospital.available_beds,
      emergencyServices: hospital.emergency_services,
      rating: hospital.rating,
      arogyasriEmpanelled: hospital.arogya_sri_empanelled,
      location: {
        area: hospital.area || '',
        pincode: hospital.pincode || '',
        landmark: hospital.landmark
      },
      coordinates: {
        lat: hospital.latitude || 0,
        lng: hospital.longitude || 0
      }
    }));
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return [];
  }
};

// Sample hospital data for major cities
export const hospitalData: Hospital[] = [
  // Mumbai Hospitals
  {
    id: 'mumbai-1',
    name: 'King Edward Memorial Hospital (KEM)',
    cityId: 'mumbai',
    address: 'Acharya Donde Marg, Parel, Mumbai - 400012',
    phone: '+91-22-2410-2000',
    type: 'government',
    specialties: ['Emergency', 'Cardiology', 'Neurology', 'Orthopedics'],
    totalBeds: 1800,
    availableBeds: 120,
    emergencyServices: true,
    rating: 4.2,
    arogyasriEmpanelled: true,
    location: {
      area: 'Parel',
      pincode: '400012',
      landmark: 'Near Parel Railway Station'
    },
    coordinates: { lat: 19.0176, lng: 72.8562 }
  },
  {
    id: 'mumbai-2',
    name: 'Kokilaben Dhirubhai Ambani Hospital & Medical Research Institute',
    cityId: 'mumbai',
    address: 'Rao Saheb Achutrao Patwardhan Marg, Four Bunglows, Andheri West, Mumbai - 400053',
    phone: '+91-22-4269-6969',
    type: 'private',
    specialties: ['Cardiology', 'Oncology', 'Neurology', 'Transplant'],
    totalBeds: 750,
    availableBeds: 45,
    emergencyServices: true,
    rating: 4.8,
    arogyasriEmpanelled: false,
    location: {
      area: 'Andheri West',
      pincode: '400053',
      landmark: 'Four Bunglows'
    },
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },
  {
    id: 'mumbai-3',
    name: 'Tata Memorial Hospital',
    cityId: 'mumbai',
    address: 'Dr Ernest Borges Marg, Parel, Mumbai - 400012',
    phone: '+91-22-2417-7000',
    type: 'charitable',
    specialties: ['Oncology', 'Cancer Treatment', 'Radiation Therapy'],
    totalBeds: 629,
    availableBeds: 23,
    emergencyServices: true,
    rating: 4.6,
    arogyasriEmpanelled: true,
    location: {
      area: 'Parel',
      pincode: '400012',
      landmark: 'Near KEM Hospital'
    },
    coordinates: { lat: 19.0176, lng: 72.8562 }
  },
  {
    id: 'mumbai-4',
    name: 'Lilavati Hospital and Research Centre',
    cityId: 'mumbai',
    address: 'A-791, Bandra Reclamation, Bandra West, Mumbai - 400050',
    phone: '+91-22-2675-1000',
    type: 'private',
    specialties: ['Emergency', 'Cardiology', 'Neurology', 'Orthopedics', 'Oncology'],
    totalBeds: 323,
    availableBeds: 28,
    emergencyServices: true,
    rating: 4.5,
    arogyasriEmpanelled: false,
    location: {
      area: 'Bandra West',
      pincode: '400050',
      landmark: 'Near Bandra Railway Station'
    },
    coordinates: { lat: 19.0596, lng: 72.8295 }
  },
  {
    id: 'mumbai-5',
    name: 'Hinduja Hospital',
    cityId: 'mumbai',
    address: 'Veer Savarkar Marg, Mahim, Mumbai - 400016',
    phone: '+91-22-2445-2222',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Gastroenterology', 'Emergency'],
    totalBeds: 450,
    availableBeds: 35,
    emergencyServices: true,
    rating: 4.4,
    arogyasriEmpanelled: false,
    location: {
      area: 'Mahim',
      pincode: '400016',
      landmark: 'Near Mahim Railway Station'
    },
    coordinates: { lat: 19.0410, lng: 72.8397 }
  },

  // Delhi Hospitals
  {
    id: 'delhi-1',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    cityId: 'delhi',
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi - 110029',
    phone: '+91-11-2658-8500',
    type: 'government',
    specialties: ['All Specialties', 'Emergency', 'Trauma', 'Research'],
    totalBeds: 2478,
    availableBeds: 180,
    emergencyServices: true,
    rating: 4.7,
    arogyasriEmpanelled: true,
    location: {
      area: 'Ansari Nagar',
      pincode: '110029',
      landmark: 'Near IIT Delhi'
    },
    coordinates: { lat: 28.5672, lng: 77.2100 }
  },
  {
    id: 'delhi-2',
    name: 'Fortis Escorts Heart Institute',
    cityId: 'delhi',
    address: 'Okhla Road, New Delhi - 110025',
    phone: '+91-11-4713-5000',
    type: 'private',
    specialties: ['Cardiology', 'Cardiac Surgery', 'Interventional Cardiology'],
    totalBeds: 310,
    availableBeds: 28,
    emergencyServices: true,
    rating: 4.5,
    arogyasriEmpanelled: false,
    location: {
      area: 'Okhla',
      pincode: '110025',
      landmark: 'Near Okhla Industrial Area'
    },
    coordinates: { lat: 28.5355, lng: 77.2730 }
  },
  {
    id: 'delhi-3',
    name: 'Safdarjung Hospital',
    cityId: 'delhi',
    address: 'Ansari Nagar West, New Delhi - 110029',
    phone: '+91-11-2673-0000',
    type: 'government',
    specialties: ['Emergency', 'General Medicine', 'Surgery', 'Pediatrics'],
    totalBeds: 1500,
    availableBeds: 95,
    emergencyServices: true,
    rating: 4.0,
    arogyasriEmpanelled: true,
    location: {
      area: 'Ansari Nagar West',
      pincode: '110029',
      landmark: 'Near AIIMS'
    },
    coordinates: { lat: 28.5672, lng: 77.2085 }
  },
  {
    id: 'delhi-4',
    name: 'Max Super Speciality Hospital, Saket',
    cityId: 'delhi',
    address: '1, 2, Press Enclave Road, Saket, New Delhi - 110017',
    phone: '+91-11-2651-5050',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency', 'Orthopedics'],
    totalBeds: 500,
    availableBeds: 42,
    emergencyServices: true,
    rating: 4.6,
    arogyasriEmpanelled: false,
    location: {
      area: 'Saket',
      pincode: '110017',
      landmark: 'Near Saket Metro Station'
    },
    coordinates: { lat: 28.5244, lng: 77.2066 }
  },
  {
    id: 'delhi-5',
    name: 'Sir Ganga Ram Hospital',
    cityId: 'delhi',
    address: 'Rajinder Nagar, New Delhi - 110060',
    phone: '+91-11-2575-0000',
    type: 'private',
    specialties: ['Emergency', 'Cardiology', 'Neurology', 'Gastroenterology'],
    totalBeds: 675,
    availableBeds: 55,
    emergencyServices: true,
    rating: 4.3,
    arogyasriEmpanelled: false,
    location: {
      area: 'Rajinder Nagar',
      pincode: '110060',
      landmark: 'Near Karol Bagh Metro Station'
    },
    coordinates: { lat: 28.6448, lng: 77.1855 }
  },

  // Bangalore Hospitals
  {
    id: 'bangalore-1',
    name: 'Manipal Hospital Bangalore',
    cityId: 'bangalore',
    address: '98, Rustum Bagh, Airport Road, Bangalore - 560017',
    phone: '+91-80-2502-4444',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics'],
    totalBeds: 650,
    availableBeds: 42,
    emergencyServices: true,
    rating: 4.6,
    arogyasriEmpanelled: false,
    location: {
      area: 'Airport Road',
      pincode: '560017',
      landmark: 'Near Kempegowda International Airport'
    },
    coordinates: { lat: 13.0143, lng: 77.6450 }
  },
  {
    id: 'bangalore-2',
    name: 'Victoria Hospital (BMCRI)',
    cityId: 'bangalore',
    address: 'Fort, Chamarajpet, Bangalore - 560018',
    phone: '+91-80-2670-1150',
    type: 'government',
    specialties: ['Emergency', 'General Medicine', 'Surgery', 'Trauma'],
    totalBeds: 1200,
    availableBeds: 78,
    emergencyServices: true,
    rating: 4.1,
    arogyasriEmpanelled: true,
    location: {
      area: 'Chamarajpet',
      pincode: '560018',
      landmark: 'Near Bangalore Fort'
    },
    coordinates: { lat: 12.9698, lng: 77.5802 }
  },
  {
    id: 'bangalore-3',
    name: 'Fortis Hospital Bannerghatta Road',
    cityId: 'bangalore',
    address: '154/9, Bannerghatta Road, Opposite IIM-B, Bangalore - 560076',
    phone: '+91-80-6621-4444',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency', 'Transplant'],
    totalBeds: 400,
    availableBeds: 32,
    emergencyServices: true,
    rating: 4.5,
    arogyasriEmpanelled: false,
    location: {
      area: 'Bannerghatta Road',
      pincode: '560076',
      landmark: 'Opposite IIM Bangalore'
    },
    coordinates: { lat: 12.9279, lng: 77.5937 }
  },
  {
    id: 'bangalore-4',
    name: 'Narayana Health City',
    cityId: 'bangalore',
    address: '258/A, Bommasandra Industrial Area, Anekal Taluk, Bangalore - 560099',
    phone: '+91-80-7122-2200',
    type: 'private',
    specialties: ['Cardiology', 'Cardiac Surgery', 'Neurology', 'Oncology', 'Emergency'],
    totalBeds: 1400,
    availableBeds: 95,
    emergencyServices: true,
    rating: 4.4,
    arogyasriEmpanelled: true,
    location: {
      area: 'Bommasandra',
      pincode: '560099',
      landmark: 'Near Electronic City'
    },
    coordinates: { lat: 12.8056, lng: 77.6875 }
  },

  // Chennai Hospitals
  {
    id: 'chennai-1',
    name: 'Apollo Hospital Chennai',
    cityId: 'chennai',
    address: '21, Greams Lane, Off Greams Road, Chennai - 600006',
    phone: '+91-44-2829-3333',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Transplant'],
    totalBeds: 550,
    availableBeds: 35,
    emergencyServices: true,
    rating: 4.7,
    arogyasriEmpanelled: false,
    location: {
      area: 'Greams Road',
      pincode: '600006',
      landmark: 'Near US Consulate'
    },
    coordinates: { lat: 13.0569, lng: 80.2471 }
  },
  {
    id: 'chennai-2',
    name: 'Rajiv Gandhi Government General Hospital',
    cityId: 'chennai',
    address: 'EVR Periyar Salai, Park Town, Chennai - 600003',
    phone: '+91-44-2819-2000',
    type: 'government',
    specialties: ['Emergency', 'General Medicine', 'Surgery', 'Pediatrics'],
    totalBeds: 2800,
    availableBeds: 210,
    emergencyServices: true,
    rating: 4.0,
    arogyasriEmpanelled: true,
    location: {
      area: 'Park Town',
      pincode: '600003',
      landmark: 'Near Chennai Central Railway Station'
    },
    coordinates: { lat: 13.0878, lng: 80.2785 }
  },
  {
    id: 'chennai-3',
    name: 'Fortis Malar Hospital',
    cityId: 'chennai',
    address: '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020',
    phone: '+91-44-4289-2222',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Emergency'],
    totalBeds: 180,
    availableBeds: 15,
    emergencyServices: true,
    rating: 4.3,
    arogyasriEmpanelled: false,
    location: {
      area: 'Adyar',
      pincode: '600020',
      landmark: 'Near Adyar Signal'
    },
    coordinates: { lat: 13.0067, lng: 80.2206 }
  },
  {
    id: 'chennai-4',
    name: 'MIOT International',
    cityId: 'chennai',
    address: '4/112, Mount Poonamallee Road, Manapakkam, Chennai - 600089',
    phone: '+91-44-2249-2222',
    type: 'private',
    specialties: ['Orthopedics', 'Cardiology', 'Neurology', 'Emergency', 'Transplant'],
    totalBeds: 1000,
    availableBeds: 75,
    emergencyServices: true,
    rating: 4.5,
    arogyasriEmpanelled: false,
    location: {
      area: 'Manapakkam',
      pincode: '600089',
      landmark: 'Near Porur'
    },
    coordinates: { lat: 13.0389, lng: 80.1636 }
  },

  // Kolkata Hospitals
  {
    id: 'kolkata-1',
    name: 'AMRI Hospital Salt Lake',
    cityId: 'kolkata',
    address: 'JC - 16 & 17, Sector III, Salt Lake City, Kolkata - 700098',
    phone: '+91-33-6680-0000',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency'],
    totalBeds: 400,
    availableBeds: 32,
    emergencyServices: true,
    rating: 4.4,
    arogyasriEmpanelled: false,
    location: {
      area: 'Salt Lake City',
      pincode: '700098',
      landmark: 'Near Salt Lake City'
    },
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },
  {
    id: 'kolkata-2',
    name: 'Medical College and Hospital Kolkata',
    cityId: 'kolkata',
    address: '88, College Street, Kolkata - 700073',
    phone: '+91-33-2241-3106',
    type: 'government',
    specialties: ['Emergency', 'General Medicine', 'Surgery', 'Trauma'],
    totalBeds: 2500,
    availableBeds: 165,
    emergencyServices: true,
    rating: 3.9,
    arogyasriEmpanelled: true,
    location: {
      area: 'College Street',
      pincode: '700073',
      landmark: 'Near Calcutta University'
    },
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },
  {
    id: 'kolkata-3',
    name: 'Apollo Gleneagles Hospital',
    cityId: 'kolkata',
    address: '58, Canal Circular Road, Kadapara, Kolkata - 700054',
    phone: '+91-33-2320-3040',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency', 'Transplant'],
    totalBeds: 510,
    availableBeds: 38,
    emergencyServices: true,
    rating: 4.5,
    arogyasriEmpanelled: false,
    location: {
      area: 'Kadapara',
      pincode: '700054',
      landmark: 'Near Phoolbagan'
    },
    coordinates: { lat: 22.5448, lng: 88.3826 }
  },

  // Hyderabad Hospitals
  {
    id: 'hyderabad-1',
    name: 'Apollo Hospital Jubilee Hills',
    cityId: 'hyderabad',
    address: 'Road No. 72, Film Nagar, Jubilee Hills, Hyderabad - 500033',
    phone: '+91-40-2360-7777',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Transplant'],
    totalBeds: 750,
    availableBeds: 48,
    emergencyServices: true,
    rating: 4.6,
    arogyasriEmpanelled: true,
    location: {
      area: 'Jubilee Hills',
      pincode: '500033',
      landmark: 'Near Film Nagar'
    },
    coordinates: { lat: 17.4065, lng: 78.4772 }
  },
  {
    id: 'hyderabad-2',
    name: 'Gandhi Hospital',
    cityId: 'hyderabad',
    address: 'Musheerabad, Secunderabad, Hyderabad - 500003',
    phone: '+91-40-2788-1066',
    type: 'government',
    specialties: ['Emergency', 'General Medicine', 'Surgery', 'Infectious Diseases'],
    totalBeds: 1500,
    availableBeds: 92,
    emergencyServices: true,
    rating: 4.1,
    arogyasriEmpanelled: true,
    location: {
      area: 'Secunderabad',
      pincode: '500003',
      landmark: 'Near Secunderabad Railway Station'
    },
    coordinates: { lat: 17.4399, lng: 78.4983 }
  },
  {
    id: 'hyderabad-3',
    name: 'NIMS Hospital',
    cityId: 'hyderabad',
    address: 'Punjagutta, Hyderabad - 500082',
    phone: '+91-40-2348-8888',
    type: 'government',
    specialties: ['Neurology', 'Neurosurgery', 'Emergency', 'Trauma'],
    totalBeds: 650,
    availableBeds: 45,
    emergencyServices: true,
    rating: 4.2,
    arogyasriEmpanelled: true,
    location: {
      area: 'Punjagutta',
      pincode: '500082',
      landmark: 'Near Punjagutta Metro Station'
    },
    coordinates: { lat: 17.4239, lng: 78.4738 }
  },
  {
    id: 'hyderabad-4',
    name: 'Continental Hospitals',
    cityId: 'hyderabad',
    address: 'IT Park Road, Nanakramguda, Gachibowli, Hyderabad - 500032',
    phone: '+91-40-6777-6777',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency', 'Transplant'],
    totalBeds: 750,
    availableBeds: 58,
    emergencyServices: true,
    rating: 4.7,
    arogyasriEmpanelled: false,
    location: {
      area: 'Gachibowli',
      pincode: '500032',
      landmark: 'Near HITEC City'
    },
    coordinates: { lat: 17.4435, lng: 78.3772 }
  },

  // Pune Hospitals
  {
    id: 'pune-1',
    name: 'Ruby Hall Clinic',
    cityId: 'pune',
    address: '40, Sassoon Road, Pune - 411001',
    phone: '+91-20-2612-7100',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency'],
    totalBeds: 750,
    availableBeds: 55,
    emergencyServices: true,
    rating: 4.5,
    arogyasriEmpanelled: false,
    location: {
      area: 'Sassoon Road',
      pincode: '411001',
      landmark: 'Near Pune Railway Station'
    },
    coordinates: { lat: 18.5204, lng: 73.8567 }
  },
  {
    id: 'pune-2',
    name: 'Sassoon General Hospital (BJ Medical College)',
    cityId: 'pune',
    address: 'Near Pune Railway Station, Pune - 411001',
    phone: '+91-20-2612-7394',
    type: 'government',
    specialties: ['Emergency', 'Trauma', 'General Medicine', 'Surgery'],
    totalBeds: 1400,
    availableBeds: 88,
    emergencyServices: true,
    rating: 4.0,
    arogyasriEmpanelled: true,
    location: {
      area: 'Railway Station Area',
      pincode: '411001',
      landmark: 'Near Pune Junction'
    },
    coordinates: { lat: 18.5314, lng: 73.8446 }
  },
  {
    id: 'pune-3',
    name: 'Jehangir Hospital',
    cityId: 'pune',
    address: '32, Sassoon Road, Near Pune Railway Station, Pune - 411001',
    phone: '+91-20-2605-5000',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Emergency', 'Orthopedics'],
    totalBeds: 350,
    availableBeds: 28,
    emergencyServices: true,
    rating: 4.3,
    arogyasriEmpanelled: false,
    location: {
      area: 'Sassoon Road',
      pincode: '411001',
      landmark: 'Near Pune Railway Station'
    },
    coordinates: { lat: 18.5204, lng: 73.8567 }
  },
  {
    id: 'pune-4',
    name: 'Deenanath Mangeshkar Hospital',
    cityId: 'pune',
    address: 'Erandwane, Pune - 411004',
    phone: '+91-20-2712-8888',
    type: 'private',
    specialties: ['Cardiology', 'Neurology', 'Oncology', 'Emergency', 'Pediatrics'],
    totalBeds: 425,
    availableBeds: 35,
    emergencyServices: true,
    rating: 4.4,
    arogyasriEmpanelled: false,
    location: {
      area: 'Erandwane',
      pincode: '411004',
      landmark: 'Near Karve Road'
    },
    coordinates: { lat: 18.5089, lng: 73.8350 }
  }
];

export const getHospitalsByCity = (cityId: string): Hospital[] => {
  return hospitalData.filter(hospital => hospital.cityId === cityId);
};

export const getAvailabilityStatus = (availableBeds: number, totalBeds: number): 'available' | 'limited' | 'full' => {
  const percentage = (availableBeds / totalBeds) * 100;
  if (percentage > 20) return 'available';
  if (percentage > 5) return 'limited';
  return 'full';
};

// Generate random hospital data for cities that don't have specific data
export const generateHospitalData = (cityId: string, cityName: string, requiredSpecialties?: string[]): Hospital[] => {
  const hospitalTypes = ['government', 'private', 'charitable'] as const;
  const specialties = [
    'Emergency', 'General Medicine', 'Surgery', 'Cardiology', 'Neurology', 
    'Orthopedics', 'Pediatrics', 'Gynecology', 'Oncology', 'Dermatology',
    'Obstetrics', 'Maternity', 'Psychiatry', 'Psychology', 'Mental Health',
    'Infectious Diseases', 'Gastroenterology', 'Endocrinology', 'Diabetology',
    'Internal Medicine', 'Intensive Care', 'Trauma', 'Transplant', 'Neonatology'
  ];
  
  // Realistic hospital name templates
  const governmentNames = [
    `${cityName} Government General Hospital`,
    `${cityName} District Hospital`,
    `${cityName} Civil Hospital`,
    `${cityName} Government Medical College Hospital`,
    `${cityName} Primary Health Centre`,
    `${cityName} ESI Hospital`,
    `${cityName} Railway Hospital`
  ];
  
  const privateNames = [
    `Apollo Hospital ${cityName}`,
    `Fortis Hospital ${cityName}`,
    `Max Healthcare ${cityName}`,
    `Manipal Hospital ${cityName}`,
    `Narayana Health ${cityName}`,
    `Continental Hospital ${cityName}`,
    `Rainbow Hospital ${cityName}`,
    `Care Hospital ${cityName}`,
    `Global Hospital ${cityName}`,
    `Yashoda Hospital ${cityName}`,
    `${cityName} Multispecialty Hospital`,
    `${cityName} Heart Institute`
  ];
  
  const charitableNames = [
    `${cityName} Lions Club Hospital`,
    `${cityName} Rotary Hospital`,
    `${cityName} Charitable Trust Hospital`,
    `${cityName} Community Hospital`,
    `${cityName} Seva Hospital`,
    `${cityName} Mission Hospital`
  ];
  
  const hospitals: Hospital[] = [];
  const numHospitals = Math.floor(Math.random() * 5) + 3; // 3-7 hospitals per city
  
  for (let i = 0; i < numHospitals; i++) {
    const type = hospitalTypes[Math.floor(Math.random() * hospitalTypes.length)];
    const totalBeds = type === 'government' ? 
      Math.floor(Math.random() * 1500) + 500 : 
      Math.floor(Math.random() * 800) + 200;
    const availableBeds = Math.floor(Math.random() * (totalBeds * 0.3)) + 10;
    
    // Select appropriate name based on hospital type
    let hospitalName;
    switch (type) {
      case 'government':
        hospitalName = governmentNames[Math.floor(Math.random() * governmentNames.length)];
        break;
      case 'private':
        hospitalName = privateNames[Math.floor(Math.random() * privateNames.length)];
        break;
      case 'charitable':
        hospitalName = charitableNames[Math.floor(Math.random() * charitableNames.length)];
        break;
    }
    
    // Ensure hospitals have required specialties if specified
    let hospitalSpecialties = specialties.slice(0, Math.floor(Math.random() * 6) + 3);
    if (requiredSpecialties && requiredSpecialties.length > 0) {
      // Ensure at least one required specialty is included
      const hasRequiredSpecialty = hospitalSpecialties.some(spec => 
        requiredSpecialties.includes(spec)
      );
      if (!hasRequiredSpecialty) {
        // Replace a random specialty with a required one
        const randomIndex = Math.floor(Math.random() * hospitalSpecialties.length);
        const randomRequiredSpecialty = requiredSpecialties[Math.floor(Math.random() * requiredSpecialties.length)];
        hospitalSpecialties[randomIndex] = randomRequiredSpecialty;
      }
    }

    // Generate realistic areas for the city
    const areas = [
      `${cityName} Central`,
      `${cityName} North`,
      `${cityName} South`,
      `${cityName} East`,
      `${cityName} West`,
      `Old ${cityName}`,
      `New ${cityName}`,
      `${cityName} City Center`
    ];

    const landmarks = [
      `Near ${cityName} Railway Station`,
      `Near ${cityName} Bus Stand`,
      `Near ${cityName} Airport`,
      `${cityName} City Center`,
      `Main Road, ${cityName}`,
      `Civil Lines, ${cityName}`
    ];
    
    hospitals.push({
      id: `${cityId}-${i + 1}`,
      name: hospitalName,
      cityId,
      address: `Medical District, ${areas[Math.floor(Math.random() * areas.length)]}, ${cityName} - ${Math.floor(Math.random() * 900000) + 100000}`,
      phone: `+91-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 900000) + 100000}`,
      type,
      specialties: hospitalSpecialties,
      totalBeds,
      availableBeds,
      emergencyServices: Math.random() > 0.2, // 80% have emergency services
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0 rating
      arogyasriEmpanelled: type === 'government' ? true : Math.random() > 0.6, // Government hospitals always empanelled, 40% of others
      location: {
        area: areas[Math.floor(Math.random() * areas.length)],
        pincode: `${Math.floor(Math.random() * 900000) + 100000}`,
        landmark: landmarks[Math.floor(Math.random() * landmarks.length)]
      },
      coordinates: { lat: 0, lng: 0 } // Would be populated with actual coordinates
    });
  }
  
  return hospitals;
};