'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AFTERMOVIE_DRIVE = 'https://drive.google.com/drive/folders/1HazVTGgw-b_YKnE7tJMY5H7eycl_yJzM';
const AFTERMOVIE_EMBED = 'https://drive.google.com/embeddedfolderview?id=1HazVTGgw-b_YKnE7tJMY5H7eycl_yJzM#grid';
const PHOTOS_DRIVE = 'https://drive.google.com/drive/folders/18B8V0TdchcBr5Ul30LsDdl2N0Lw8Zx-X';
const PHOTOS_EMBED = 'https://drive.google.com/embeddedfolderview?id=18B8V0TdchcBr5Ul30LsDdl2N0Lw8Zx-X#grid';

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<'aftermovie' | 'photos'>('aftermovie');

  const isAftermovie = activeTab === 'aftermovie';
  const iframeSrc = isAftermovie ? AFTERMOVIE_EMBED : PHOTOS_EMBED;
  const driveHref = isAftermovie ? AFTERMOVIE_DRIVE : PHOTOS_DRIVE;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #112250 0%, #3B507D 100%)' }}>
      <Navbar activePage='media' />
      <main className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#F5F0EA' }}>Media</h1>
            <p className="mt-2 text-sm" style={{ color: '#D9CBC2' }}>Watch the aftermovie and browse event photos</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                onClick={() => setActiveTab('aftermovie')}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${isAftermovie ? 'bg-[#E0C58E] text-[#112250]' : ''}`}
                style={{ borderColor: '#E0C58E', color: isAftermovie ? '#112250' : '#F5F0EA', backgroundColor: isAftermovie ? '#E0C58E' : 'transparent' }}
              >
                Aftermovie
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${!isAftermovie ? 'bg-[#E0C58E] text-[#112250]' : ''}`}
                style={{ borderColor: '#E0C58E', color: !isAftermovie ? '#112250' : '#F5F0EA', backgroundColor: !isAftermovie ? '#E0C58E' : 'transparent' }}
              >
                Photos
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg border" style={{ borderColor: '#E0C58E40', backgroundColor: '#0F172A66' }}>
              <div className="aspect-video">
                <iframe
                  src={iframeSrc}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => window.open(driveHref, '_blank')}
                className="px-6 py-2 border-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ borderColor: '#E0C58E', color: '#F5F0EA', backgroundColor: 'rgba(224, 197, 142, 0.1)' }}
              >
                Open on Drive
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


