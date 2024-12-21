import { analyzeMedicineImage } from './geminiApi';

export async function validateMedicineImage(file: File): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img.width >= 200 && img.height >= 200);
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(false);
    };

    img.src = objectUrl;
  });
}

export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

export async function isMedicine(input: File | string): Promise<{
  isMedicine: boolean;
  description?: string;
  confidence: number;
}> {
  try {
    const imageData = typeof input === 'string' ? input : await fileToBase64(input);
    return await analyzeMedicineImage(imageData);
  } catch (error) {
    console.error('Error in medicine detection:', error);
    return { isMedicine: false, confidence: 0 };
  }
}