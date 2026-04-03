import { Link } from "wouter";
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-lg text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Silas Security Ops
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Your trusted neighborhood tech partner. Helping schools, SMEs, and community institutions in Kilifi go digital safely and affordably.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/industries", label: "Industries We Serve" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/students", label: "Student Programme" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <span className="block text-sm text-primary-foreground/60 mb-1">Phone / WhatsApp</span>
                  <a href="https://wa.me/254790480098?text=Hi%2C%20I%20came%20across%20Silas%20Security%20Ops%20and%20I%27m%20interested%20in%20your%20services.%20Could%20you%20tell%20me%20more%20about%20your%20plans%20and%20pricing%3F" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                    0790 480 098
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <span className="block text-sm text-primary-foreground/60 mb-1">Email</span>
                  <a href="mailto:cyberwiseafrica@gmail.com" className="hover:text-accent transition-colors">
                    cyberwiseafrica@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <span className="block text-sm text-primary-foreground/60 mb-1">Location</span>
                  <span className="text-primary-foreground/90">Kilifi County, Kenya<br/>Serving the Coastal Region</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Ready to Digitize?</h4>
            <p className="text-primary-foreground/80 mb-6">
              Get a free consultation to see how we can secure and streamline your operations.
            </p>
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-md h-12">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Silas Security Ops. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
