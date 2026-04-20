"use client";

import {
  GraduationCap, Menu, BookOpen, Stethoscope, Activity,
  HeartPulse, MapPin, Phone, Mail, FileText, Users, Building2,
} from "lucide-react";
import Image from "next/image";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactElement;
  items?: MenuItem[];
}

const logo = {
  url: "/",
  title: "REVATHI INSTITUTIONS",
};

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "Programs",
    url: "/courses",
    items: [
      {
        title: "College of Nursing",
        description: "B.Sc. & M.Sc. Nursing",
        icon: <HeartPulse className="size-5 shrink-0 text-accent/80" />,
        url: "/courses?college=nursing",
        items: [
          { title: "B.Sc Nursing", url: "/courses/bsc-nursing" },
          { title: "M.Sc Nursing", url: "/courses/msc-nursing" },
        ]
      },
      {
        title: "College of Paramedical Sciences",
        description: "14+ Allied health science specializations",
        icon: <Stethoscope className="size-5 shrink-0 text-accent/80" />,
        url: "/courses?college=paramedical",
        items: [
          { title: "Respiratory Therapy", url: "/courses/bsc-respiratory-therapy" },
          { title: "Radiography", url: "/courses/bsc-radiography-imaging" },
          { title: "OT & Anesthesia", url: "/courses/bsc-ot-anesthesia" },
          { title: "Hospital Admin (MHA)", url: "/courses/mha-hospital-administration" },
        ]
      },
      {
        title: "Institute of Physiotherapy",
        description: "Bachelor of Physiotherapy (BPT)",
        icon: <Activity className="size-5 shrink-0 text-accent/80" />,
        url: "/courses/bpt",
      },
      {
        title: "Institute of Occupational Therapy",
        description: "Bachelor of Occupational Therapy (BOT)",
        icon: <Users className="size-5 shrink-0 text-accent/80" />,
        url: "/courses/bot",
      },
    ],
  },
  {
    title: "Campus & Facilities",
    url: "/campus",
    items: [
      {
        title: "Walk the Campus",
        description: "Explore our 300-bed teaching hospital and labs virtually",
        icon: <Building2 className="size-5 shrink-0 text-accent/80" />,
        url: "/campus",
      },
      {
        title: "Photo Gallery",
        description: "See campus life, facilities and student events",
        icon: <MapPin className="size-5 shrink-0 text-accent/80" />,
        url: "/gallery",
      },
      {
        title: "Downloads",
        description: "Prospectus, fee structure and application forms",
        icon: <FileText className="size-5 shrink-0 text-accent/80" />,
        url: "/downloads",
      },
    ],
  },
  {
    title: "Admissions",
    url: "https://apply.revathiinstitutions.com/",
    items: [
      {
        title: "How to Apply",
        description: "Step-by-step admissions guide and eligibility criteria",
        icon: <FileText className="size-5 shrink-0 text-accent/80" />,
        url: "https://apply.revathiinstitutions.com/",
      },
      {
        title: "Admissions Info",
        description: "Seats, reservations, and important dates",
        icon: <Users className="size-5 shrink-0 text-accent/80" />,
        url: "https://apply.revathiinstitutions.com/",
      },
      {
        title: "Contact Admissions",
        description: "Speak to our team directly",
        icon: <Phone className="size-5 shrink-0 text-accent/80" />,
        url: "/contact",
      },
    ],
  },
  { title: "Placements", url: "/placements" },
  { title: "Contact", url: "/contact" },
];

const mobileExtraLinks = [
  { name: "About Revathi", url: "/about" },
  { name: "Placements",    url: "/placements" },
  { name: "Gallery",       url: "/gallery" },
  { name: "Downloads",     url: "/downloads" },
  { name: "Contact",       url: "/contact" },
];

