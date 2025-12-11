export interface HealthIssue {
  id: string;
  name: string;
  category: 'emergency' | 'chronic' | 'general' | 'specialty';
  description: string;
  urgency: 'immediate' | 'urgent' | 'moderate' | 'routine';
  requiredSpecialties: string[];
  symptoms: string[];
  immediateRemedies: string[];
  whenToSeekHelp: string[];
  preventiveMeasures: string[];
  icon: string;
}

export const healthIssues: HealthIssue[] = [
  // Emergency Issues
  {
    id: 'heart-attack',
    name: 'Heart Attack / Chest Pain',
    category: 'emergency',
    description: 'Severe chest pain, shortness of breath, or heart-related emergency',
    urgency: 'immediate',
    requiredSpecialties: ['Emergency', 'Cardiology', 'Intensive Care'],
    symptoms: ['Severe chest pain', 'Shortness of breath', 'Sweating', 'Nausea', 'Left arm pain'],
    immediateRemedies: [
      'Call emergency services immediately',
      'Chew aspirin if not allergic (300mg)',
      'Sit upright and stay calm',
      'Loosen tight clothing',
      'Do not drive yourself to hospital'
    ],
    whenToSeekHelp: [
      'Severe chest pain lasting more than 5 minutes',
      'Pain spreading to arm, jaw, or back',
      'Difficulty breathing',
      'Sweating and nausea together'
    ],
    preventiveMeasures: [
      'Regular exercise',
      'Healthy diet low in saturated fats',
      'Quit smoking',
      'Manage stress',
      'Regular health checkups'
    ],
    icon: '❤️'
  },
  {
    id: 'stroke',
    name: 'Stroke / Brain Attack',
    category: 'emergency',
    description: 'Sudden weakness, speech problems, or neurological symptoms',
    urgency: 'immediate',
    requiredSpecialties: ['Emergency', 'Neurology', 'Intensive Care'],
    symptoms: ['Sudden weakness', 'Speech difficulty', 'Facial drooping', 'Severe headache', 'Vision problems'],
    immediateRemedies: [
      'Call emergency services immediately',
      'Note the time symptoms started',
      'Keep person calm and lying down',
      'Do not give food or water',
      'Check FAST: Face, Arms, Speech, Time'
    ],
    whenToSeekHelp: [
      'Sudden weakness on one side',
      'Difficulty speaking or understanding',
      'Sudden severe headache',
      'Loss of vision or balance'
    ],
    preventiveMeasures: [
      'Control blood pressure',
      'Manage diabetes',
      'Quit smoking',
      'Limit alcohol',
      'Regular exercise'
    ],
    icon: '🧠'
  },
  {
    id: 'accident-trauma',
    name: 'Accident / Trauma',
    category: 'emergency',
    description: 'Road accident, fall, or physical injury requiring immediate care',
    urgency: 'immediate',
    requiredSpecialties: ['Emergency', 'Trauma', 'Orthopedics', 'Surgery'],
    symptoms: ['Severe bleeding', 'Broken bones', 'Head injury', 'Unconsciousness', 'Severe pain'],
    immediateRemedies: [
      'Call emergency services immediately',
      'Do not move the person unless safe',
      'Control bleeding with direct pressure',
      'Keep person warm and conscious',
      'Do not remove objects from wounds'
    ],
    whenToSeekHelp: [
      'Any head injury',
      'Suspected broken bones',
      'Heavy bleeding',
      'Loss of consciousness',
      'Severe pain'
    ],
    preventiveMeasures: [
      'Wear seatbelts and helmets',
      'Follow traffic rules',
      'Avoid distracted driving',
      'Use proper safety equipment',
      'Be aware of surroundings'
    ],
    icon: '🚑'
  },

  // Chronic Conditions
  {
    id: 'diabetes',
    name: 'Diabetes Management',
    category: 'chronic',
    description: 'Blood sugar management and diabetes-related complications',
    urgency: 'moderate',
    requiredSpecialties: ['Endocrinology', 'General Medicine', 'Diabetology'],
    symptoms: ['High blood sugar', 'Frequent urination', 'Excessive thirst', 'Fatigue', 'Blurred vision'],
    immediateRemedies: [
      'Check blood sugar levels',
      'Take prescribed medication',
      'Drink water if sugar is high',
      'Eat something if sugar is low',
      'Monitor symptoms closely'
    ],
    whenToSeekHelp: [
      'Blood sugar over 300 mg/dl',
      'Persistent vomiting',
      'Difficulty breathing',
      'Confusion or drowsiness',
      'Severe dehydration'
    ],
    preventiveMeasures: [
      'Regular blood sugar monitoring',
      'Healthy diet with controlled carbs',
      'Regular exercise',
      'Take medications as prescribed',
      'Regular doctor visits'
    ],
    icon: '🩺'
  },
  {
    id: 'hypertension',
    name: 'High Blood Pressure',
    category: 'chronic',
    description: 'Blood pressure management and related cardiovascular issues',
    urgency: 'moderate',
    requiredSpecialties: ['Cardiology', 'General Medicine', 'Internal Medicine'],
    symptoms: ['Headaches', 'Dizziness', 'Chest pain', 'Shortness of breath', 'Nosebleeds'],
    immediateRemedies: [
      'Take prescribed BP medication',
      'Sit down and rest',
      'Practice deep breathing',
      'Avoid salt and caffeine',
      'Monitor blood pressure'
    ],
    whenToSeekHelp: [
      'BP over 180/120 mmHg',
      'Severe headache with high BP',
      'Chest pain',
      'Difficulty breathing',
      'Vision changes'
    ],
    preventiveMeasures: [
      'Low sodium diet',
      'Regular exercise',
      'Maintain healthy weight',
      'Limit alcohol',
      'Manage stress'
    ],
    icon: '💓'
  },

  // General Health Issues
  {
    id: 'fever-infection',
    name: 'Fever / Infection',
    category: 'general',
    description: 'High fever, flu, or suspected infections',
    urgency: 'urgent',
    requiredSpecialties: ['General Medicine', 'Internal Medicine', 'Infectious Diseases'],
    symptoms: ['High fever', 'Body aches', 'Chills', 'Fatigue', 'Sore throat'],
    immediateRemedies: [
      'Take paracetamol for fever',
      'Drink plenty of fluids',
      'Get adequate rest',
      'Use cool compresses',
      'Avoid aspirin in children'
    ],
    whenToSeekHelp: [
      'Fever over 103°F (39.4°C)',
      'Fever lasting more than 3 days',
      'Difficulty breathing',
      'Severe headache',
      'Persistent vomiting'
    ],
    preventiveMeasures: [
      'Wash hands frequently',
      'Get vaccinated',
      'Avoid close contact with sick people',
      'Maintain good hygiene',
      'Boost immunity with healthy diet'
    ],
    icon: '🤒'
  },
  {
    id: 'stomach-pain',
    name: 'Stomach Pain / Digestive Issues',
    category: 'general',
    description: 'Abdominal pain, nausea, vomiting, or digestive problems',
    urgency: 'moderate',
    requiredSpecialties: ['Gastroenterology', 'General Medicine', 'Surgery'],
    symptoms: ['Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea', 'Loss of appetite'],
    immediateRemedies: [
      'Stay hydrated with clear fluids',
      'Eat bland foods (BRAT diet)',
      'Avoid dairy and spicy foods',
      'Apply heat pad to abdomen',
      'Take antacids if needed'
    ],
    whenToSeekHelp: [
      'Severe abdominal pain',
      'Blood in vomit or stool',
      'Signs of dehydration',
      'Fever with abdominal pain',
      'Pain lasting more than 24 hours'
    ],
    preventiveMeasures: [
      'Eat regular, balanced meals',
      'Avoid spicy and oily foods',
      'Stay hydrated',
      'Practice good food hygiene',
      'Manage stress'
    ],
    icon: '🤢'
  },

  // Specialty Issues
  {
    id: 'pregnancy-maternity',
    name: 'Pregnancy / Maternity Care',
    category: 'specialty',
    description: 'Pregnancy complications, labor, or maternity-related issues',
    urgency: 'urgent',
    requiredSpecialties: ['Obstetrics', 'Gynecology', 'Maternity', 'Neonatology'],
    symptoms: ['Labor pains', 'Bleeding', 'Severe nausea', 'High blood pressure', 'Reduced fetal movement'],
    immediateRemedies: [
      'Time contractions if in labor',
      'Stay calm and breathe deeply',
      'Contact your doctor immediately',
      'Go to hospital if water breaks',
      'Avoid eating during active labor'
    ],
    whenToSeekHelp: [
      'Regular contractions 5 minutes apart',
      'Water breaks',
      'Heavy bleeding',
      'Severe headache with swelling',
      'No fetal movement for 2+ hours'
    ],
    preventiveMeasures: [
      'Regular prenatal checkups',
      'Take prenatal vitamins',
      'Healthy diet and exercise',
      'Avoid alcohol and smoking',
      'Monitor fetal movements'
    ],
    icon: '🤱'
  },
  {
    id: 'mental-health',
    name: 'Mental Health Crisis',
    category: 'specialty',
    description: 'Depression, anxiety, panic attacks, or mental health emergencies',
    urgency: 'urgent',
    requiredSpecialties: ['Psychiatry', 'Psychology', 'Mental Health', 'Emergency'],
    symptoms: ['Severe anxiety', 'Panic attacks', 'Suicidal thoughts', 'Severe depression', 'Hallucinations'],
    immediateRemedies: [
      'Call mental health helpline',
      'Stay with someone you trust',
      'Practice deep breathing',
      'Remove harmful objects',
      'Seek immediate professional help'
    ],
    whenToSeekHelp: [
      'Thoughts of self-harm',
      'Severe panic attacks',
      'Hallucinations or delusions',
      'Unable to function daily',
      'Substance abuse with mental symptoms'
    ],
    preventiveMeasures: [
      'Regular therapy sessions',
      'Take prescribed medications',
      'Maintain social connections',
      'Regular exercise and sleep',
      'Stress management techniques'
    ],
    icon: '🧘'
  },
  {
    id: 'child-pediatric',
    name: 'Child Health Issues',
    category: 'specialty',
    description: 'Pediatric emergencies, child illness, or developmental concerns',
    urgency: 'urgent',
    requiredSpecialties: ['Pediatrics', 'Child Health', 'Emergency', 'Neonatology'],
    symptoms: ['High fever in child', 'Difficulty breathing', 'Persistent crying', 'Rash', 'Vomiting'],
    immediateRemedies: [
      'Keep child calm and comfortable',
      'Monitor temperature regularly',
      'Ensure adequate hydration',
      'Follow age-appropriate dosing',
      'Contact pediatrician immediately'
    ],
    whenToSeekHelp: [
      'Fever over 100.4°F in infants under 3 months',
      'Difficulty breathing',
      'Persistent vomiting',
      'Signs of dehydration',
      'Unusual behavior or lethargy'
    ],
    preventiveMeasures: [
      'Keep up with vaccinations',
      'Regular pediatric checkups',
      'Childproof your home',
      'Teach good hygiene habits',
      'Monitor developmental milestones'
    ],
    icon: '👶'
  }
];

export const getHealthIssuesByCategory = (category: string) => {
  return healthIssues.filter(issue => issue.category === category);
};

export const getHealthIssueById = (id: string) => {
  return healthIssues.find(issue => issue.id === id);
};

export const searchHealthIssues = (query: string) => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  return healthIssues.filter(issue => 
    issue.name.toLowerCase().includes(searchTerm) ||
    issue.description.toLowerCase().includes(searchTerm) ||
    issue.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm))
  );
};