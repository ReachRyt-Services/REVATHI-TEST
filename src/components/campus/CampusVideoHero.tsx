import { 
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerStagger 
} from "@/components/ui/hero-video"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CampusVideoHero() {
  return (
    <ContainerScroll className="bg-[#003366] text-center text-white">
      <ContainerStagger viewport={{ once: false }}>
        <ContainerAnimated animation="top">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#008080]/20 border border-[#008080]/30 text-[#008080] font-black text-[10px] uppercase tracking-widest mb-6 rounded-full">
            Revathi Campus Life
          </div>
        </ContainerAnimated>
        <ContainerAnimated animation="bottom">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight font-display mb-4">
            Where Leaders <br />
            <span className="text-[#008080] italic blur-[1px]">Are Forged.</span>
          </h1>
        </ContainerAnimated>

        <ContainerAnimated animation="blur" className="my-6 max-w-2xl mx-auto">
          <p className="text-xl leading-relaxed text-white/80 font-medium">
            Step onto a campus designed for intensive clinical immersion. Walk our wards, train in our labs, and experience the pulse of an active 300-bed teaching hospital.
          </p>
        </ContainerAnimated>

        <ContainerAnimated
          animation="z"
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Button
            asChild
            className="rounded-xl bg-[#F2A007] text-[#0F3D3D] hover:bg-white font-black uppercase tracking-widest px-8 shadow-xl transition-all"
            size="lg"
          >
            <Link href="/admissions">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="rounded-xl border-[#008080] text-[#008080] bg-transparent hover:bg-[#008080]/10 font-bold uppercase tracking-widest px-8"
            size="lg"
          >
            <Link href="/contact">Book Campus Tour</Link>
          </Button>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerInset className="mx-4 md:mx-8 lg:mx-16 mt-16 pb-32">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 w-full h-full"> 
          <video
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
            className="w-full h-[60vh] md:h-[80vh] object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/8086707/8086707-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlay to ensure text readability if needed, and to blend with the dark blue background */}
          <div className="absolute inset-0 bg-[#003366]/20 mix-blend-multiply"></div>
        </div>
      </ContainerInset>
    </ContainerScroll>
  )
}
