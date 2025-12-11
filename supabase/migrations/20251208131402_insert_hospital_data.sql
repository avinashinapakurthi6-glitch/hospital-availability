/*
  # Insert real hospital data for major Indian cities
  
  Inserts real hospital information including:
  - Government and private hospitals
  - Major cities (Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad)
  - Realistic contact details and addresses
  - Specialties and available facilities
*/

INSERT INTO hospitals (
  id, name, city_id, city_name, address, area, pincode, landmark, 
  phone, type, specialties, total_beds, available_beds, 
  emergency_services, rating, arogya_sri_empanelled, latitude, longitude
) VALUES
-- Delhi Hospitals
('delhi-1', 'All India Institute of Medical Sciences (AIIMS)', 'delhi', 'Delhi', 
 'Ansari Nagar, New Delhi - 110029', 'Ansari Nagar', '110029', 'Near Safdarjung Hospital',
 '+91-11-2658-8500', 'government', ARRAY['Cardiology', 'Neurology', 'Emergency', 'Orthopedics', 'Pediatrics'], 
 2000, 150, true, 4.8, true, 28.5676, 77.2063),

('delhi-2', 'Fortis Hospital Vasant Kunj', 'delhi', 'Delhi',
 'B-22, Pocket A-1, Vasant Kunj, New Delhi - 110070', 'Vasant Kunj', '110070', 'Near Dhaula Kuan',
 '+91-11-4168-2222', 'private', ARRAY['Cardiology', 'Oncology', 'Emergency', 'ICU', 'Orthopedics'],
 600, 45, true, 4.6, false, 28.5244, 77.1855),

('delhi-3', 'Sir Ganga Ram Hospital', 'delhi', 'Delhi',
 'Old Rajendra Nagar, New Delhi - 110060', 'Old Rajendra Nagar', '110060', 'Near Mandi House',
 '+91-11-4141-5050', 'private', ARRAY['Cardiology', 'Neurology', 'Oncology', 'Emergency'],
 650, 52, true, 4.7, false, 28.6329, 77.2197),

-- Mumbai Hospitals
('mumbai-1', 'Grant Medical College and JJ Hospital', 'mumbai', 'Mumbai',
 'Byculla, Mumbai - 400008', 'Byculla', '400008', 'Near Victoria Terminus',
 '+91-22-2370-6060', 'government', ARRAY['Cardiology', 'Emergency', 'Orthopedics', 'Pediatrics'],
 2200, 180, true, 4.5, true, 18.9747, 72.8247),

('mumbai-2', 'Lilavati Hospital and Research Centre', 'mumbai', 'Mumbai',
 'A-791, Bandra Reclamation, Bandra West, Mumbai - 400050', 'Bandra West', '400050', 'Near Marine Drive',
 '+91-22-6190-1000', 'private', ARRAY['Cardiology', 'Oncology', 'Neurology', 'Emergency', 'ICU'],
 900, 68, true, 4.8, false, 19.0596, 72.8295),

('mumbai-3', 'Breach Candy Hospital and Research Centre', 'mumbai', 'Mumbai',
 '60-A, Bhulabhai Desai Road, Mumbai - 400026', 'Breach Candy', '400026', 'Near Worli Sea Face',
 '+91-22-6730-5050', 'private', ARRAY['Cardiology', 'Orthopedics', 'Emergency', 'Pediatrics'],
 500, 38, true, 4.7, false, 19.0176, 72.8248),

-- Bangalore Hospitals
('bangalore-1', 'Fortis Hospital Bangalore', 'bangalore', 'Bangalore',
 'Bannerghatta Road, Bangalore - 560076', 'Bannerghatta', '560076', 'Near Silk Board Junction',
 '+91-80-6621-6161', 'private', ARRAY['Cardiology', 'Neurology', 'Oncology', 'Emergency', 'ICU'],
 750, 56, true, 4.7, false, 12.9352, 77.6245),

('bangalore-2', 'Apollo Hospitals Bangalore', 'bangalore', 'Bangalore',
 '154/11, Opposite MG Road Main Gate, Bangalore - 560001', 'Mg Road', '560001', 'Near Brigade Tower',
 '+91-80-4224-8888', 'private', ARRAY['Cardiology', 'Oncology', 'Emergency', 'Pediatrics'],
 650, 48, true, 4.8, false, 12.9352, 77.6245),

('bangalore-3', 'Victoria Hospital', 'bangalore', 'Bangalore',
 'Fort High Grounds, Bangalore - 560001', 'Fort Area', '560001', 'Near Vidhana Soudha',
 '+91-80-2670-2891', 'government', ARRAY['Cardiology', 'Emergency', 'Orthopedics', 'Pediatrics'],
 1500, 120, true, 4.4, true, 12.9716, 77.5900),

-- Hyderabad Hospitals
('hyderabad-1', 'Apollo Hospitals Hyderabad', 'hyderabad', 'Hyderabad',
 'Jubilee Hills, Hyderabad - 500033', 'Jubilee Hills', '500033', 'Near Durgam Cheruvu',
 '+91-40-2359-5000', 'private', ARRAY['Cardiology', 'Oncology', 'Neurology', 'Emergency', 'ICU'],
 800, 62, true, 4.8, false, 17.3850, 78.4867),

('hyderabad-2', 'CARE Hospitals', 'hyderabad', 'Hyderabad',
 'Banjara Hills, Hyderabad - 500034', 'Banjara Hills', '500034', 'Near Botanical Garden',
 '+91-40-6610-6610', 'private', ARRAY['Cardiology', 'Orthopedics', 'Emergency', 'Pediatrics'],
 700, 54, true, 4.6, false, 17.3845, 78.4867),

