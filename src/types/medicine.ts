export interface Medicine {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  uses: string[];
  dosage: string;
  sideEffects: string[];
  warnings: string[];
  manufacturer: string;
}

export interface IdentificationResult {
  confidence: number;
  medicine: Medicine;
}