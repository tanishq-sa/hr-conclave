'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Partner = {
  name: string;
  image: string;
  website?: string;
};

const partners: Partner[] = [
  {
    name: 'Reliance Industries',
    image: 'https://rilstaticasset.akamaized.net/sites/default/files/2022-11/reliance-industries-ltd.png',
    website: 'https://www.ril.com/'
  },
  {
    name: 'LTIMindtree',
    image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2025-10/16/full/1760626653-9135.jpg?im=FitAndFill=(826,465)',
    website: 'https://www.ltimindtree.com/'
  },
  {
    name: 'Wipro',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png',
    website: 'https://www.wipro.com/'
  },
  {
    name: 'Kotak Mahindra Bank',
    image: 'https://yt3.googleusercontent.com/s1zJ6RDrKExXpsla4ttFH8bB3xAp0NSognqZzZ5JFue2dfknlVYhT9HamJbUDL8jsO9EkhHLug=s900-c-k-c0x00ffffff-no-rj',
    website: 'https://www.kotak.com/'
  },
  {
    name: 'AllianceBernstein',
    image: 'https://media.licdn.com/dms/image/v2/D4E0BAQELcO3RSsixGQ/company-logo_200_200/company-logo_200_200/0/1719842303489?e=2147483647&v=beta&t=1pbbtTA3KdNgRSLn2NL_zfmhcR-TznyF_1kuhisOVl4',
    website: 'https://www.alliancebernstein.com/'
  },
  {
    name: 'Sodexo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Sodexo_logo.svg',
    website: 'https://www.sodexo.com/'
  },
  {
    name: 'Schaeffler Group',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cBYHZ0wDOpbRR1vK-0mzs_YEsI_IKxGteA&s',
    website: 'https://www.schaeffler.com/'
  },
  {
    name: 'Burckhardt Compression',
    image: 'https://ship.nridigital.com/ship/ship_mar19/burckhardt_compression/308490/logo.640_0_1.png',
    website: 'https://www.burckhardtcompression.com/'
  },
  {
    name: 'Zoetis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zoetis_logo.svg/1200px-Zoetis_logo.svg.png',
    website: 'https://www.zoetis.com/'
  },
  {
    name: 'SLB',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsM3QN6ZFWs5n4EtZGqLyFU44XL5xjLusIg&s',
    website: 'https://www.slb.com/'
  },
  {
    name: 'Tata Consultancy Services',
    image: 'https://www.drupal.org/files/TCS_NewLogo_Final_RGB.png',
    website: 'https://www.tcs.com/'
  },
  {
    name: 'IBM',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/960px-IBM_logo.svg.png',
    website: 'https://www.ibm.com/'
  },
  {
    name: 'Panasonic',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIhvFChvupMODHOp9AgLIcvJY0UeDXNjmjA&s',
    website: 'https://www.panasonic.com/'
  },
  {
    name: 'Reliance Jio',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohZW0W9TJymIUxUO7wDwLLWzxdugPz5FiRw&s',
    website: 'https://www.jio.com/'
  },
  {
    name: 'State Bank of India',
    image: 'https://ismg-cdn.nyc3.cdn.digitaloceanspaces.com/articles/sbi-investigates-reported-massive-data-leak-showcase_image-2-a-11986.jpg',
    website: 'https://www.sbi.co.in/'
  },
  {
    name: 'KPMG',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/1200px-KPMG_blue_logo.svg.png',
    website: 'https://kpmg.com/'
  },
  {
    name: 'Mondelez International',
    image: 'https://media.potatopro.com/mondelez-1200x589.jpg',
    website: 'https://www.mondelezinternational.com/'
  },
  {
    name: 'Rolls-Royce',
    image: 'https://cdn.globalcarsbrands.com/wp-content/uploads/2014/10/Rolls-Royce-Logo.jpg',
    website: 'https://www.rolls-roycemotorcars.com/'
  },
  {
    name: 'Bajaj Finserv',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/2560px-Bajaj_Finserv_Logo.svg.png',
    website: 'https://www.bajajfinserv.in/'
  },
  {
    name: 'Tata Elxsi',
    image: 'https://media.licdn.com/dms/image/v2/D560BAQHokkOB2wD0SQ/company-logo_200_200/company-logo_200_200/0/1663566365167/tataelxsi_logo?e=2147483647&v=beta&t=06AFCglI9hg8_gDvdng91TadOqn4k2l2de1vZbaj0BE',
    website: 'https://www.tataelxsi.com/'
  },
  {
    name: 'NTT',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NTT_2025.svg/250px-NTT_2025.svg.png',
    website: 'https://www.global.ntt/'
  },
  {
    name: 'Infosys',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png',
    website: 'https://www.infosys.com/'
  },
  {
    name: 'HCL Technologies',
    image: 'https://www.3ds.com/fileadmin/depositary/alliances/CRM_SITELOGO/20241200/200000000029592_1HCLTech_logo.png',
    website: 'https://www.hcltech.com/'
  },
  {
    name: 'WNS Global Services',
    image: 'https://pbs.twimg.com/profile_images/1915443850254180352/hxgR05ar_400x400.jpg',
    website: 'https://www.wns.com/'
  },
  {
    name: 'Fujitsu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGjqHyoPElrGaGab1i4RkryBMJ52HVH0B3Q&s',
    website: 'https://www.fujitsu.com/'
  },
  {
    name: 'Baker Hughes',
    image: 'https://assets.spe.org/dims4/default/7636881/2147483647/strip/true/crop/1024x538+0+85/resize/1200x630!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.us-east-2.amazonaws.com%2Fcc%2F82%2F1cb0bcc09ac7f1a29c076813c81e%2Fjpt-2019-new-bhi-logo.png',
    website: 'https://www.bakerhughes.com/'
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: 'linear-gradient(135deg, rgba(17, 34, 80, 0.7) 0%, rgba(59, 80, 125, 0.7) 100%), url("/Untitled design-6.png") center/cover no-repeat fixed'
    }}>
      {/* Navbar */}
      <Navbar activePage='partners' />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E0C58E' fill-opacity='0.2'%3E%3Cpath d='M11 11h2v2h-2zM15 15h2v2h-2zM19 19h2v2h-2zM23 23h2v2h-2zM27 27h2v2h-2zM31 31h2v2h-2zM35 35h2v2h-2zM39 39h2v2h-2zM43 43h2v2h-2zM47 47h2v2h-2zM51 51h2v2h-2zM55 55h2v2h-2zM59 59h2v2h-2zM63 63h2v2h-2zM67 67h2v2h-2zM71 71h2v2h-2zM75 75h2v2h-2zM79 79h2v2h-2zM83 83h2v2h-2zM87 87h2v2h-2zM91 91h2v2h-2zM95 95h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
                <FaArrowLeft className="mr-2" /> Back to Home
              </Link>
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ 
                  color: '#F5F0EA',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }}>
                  Our Esteemed Partners
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to collaborate with industry leaders who share our vision for innovation and excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center h-40 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105"
                  title={partner.name}
                >
                  <div className="relative w-full h-16 mb-4">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/placeholder-logo.png'; // Fallback image
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
