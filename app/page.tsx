'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
}

interface ChiefGuest {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
}

interface ChristLeader {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
}

interface Panelist {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
}

interface RoundTableSession {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
}

const roundTableSessions: RoundTableSession[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Round Table Session",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "VP of People Operations",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  
];

const panelists: Panelist[] = [
  {
    id: 1,
    name: "Abhijit Puri",
    title: "Global HR-TA Leader",
    company: "LTIMindtree",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEPokzfxgmcmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516267601032?e=1763596800&v=beta&t=beQFRMqzB43l8JpPQmYbN-idDE3ek4wDlY6ON-4nt10"
  },
  {
    id: 18,
    name: "Mahesh Joshi",
    title: "CHRO",
    company: "Honeywell",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  },
  {
    id: 19,
    name: "Anupama Pillai",
    title: "Global Talent Acquisition & Country HR Head",
    company: "HCLSoftware",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQE9SHj6zkQxnw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617707836051?e=1763596800&v=beta&t=2yMnp4ABnE55WvA9dp-YjS_fCr4lqLleTUvg-vNaS1E"
  },
  {
    id: 20,
    name: "Abhishek Gupta",
    title: "Head – People & Culture",
    company: "ZebPay",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEDmBm5AS60-g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1648733721564?e=1763596800&v=beta&t=jI5HAmwOlp05jOhVjlCtdUZxbH1pXjf4YFM98GP92l0"
  },
  {
    id: 2,
    name: "Dr. Rajani Tewari",
    title: "Chief People's Officer",
    company: "GreenCell Mobility",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFkSf6mElh8ow/profile-displayphoto-shrink_400_400/B4EZcc9XRXHIAk-/0/1748537539557?e=1763596800&v=beta&t=HB9gThfDrUia4GVCTK_Q5re_Ak6qARpmJ2P88fNtvrU"
  },
  {
    id: 3,
    name: "Farzeen Khan",
    title: "CHRO",
    company: "Being Human Clothing",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGmeAdmqTIBYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517702041120?e=1763596800&v=beta&t=E30yLvLX3FyiPr3wRRZ8hvQDHlxDyb1X2YBYx9Om_LI"
  },
  {
    id: 4,
    name: "Moushumi Dhar",
    title: "CHRO",
    company: "Indospace",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  },
  {
    id: 5,
    name: "Jasmeet Bhatia",
    title: "CHRO",
    company: "Thermal Limited",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGqa8O9symBBw/profile-displayphoto-shrink_400_400/B4DZXtVo2HHkAg-/0/1743443629029?e=1763596800&v=beta&t=DsQonJQty_h_OawTLJvr-7VA_n01YxK0A1Q4tRAeBRc"
  },
  {
    id: 6,
    name: "Dr. Sandeep Das",
    title: "Senior Vice-President",
    company: "Kodak Mahindra Bank",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGfKgNgv1PKHg/profile-displayphoto-scale_400_400/B4DZmPOMo4HsAg-/0/1759044489534?e=1763596800&v=beta&t=ltDv2q6mebD8Zy02aJNw1RT7RG4DxaVrGZeOgg0c3zc"
  },
  {
    id: 7,
    name: "Mukesh Kataria",
    title: "Head of Learning and Development",
    company: "KPMG India",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFJFZJrpl_ulQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694923189776?e=1763596800&v=beta&t=8azNmsVq9F-ciPddv5HCyr_hnKBVV-_cll-jHlQXajk"
  },
  {
    id: 8,
    name: "Dr. Saumya Badgayan Dutta",
    title: "Vice President – HR Business Strategy",
    company: "Gold Star Jewellery Pvt Ltd",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGfKgNgv1PKHg/profile-displayphoto-scale_400_400/B4DZmPOMo4HsAg-/0/1759044489534?e=1763596800&v=beta&t=ltDv2q6mebD8Zy02aJNw1RT7RG4DxaVrGZeOgg0c3zc"
  },
  {
    id: 9,
    name: "Arun Kumar Das",
    title: "Global Head – Learning & Customer Experience (Travel)",
    company: "Sutherland Global Services",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGyfrhWr7eA7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663639486621?e=1763596800&v=beta&t=DPgmX3QSeA9z9RIDPaZAdtwRMP5d7ECfYpWLhISBcIU"
  },
  {
    id: 10,
    name: "Sunita Rath",
    title: "Chief People Officer",
    company: "Bandhan Life",
    image: "https://media.licdn.com/dms/image/v2/C5103AQEv9idr3tNvXw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1582294125320?e=1763596800&v=beta&t=maGHgVxBSpibUwvhA1MbnGwppWENe5qyrv3Xqbpq5F4"
  },
  {
    id: 11,
    name: "Swati Dogra",
    title: "Head – Human Resources, South Asia",
    company: "Omya",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQErgPeVw912XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662821048626?e=1763596800&v=beta&t=gThfKAB6T9auwiYhmsp4mSAk9x8ghjdhYmjhcvwWYOU"
  },
  {
    id: 12,
    name: "Padmaja Singh Arya",
    title: "Head – Human Resources",
    company: "NSE Cogencis",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  },
  {
    id: 13,
    name: "Arpita Pamnani",
    title: "Vice President Human Resource",
    company: "Axis Bank",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHrJQgeszUgeg/profile-displayphoto-shrink_400_400/B4DZc0bKxFG8Ag-/0/1748931229589?e=1763596800&v=beta&t=7Pb4MF4nL1CtVhecCat4OzPkTh7fJGHqJ-5YvQOCRPg"
  },
  {
    id: 14,
    name: "Dr. Brillian S.K.",
    title: "Executive Vice President & Chief People Officer",
    company: "TimesPro",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH6xe65KMt1zQ/profile-displayphoto-scale_400_400/B56ZnMeoVKKEAg-/0/1760072206430?e=1763596800&v=beta&t=V-h4qzxVbPtRdvHma5yPxgYTDGYMUXZihEMqYO15hOE"
  },
  {
    id: 15,
    name: "Ravi Sharma",
    title: "Chief People Officer",
    company: "Baan Ganga Gold & Diamonds",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHQVy3s0uMcgw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691909758378?e=1763596800&v=beta&t=kekLf3YrtLkFLRvBMJbmnD0jj3nErFLjupTGeNa0b5w"
  },
  {
    id: 16,
    name: "Dr. Subhash Mali",
    title: "Chief People Officer",
    company: "H.K. Designs (Hari Krishna Group)",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHPhDKxnswVwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659181227456?e=1763596800&v=beta&t=_Tj0KR77UlHwlh6xpllG0z00q7vCT5fGa6TWMALo0NM"
  },
  {
    id: 17,
    name: "Preeti Ahuja",
    title: "Chief People Officer",
    company: "Husk Power",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEojcctNwTuVg/profile-displayphoto-shrink_800_800/B4DZUuZjUBHwAc-/0/1740240208876?e=1763596800&v=beta&t=fLMA8-7mHxEGsQtC5zGol4JZRpHECws9jB216esoRHw"
  }
];

