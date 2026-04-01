import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Hotel, 
  Briefcase, 
  Church, 
  HeartPulse,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Industries() {
  useEffect(() => {
    document.title = "Industries We Serve | Silas Security Ops";
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const industries = [
    {
      id: "schools",
      icon: GraduationCap,
      title: "Schools & Education",
      problem: "Managing student records on paper is slow, and school Wi-Fi networks are often unsecure and abused by unauthorized users.",
      solution: "We implement secure student information systems, firewall-protected networks, and automated fee collection tracking.",
      bundle: ["Student Portal App", "Secure Wi-Fi Setup", "Data Backup Strategy", "Staff Email Setup"]
    },
    {
      id: "hotels",
      icon: Hotel,
      title: "Hotels & Hospitality",
      problem: "Unreliable guest Wi-Fi leads to bad reviews. Poor booking system security risks guest data and credit card information.",
      solution: "Enterprise-grade guest Wi-Fi networks with captive portals, secure booking integrations, and POS system protection.",
      bundle: ["Managed Guest Wi-Fi", "Booking System Security", "CCTV Network Security", "Responsive Website"]
    },
    {
      id: "smes",
      icon: Briefcase,
      title: "SMEs & Retail",
      problem: "Inventory mismatch, lost receipts, and vulnerable Point-of-Sale (POS) systems that cause financial leakage.",
      solution: "Cloud-based POS systems, automated inventory tracking, and secure payment processing networks.",
      bundle: ["Cloud POS Setup", "E-commerce Website", "Automated Invoicing", "Endpoint Antivirus"]
    },
    {
      id: "hospitals",
      icon: HeartPulse,
      title: "Hospitals & Clinics",
      problem: "Patient confidentiality is critical. Lost paper records or ransomware attacks can shut down a clinic completely.",
      solution: "HIPAA-aligned electronic health records (EHR) security, off-site encrypted backups, and strict access controls.",
      bundle: ["Encrypted Backups", "Secure EHR Network", "Role-Based Access", "Staff Security Training"]
    },
    {
      id: "churches",
      icon: Church,
      title: "Churches & Community",
      problem: "Struggling to communicate with members effectively and manage donations transparently across multiple branches.",
      solution: "Member management databases, secure digital giving platforms, and live-streaming technical setup.",
      bundle: ["Member Database", "Digital Giving Setup", "Church Website", "Broadcast Network Setup"]
    }
  ];

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900"
            >
              Tailored to Your <span className="text-primary">Industry</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              We understand that a hospital has different needs than a hotel. We don't force generic software on you—we build solutions based on the realities of your specific sector in Coastal Kenya.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {industries.map((ind, index) => (
              <motion.div 
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-10"
              >
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                    <ind.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{ind.title}</h2>
                  <Button asChild variant="outline" className="mt-4 rounded-full">
                    <Link href={`/contact?industry=${ind.id}`}>Get a Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
                
                <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">The Challenge</h4>
                      <p className="text-slate-700">{ind.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Our Solution</h4>
                      <p className="text-slate-700">{ind.solution}</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-lg mb-4 text-slate-900">Recommended Bundle</h4>
                    <ul className="space-y-3">
                      {ind.bundle.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see your industry?</h2>
            <p className="text-white/80 text-lg mb-10">
              Technology fundamentals apply everywhere. Whether you run a logistics fleet, an NGO, or an agricultural farm, we can secure and streamline your operations.
            </p>
            <Button asChild size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base font-semibold shadow-lg">
              <Link href="/contact">Let's Talk About Your Business</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
