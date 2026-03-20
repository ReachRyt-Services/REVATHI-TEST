import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Application Submission',
    content: 'Submit your online application form with personal details and academic history.', 
    image: "/feature-2.jpg",
  },
  { 
    step: 'Step 2',
    title: 'Document Verification',
    content: 'Upload or physically verify your 10th & 12th marksheets, ID proofs, and certificates.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Entrance & Counseling',
    content: 'Attend the mandatory counseling session and clear any required entrance assessments for course allocation.',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2069&auto=format&fit=crop'
  },
  { 
    step: 'Step 4',
    title: 'Fee Payment & Enrollment',
    content: 'Secure your seat by paying the admission fee and officially joining Revathi Institutions.',
    image: "/feature-1.jpg",
  },
]

export function AdmissionsFeatureSteps() {
  return (
      <FeatureSteps 
        features={features}
        title="Step-by-Step Admission Guide"
        autoPlayInterval={5000}
        imageHeight="h-[400px]"
        className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] mb-12 border border-primary/10"
      />
  )
}
