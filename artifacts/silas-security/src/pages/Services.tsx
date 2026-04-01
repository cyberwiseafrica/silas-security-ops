import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { 
  ShieldAlert, 
  Code2, 
  Workflow, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  Lock,
  Smartphone,
  Server
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  useSEO({
    title: "Our Services | Silas Security Ops",
    description:
      "Cybersecurity audits, web and app development, business automation, and IT support services tailored for organizations in Kilifi and Coastal Kenya.",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      id: "cybersecurity",
      icon: ShieldAlert,
      title: "Cybersecurity & Audits",
      desc: "Protect your sensitive data, patient records, and financial information from unauthorized access and ransomware.",
      features: [
        "Comprehensive vulnerability assessments",
        "Network security configuration",
        "Data backup & disaster recovery planning",
        "Staff security awareness training"
      ]
    },
    {
      id: "development",
      icon: Code2,
      title: "Web & App Development",
      desc: "Professional digital storefronts and internal applications that look great and work perfectly on mobile.",
      features: [
        "Custom website design & hosting",
        "Student/Patient portal development",
        "Mobile-first responsive applications",
        "E-commerce & booking systems"
      ]
    },
    {
      id: "automation",
      icon: Workflow,
      title: "Digitalization & Automation",
      desc: "Move away from paper records and manual data entry. We set up systems that save your team hours every week.",
      features: [
        "Paper-to-digital record migration",
        "Automated invoicing & receipts",
        "Inventory & stock management systems",
        "Cloud file storage setup (Google Workspace/Microsoft 365)"
      ]
    },
    {
      id: "analytics",
      icon: LineChart,
      title: "AI & Reporting",
      desc: "Make better decisions with clear dashboards that show exactly how your organization is performing.",
      features: [
        "Custom dashboard creation",
        "Financial reporting automation",
        "Attendance/occupancy tracking",
        "AI-assisted workflow setup"
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5IDU5VjBoMXY2MEgwdjExeiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30"
            >
              What We Do
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Practical Technology Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed"
            >
              We provide end-to-end digital services tailored for organizations in Kilifi. From securing your network to building your custom app.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                <div className="md:w-1/2 w-full">
                  <div className="aspect-[4/3] bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center shadow-inner relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <service.icon className="w-32 h-32 text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                      <p className="font-semibold text-primary text-center">Custom solutions tailored to you</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href={`/contact?service=${service.id}`}>Inquire about {service.title.split('&')[0].trim()}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Check CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/10 rounded-3xl p-8 md:p-16 border border-white/10 backdrop-blur-sm max-w-5xl mx-auto text-center">
            <Lock className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a Free Initial IT & Security Assessment. We'll visit your premises, review your current setup, and give you a no-obligation report on your vulnerabilities and opportunities.
            </p>
            <Button asChild size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base font-semibold">
              <Link href="/contact">Request Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
