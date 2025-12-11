/*
  # Create hospitals table

  1. New Tables
    - `hospitals`
      - `id` (text, primary key) - Unique identifier
      - `name` (text) - Hospital name
      - `city_id` (text) - City identifier
      - `city_name` (text) - City name
      - `address` (text) - Full address
      - `area` (text) - Area/locality
      - `pincode` (text) - Postal code
      - `landmark` (text) - Nearby landmark
      - `phone` (text) - Contact number
      - `type` (text) - Hospital type (government/private)
      - `specialties` (text[]) - List of specialties
      - `total_beds` (integer) - Total number of beds
      - `available_beds` (integer) - Currently available beds
      - `emergency_services` (boolean) - Has emergency services
      - `rating` (numeric) - Hospital rating
      - `arogya_sri_empanelled` (boolean) - Arogya Sri scheme enrollment
      - `latitude` (numeric) - Latitude coordinate
      - `longitude` (numeric) - Longitude coordinate
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `hospitals` table
    - Add policy for public read access (hospitals are public information)
*/

CREATE TABLE IF NOT EXISTS hospitals (
  id text PRIMARY KEY,
  name text NOT NULL,
  city_id text NOT NULL,
  city_name text NOT NULL,
  address text NOT NULL,
  area text,
  pincode text,
  landmark text,
  phone text,
  type text CHECK (type IN ('government', 'private')),
  specialties text[] DEFAULT '{}',
  total_beds integer DEFAULT 0,
  available_beds integer DEFAULT 0,
  emergency_services boolean DEFAULT false,
  rating numeric DEFAULT 0,
  arogya_sri_empanelled boolean DEFAULT false,
  latitude numeric,
  longitude numeric,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Hospitals are publicly readable"
  ON hospitals
  FOR SELECT
  TO public
  USING (true);
