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
    name: "Hitesh Kambli",
    title: "Head – Human Resources",
    company: "Secure Parking India",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHqRzCGdrywiQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516556042842?e=1763596800&v=beta&t=efyyrD91we4PiPJaid2lCpvOSPk5JZMn1NLX4zg5l-I"
  },
  {
    id: 2,
    name: "Rajendra Lingwal",
    title: "Senior Vice President – Human Resources",
    company: "Persistent Systems",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFshcc7hhA1JQ/profile-displayphoto-scale_400_400/B4DZllpqm0IYAg-/0/1758347046222?e=1763596800&v=beta&t=EtWBClmczuHKUlwumfC16ivBSmnLw1qmc_tk72qXMvc"
  },
  {
    id: 3,
    name: "Karan Gandhi",
    title: "AVP - HR",
    company: "JSW",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGaVN4ZxbrMZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516254125371?e=1763596800&v=beta&t=oPSKLeU4YUjpSSHL0OEEwSK1iqfhCo4SimTBnFk6CCo"
  },
  {
    id: 4,
    name: "Stanley Monteiro",
    title: "Head – Talent Acquisition (Real Estate & Wholesale Finance)",
    company: "Piramal Enterprises Limited",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGWvJUOW8t-bQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723528106599?e=1763596800&v=beta&t=cBdYrH_kE6kKurjQwy4efygdwDkKrUgkzXwFdTRECAc"
  },
  {
    id: 5,
    name: "Parth Kulkarni",
    title: "Vice President – Human Resources (Manufacturing)",
    company: "Schindler India",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGv4IDbR-h4pw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694084412893?e=1763596800&v=beta&t=gOerP7DBiZlVLalZjrsky_m7JdYN90qWiFwF7Y_Bu_I"
  },
  {
    id: 6,
    name: "Neha Verma",
    title: "AGM - HR",
    company: "Aeries",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGdsNmkm1wHxQ/profile-displayphoto-scale_400_400/B4DZouUUz6IgAk-/0/1761713689440?e=1763596800&v=beta&t=9BNrulTov_g3El0Ne2SG_OKwXmaF9q0-y_287stJ5Jw"
  },
  {
    id: 7,
    name: "Pooja Amravanshi",
    title: "Senior Manager – HR Business Partner",
    company: "Company 3 Method India",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFsLT5QBHw6tw/profile-displayphoto-shrink_400_400/B4DZPVfNGvGoAk-/0/1734453548361?e=1763596800&v=beta&t=44YtnSW9e2FDuU1_VL9o-aataB4ZAe_VN5PYL6ckDvs"
  },
  {
    id: 8,
    name: "Anshuman Das",
    title: "AVP HR Business Partner (Wholesale Finance)",
    company: "Piramal Finance Limited",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEvI_lw-_dCPw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1620815306768?e=1763596800&v=beta&t=zgK8jUZMc_T5OWWDoWjI1rf72bbTD30FKLLb6PkOvqU"
  },
  {
    id: 9,
    name: "Sarabjeet Singh",
    title: "Sr. Director",
    company: "OpenGov Inc.",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFosSPM9rO-6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1589535137155?e=1763596800&v=beta&t=BpxCYPIKSXO2zlixtugdFbSbhSGQlMaOiMgOkiKm1Sc"
  },
  {
    id: 10,
    name: "Chirag Trivedi",
    title: "Sr. General Manager - HR",
    company: "VFS Global",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9FQ-Ho4Lzow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686207312500?e=1763596800&v=beta&t=KWBO7wl7Fvbymq2T4a2zX6XZCtqWXoXNGKDKQNaHHgY"
  },
  {
    id: 11,
    name: "Gaurav Bhalla",
    title: "Head- Global HR Shared Services",
    company: "Sodexo",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHsWNUq92bMkw/profile-displayphoto-shrink_400_400/B56ZWygQMxGQAk-/0/1742456554873?e=1763596800&v=beta&t=si64iQMvtXhkgOwONJoaLr7_sOvJfi3e7WZFKVUywEI"
  },
  {
    id: 12,
    name: "Vignesh Seetharaman",
    title: "Head HR",
    company: "Mondelez India BU",
    image: "https://media.licdn.com/dms/image/v2/C5103AQFA-MQ2pxi3kA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1582638375024?e=1763596800&v=beta&t=WpBD_byy5s_S3ywlQuLGhCauBkoiuyoKriyAnL2gRk4"
  },
  {
    id: 13,
    name: "Anand Dhruv",
    title: "Fractional Chief HR Officer",
    company: "RackBank Datacenter",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGNV0uUrwTT1g/profile-displayphoto-shrink_400_400/B4DZdOfbgbGYAk-/0/1749368553330?e=1763596800&v=beta&t=stISJbmHviR7fjD-CotrFFnciVAgqmTf96LxD6ODHQ0"
  },
  {
    id: 14,
    name: "Dhwani Patel",
    title: "Human Resources Manager",
    company: "ExSyn Corp",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQF5rpUJpitW7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668499596106?e=1763596800&v=beta&t=ETsKGTRJoPiqB9wOupv7K5H-7LC3r-W2lIePEV_xLUk"
  },
  {
    id: 15,
    name: "Rupali Mahadik",
    title: "Global - Employee Experience Program Manager",
    company: "QAD",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH7_zHLq558Ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676920629639?e=1763596800&v=beta&t=ldvVpLTbiqTrQe0m3-ZSa6GgsPoeFtN6j6_5UNrRGf8"
  },
  {
    id: 16,
    name: "Prasheel Pardhe",
    title: "Global Human Resources Director",
    company: "Design Industries - Atlassian Partners",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHsXCrwnSf_mQ/profile-displayphoto-scale_400_400/B4DZnoSmF7GgAg-/0/1760538813739?e=1763596800&v=beta&t=TGelCYOy5k2AVrFPsIzoxX0L5NjskvVI6wmk6K6hnyU"
  },
  {
    id: 17,
    name: "Debansh Roy",
    title: "Head of People | Board Member",
    company: "AllianceBernstein",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHrtYW-z3hyIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718428470626?e=1763596800&v=beta&t=fGzu0QpjCe45zatmu2GzBxeHKElNm5faKVKQgyIeIBI"
  },
  {
    id: 18,
    name: "Bobby Kuriakose",
    title: "Director - HR",
    company: "Forbes Marshall",
    image: "https://media.licdn.com/dms/image/v2/C5103AQFaezLkRDHNaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1549336075218?e=1763596800&v=beta&t=yGcrOqCfy3_NzS9p8qheeT2ew0T0eU6ZZdJIGm_Zk0Q"
  },
  {
    id: 19,
    name: "Vaibhav Goel",
    title: "Head - HR",
    company: "Reliance Industries",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHu1g7Tm7NzOw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1613752969626?e=1763596800&v=beta&t=HY1i-sAqDyg5INyxWyj3Q_ic1gJo6RxMauL-ewPBqr0"
  },
  {
    id: 20,
    name: "Varada Gupta",
    title: "Senior HR Manager",
    company: "Entytle",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHuGMAeEKZ5jA/profile-displayphoto-scale_400_400/B56Zhur4fIHMAo-/0/1754203655932?e=1763596800&v=beta&t=DqUzmGgyO60YHdq-gS_PetN6ycJWYv8z846gWE_vqnQ"
  },
  {
    id: 21,
    name: "Rajalakshmi Ranganathan",
    title: "AVP HR",
    company: "Link Intime India",
    image: "https://media.licdn.com/dms/image/v2/C5103AQHRjkN9z9ILXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1526105574092?e=1763596800&v=beta&t=Z62hSwY5GbdIxkYD0l6Cbh8eYmdqKJTBKmeAPv6fDds"
  },
  {
    id: 22,
    name: "Pratixha Narkar",
    title: "Vice President HR",
    company: "Nomura",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFYQP4P1wbdPA/profile-displayphoto-shrink_400_400/B4DZObnxO6HcAg-/0/1733482716752?e=1763596800&v=beta&t=NwgRgy-9_BE5_z6d91CzbK4p_Z5jwzfNqT8Sspx4n-U"
  },
  {
    id: 23,
    name: "Ruby Baksi",
    title: "Head - Talent Engagement and Development",
    company: "Harbinger Group",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  },
  {
    id: 24,
    name: "Rohit Kalamkar",
    title: "Director - HR",
    company: "SA Technologies",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEton91JIg5kA/profile-displayphoto-shrink_400_400/B4DZOGSlsRHoAg-/0/1733124841682?e=1763596800&v=beta&t=FTcBjlopeI_tGLtTZUPOTCbSrhVLbzhFEFJSMnskcvo"
  },
  {
    id: 25,
    name: "Madhuri Chhatbar",
    title: "People & Capability Manager - India",
    company: "adm Indicia",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFx-ta1osxLlg/profile-displayphoto-scale_400_400/B4DZhe9D7uGgAg-/0/1753939726017?e=1763596800&v=beta&t=OxN_7kGChkG_U0kH07Bfad64CU1DhPkEKAJ8Mc8ytUA"
  },
  {
    id: 26,
    name: "Balasubramanian Sethuraman",
    title: "Head HR",
    company: "Parekh Integrated Services Pvt. Ltd.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGsjtad0SSsIg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724664750297?e=1763596800&v=beta&t=FliP3pANXi5cH3yjAHUgUaz5ODkB1aEpw1E-3PDA3o8"
  },
  {
    id: 27,
    name: "Gurvinder Kumar",
    title: "Assistant Vice President - Human Resource",
    company: "Axis Max Life Insurance",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHmDTxezJC5QA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725479853786?e=1763596800&v=beta&t=ZwLrJpLeiSSms0TlCOtXeYXu95Eg59ZbhGjIVIUQlsA"
  },
  {
    id: 28,
    name: "Manish Jangid",
    title: "Head TA",
    company: "Sterlite Electric",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  },
  {
    id: 29,
    name: "Krishan Kumar",
    title: "Head HR",
    company: "PXIL",
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  }
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

              {/* CTA Button */}
              <div className="flex justify-center pt-8">
                <button 
                  onClick={() => window.open('/HRPoster.pdf', '_blank')} 
                  className="px-8 py-3 border-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center space-x-2" 
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
                CHIEF GUEST
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
                PANELISTS
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
                ROUND TABLE DISCUSSIONS
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