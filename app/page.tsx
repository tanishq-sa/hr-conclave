'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
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
  linkedin?: string;
}

interface ChristLeader {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  linkedin?: string;
}

interface Panelist {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  panel: number;
  role: 'Moderator' | 'Member' | 'Panel Member';
  linkedin?: string;
  note?: string;
}

interface RoundTableSession {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  roundTable?: number;
  panel?: number;
  role: 'Moderator' | 'Panel Member' | 'Panelist' | 'Keynote Speaker';
  linkedin?: string;
}

const roundTableSessions: (RoundTableSession & { note?: string })[] = [
  // Round Table 1
  {
    id: 1,
    name: "Ramanuj Choubey",
    title: "Associate Director – Global HRBP & Capability Development",
    company: "Tata Communications Transformation Services",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Moderator'
  },
  {
    id: 2,
    name: "Kirti Patkar",
    title: "Sr AGM – HR (Head L&D & HR Tech)",
    company: "APAR Industries Limited",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member',
    note: "Daughter also coming"
  },
  {
    id: 3,
    name: "Stanley Monteiro",
    title: "Head – Talent Acquisition (Real Estate & Wholesale Finance)",
    company: "Piramal Enterprises Limited",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 5,
    name: "Neha Verma",
    title: "AGM - HR",
    company: "Aeries",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 6,
    name: "Pooja Amravanshi",
    title: "Senior Manager – HR Business Partner",
    company: "Company 3 Method India",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 7,
    name: "Anshuman Das",
    title: "AVP HR Business Partner (Wholesale Finance)",
    company: "Piramal Finance Limited",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 9,
    name: "Krishan Kumar",
    title: "Head HR",
    company: "PXIL",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 21,
    name: "Arundhati Katdare",
    title: "Head HR",
    company: "",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 22,
    name: "Ankita Gupta",
    title: "Talent Acquisition and Risk Management",
    company: "Wipro",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 23,
    name: "Atin Karmokar",
    title: "Sr. VP - Head Human Resources & Admin",
    company: "Pentagon System & Services Pvt. Ltd.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 24,
    name: "Amit Kakar",
    title: "VP HR",
    company: "GSL Ltd",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  {
    id: 25,
    name: "Davinder Kaur",
    title: "Vice President People and Culture",
    company: "Team Rustic Pvt. Ltd.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 1,
    role: 'Panel Member'
  },
  // Round Table 2
  {
    id: 10,
    name: "Balasubramanian Sethuraman",
    title: "Head HR",
    company: "Parekh Integrated Services Pvt. Ltd.",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Moderator'
  },
  {
    id: 11,
    name: "Dhwani Patel",
    title: "Human Resources Manager",
    company: "ExSyn Corp",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 13,
    name: "Varada Gupta",
    title: "Senior HR Manager",
    company: "Entytle",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 14,
    name: "Manish Jangid",
    title: "Head TA",
    company: "Sterlite Electric",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 15,
    name: "Rajalakshmi Ranganathan",
    title: "AVP HR",
    company: "Link Intime India",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member',
    note: "Non-alcoholic, pure veg - to be paired with Gurvinder Kumar"
  },
  {
    id: 16,
    name: "Pratixha Narkar",
    title: "Vice President HR",
    company: "Nomura",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 17,
    name: "Nikhil Bhojwani",
    title: "Head - Learning & Development",
    company: "Mumbai Metro One Pvt Ltd",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 18,
    name: "Sujeet Patil",
    title: "People Partner",
    company: "Smollan",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 19,
    name: "Senthil Kumar S",
    title: "Associate Vice President - Human Resources",
    company: "HDFC Life Insurance Company Limited",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 20,
    name: "Madhuri Chhatbar",
    title: "People & Capability Manager - India",
    company: "adm Indicia",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 21,
    name: "Gurvinder Kumar",
    title: "Assistant Vice President - Human Resource",
    company: "Axis Max Life Insurance",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 22,
    name: "Ashwin S Jaisinghani",
    title: "AVP - People Success",
    company: "Searce INC",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  },
  {
    id: 23,
    name: "Sumeet Pattnaik",
    title: "Head HR BP",
    company: "Premium Group",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    roundTable: 2,
    role: 'Panel Member'
  }
];

const panelists: Panelist[] = [
  {
    id: 1,
    name: "Abhijit Puri",
    title: "Global HR-TA Leader",
    company: "LTIMindtree",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEPokzfxgmcmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516267601032?e=1763596800&v=beta&t=beQFRMqzB43l8JpPQmYbN-idDE3ek4wDlY6ON-4nt10",
    panel: 1,
    role: 'Moderator',
    linkedin: "https://www.linkedin.com/in/abhijitpuri"
  },
  {
    id: 3,
    name: "Moushumi Dhar",
    title: "Chief Human Resources Officer",
    company: "IndoSpace",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 1,
    role: 'Panel Member',
    note: "Will attend on Saturday only and will leave same day",
    linkedin: "https://www.linkedin.com/in/moushumi-dhar-0662051"
  },
  {
    id: 4,
    name: "Hitesh Kambli",
    title: "Head – Human Resources",
    company: "Secure Parking India",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHqRzCGdrywiQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516556042842?e=1763596800&v=beta&t=efyyrD91we4PiPJaid2lCpvOSPk5JZMn1NLX4zg5l-I",
    panel: 1,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/hitesh-kambli-98724615"
  },
  {
    id: 5,
    name: "Rajendra Lingwal",
    title: "Senior Vice President – Human Resources",
    company: "Persistent Systems",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFshcc7hhA1JQ/profile-displayphoto-scale_400_400/B4DZllpqm0IYAg-/0/1758347046222?e=1763596800&v=beta&t=EtWBClmczuHKUlwumfC16ivBSmnLw1qmc_tk72qXMvc",
    panel: 1,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/rajendra-lingwal-gphr-executive-coach-7bb2161/"
  },
  {
    id: 6,
    name: "Ruby Baksi",
    title: "Head - Talent Engagement and Development",
    company: "Harbinger Group",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 1,
    role: 'Panel Member'
  },
  // Panel 2 - Moderator
  {
    id: 7,
    name: "Arun Kumar Das",
    title: "Global Head – Learning & Customer Experience (Travel)",
    company: "Sutherland Global Services",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGyfrhWr7eA7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663639486621?e=1763596800&v=beta&t=DPgmX3QSeA9z9RIDPaZAdtwRMP5d7ECfYpWLhISBcIU",
    panel: 2,
    role: 'Moderator',
    linkedin: "https://www.linkedin.com/in/arunkumardas"
  },
  // Panel 2 - Members
  {
    id: 8,
    name: "Swati Dogra",
    title: "Head – Human Resources, South Asia",
    company: "Omya",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQErgPeVw912XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662821048626?e=1763596800&v=beta&t=gThfKAB6T9auwiYhmsp4mSAk9x8ghjdhYmjhcvwWYOU",
    panel: 2,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/swati-dogra",
    note: "Husband and daughter also coming"
  },
  {
    id: 9,
    name: "Padmaja Singh Arya",
    title: "Head – Human Resources",
    company: "NSE Cogencis",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 2,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/padmajasingharya",  },
  {
    id: 10,
    name: "Dr. Sandeep Das",
    title: "Senior Vice President & Head – Domain Training",
    company: "Kotak Mahindra Bank",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGfKgNgv1PKHg/profile-displayphoto-scale_400_400/B4DZmPOMo4HsAg-/0/1759044489534?e=1763596800&v=beta&t=ltDv2q6mebD8Zy02aJNw1RT7RG4DxaVrGZeOgg0c3zc",
    panel: 2,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/sandeepdas1980"
  },
  {
    id: 21,
    name: "Vaibhav Goel",
    title: "Head - HR",
    company: "Reliance Industries",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 2,
    role: 'Panel Member'
  },
  // Panel 3 - Members
  {
    id: 11,
    name: "Dr. Brillian S.K.",
    title: "Executive Vice President & Chief People Officer",
    company: "TimesPro",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 3,
    role: 'Moderator'
  },
  {
    id: 12,
    name: "Dr. Subhash Mali",
    title: "Chief People Officer",
    company: "H.K. Designs (Hari Krishna Group)",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHPhDKxnswVwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659181227456?e=1764201600&v=beta&t=O3Z3aZYrgbGpNXh6yaa-2yWx_uGVekd8bQCwuAk-GnY",
    panel: 3,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/dr-subhash-mali-56b690a"
  },
  {
    id: 13,
    name: "Gaurav Bhalla",
    title: "Head- Global HR Shared Services",
    company: "Sodexo",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 3,
    role: 'Panel Member'
  },
  {
    id: 14,
    name: "Preeti Ahuja",
    title: "Chief People Officer",
    company: "Husk Power",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEojcctNwTuVg/profile-displayphoto-shrink_800_800/B4DZUuZjUBHwAc-/0/1740240208876?e=1763596800&v=beta&t=fLMA8-7mHxEGsQtC5zGol4JZRpHECws9jB216esoRHw",
    panel: 3,
    role: 'Panel Member',
    linkedin: "https://www.linkedin.com/in/preeti-ahuja-21235567"
  },
  // Panel 4 - Moderator
  {
    id: 16,
    name: "Dr. Saumya Badgayan Dutta",
    title: "Vice President – HR Business Strategy",
    company: "Gold Star Jewellery Pvt Ltd",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE2_AqTmrbhBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729660311860?e=1763596800&v=beta&t=crLkgxZAwyFkrMUO-sV7MppTc8i4HanGnywSuddlRLc",
    panel: 4,
    role: 'Moderator',
    note: "Will be there on 16th",
    linkedin: "https://www.linkedin.com/in/dr-saumya-badgayan-dutta-70b4b114"
  },
  // Panel 4 - Members
  {
    id: 17,
    name: "Rohit Kalamkar",
    title: "Director - HR",
    company: "SA Technologies",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 4,
    role: 'Panel Member'
  },
  {
    id: 18,
    name: "Sanjay Shanmygam",
    title: "Global head, VP HR",
    company: "Control Case",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 4,
    role: 'Panel Member'
  },
  {
    id: 19,
    name: "Rupesh Panabur",
    title: "HRBP & ER : Head HR",
    company: "Schaeffler group",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 4,
    role: 'Panel Member'
  },
  {
    id: 20,
    name: "Anand Dhruv",
    title: "Fractional Chief HR Officer",
    company: "RackBank Datacenter",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 4,
    role: 'Panel Member'
  },
  {
    id: 21,
    name: "Kishor Kenche",
    title: "CHRO",
    company: "Gold Plus Glass Industry",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    panel: 4,
    role: 'Panel Member'
  }
];

const christLeaders: ChristLeader[] = [
  {
    id: 1,
    name: "Fr. Lijo Thomas",
    title: "Dean & Director",
    company: "Christ (Deemed to be University) Pune Lavasa Campus",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHJYSCEOgY6OA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1627456859146?e=1763596800&v=beta&t=i0oLMxMb165KzmlPEQouqTjXDVJezjf6eN4rsmGM5DI",
    linkedin: "https://www.linkedin.com/in/lijo-thomas-1b4459218/"
  },
  {
    id: 2,
    name: "Fr. Justin P Varghese",
    title: "Academic Coordinator",
    company: "Christ (Deemed to be University) Pune Lavasa Campus",
    image: "https://media.licdn.com/dms/image/v2/C5603AQG-wbh-okkhLw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1644668499646?e=1763596800&v=beta&t=tkwRAJ4vs200sH5LIxf4srJAzxzCWMIDrMwS2_2pZvw",
    linkedin: "https://www.linkedin.com/in/justin-p-varghese-2661351a3/"
  },
];

interface FiresideChatGuest {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  linkedin?: string;
  role?: string;
}

const firesideChatGuests: FiresideChatGuest[] = [
  {
    id: 1,
    name: "Sudhir Mateti",
    title: "CHRO",
    company: "Arvind Limited",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEqOPy2O3Lbog/profile-displayphoto-scale_400_400/B56Zj1CRMTHIAk-/0/1756457670837?e=1764806400&v=beta&t=OQ9WNUYFEtVQPvxcdkcFnZSjGgszcxcSdv3wXGLG52A",
    linkedin: "https://www.linkedin.com/in/sudhirmateti/"
  },
  {
    id: 2,
    name: "Balasubramanian Sethuraman",
    title: "Head HR",
    company: "Parekh Integrated Services Pvt. Ltd.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGsjtad0SSsIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724664750297?e=1764806400&v=beta&t=D3g5Z_A6UOeFwsRSBA0OFstKrKyvyp-Dsw-O5r6Ctl4",
    linkedin: "https://www.linkedin.com/in/bala-s"
  }
];

const chiefGuests: ChiefGuest[] = [
  {
    id: 1,
    name: "Unmesh Pawar",
    title: "Chief People Officer South Asia",
    company: "dentsu",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9fpOxVcbCTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669463519137?e=1763596800&v=beta&t=7tEy6WXyQlVddMlRmeNb8KmkO0mzJ7ycAeogxzdoEFM",
    linkedin: "https://www.linkedin.com/in/unmeshpawar/"
  },
  {
    id: 2,
    name: "Dr. Radhakrishnan Pillai",
    title: "Director",
    company: "Chanakya International Institute of Leadership Studies, University of Mumbai",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQESZgdo6UjLgQ/profile-displayphoto-scale_400_400/B4DZd9tKBBGsAg-/0/1750160681231?e=1763596800&v=beta&t=ZAvWYCOi-7nfPwblhzuawPm7dlOccmHpb3PTp7yeHUA",
    linkedin: "https://www.linkedin.com/in/rchanakyapillai"
  }
];

interface GuestOfHonor {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  linkedin?: string;
}

const guestsOfHonor: GuestOfHonor[] = [
  {
    id: 1,
    name: "Arshad Fakhri",
    title: "President",
    company: "PROSE Technologies India",
    image: "https://i.ibb.co/mCtJ9LKM/Whats-App-Image-2025-11-13-at-8-14-22-PM.jpg",
    linkedin: "https://www.linkedin.com/in/arshad-fakhri-ba713722/"
  }
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
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, rgba(17, 34, 80, 0.7) 0%, rgba(59, 80, 125, 0.7) 100%), url("/Untitled design-6.png") center/cover no-repeat fixed'
    }}>
      {/* Navbar */}
      <Navbar activePage='home'/>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E0C58E' fill-opacity='0.2'%3E%3Cpath d='M11 11h2v2h-2zM15 15h2v2h-2zM19 19h2v2h-2zM23 23h2v2h-2zM27 27h2v2h-2zM31 31h2v2h-2zM35 35h2v2h-2zM39 39h2v2h-2zM43 43h2v2h-2zM47 47h2v2h-2zM51 51h2v2h-2zM55 55h2v2h-2zM59 59h2v2h-2zM63 63h2v2h-2zM67 67h2v2h-2zM71 71h2v2h-2zM75 75h2v2h-2zM79 79h2v2h-2zM83 83h2v2h-2zM87 87h2v2h-2zM91 91h2v2h-2zM95 95h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Header */}
        <header className="relative z-10">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-8">
            <div className="text-center space-y-8">
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(224, 197, 142, 0.1)' }}>
                <span className="text-sm md:text-base font-medium tracking-wider uppercase" style={{ color: '#E0C58E', letterSpacing: '0.1em' }}>Annual HR Conclave</span>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight" style={{ 
                  color: '#F5F0EA',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }}>
                  <span className="block">HR Vista</span>
                  <span className="block text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(90deg, #E0C58E 0%, #F5F0EA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '1.1'
                  }}>2.0</span>
                </h1>
                
                <div className="w-24 h-1.5 mx-auto my-6 rounded-full" style={{ backgroundColor: '#E0C58E' }}></div>
                
                <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight max-w-3xl mx-auto" style={{ 
                  color: '#E0C58E',
                  lineHeight: '1.3',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                }}>
                  Human Future — Redefining Leadership in the Post-AI World
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto pt-6">
                <div className="relative p-8 rounded-2xl bg-opacity-20 backdrop-blur-sm" style={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(224, 197, 142, 0.2)'
                }}>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-1.5 rounded-full" style={{ backgroundColor: '#E0C58E' }}></div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed" style={{ 
                    color: '#D9CBC2',
                    lineHeight: '1.8',
                    fontWeight: 300
                  }}>
                    As artificial intelligence reshapes industries and decision-making, leadership must evolve beyond traditional hierarchies and control. The future belongs to leaders who blend emotional intelligence with technological literacy—those who understand machines yet remain deeply human.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row justify-center gap-6 pt-8">
                <div className="flex items-center justify-center space-x-3 px-6 py-3 rounded-full" style={{ 
                  backgroundColor: 'rgba(224, 197, 142, 0.1)',
                  border: '1px solid rgba(224, 197, 142, 0.2)'
                }}>
                  <FaCalendarAlt className="flex-shrink-0" style={{ color: '#E0C58E' }} />
                  <span className="font-medium">15-16 November 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-3 px-6 py-3 rounded-full" style={{ 
                  backgroundColor: 'rgba(224, 197, 142, 0.1)',
                  border: '1px solid rgba(224, 197, 142, 0.2)'
                }}>
                  <FaUniversity className="flex-shrink-0" style={{ color: '#E0C58E' }} />
                  <span className="font-medium">Christ (Deemed to be University)</span>
                </div>
                <div className="flex items-center justify-center space-x-3 px-6 py-3 rounded-full" style={{ 
                  backgroundColor: 'rgba(224, 197, 142, 0.1)',
                  border: '1px solid rgba(224, 197, 142, 0.2)'
                }}>
                  <FaMapMarkerAlt className="flex-shrink-0" style={{ color: '#E0C58E' }} />
                  <span className="font-medium">Pune Lavasa Campus</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                <button 
                  onClick={() => window.open('/HRPoster.pdf', '_blank')} 
                  className="px-8 py-3 border-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2" 
                  style={{ 
                    borderColor: '#E0C58E', 
                    color: '#F5F0EA',
                    backgroundColor: 'rgba(224, 197, 142, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <span>Download Brochure</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('/HRPoster1.pdf', '_blank')} 
                  className="px-8 py-3 border-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2" 
                  style={{ 
                    borderColor: '#E0C58E', 
                    color: '#F5F0EA',
                    backgroundColor: 'rgba(224, 197, 142, 0.1)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <span>Download Itinerary</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
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
                CHIEF GUESTS
              </h2>
            </div>
            <div
              className={`grid ${getGridClass(chiefGuests.length)} gap-8 justify-items-center max-w-5xl mx-auto`}
            >
              {chiefGuests.map((guest) => (
                <div
                  key={guest.id}
                  className="w-full max-w-xs group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{
                    backgroundColor: '#F5F0EA20',
                    borderColor: '#E0C58E40',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                      {guest.name}
                      {guest.linkedin && (
                        <a 
                          href={guest.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#E0C58E] transition-colors"
                        >
                          <FaLinkedin size={16} />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {guest.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {guest.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="guest-of-honor" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                GUEST OF HONOR
              </h2>
            </div>
            <div 
              className={`grid ${getGridClass(guestsOfHonor.length)} gap-8 justify-items-center max-w-5xl mx-auto`}
            >
              {guestsOfHonor.map((guest) => (
                <div
                  key={guest.id}
                  className="w-full max-w-xs group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{
                    backgroundColor: '#F5F0EA20',
                    borderColor: '#E0C58E40',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <div className="text-center">
                    {/* Speaker Photo */}
                    <div className="relative mb-6">
                      <img 
                        src={guest.image}
                        alt={guest.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                      {guest.name}
                      {guest.linkedin && (
                        <a 
                          href={guest.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#E0C58E] transition-colors"
                        >
                          <FaLinkedin size={16} />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {guest.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {guest.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="christ-leadership" className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                CHRIST LEADERS
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
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                      {christLeader.name}
                      {christLeader.linkedin && (
                        <a 
                          href={christLeader.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#E0C58E] transition-colors"
                        >
                          <FaLinkedin size={16} />
                        </a>
                      )}
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

        {/* Fireside Chat Section */}
        <section id="fireside-chat" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                FIRESIDE CHAT
              </h2>
              <p className="text-xl text-[#E0C58E] max-w-3xl mx-auto mb-8">
              </p>
            </div>
            <div className={`grid ${getGridClass(firesideChatGuests.length)} gap-8 justify-items-center max-w-5xl mx-auto`}>
              {firesideChatGuests.map((guest, index) => (
                <div 
                  key={guest.id} 
                  className="w-[340px] max-w-full group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border"
                  style={{ 
                    backgroundColor: '#F5F0EA20', 
                    borderColor: '#E0C58E40',
                    animationDelay: `${index * 100}ms` 
                  }}
                >
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img 
                        src={guest.image}
                        alt={guest.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                      {guest.role && (
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium" 
                          style={{ backgroundColor: 'rgba(224, 197, 142, 0.2)', color: '#E0C58E' }}>
                          {guest.role}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                      {guest.name}
                      {guest.linkedin && (
                        <a 
                          href={guest.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#E0C58E] transition-colors"
                        >
                          <FaLinkedin size={16} />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm font-semibold mb-1" style={{ color: '#E0C58E' }}>
                      {guest.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: '#D9CBC2', opacity: 0.8 }}>
                      {guest.company}
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
                PANELISTS
              </h2>
            </div>

            {([1, 2, 3, 4] as const).map((panelNumber) => {
              const titleMap: Record<number, string> = {
                1: 'Reimagining Work Architecture: Skills, Roles & AI Integration',
                2: 'HR Analytics & Decision Intelligence: From Data to Strategic Impact',
                3: 'Human-Centric Leadership in the Age of AI',
                4: 'Human-Centered Leadership in a Post-AI World: Embracing Empathy, Creativity, and Purpose',
              };
              const panelGroup = panelists.filter(p => p.panel === panelNumber);
              const moderators = panelGroup.filter(p => p.role.toLowerCase() === 'moderator');
              const members = panelGroup.filter(p => p.role.toLowerCase() === 'member' || p.role.toLowerCase() === 'panel member');
              return (
                <div key={panelNumber} className="mb-16">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: '#E0C58E' }}>
                    Panel {panelNumber}: {titleMap[panelNumber]}
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: '#F5F0EA' }}>
                      Moderator
                    </h4>
                    <div className={`grid ${getGridClass(moderators.length)} gap-8 justify-items-center max-w-5xl mx-auto`}>
                      {moderators.map((panelist, index) => (
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
                            <div className="relative mb-6">
                              <img
                                src={panelist.image}
                                alt={panelist.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                              />
                            </div>
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                              {panelist.name}
                              {panelist.linkedin && (
                                <a 
                                  href={panelist.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-[#E0C58E] transition-colors"
                                >
                                  <FaLinkedin size={16} />
                                </a>
                              )}
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

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: '#F5F0EA' }}>
                      Members
                    </h4>
                    <div className={`grid ${getGridClass(members.length)} gap-8 justify-items-center max-w-5xl mx-auto`}>
                      {members.map((panelist, index) => (
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
                            <div className="relative mb-6">
                              <img
                                src={panelist.image}
                                alt={panelist.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                              />
                            </div>
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                              {panelist.name}
                              {panelist.linkedin && (
                                <a 
                                  href={panelist.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-[#E0C58E] transition-colors"
                                >
                                  <FaLinkedin size={16} />
                                </a>
                              )}
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
                </div>
              );
            })}
          </div>
        </section>


        <section id="round-table-discussions" className='py-20'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F0EA' }}>
                ROUND TABLE DISCUSSIONS
              </h2>
            </div>

            {([1, 2] as const).map((roundTableNumber) => {
              const titleMap: Record<number, string> = {
                1: 'Building Future-Ready Leadership Pipeline',
                2: 'Employee Experience in the Digital Age',
              };
              const roundTableGroup = roundTableSessions.filter(rt => rt.roundTable === roundTableNumber);
              const moderators = roundTableGroup.filter(rt => rt.role === 'Moderator');
              const members = roundTableGroup.filter(rt => rt.role === 'Panel Member');
              return (
                <div key={roundTableNumber} className="mb-16">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: '#E0C58E' }}>
                    Round Table {roundTableNumber}: {titleMap[roundTableNumber]}
                  </h3>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: '#F5F0EA' }}>
                      Moderator
                    </h4>
                    <div className={`grid ${getGridClass(moderators.length)} gap-8 justify-items-center max-w-5xl mx-auto`}>
                      {moderators.map((roundTableSession, index) => (
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
                            <div className="relative mb-6">
                              <img
                                src={roundTableSession.image}
                                alt={roundTableSession.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                              />
                            </div>
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                              {roundTableSession.name}
                              {roundTableSession.linkedin && (
                                <a 
                                  href={roundTableSession.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-[#E0C58E] transition-colors"
                                >
                                  <FaLinkedin size={16} />
                                </a>
                              )}
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

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: '#F5F0EA' }}>
                      Panel Members
                    </h4>
                    <div className={`grid ${getGridClass(members.length)} gap-8 justify-items-center max-w-5xl mx-auto`}>
                      {members.map((roundTableSession, index) => (
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
                            <div className="relative mb-6">
                              <img
                                src={roundTableSession.image}
                                alt={roundTableSession.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                              />
                            </div>
                            <h3 className="text-xl font-bold mb-2 transition-colors duration-300 flex items-center justify-center gap-2" style={{ color: '#F5F0EA' }}>
                              {roundTableSession.name}
                              {roundTableSession.linkedin && (
                                <a 
                                  href={roundTableSession.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-[#E0C58E] transition-colors"
                                >
                                  <FaLinkedin size={16} />
                                </a>
                              )}
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
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
