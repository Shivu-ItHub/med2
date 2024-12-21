import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyD775P_p56q3ebGsj-A1UZSdRDEJvqyqrE');

export async function analyzeMedicineImage(imageData: string): Promise<{
  isMedicine: boolean;
  description?: string;
  confidence: number;
}> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
    
    // Remove data URL prefix if present
    const base64Image = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    
    const prompt = `Analyze this image and determine if it contains medicine/pharmaceutical products. 
    If it does, provide a detailed description of the medicine. 
    Format the response as JSON with the following structure:
    {
      "isMedicine": boolean,
      "description": string,
      "confidence": number (0-100)
    }`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Image,
          mimeType: 'image/jpeg'
        }
      }
    ]);

    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text);
    } catch (e) {
      // If parsing fails, make a best effort to determine if it's medicine
      const isMedicineRelated = text.toLowerCase().includes('medicine') || 
                               text.toLowerCase().includes('pill') ||
                               text.toLowerCase().includes('drug');
      
      return {
        isMedicine: isMedicineRelated,
        description: text,
        confidence: isMedicineRelated ? 75 : 25
      };
    }
  } catch (error) {
    console.error('Error analyzing image with Gemini:', error);
    return {
      isMedicine: false,
      confidence: 0
    };
  }
}