const christLeaders: ChristLeader[] = [
  {
    id: 1,
    name: "Fr. Lijo Thomas",
    title: "Dean & Director",
    company: "Christ (Deemed to be University) Pune Lavasa Campus",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHJYSCEOgY6OA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1627456859146?e=1763596800&v=beta&t=i0oLMxMb165KzmlPEQouqTjXDVJezjf6eN4rsmGM5DI"
  },
  {
    id: 2,
    name: "Fr. Justin P Varghese",
    title: "Academic Coordinator",
    company: "Christ (Deemed to be University) Pune Lavasa Campus",
    image: "https://media.licdn.com/dms/image/v2/C5603AQG-wbh-okkhLw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1644668499646?e=1763596800&v=beta&t=tkwRAJ4vs200sH5LIxf4srJAzxzCWMIDrMwS2_2pZvw"
  },
];

const chiefGuests: ChiefGuest[] = [
  {
    id: 1,
    name: "Unmesh Pawar",
    title: "Chief People Officer South Asia",
    company: "dentsu",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9fpOxVcbCTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669463519137?e=1763596800&v=beta&t=7tEy6WXyQlVddMlRmeNb8KmkO0mzJ7ycAeogxzdoEFM"
  },
  {
    id: 2,
    name: "Dr. Radhakrishnan Pillai",
    title: "Director",
    company: "Chanakya International Institute of Leadership Studies, University of Mumbai",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQESZgdo6UjLgQ/profile-displayphoto-scale_400_400/B4DZd9tKBBGsAg-/0/1750160681231?e=1763596800&v=beta&t=ZAvWYCOi-7nfPwblhzuawPm7dlOccmHpb3PTp7yeHUA"
  },
];
const speakers: Speaker[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Chief Human Resources Officer",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "VP of People Operations",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Director of Diversity & Inclusion",
    company: "Global Enterprises",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Head of Talent Acquisition",
    company: "FutureWork Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=facee"
  },
  {
    id: 5,
    name: "John Doe",
    title: "Speaker",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "John Doe",
    title: "Speaker",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "John Doe",
    title: "Speaker",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
];

// const getGridClass = (count: number) => {
//   if (count === 1) return 'grid-cols-1';
//   if (count === 2) return 'grid-cols-1 md:grid-cols-2';
//   if (count === 3) return 'grid-cols-1 md:grid-cols-3';
//   return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
// };

