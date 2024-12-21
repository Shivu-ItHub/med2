import React, { useRef, useState, useEffect } from 'react';
import { Camera, X, RotateCcw } from 'lucide-react';

interface CameraCaptureProps {
  onImageCapture: (imageData: string) => void;
}

export function CameraCapture({ onImageCapture }: CameraCaptureProps) {
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setError('');
      
      // Check if the browser supports getUserMedia
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error('Camera access is not supported in your browser');
      }

      // Request camera permission
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        streamRef.current = stream;
        setIsStreaming(true);
        setError('');
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      handleCameraError(err);
    }
  };

  const handleCameraError = (error: any) => {
    if (error.name === 'NotAllowedError') {
      setError(
        'Camera access was denied. Please grant camera permissions in your browser settings and try again.'
      );
    } else if (error.name === 'NotFoundError') {
      setError('No camera device was found. Please connect a camera and try again.');
    } else if (error.name === 'NotReadableError') {
      setError('Camera is in use by another application. Please close other apps using the camera.');
    } else {
      setError('An error occurred while accessing the camera. Please try again.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsStreaming(false);
  };

  const retryCamera = () => {
    stopCamera();
    startCamera();
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        onImageCapture(imageData);
        stopCamera();
      }
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-100">
      {!isStreaming ? (
        <div className="p-6 text-center">
          <button
            onClick={startCamera}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Camera className="w-5 h-5 mr-2" />
            Open Camera
          </button>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
              <button
                onClick={retryCamera}
                className="mt-2 text-sm text-purple-600 hover:text-purple-700 inline-flex items-center gap-1"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
            <button
              onClick={captureImage}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Capture
            </button>
            <button
              onClick={retryCamera}
              className="p-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={stopCamera}
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}