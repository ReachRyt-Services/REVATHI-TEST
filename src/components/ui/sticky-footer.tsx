"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  GraduationCap,
} from 'lucide-react';
import { Button } from './button';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}
type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn('relative h-auto lg:h-[720px] w-full', className)}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      {...props}
    >
      <div className="relative lg:fixed lg:bottom-0 h-auto lg:h-[720px] w-full">
        <div className="lg:sticky lg:top-[calc(100vh-720px)] h-full">
          <div className="relative flex size-full flex-col justify-between gap-10 border-t border-white/10 bg-[#001f40] px-4 py-12 md:px-12 lg:py-8">
            {/* Background glow */}
            <div aria-hidden className="absolute inset-0 isolate z-0 overflow-hidden">
              <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#008080]/10 rounded-full blur-[120px] -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#003366]/20 rounded-full blur-[100px]" />
            </div>

            {/* Main columns */}
            <div className="flex flex-col gap-12 md:flex-row md:flex-wrap lg:flex-nowrap xl:mt-0 relative z-10">
              {/* Brand column */}
              <AnimatedContainer className="w-full max-w-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#008080] rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-white tracking-wide text-base">REVATHI</p>
                    <p className="text-[10px] font-bold text-[#008080] tracking-[0.15em] uppercase">Institutions</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  Tamil Nadu's premier allied health sciences institution — directly integrated with a 300-bed NABH-accredited teaching hospital for zero-gap clinical education.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.title}
                      size="icon"
                      variant="outline"
                      className="size-8 border-white/15 bg-white/5 text-white/60 hover:bg-[#008080]/20 hover:text-white hover:border-[#008080]/40 transition-colors"
                      asChild
                    >
                      <a href={link.href} aria-label={link.title}>
                        <link.icon className="size-4" />
                      </a>
                    </Button>
                  ))}
                </div>
                <div className="text-xs text-white/40 font-semibold space-y-1">
                  <p>📧 counsellor1@revathiinstitutions.com</p>
                  <p>📧 counsellor2@revathiinstitutions.com</p>
                  <p>📞 Admission Team: +91 9842202288, +91 8489968555</p>
                  <p>📍 Ganani Bus Stop, Coimbatore Bypass, Avinashi (TK), Tirupur – 641654</p>
                </div>
              </AnimatedContainer>

              {/* Link groups */}
              {footerLinkGroups.map((group, index) => (
                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full">
                  <div className="mb-10 md:mb-0">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-[#008080] mb-4">{group.label}</h3>
                    <ul className="text-white/55 space-y-2.5 text-sm">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="hover:text-white hover:translate-x-0.5 inline-flex items-center transition-all duration-200 font-medium"
                          >
                            {link.icon && <link.icon className="me-1.5 size-3.5" />}
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContainer>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="text-white/30 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs md:flex-row relative z-10 font-medium">
              <p>© 2026 Revathi Institutions. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const socialLinks = [
  { title: 'Facebook',  href: '#', icon: FacebookIcon  },
  { title: 'Instagram', href: '#', icon: InstagramIcon },
  { title: 'YouTube',   href: '#', icon: YoutubeIcon   },
  { title: 'LinkedIn',  href: '#', icon: LinkedinIcon  },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: 'Programs',
    links: [
      { title: 'B.Sc Nursing',          href: '/courses/bsc-nursing' },
      { title: 'Bachelor of Physiotherapy (BPT)', href: '/courses/bpt' },
      { title: 'B.Sc Allied Health Sciences', href: '/courses/bsc-ahs' },
      { title: 'View All Programs',     href: '/courses' },
    ],
  },
  {
    label: 'Admissions',
    links: [
      { title: 'How to Apply',    href: 'https://apply.revathiinstitutions.com/'       },
      { title: 'Eligibility',     href: '/admissions'  },
      { title: 'Fee Structure',   href: '/downloads'   },
      { title: 'Scholarships',    href: '/admissions'  },
      { title: 'Student Login',   href: '#'            },
      { title: 'Staff Portal',    href: '#'            },
    ],
  },
  {
    label: 'Campus',
    links: [
      { title: 'Campus Tour',         href: '/campus'  },
      { title: 'RMC Teaching Hospital', href: '/campus' },
      { title: 'Library & Labs',      href: '/campus'  },
      { title: 'Sports & Wellness',   href: '/campus'  },
      { title: 'Student Hostel',      href: '/campus'  },
      { title: 'Gallery',             href: '/gallery' },
    ],
  },
  {
    label: 'About',
    links: [
      { title: 'Our Story',         href: '/about'   },
      { title: 'Leadership',        href: '/about'   },
      { title: 'Accreditation',     href: '/about'   },
      { title: 'Career Outcomes',   href: '/about'   },
      { title: 'Contact Us',        href: '/contact' },
      { title: 'Downloads',         href: '/downloads' },
    ],
  },
];

// ── Animated wrapper ──────────────────────────────────────────────────────────
type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