const getGridClass = (count: number) => {
  if (count === 1) return 'grid grid-cols-1 gap-2';
  if (count === 2) return 'grid grid-cols-1 md:grid-cols-2 gap-2';
  if (count === 3) return 'grid grid-cols-1 md:grid-cols-3 gap-2';
  return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2';
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #112250 0%, #3B507D 100%)' }}>
      {/* Navbar */}
      <Navbar activePage='home'/>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E0C58E' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Header */}
        <header className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#F5F0EA' }}>
                HR Vista
                <span className="block" style={{ color: '#E0C58E' }}>
                  2.0
                </span>
          </h1>
              
              <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed" style={{ color: '#D9CBC2' }}>
                Shaping the Future of Human Resources
              </p>
              
              <div className="text-lg mb-12 space-y-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                <div className="flex items-center justify-center space-x-3">
                  <FaCalendarAlt className="text-xl flex-shrink-0" style={{ color: '#E0C58E' }} />
                  <span className="text-center">15-16 November 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <FaUniversity className="text-xl flex-shrink-0" style={{ color: '#E0C58E' }} />
                  <span className="text-center">Christ (Deemed to be University)</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <FaMapMarkerAlt className="text-xl flex-shrink-0" style={{ color: '#E0C58E' }} />
                  <span className="text-center">Pune Lavasa Campus, Maharashtra</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <button onClick={() => window.open('/HRPoster.pdf', '_blank')} className="px-8 py-4 border-2 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105" style={{ borderColor: '#E0C58E', color: '#F5F0EA' }}>
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse" style={{ backgroundColor: '#E0C58E30' }}></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000" style={{ backgroundColor: '#D9CBC230' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full blur-xl animate-pulse delay-2000" style={{ backgroundColor: '#F5F0EA30' }}></div>
      </div>

      <main className="relative z-10">

        <section id="cheif-guest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                Chief Guest
              </h2>
            </div>
            <div
              className={`grid ${getGridClass(chiefGuests.length)} gap-8 justify-items-center max-w-5xl mx-auto`}
            >
              {chiefGuests.map((chiefGuest, index) => (
                <div 
                  key={chiefGuest.id} 
                  className="w-[340px] max-w-full group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#F5F0EA20', 
                    borderColor: '#E0C58E40',
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="text-center">
                    {/* Speaker Photo */}
                    <div className="relative mb-6">
                      <img 
                        src={chiefGuest.image}
                        alt={chiefGuest.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: '#F5F0EA' }}>
                      {chiefGuest.name}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {chiefGuest.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {chiefGuest.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="christ-leadership" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                Christ Leaders
              </h2>
            </div>
            <div
              className={`grid ${getGridClass(christLeaders.length)} gap-8 justify-items-center max-w-5xl mx-auto`}
            >
              {christLeaders.map((christLeader, index) => (
                <div 
                  key={christLeader.id} 
                  className="w-[340px] max-w-full group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#F5F0EA20', 
                    borderColor: '#E0C58E40',
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="text-center">
                    {/* Speaker Photo */}
                    <div className="relative mb-6">
                      <img 
                        src={christLeader.image}
                        alt={christLeader.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: '#F5F0EA' }}>
                      {christLeader.name}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {christLeader.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {christLeader.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers Section */}


        <section id="panelists" className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                Panelists Discussions
              </h2>
            </div>
            <div
              className={`grid ${getGridClass(panelists.length)} gap-8 justify-items-center max-w-5xl mx-auto`}
            >
              {panelists.map((panelist, index) => (
                <div 
                  key={panelist.id} 
                  className="w-[340px] max-w-full group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#F5F0EA20', 
                    borderColor: '#E0C58E40',
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="text-center">
                    {/* Speaker Photo */}
                    <div className="relative mb-6">
                      <img 
                        src={panelist.image}
                        alt={panelist.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: '#F5F0EA' }}>
                      {panelist.name}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {panelist.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {panelist.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="round-table-discussions" className='py-20'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                Round Table Sessions
              </h2>
            </div>
            <div
              className={`grid ${getGridClass(roundTableSessions.length)} gap-8 justify-items-center max-w-5xl mx-auto`}
            >
              {roundTableSessions.map((roundTableSession, index) => (
                <div 
                  key={roundTableSession.id} 
                  className="w-[340px] max-w-full group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#F5F0EA20', 
                    borderColor: '#E0C58E40',
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="text-center">
                    {/* Speaker Photo */}
                    <div className="relative mb-6">
                      <img 
                        src={roundTableSession.image}
                        alt={roundTableSession.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: '#F5F0EA' }}>
                      {roundTableSession.name}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {roundTableSession.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {roundTableSession.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}