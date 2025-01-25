import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageCarousel({ images = [], alt, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Handle case where images is undefined or not an array
  const imageArray = Array.isArray(images) ? images.filter(url => {
    // Clean up the URL and validate it
    const cleanUrl = url.trim();
    try {
      new URL(cleanUrl);
      return cleanUrl.includes('cloudinary.com');
    } catch {
      console.warn(`Invalid image URL: ${url}`);
      return false;
    }
  }).map(url => url.trim()) : []; // Ensure URLs are trimmed

  // Reset failed images when images prop changes
  useEffect(() => {
    setFailedImages(new Set());
    setIsLoading(true);
  }, [images]);

  const nextSlide = () => {
    if (imageArray.length <= 1) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoading(true);
  };

  const previousSlide = () => {
    if (imageArray.length <= 1) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
    setIsLoading(true);
  };

  const handleImageError = (index: number) => {
    console.warn(`Failed to load image: ${imageArray[index]}`);
    setFailedImages(prev => new Set([...prev, index]));
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Render image with loading state
  const renderImage = (src: string, index: number) => (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${className}`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      <img
        src={src}
        alt={index === 0 ? alt : `${alt} - ${index + 1}`}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={() => handleImageError(index)}
        onLoad={handleImageLoad}
      />
    </div>
  );

  // If no images, show a placeholder
  if (!imageArray.length) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">No image available</span>
      </div>
    );
  }

  // If only one image, just show it without carousel controls
  if (imageArray.length === 1) {
    return failedImages.has(0) ? (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">Image not available</span>
      </div>
    ) : (
      renderImage(imageArray[0], 0)
    );
  }

  return (
    <div className="relative group">
      {failedImages.has(currentIndex) ? (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <span className="text-gray-400">Image not available</span>
        </div>
      ) : (
        renderImage(imageArray[currentIndex], currentIndex)
      )}
      
      {imageArray.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={previousSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsLoading(true);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 