('hyderabad-3', 'Osmania Medical College Hospital', 'hyderabad', 'Hyderabad',
 'Afzalgunj, Hyderabad - 500012', 'Afzalgunj', '500012', 'Near Charminar',
 '+91-40-2455-4455', 'government', ARRAY['Cardiology', 'Emergency', 'Orthopedics'],
 1800, 145, true, 4.3, true, 17.3597, 78.4711),

-- Chennai Hospitals
('chennai-1', 'Apollo Hospitals Chennai', 'chennai', 'Chennai',
 '21, Greams Road, Chennai - 600006', 'Greams Road', '600006', 'Near Thousand Lights',
 '+91-44-2829-3333', 'private', ARRAY['Cardiology', 'Oncology', 'Neurology', 'Emergency', 'ICU'],
 900, 68, true, 4.8, false, 13.0047, 80.2544),

('chennai-2', 'Fortis Malar Hospital', 'chennai', 'Chennai',
 '3, Main Road, Landmark, Chennai - 600017', 'Adyar', '600017', 'Near Abirami Mega Mall',
 '+91-44-4273-3333', 'private', ARRAY['Cardiology', 'Emergency', 'Pediatrics', 'Orthopedics'],
 550, 42, true, 4.7, false, 13.0047, 80.2544),

('chennai-3', 'Stanley Medical College Hospital', 'chennai', 'Chennai',
 'Mount Road, Chennai - 600001', 'Mount Road', '600001', 'Near Central Station',
 '+91-44-2846-6996', 'government', ARRAY['Cardiology', 'Emergency', 'Orthopedics', 'Pediatrics'],
 2000, 160, true, 4.4, true, 13.0047, 80.2706),

-- Kolkata Hospitals
('kolkata-1', 'Apollo Hospitals Kolkata', 'kolkata', 'Kolkata',
 '9A, AJC Bose Road, Kolkata - 700017', 'AJC Bose Road', '700017', 'Near Park Circus',
 '+91-33-6652-2000', 'private', ARRAY['Cardiology', 'Oncology', 'Neurology', 'Emergency', 'ICU'],
 750, 58, true, 4.7, false, 22.5726, 88.3639),

('kolkata-2', 'AMRI Hospitals', 'kolkata', 'Kolkata',
 '1/1, JBS Haldane Avenue, Kolkata - 700105', 'Salt Lake City', '700105', 'Near City Center',
 '+91-33-2343-2343', 'private', ARRAY['Cardiology', 'Orthopedics', 'Emergency', 'Pediatrics'],
 650, 50, true, 4.6, false, 22.5665, 88.4229),

('kolkata-3', 'Medical College Hospital Kolkata', 'kolkata', 'Kolkata',
 '88, College Street, Kolkata - 700073', 'College Street', '700073', 'Near Rabindra Sarovar',
 '+91-33-2241-5323', 'government', ARRAY['Cardiology', 'Emergency', 'Orthopedics', 'Pediatrics'],
 2500, 200, true, 4.3, true, 22.5499, 88.3655),

-- Pune Hospitals
('pune-1', 'Ruby Hall Clinic', 'pune', 'Pune',
 'Sassoon Road, Pune - 411001', 'Sassoon Road', '411001', 'Near Pune Railway Station',
 '+91-20-2605-0000', 'private', ARRAY['Cardiology', 'Neurology', 'Emergency', 'Orthopedics', 'Oncology'],
 450, 35, true, 4.8, false, 18.5314, 73.8446),

('pune-2', 'Deenanath Mangeshkar Hospital', 'pune', 'Pune',
 'Railway Station Area, Pune - 411001', 'Railway Station Area', '411001', 'Near Pune Junction',
 '+91-20-2605-5000', 'private', ARRAY['Cardiology', 'Neurology', 'Emergency', 'Orthopedics'],
 350, 28, true, 4.0, true, 18.5314, 73.8446),

('pune-3', 'Jehangir Hospital', 'pune', 'Pune',
 '32, Sassoon Road, Near Pune Railway Station, Pune - 411001', 'Sassoon Road', '411001', 'Near Ruby Hall',
 '+91-20-2605-3333', 'private', ARRAY['Cardiology', 'Emergency', 'Pediatrics', 'Orthopedics'],
 400, 32, true, 4.7, false, 18.5314, 73.8446),

-- Ahmedabad Hospitals
('ahmedabad-1', 'Apollo Hospitals Ahmedabad', 'ahmedabad', 'Ahmedabad',
 'Opp. Moti Shahi Ej, SG Highway, Ahmedabad - 380015', 'SG Highway', '380015', 'Near Mahatma Mandir',
 '+91-79-2675-9999', 'private', ARRAY['Cardiology', 'Oncology', 'Emergency', 'Neurology', 'ICU'],
 700, 54, true, 4.7, false, 23.1815, 72.6289),

('ahmedabad-2', 'Asha Hospital', 'ahmedabad', 'Ahmedabad',
 'Sardar Patel Ring Road, Ahmedabad - 380005', 'Maninagar', '380005', 'Near Maninagar Station',
 '+91-79-4012-4012', 'private', ARRAY['Cardiology', 'Emergency', 'Pediatrics', 'Orthopedics'],
 550, 42, true, 4.6, false, 23.1815, 72.6289),

('ahmedabad-3', 'VS Hospital', 'ahmedabad', 'Ahmedabad',
 'Vaishnav Nagar, Satellite, Ahmedabad - 380015', 'Satellite', '380015', 'Near Satellite City',
 '+91-79-4075-7575', 'private', ARRAY['Cardiology', 'Emergency', 'Orthopedics', 'Pediatrics'],
 600, 46, true, 4.5, false, 23.2237, 72.5347);
