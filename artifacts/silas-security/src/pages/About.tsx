import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { ShieldCheck, Target, HeartHandshake, Eye, Users, ChevronRight, CheckCircle2, Wifi, Bot, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  useSEO({
    title: "About Us | Silas Security Ops — Kilifi Cybersecurity Startup",
    description:
      "Founded by Milton Silas, a Cisco-certified cybersecurity instructor and AI automation expert based in Kilifi, Kenya. Learn how Silas Security Ops is shaping Kilifi's digital economy.",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 md:py-28 relative border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
            >
              Our Story
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Bringing World-Class Tech to <span className="text-primary">Coastal Kenya</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              We saw local businesses, schools, and hospitals struggling with complex, expensive systems or falling victim to preventable cyber threats. We started Silas Security Ops to change that.
            </motion.p>
          </div>
        </div>
      </section>

      {/* MVV Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To equip organizations in the Coastal region with secure, efficient, and affordable digital systems, empowering them to operate with confidence.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-primary p-8 rounded-2xl shadow-lg text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                A digitally resilient Coastal Kenya where every school, clinic, and business can thrive in the modern economy without fear of cyber threats.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Integrity above all</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Community focus</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Plain-spoken honesty</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-accent" /> Relentless excellence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeInUp} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why trust Silas Security Ops?</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We aren't a faceless agency from Nairobi or overseas. We are your neighbors here in Kilifi County. We know the unique challenges you face—from power fluctuations to connectivity issues—and we design systems that work reliably in our local context.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "No Tech Jargon", desc: "We explain everything in plain English (or Swahili). You'll always know exactly what you're paying for and why." },
                  { title: "Local Presence", desc: "When something breaks, we are a short drive away, not a long-distance phone call." },
                  { title: "Built for Your Budget", desc: "We don't upsell expensive enterprise software to a 10-person clinic. We find the right tool for your size." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="lg:w-1/2 w-full">
              <div className="aspect-square md:aspect-[4/3] bg-primary rounded-3xl overflow-hidden relative shadow-xl">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <ShieldCheck className="w-20 h-20 text-accent mx-auto mb-6 opacity-90" />
                    <h3 className="text-2xl font-bold text-white mb-2">Secure. Simple. Local.</h3>
                    <p className="text-white/80">Your tech partner in Kilifi.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Meet the Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Person Behind the Mission</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <motion.div
              {...fadeInUp}
              className="lg:w-2/5 w-full flex-shrink-0"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[3/4] max-w-sm mx-auto">
                <img
                  src="/milton-silas.jpg"
                  alt="Milton Silas — Founder of Silas Security Ops, cybersecurity instructor based in Kilifi, Kenya"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="lg:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Milton Silas</h3>
              <p className="text-primary font-semibold text-base mb-6">Founder · Kilifi, Kenya</p>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Milton is a cybersecurity enthusiast, tech advocate, and Cisco-certified instructor with deep expertise in AI automation and digital systems. Based in Kilifi, he founded Silas Security Ops with a clear purpose — to bridge the digital divide along Kenya's Coast by making professional-grade technology accessible to organizations that have historically been left behind.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                His focus goes beyond just securing networks. Milton is actively shaping Kilifi's digital economy by mentoring students and recent graduates, equipping the next generation of tech professionals from within the community itself.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 bg-slate-50 rounded-2xl p-4">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Cisco Instructor</p>
                    <p className="text-slate-500 text-xs">Certified & teaching</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-2xl p-4">
                  <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">AI Automation</p>
                    <p className="text-slate-500 text-xs">Workflow & intelligence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 rounded-2xl p-4">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Youth Mentor</p>
                    <p className="text-slate-500 text-xs">Kilifi graduates</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Let's discuss your organization's needs.</h2>
            <Button asChild size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base font-semibold shadow-lg">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
