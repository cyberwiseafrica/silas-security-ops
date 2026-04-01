import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Smartphone, 
  Database, 
  Briefcase, 
  GraduationCap, 
  Hotel, 
  HeartPulse, 
  Church,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  useEffect(() => {
    document.title = "Silas Security Ops | Secure Digital Systems for Coastal Kenya";
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <ShieldCheck className="w-96 h-96 text-primary" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted Tech Partner in Kilifi County
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
            >
              Secure, Simple <span className="text-primary">Digital Systems</span> for Coastal Kenya
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We help schools, hotels, SMEs, churches, and clinics go digital safely and affordably. Professional cybersecurity and automation without the big-city price tag.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-slate-300 hover:bg-slate-100 rounded-full">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-primary-foreground/80 font-medium text-sm uppercase tracking-wider mb-6">
            Serving organizations across Kilifi & the Coastal Region
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            <div className="flex items-center gap-2 text-white font-heading font-semibold text-xl">
              <GraduationCap className="w-6 h-6 text-accent" /> Schools
            </div>
            <div className="flex items-center gap-2 text-white font-heading font-semibold text-xl">
              <Hotel className="w-6 h-6 text-accent" /> Hospitality
            </div>
            <div className="flex items-center gap-2 text-white font-heading font-semibold text-xl">
              <Briefcase className="w-6 h-6 text-accent" /> SMEs
            </div>
            <div className="flex items-center gap-2 text-white font-heading font-semibold text-xl">
              <Church className="w-6 h-6 text-accent" /> Churches
            </div>
            <div className="flex items-center gap-2 text-white font-heading font-semibold text-xl">
              <HeartPulse className="w-6 h-6 text-accent" /> Clinics
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to operate digitally, <span className="text-primary">securely</span>.</h2>
            <p className="text-slate-600 text-lg">We build solutions tailored to the real needs of local organizations. No jargon, just results.</p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Cybersecurity Audits",
                desc: "We find and fix vulnerabilities in your network, devices, and data storage before they become costly problems."
              },
              {
                icon: Smartphone,
                title: "Web & App Development",
                desc: "Professional websites, portals, and mobile-friendly applications that make your organization look world-class."
              },
              {
                icon: Database,
                title: "Digitalization & Automation",
                desc: "Move from paper to digital. We set up automated workflows that save your staff hours of manual work every week."
              }
            ].map((service, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries - Highlight */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the heart of our community.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                A hospital clinic has different data privacy needs than a high school. A beachfront hotel needs different wifi management than a local church. We don't do cookie-cutter solutions — we build for your specific industry.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Affordable packages scaled to your size",
                  "Local support team based right here in Kilifi",
                  "Training provided for all your staff",
                  "Focus on practical security, not theoretical risks"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="rounded-full">
                <Link href="/industries">See Industry Solutions</Link>
              </Button>
            </motion.div>
            
            <motion.div {...fadeInUp} className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                  <GraduationCap className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Schools</h4>
                  <p className="text-sm text-slate-500">Student portals & secure records.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                  <Briefcase className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">SMEs</h4>
                  <p className="text-sm text-slate-500">POS systems & network security.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary p-6 rounded-2xl shadow-sm text-white hover:-translate-y-1 transition-transform">
                  <Hotel className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-bold mb-1">Hotels</h4>
                  <p className="text-sm text-white/80">Guest wifi & booking protection.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                  <HeartPulse className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Clinics</h4>
                  <p className="text-sm text-slate-500">Patient data privacy & backups.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Programme Teaser */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20">
                  <GraduationCap className="w-4 h-4 text-accent" /> For University Students
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Building the next generation of tech leaders.</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl leading-relaxed">
                  Are you a 3rd or 4th-year student at Pwani University, TUM, or Kilifi NPC? Join our Student Associate Programme to get real-world experience in cybersecurity, web dev, and IT consulting while earning.
                </p>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full border-2">
                  <Link href="/students">Apply for the Programme</Link>
                </Button>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-accent/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 border-4 border-accent border-dashed rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="bg-white w-40 h-40 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span className="text-4xl font-bold text-primary mb-1">10+</span>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider text-center px-4">Students Mentored</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your digital future?</h2>
            <p className="text-slate-600 text-lg mb-10">
              Don't wait for a data breach or system failure to take action. Let's build a secure, efficient digital foundation for your organization today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base font-semibold shadow-lg">
                <a href="https://wa.me/254713121435" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 border-slate-300 hover:bg-slate-100 rounded-full text-base font-semibold">
                <Link href="/contact">Send us an Email</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
