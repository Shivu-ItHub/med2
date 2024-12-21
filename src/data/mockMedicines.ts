import { Medicine } from '../types/medicine';

export const mockMedicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    description: 'Common pain reliever and fever reducer',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500',
    uses: [
      'Headache',
      'Muscle aches',
      'Fever reduction',
      'Minor arthritis pain'
    ],
    dosage: 'Adults and children 12 years and over: 1-2 tablets every 4-6 hours as needed',
    sideEffects: [
      'Nausea',
      'Stomach pain',
      'Loss of appetite',
      'Headache'
    ],
    warnings: [
      'Do not exceed 8 tablets in 24 hours',
      'Avoid alcohol while taking this medication',
      'Consult doctor if symptoms persist'
    ],
    manufacturer: 'PharmaCorp Ltd.'
  },
  {
    id: '2',
    name: 'Ibuprofen 200mg',
    description: 'Non-steroidal anti-inflammatory drug (NSAID)',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=500',
    uses: [
      'Pain relief',
      'Inflammation reduction',
      'Fever treatment',
      'Menstrual cramps'
    ],
    dosage: 'Adults and children over 12: 1-2 tablets every 4-6 hours',
    sideEffects: [
      'Stomach upset',
      'Heartburn',
      'Dizziness',
      'Mild headache'
    ],
    warnings: [
      'Do not use if you have stomach ulcers',
      'Do not exceed 6 tablets in 24 hours',
      'Take with food or milk'
    ],
    manufacturer: 'HealthPharm Industries'
  }
];