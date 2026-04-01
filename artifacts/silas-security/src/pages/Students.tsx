import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Terminal, Shield, Database, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Students() {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Student Associate Programme | Silas Security Ops";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "Thanks for applying. Our team will review your application and get back to you.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Learn, Build, <span className="text-accent">Earn.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              The Silas Security Ops Student Associate Programme. Exclusive opportunities for 3rd and 4th-year students from Pwani University, TUM, and Kilifi NPC to gain real-world industry experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How it works & Roles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Info Side */}
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Projects. Real Experience.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Theory is great, but nothing beats deploying a system for a real client. As a Student Associate, you won't be getting coffee—you'll be writing code, running security scans, and configuring networks under the mentorship of senior engineers.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Available Tracks</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                  <Terminal className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Frontend / Web Dev</h4>
                    <p className="text-slate-600 text-sm">React, Next.js, Tailwind CSS. Build fast, responsive portals and websites for local businesses.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Cybersecurity Trainee</h4>
                    <p className="text-slate-600 text-sm">Vulnerability scanning, network configuration, firewall setups, and penetration testing.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                  <Database className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">IT Support & Networking</h4>
                    <p className="text-slate-600 text-sm">Hardware troubleshooting, Wi-Fi deployments (Ubiquiti/MikroTik), and software installations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-2">Apply for the Programme</h3>
              <p className="text-slate-500 mb-8 text-sm">Next cohort intake is open. Apply below.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="bg-slate-50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Student Email</Label>
                  <Input id="email" type="email" required className="bg-slate-50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="university">Institution</Label>
                  <Select required>
                    <SelectTrigger className="bg-slate-50">
                      <SelectValue placeholder="Select your institution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pwani">Pwani University</SelectItem>
                      <SelectItem value="tum">Technical University of Mombasa (TUM)</SelectItem>
                      <SelectItem value="npc">Kilifi NPC</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="course">Course of Study</Label>
                    <Input id="course" required className="bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study</Label>
                    <Select required>
                      <SelectTrigger className="bg-slate-50">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="graduated">Recently Graduated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="track">Interested Track</Label>
                  <Select required>
                    <SelectTrigger className="bg-slate-50">
                      <SelectValue placeholder="Select a track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dev">Frontend / Web Dev</SelectItem>
                      <SelectItem value="security">Cybersecurity Trainee</SelectItem>
                      <SelectItem value="it">IT Support & Networking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="why">Why do you want to join?</Label>
                  <Textarea 
                    id="why" 
                    required 
                    className="bg-slate-50 min-h-[100px]" 
                    placeholder="Tell us about your passion for tech and what you hope to learn..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl text-base">
                  Submit Application
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
