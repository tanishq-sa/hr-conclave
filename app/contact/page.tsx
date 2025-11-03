"use client";

import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
  {
    id: 1,
    name: "Prof. Shankar Iyer",
    role: "Head - CPCG",
    email: "shankaran.iyer@christuniversity.in",
    phone: "+91 82912 00603",
  },
  {
    id: 2,
    name: "Prof. Akhil Paul",
    role: "Placement Officer - CPCG",
    email: "akhil.paul@christuniversity.in",
    phone: "+91 81292 66626",
  },
  {
    id: 3,
    name: "Rushda Siddiqui",
    role: "President - Student Wing CPCG",
    email: "rushda.siddiqui@maedh.christuniversity.in",
    phone: "+91 99199 15111",
  },
  {
    id: 4,
    name: "Shyambahadur Prajapati",
    role: "Being HR",
    email: "Shyam@beinghr.online",
    phone: "+91 92215 49250",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #112250 0%, #3B507D 100%)" }}>
      <Navbar activePage="contact" />
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#F5F0EA" }}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#D9CBC2" }}>
            Reach out to our team for any queries related to HR Vista 2.0 – partnerships,
            agenda, registrations and more.
          </p>
        </div>
      </header>

      <main className="relative z-10">
        <section className="py-6 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className="group relative backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] border"
                  style={{ backgroundColor: "#F5F0EA20", borderColor: "#E0C58E40" }}
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold" style={{ color: "#F5F0EA" }}>
                      {c.name}
                    </h3>
                    <p className="text-sm" style={{ color: "#D9CBC2" }}>
                      {c.role}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "#D9CBC2" }}
                    >
                      <FaEnvelope style={{ color: "#E0C58E" }} />
                      <span>{c.email}</span>
                    </a>
                    <a
                      href={`tel:${c.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "#D9CBC2" }}
                    >
                      <FaPhone style={{ color: "#E0C58E" }} />
                      <span>{c.phone}</span>
                    </a>
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
