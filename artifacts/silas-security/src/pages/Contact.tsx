import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Contact() {
  const { toast } = useToast();
  const [location] = useLocation();

  useEffect(() => {
    document.title = "Contact Us | Silas Security Ops";
  }, []);

  // Parse URL query params manually to pre-fill industry/service
  const searchParams = new URLSearchParams(window.location.search);
  const defaultIndustry = searchParams.get('industry') || "";
  const defaultService = searchParams.get('service') || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-20 pb-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let's secure your digital operations.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Fill out the form below or reach out directly. Our team is based in Kilifi and ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required className="h-12 bg-slate-50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="h-12 bg-slate-50" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="h-12 bg-slate-50" placeholder="07XX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orgType">Organization Type</Label>
                    <Select defaultValue={defaultIndustry || undefined}>
                      <SelectTrigger className="h-12 bg-slate-50">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="schools">School / Education</SelectItem>
                        <SelectItem value="hotels">Hotel / Hospitality</SelectItem>
                        <SelectItem value="smes">SME / Retail</SelectItem>
                        <SelectItem value="hospitals">Hospital / Clinic</SelectItem>
                        <SelectItem value="churches">Church / Community</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select defaultValue={defaultService || undefined}>
                    <SelectTrigger className="h-12 bg-slate-50">
                      <SelectValue placeholder="What do you need help with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cybersecurity">Cybersecurity Audit & Protection</SelectItem>
                      <SelectItem value="development">Website or App Development</SelectItem>
                      <SelectItem value="automation">Digitalization & Automation</SelectItem>
                      <SelectItem value="analytics">AI & Reporting</SelectItem>
                      <SelectItem value="consulting">General IT Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    className="min-h-[150px] bg-slate-50 resize-none" 
                    placeholder="Tell us briefly about your current setup and what challenges you're facing..."
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto px-8 h-12 bg-primary hover:bg-primary/90 text-white rounded-xl text-base font-semibold">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-primary text-white p-8 rounded-3xl shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-8">Direct Contact Info</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Phone & WhatsApp</p>
                        <a href="https://wa.me/254713121435" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-accent transition-colors">
                          0713 121 435
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Email Support</p>
                        <a href="mailto:cyberwiseafrica@gmail.com" className="text-lg font-semibold hover:text-accent transition-colors break-all">
                          cyberwiseafrica@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Service Area</p>
                        <p className="text-lg font-semibold">Kilifi County & Coastal Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl h-14 border-none flex gap-2">
                    <a href="https://wa.me/254713121435" target="_blank" rel="noreferrer">
                      <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