export function RevathiNavbar() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-primary/10 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between bg-primary text-white px-6 py-1.5 text-xs font-semibold">
        <div className="flex items-center gap-6">
          <a href="mailto:counsellor1@revathiinstitutions.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail size={11} /> counsellor1@revathiinstitutions.com
          </a>
          <a href="tel:+919842202288" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone size={11} /> Admission Team: 9842202288
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://cims.mastersofterp.in/" className="hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Staff Portal</a>
          <span className="text-white/30">|</span>
          <a href="https://cimsstudentnewui.mastersofterp.in/" className="hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Student Login</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="px-4 md:px-8 py-3">
        {/* Desktop */}
        <nav className="hidden justify-between lg:flex items-center">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image src="/logo.png" alt="Revathi Institutions Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col min-w-0">
                <p className="font-black text-primary tracking-wide text-xs sm:text-sm leading-none truncate">REVATHI</p>
                <p className="text-[8px] sm:text-[9px] font-bold text-accent tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-none mt-0.5 truncate">Institutions</p>
              </div>
            </a>

            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest">
              <a href="https://apply.revathiinstitutions.com/">Apply Now</a>
            </Button>
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between">
          <a href={logo.url} className="flex items-center gap-2.5">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image src="/logo.png" alt="Revathi Institutions Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="font-black text-primary tracking-wide text-[12px] sm:text-sm leading-none truncate">REVATHI</p>
              <p className="text-[8px] sm:text-[9px] font-bold text-accent tracking-[0.1em] sm:tracking-[0.12em] uppercase leading-none mt-0.5 truncate">Institutions</p>
            </div>
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-primary/20">
                <Menu className="size-4 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-white">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2.5">
                    <div className="w-10 h-10 relative flex items-center justify-center">
                      <Image src="/logo.png" alt="Revathi Institutions Logo" fill className="object-contain" />
                    </div>
                    <span className="font-black text-primary tracking-wide text-sm">REVATHI INSTITUTIONS</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="my-6 flex flex-col gap-6">
                <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <div className="border-t py-4">
                  <div className="grid grid-cols-2 justify-start">
                    {mobileExtraLinks.map((link, idx) => (
                      <a key={idx} className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary" href={link.url}>
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild className="bg-accent text-white font-black uppercase tracking-widest hover:bg-accent/90">
                    <a href="https://apply.revathiinstitutions.com/">Apply Now</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// ── Render helpers ─────────────────────────────────────────────────────────────
function renderMenuItem(item: MenuItem) {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="relative text-muted-foreground">
        <NavigationMenuTrigger className="text-primary/70 hover:text-primary font-semibold bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-[450px] p-4">
            <NavigationMenuLink asChild>
              <div className="grid grid-cols-2 gap-2 w-full">
              {item.items.map((subItem) => (
                <div key={subItem.title} className="flex flex-col">
                  {subItem.items ? (
                    <div className="p-2">
                       <div className="flex items-center gap-2 mb-2">
                         <div className="p-1.5 bg-primary/5 rounded-lg text-primary">{subItem.icon}</div>
                         <div className="text-xs font-black text-primary uppercase tracking-wider">{subItem.title}</div>
                       </div>
                       <div className="space-y-1 ml-9">
                         {subItem.items.map(nestedItem => (
                           <a key={nestedItem.title} href={nestedItem.url} className="block text-[11px] font-bold text-text-dark/60 hover:text-accent transition-colors">
                             {nestedItem.title}
                           </a>
                         ))}
                         <a href={subItem.url} className="block text-[10px] font-black text-primary/40 hover:text-primary uppercase tracking-tighter mt-1">
                           View All →
                         </a>
                       </div>
                    </div>
                  ) : (
                    <a className="flex select-none gap-3 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary group" href={subItem.url}>
                      <div className="mt-0.5">{subItem.icon}</div>
                      <div>
                        <div className="text-sm font-black text-primary group-hover:text-accent transition-colors">{subItem.title}</div>
                        {subItem.description && (
                          <p className="text-[10px] leading-tight text-text-dark/80 mt-1 font-medium">{subItem.description}</p>
                        )}
                      </div>
                    </a>
                  )}
                </div>
              ))}
              </div>
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  return (
    <a key={item.title} className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-primary/70 transition-colors hover:bg-primary/5 hover:text-primary" href={item.url}>
      {item.title}
    </a>
  );
}

function renderMobileMenuItem(item: MenuItem) {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold text-primary hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 pl-2">
          {item.items.map((subItem) => (
             <div key={subItem.title}>
               {subItem.items ? (
                 <div className="mb-4">
                   <div className="flex items-center gap-2 px-3 py-2 opacity-50">
                     {subItem.icon}
                     <span className="text-[10px] font-black uppercase tracking-widest">{subItem.title}</span>
                   </div>
                   <div className="grid grid-cols-1 gap-1 ml-4 border-l border-primary/10">
                     {subItem.items.map(nestedItem => (
                       <a key={nestedItem.title} href={nestedItem.url} className="block py-2 px-4 text-sm font-bold text-primary/70">
                         {nestedItem.title}
                       </a>
                     ))}
                     <a href={subItem.url} className="block py-2 px-4 text-[10px] font-black text-accent uppercase tracking-widest">
                       View All {subItem.title} →
                     </a>
                   </div>
                 </div>
               ) : (
                 <a className="flex select-none gap-4 rounded-xl p-3 leading-none outline-none transition-colors hover:bg-primary/5" href={subItem.url}>
                  <div className="mt-0.5">{subItem.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-primary">{subItem.title}</div>
                    {subItem.description && (
                      <p className="text-xs leading-snug text-text-dark/60 mt-0.5">{subItem.description}</p>
                    )}
                  </div>
                </a>
               )}
             </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
  return (
    <a key={item.title} href={item.url} className="font-semibold text-primary">
      {item.title}
    </a>
  );
}

export default RevathiNavbar;
