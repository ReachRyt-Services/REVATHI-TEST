"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Our Students Work At Top Healthcare Institutions",
  logos = [
    {
      id: "logo-1",
      description: "Apollo Hospitals",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Apollo_Hospitals_Logo.svg/1024px-Apollo_Hospitals_Logo.svg.png",
      className: "h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-2",
      description: "Fortis Healthcare",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Fortis_Healthcare_logo.png",
      className: "h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-3",
      description: "Max Healthcare",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Max_Healthcare_Logo.svg/1200px-Max_Healthcare_Logo.svg.png",
      className: "h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-4",
      description: "Manipal Hospitals",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Manipal_Hospitals_Logo_New.png/1200px-Manipal_Hospitals_Logo_New.png",
      className: "h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-5",
      description: "Christian Medical College",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Christian_Medical_College_Vellore_logo.svg/1200px-Christian_Medical_College_Vellore_logo.svg.png",
      className: "h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-6",
      description: "AIIMS",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/All_India_Institute_of_Medical_Sciences%2C_New_Delhi_Logo.svg/1200px-All_India_Institute_of_Medical_Sciences%2C_New_Delhi_Logo.svg.png",
      className: "h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
  ],
  className,
}: Logos3Props) => {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="mb-12 text-3xl font-black text-[#003366] font-display">
          {heading}
        </h2>
      </div>
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center max-w-7xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 justify-center py-4"
                >
                  <div className="mx-8 flex items-center justify-center">
                    <div className="relative w-40 h-16 flex items-center justify-center">
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        fill
                        className={`object-contain ${logo.className || ''}`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Fading gradients on the edges to smooth the auto-scroll look */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
