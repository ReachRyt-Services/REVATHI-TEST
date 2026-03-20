import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'You Apply',
    content: 'Tell us a little about yourself and we’ll help with the rest. Our convenient online application tool only takes 10 minutes to complete.', 
    image: '/feature-1.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'We Connect',
    content: 'After you submit your application, an admissions representative will contact you and will help you to complete the process.',
    image: '/feature-2.jpg'
  },
  { 
    step: 'Step 3',
    title: 'You Get Ready',
    content: 'Once you’ve completed your application and connected with an admissions representative, you’re ready to embark on a rewarding healthcare career!',
    image: '/feature-3.jpg'
  },
]

export function PreFooterCTA() {
  return (
      <FeatureSteps 
        features={features}
        title="Ready to jumpstart your career?"
        autoPlayInterval={5000}
        imageHeight="h-[400px]"
        className="bg-primary/5 py-16 mt-auto"
      />
  )
}
