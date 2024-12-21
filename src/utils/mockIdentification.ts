import { Medicine, IdentificationResult } from '../types/medicine';
import { mockMedicines } from '../data/mockMedicines';
import { isMedicine } from './imageProcessing';

export async function identifyMedicine(imageFile: File | string): Promise<IdentificationResult | null> {
  try {
    // First, check if the image contains a medicine
    const medicineCheck = await isMedicine(imageFile);
    
    if (!medicineCheck.isMedicine) {
      return null;
    }

    // If it is a medicine, proceed with identification
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Randomly select a medicine and use the confidence from medicine check
    const randomMedicine: Medicine = mockMedicines[Math.floor(Math.random() * mockMedicines.length)];
    
    return {
      confidence: medicineCheck.confidence,
      medicine: randomMedicine
    };
  } catch (error) {
    console.error('Error in medicine identification:', error);
    return null;
  }
}