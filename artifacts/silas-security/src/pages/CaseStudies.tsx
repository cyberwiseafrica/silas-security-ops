import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { ArrowUpRight, ShieldCheck, TrendingUp, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CaseStudies() {
  useSEO({
    title: "Case Studies | Silas Security Ops",
    description:
      "Real results from real clients. See how Silas Security Ops has secured clinics, upgraded hotel networks, and digitized schools across Kilifi and Coastal Kenya.",
  });

  const cases = [
    {
      title: "Securing Patient Data for a Kilifi Referral Clinic",
      client: "Mid-Sized Private Health Clinic",
      industry: "Healthcare",
      challenge: "The clinic was relying on a single, unencrypted local server for all patient records. A power surge corrupted the hard drive, nearly causing the loss of 5 years of patient data. Their network was also completely open, allowing guests to access the same Wi-Fi network used by doctors.",
      solution: "We implemented a segmented network separating guest and medical traffic. We set up an automated, encrypted cloud backup system compliant with medical data standards, and installed endpoint protection on all staff computers.",
      results: [
        { icon: ShieldCheck, stat: "100%", text: "Data redundancy achieved" },
        { icon: Zap, stat: "Zero", text: "Downtime since implementation" }
      ]
    },
    {
      title: "Digitalizing Fee Collection for a Local High School",
      client: "Secondary School (800+ Students)",
      industry: "Education",
      challenge: "Fee tracking was entirely paper-based, leading to constant disputes between parents and administration over payments. Report cards took weeks to compile manually, and the school's website was 10 years out of date.",
      solution: "Developed a custom, lightweight school management portal. Parents can log in to view fee balances and download report cards. We also redesigned their public website to attract new admissions.",
      results: [
        { icon: Clock, stat: "40 hrs/mo", text: "Saved in admin work" },
        { icon: TrendingUp, stat: "15%", text: "Increase in timely fee payments" }
      ]
    },
    {
      title: "Ransomware Recovery & Prevention for a Boutique Hotel",
      client: "Coastal Boutique Hotel",
      industry: "Hospitality",
      challenge: "The hotel's reservation system was hit by a ransomware attack, locking them out of all bookings for the upcoming peak season. They were losing money and reputation daily.",
      solution: "We successfully isolated the infected machines, rebuilt their network from scratch with enterprise-grade firewalls, trained staff on phishing email detection, and migrated their booking system to a secure cloud provider.",
      results: [
        { icon: ShieldCheck, stat: "100%", text: "Malware eradicated" },
        { icon: Zap, stat: "2 Days", text: "To return to full operations" }
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 md:py-32 relative border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Real Problems, <span className="text-primary">Real Results</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              See how we've helped organizations across the coast move from vulnerable and inefficient to secure and streamlined.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20 md:space-y-32">
            {cases.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-8 space-y-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
                        {study.industry}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-2">
                        {study.title}
                      </h2>
                      <p className="text-primary font-medium text-lg">Client: {study.client}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">The Challenge</h4>
                        <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">The Solution</h4>
                        <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Stats Card */}
                  <div className="lg:col-span-4">
                    <div className="bg-primary text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                      
                      <h4 className="font-bold text-xl mb-6 border-b border-white/20 pb-4">Measurable Impact</h4>
                      
                      <div className="space-y-8">
                        {study.results.map((res, i) => (
                          <div key={i}>
                            <div className="flex items-center gap-3 mb-2">
                              <res.icon className="w-5 h-5 text-accent" />
                              <span className="text-3xl font-bold">{res.stat}</span>
                            </div>
                            <p className="text-white/80 font-medium">{res.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
                
                {index < cases.length - 1 && (
                  <div className="w-full h-px bg-slate-100 mt-20 md:mt-32"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to be our next success story?</h2>
            <Button asChild size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-semibold shadow-lg">
              <Link href="/contact">Book a Consultation <ArrowUpRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
