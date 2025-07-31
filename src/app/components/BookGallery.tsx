'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BookGalleryProps {
  mainImage: string;
  mainImageAlt: string;
  thumbnails: {
    src: string;
    alt: string;
    label: string;
  }[];
  title: string;
  subtitle?: string;
  author: string;
}

export default function BookGallery({ 
  mainImage, 
  mainImageAlt, 
  thumbnails, 
  title, 
  subtitle, 
  author 
}: BookGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4 lg:space-y-6 w-full">
      {/* Main Book Cover */}
      <div className="relative flex justify-center">
        <Image
          src={selectedImage === 0 ? mainImage : thumbnails[selectedImage].src}
          alt={selectedImage === 0 ? mainImageAlt : thumbnails[selectedImage].alt}
          width={300}
          height={400}
          className="w-48 h-64 lg:w-80 lg:h-96 rounded-lg shadow-2xl object-cover"
          priority
          onError={(e) => {
            console.warn(`Failed to load image: ${selectedImage === 0 ? mainImage : thumbnails[selectedImage].src}`);
          }}
        />
        <div className="absolute inset-0 bg-black/20 rounded-lg flex flex-col justify-end p-4">
          <div className="text-white text-center">
            <h2 className="text-md font-bold mb-1">{title}</h2>
            {subtitle && <p className="text-sm mb-2">{subtitle}</p>}
            <p className="text-sm opacity-90">by {author}</p>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4 justify-center">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
              selectedImage === index 
                ? 'ring-2 ring-black scale-105' 
                : 'hover:scale-105'
            }`}
          >
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              width={80}
              height={100}
              className="object-cover"
              onError={(e) => {
                console.warn(`Failed to load thumbnail: ${thumbnail.src}`);
              }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-medium">
                {thumbnail.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Read Sample Button */}
      <button className="bg-black hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer w-full max-w-xs">
        Read sample
      </button>
    </div>
  );
} 