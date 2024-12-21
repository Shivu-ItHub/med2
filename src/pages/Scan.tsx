import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from '../components/ImageUpload';
import { CameraCapture } from '../components/CameraCapture';
import { identifyMedicine } from '../utils/mockIdentification';
import { AlertCircle } from 'lucide-react';

export function ScanPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImage = async (input: File | string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await identifyMedicine(input);
      
      if (!result) {
        setError('No medicine detected in the image. Please try again with a clear image of a medicine.');
        return;
      }
      
      navigate(`/medicine/${result.medicine.id}`);
    } catch (error) {
      console.error('Error identifying medicine:', error);
      setError('An error occurred while processing the image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Scan Your Medicine
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Upload Medicine Image
            </h2>
            <ImageUpload onImageSelect={handleImage} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Capture with Camera
            </h2>
            <CameraCapture onImageCapture={handleImage} />
          </div>
        </div>

        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Analyzing medicine image...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}