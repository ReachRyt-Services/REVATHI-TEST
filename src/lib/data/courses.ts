export interface CourseContent {
  slug: string;
  courseCode: string;
  title: string;
  shortTitle: string;
  school: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  overview: string;
  format: string;
  tuition: string;
  units: string;
  notes: string;
  whoShouldTake: string[];
  whatYoullLearn: string[];
  accreditationText: string;
  accreditationList: string[];
  counselingCode?: string;
  color: string;
}

export const coursesData: CourseContent[] = [
  {
    slug: "bsc-nursing",
    courseCode: "RMC-NUR001",
    title: "B.Sc. Nursing: Advanced Clinical Practice & Patient Care",
    shortTitle: "B.Sc. Nursing",
    school: "Revathi College of Nursing",
    seoTitle: "B.Sc. Nursing Admission 2026 | Top Nursing College | Revathi Institutions",
    seoDescription: "Pursue B.Sc. Nursing at Revathi Institutions with 100% placement support. Master advanced clinical skills in our 300-bed attached Revathi Medical Center.",
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1600",
    overview: "Nurses are at the forefront of patient care, yet the complexity of modern healthcare requires highly specialized clinical training. This comprehensive B.Sc. Nursing program provides a practical, evidence-based approach to mastering critical care, surgical nursing, and community health. Heavily integrated with the 300-bed Revathi Medical Center, you’ll learn how to make informed clinical decisions that improve patient care while minimizing hospital-acquired risks.",
    format: "4 Years, On-Campus, Clinical Rotations",
    tuition: "Contact Admissions",
    units: "100 Seats",
    notes: "Revathi courses are subject to institutional pricing structures. Students gain direct access to our 300-bed multi-specialty hospital for mandatory clinical internships. Click “ENROLL NOW” to connect with our admissions counselors and get more information on course details and enrollment.",
    whoShouldTake: [
      "10+2 students with Science stream (Physics, Chemistry, Biology - Min 50%) seeking a professional healthcare career",
      "Individuals passionate about direct patient care, hospital management, and community health",
      "Future healthcare leaders looking to specialize in intensive care or surgical nursing"
    ],
    whatYoullLearn: [
      "Apply INC guidelines in treating and managing complex patient conditions across various hospital departments.",
      "Incorporate standardized protocols to assist in advanced surgical procedures and post-operative recovery.",
      "Develop strategies to implement evidence-based practices for maternal and child health nursing.",
      "Develop a plan to lead community health initiatives and manage clinical wards effectively."
    ],
    accreditationText: "Fully accredited by INC and TNNMC with recognition from the Government of Tamil Nadu.",
    accreditationList: [
      "The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)",
      "Indian Nursing Council (INC)",
      "Tamil Nadu Nurses and Midwives Council (TNNMC)",
      "Government of Tamil Nadu"
    ],
    counselingCode: "623",
    color: "bg-primary"
  },
  {
    slug: "bpt",
    courseCode: "RMC-BPT002",
    title: "Bachelor of Physiotherapy: Biomechanics & Advanced Rehabilitation",
    shortTitle: "Physiotherapy",
    school: "Revathi Institute of Physiotherapy",
    seoTitle: "BPT Admissions | Best Physiotherapy College | Revathi Institutions",
    seoDescription: "Become an expert physiotherapist with the 4.5-year BPT program at Revathi Institutions. Get hands-on training in orthopedics, neurology, and sports medicine.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    overview: "Physical rehabilitation is vital for post-surgery recovery and chronic pain management. This clinical BPT course provides a practical, evidence-based approach to optimizing mobility, managing physical impairments, and implementing personalized therapy programs. Through real-world clinical rotations at Revathi Medical Center, you’ll learn how to make informed therapeutic decisions that improve patient outcomes while utilizing advanced electrotherapy.",
    format: "4.5 Years, On-Campus, 6-Month Internship",
    tuition: "Contact Admissions",
    units: "50 Seats",
    notes: "Revathi courses are subject to institutional pricing structures. Students gain direct access to our 300-bed multi-specialty hospital for mandatory clinical internships. Click “ENROLL NOW” to connect with our admissions counselors and get more information on course details and enrollment.",
    whoShouldTake: [
      "10+2 students with Science stream (Physics, Chemistry, Biology - Min 50%) interested in sports medicine and rehabilitation",
      "Individuals looking to establish independent physiotherapy clinics or consult for athletic teams",
      "Future specialists in neurological and cardiopulmonary rehabilitation"
    ],
    whatYoullLearn: [
      "Apply global therapeutic guidelines in treating musculoskeletal disorders and sports injuries.",
      "Incorporate advanced biomechanical analysis to diagnose and prescribe physical therapy regimes.",
      "Develop strategies to implement evidence-based practices for post-operative orthopedic recovery.",
      "Develop a plan to lead ergonomic consulting and chronic pain management programs."
    ],
    accreditationText: "Accredited by TNMGRMU and recognized by the Government of Tamil Nadu.",
    accreditationList: [
      "The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)",
      "Government of Tamil Nadu"
    ],
    counselingCode: "948",
    color: "bg-primary"
  },
  {
    slug: "bsc-ahs",
    courseCode: "RMC-AHS003",
    title: "B.Sc. Allied Health Sciences: Critical Care & Surgical Technology",
    shortTitle: "Allied Health",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Allied Health Sciences | Critical Care & OT Tech | Revathi",
    seoDescription: "Join the B.Sc. Allied Health Sciences program at Revathi. Specializations in Operation Theatre Tech, Radiography, and Critical Care. Apply today.",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    overview: "Allied Health professionals are the backbone of modern diagnostics and critical care, yet specialized technological training is required to operate advanced hospital equipment. This B.Sc. course provides a practical, hands-on approach to mastering Operation Theatre Technology, Critical Care, and Radiography. Embedded within the ICUs and OTs of Revathi Medical Center, you’ll learn how to support complex surgeries and manage life-support systems.",
    format: "3 + 1 Years, On-Campus, 1-Year Clinical Internship",
    tuition: "Contact Admissions",
    units: "120 Seats",
    notes: "Revathi courses are subject to institutional pricing structures. Students gain direct access to our 300-bed multi-specialty hospital for mandatory clinical internships. Click “ENROLL NOW” to connect with our admissions counselors and get more information on course details and enrollment.",
    whoShouldTake: [
      "10+2 students with Science stream looking to operate advanced diagnostic and surgical technologies",
      "Individuals interested in fast-paced ICU and emergency room environments",
      "Future healthcare technologists interested in specialized tracks like Cardiac Tech or Respiratory Therapy"
    ],
    whatYoullLearn: [
      "Apply critical care protocols in managing advanced life support systems and intensive care units.",
      "Incorporate standardized procedures to assist surgeons during high-risk operations and manage anesthesia equipment.",
      "Develop strategies to execute precise radiological imaging (MRI/CT) with optimal patient safety.",
      "Develop a plan to lead technical teams within hospital diagnostic departments."
    ],
    accreditationText: "Accredited by TNMGRMU and the Government of Tamil Nadu.",
    accreditationList: [
      "The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)",
      "Government of Tamil Nadu"
    ],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "msc-nursing",
    courseCode: "RMC-NUR005",
    title: "M.Sc. Nursing: Advanced Leadership & Evidence-Based Practice",
    shortTitle: "M.Sc. Nursing",
    school: "Revathi College of Nursing",
    seoTitle: "M.Sc. Nursing Admission | Postgraduate Nursing | Revathi Institutions",
    seoDescription: "Elevate your nursing career with M.Sc. Nursing at Revathi Institutions. Specialize in advanced clinical research and healthcare administration.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600",
    overview: "The M.Sc. Nursing program is designed for professional nurses seeking to advance into leadership, research, or specialized clinical roles. This postgraduate course emphasizes evidence-based practice, advanced pathophysiology, and healthcare management. Students leverage the extensive clinical environment of Revathi Medical Center to conduct meaningful research and manage complex patient care systems.",
    format: "2 Years, On-Campus, Research Thesis",
    tuition: "Contact Admissions",
    units: "25 Seats",
    notes: "Revathi courses are subject to institutional pricing structures. Students gain direct access to our 300-bed multi-specialty hospital for mandatory clinical internships. Click “ENROLL NOW” to connect with our admissions counselors and get more information on course details and enrollment.",
    whoShouldTake: [
      "B.Sc. Nursing or Post Basic B.Sc. Nursing graduates with minimum 55% marks",
      "Registered Nurses with at least 1 year of clinical or teaching experience",
      "Healthcare professionals aiming for academic or administrative leadership roles"
    ],
    whatYoullLearn: [
      "Critically evaluate and apply advanced nursing theories in clinical practice.",
      "Design and execute nursing research projects that contribute to healthcare improvement.",
      "Implement advanced patient assessment and diagnostic reasoning in specialized care.",
      "Develop leadership strategies for managing nursing departments and educational units."
    ],
    accreditationText: "Fully accredited by INC and TNNMC with recognition from the Government of Tamil Nadu.",
    accreditationList: [
      "The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)",
      "Indian Nursing Council (INC)",
      "Tamil Nadu Nurses and Midwives Council (TNNMC)",
      "Government of Tamil Nadu"
    ],
    color: "bg-primary"
  },
  {
    slug: "bsc-respiratory-therapy",
    courseCode: "RMC-AHS004",
    title: "B.Sc. Respiratory Therapy: Advanced Pulmonary Care",
    shortTitle: "Respiratory Therapy",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Respiratory Therapy | Pulmonary Care Specialists | Revathi",
    seoDescription: "Train as a Respiratory Therapist at Revathi Institutions. Master life-support systems and pulmonary diagnostics in our multi-specialty hospital.",
    heroImage: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1600",
    overview: "Respiratory Therapy is a critical specialization focusing on cardiopulmonary health and life-support management. As chronic respiratory conditions and intensive care needs rise, the demand for skilled therapists is unprecedented. This program provides intensive training in mechanical ventilation, airway management, and diagnostic testing, all within the live clinical environment of Revathi Medical Center.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Revathi courses are subject to institutional pricing structures. Students gain direct access to our 300-bed multi-specialty hospital for mandatory clinical internships.",
    whoShouldTake: [
      "10+2 Science students interested in critical care and pulmonary medicine",
      "Individuals looking to specialize in ICU and emergency department roles",
      "Future healthcare experts in chronic lung disease management"
    ],
    whatYoullLearn: [
      "Operate and manage advanced mechanical ventilators and life-support equipment.",
      "Perform pulmonary function tests and analyze arterial blood gases for diagnosis.",
      "Implement respiratory care protocols for neonatal, pediatric, and adult patients.",
      "Develop strategies for emergency airway management and cardiac resuscitation."
    ],
    accreditationText: "Accredited by TNMGRMU and recognized by the Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-radiography-imaging",
    courseCode: "RMC-AHS005",
    title: "B.Sc. Radiography & Imaging Technology: Precision Diagnostics",
    shortTitle: "Radiography",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Radiography & Imaging | Top Medical Imaging College | Revathi",
    seoDescription: "Master X-ray, CT, MRI, and Ultrasound at Revathi Institutions. Professional training in advanced medical imaging technology.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    overview: "Medical imaging is the cornerstone of modern diagnosis. This program prepares students to become expert radiographers, capable of operating complex imaging equipment while ensuring patient safety. Students gain hands-on experience with X-ray, CT scan, MRI, and Ultrasound machines at Revathi Medical Center, learning the science of capturing internal structures with high precision.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Direct exposure to advanced imaging departments in our 300-bed hospital.",
    whoShouldTake: [
      "10+2 Science students with an interest in technology and healthcare diagnostics",
      "Individuals seeking technical roles in hospital radiology departments",
      "Future specialists in MRI, CT, or interventional radiology"
    ],
    whatYoullLearn: [
      "Apply radiation safety protocols and physics to medical imaging procedures.",
      "Execute high-quality X-ray, CT, and MRI scans for accurate diagnosis.",
      "Understand and manage digital imaging and communications in medicine (DICOM).",
      "Assist in interventional radiologic procedures and image processing."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-ot-anesthesia",
    courseCode: "RMC-AHS006",
    title: "B.Sc. Operation Theater & Anesthesia Tech: Surgical Support mastery",
    shortTitle: "OT & Anesthesia",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. OT & Anesthesia Tech Admission | Revathi Institutions",
    seoDescription: "Become a vital part of the surgical team. B.Sc. in OT and Anesthesia Technology with hands-on training in major operation theaters.",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    overview: "Operation Theater and Anesthesia Technologists are essential for the smooth functioning of surgical procedures. This course trains students to prepare the OT, manage sterile environments, and assist anesthesiologists in drug preparation and patient monitoring. Training takes place in our 300-bed hospital's modern surgical suites.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Live training in multi-specialty operation theaters.",
    whoShouldTake: [
      "10+2 science students aiming for roles in surgical environments",
      "Individuals interested in anesthesiology and perioperative care",
      "Future healthcare professionals focused on sterile processing and OT management"
    ],
    whatYoullLearn: [
      "Maintain sterile conditions and manage complex surgical instrumentation.",
      "Assist in the administration and monitoring of anesthesia protocols.",
      "Prepare and manage specialized equipment for various surgical disciplines.",
      "Develop emergency response skills for critical situations in the OT."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-dialysis-tech",
    courseCode: "RMC-AHS007",
    title: "B.Sc. Dialysis Technology: Renal Care Expertise",
    shortTitle: "Dialysis Tech",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Dialysis Technology | Renal Care Specialists | Revathi",
    seoDescription: "Specialized training in dialysis technology. Master renal replacement therapies and patient care at Revathi Institutions.",
    heroImage: "https://images.unsplash.com/photo-1505751172107-5739cf24a93d?auto=format&fit=crop&q=80&w=1600",
    overview: "Dialysis technicians are vital for patients with chronic kidney disease. This course covers the principles of hemodialysis and peritoneal dialysis, water treatment systems, and the management of renal failure. Students train in the active dialysis unit of Revathi Medical Center, learning both the technical and compassionate aspects of renal care.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Hands-on experience in one of the region's busiest dialysis centers.",
    whoShouldTake: ["Students interested in nephrology and long-term patient care"],
    whatYoullLearn: [
      "Perform hemodialysis procedures and monitor patient vitals during treatment.",
      "Operate and maintain advanced dialysis machines and reverse osmosis systems.",
      "Understand kidney disorders and renal replacement therapy management.",
      "Implement infection control and safety protocols in dialysis units."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-physician-asst",
    courseCode: "RMC-AHS008",
    title: "B.Sc. Physician Assistant: Clinical Excellence & Support",
    shortTitle: "Physician Asst.",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Physician Assistant Admission | Top Medical College | Revathi",
    seoDescription: "Become a skilled Physician Assistant. Comprehensive clinical training alongside senior physicians at Revathi Medical Center.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1600",
    overview: "Physician Assistants are trained to provide a wide range of diagnostic and therapeutic services under the supervision of physicians. This versatile course covers medical histories, physical examinations, and clinical procedures across multiple departments, including Cardiology, Orthopedics, and General Medicine.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Broad multi-specialty clinical exposure.",
    whoShouldTake: ["Students seeking a versatile clinical role with direct patient interaction"],
    whatYoullLearn: [
      "Conduct comprehensive physical exams and record medical histories.",
      "Interpret diagnostic tests and assist in developing treatment plans.",
      "Perform various clinical procedures under physician supervision.",
      "Communicate effectively with patients and healthcare teams."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-cardiac-tech",
    courseCode: "RMC-AHS009",
    title: "B.Sc. Cardiac Technology: Cardiovascular diagnostic mastery",
    shortTitle: "Cardiac Tech",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Cardiac Technology Admission | Revathi Institutions",
    seoDescription: "Train in advanced cardiac diagnostics like ECG, Echo, and Cath Lab procedures at Revathi Medical Center.",
    heroImage: "https://images.unsplash.com/photo-1505572191966-581c19ad492d?auto=format&fit=crop&q=80&w=1600",
    overview: "Cardiac technologists assist cardiologists in diagnosing and treating heart diseases. This course focuses on non-invasive procedures like ECG, stress testing, and echocardiography, as well as assisting in invasive procedures within the cardiac catheterization lab.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Training in our specialized cardiac care unit.",
    whoShouldTake: ["Science students interested in cardiovascular health and diagnostic technology"],
    whatYoullLearn: [
      "Perform and interpret ECGs, Holter monitoring, and TMT studies.",
      "Assist cardiologists during echocardiograms and invasive cath lab procedures.",
      "Manage cardiovascular life-support and monitoring equipment.",
      "Understand cardiac anatomy, physiology, and pathology in depth."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-cppt",
    courseCode: "RMC-AHS010",
    title: "B.Sc. CPPT: Critical Care & Perfusion Technology",
    shortTitle: "CPPT",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Perfusion Technology | CPPT Course | Revathi Institutions",
    seoDescription: "Master heart-lung machine operation and extracorporeal circulation at Revathi's cardiac surgery department.",
    heroImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1600",
    overview: "Critical Care and Perfusion Technology (CPPT) is a high-stakes field focusing on extracorporeal circulation. Perfusionists operate the heart-lung machine during cardiac surgeries, maintaining the patient's physiological state while the heart is stopped. This intensive program is embedded in our active cardiac surgery theaters.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Training in advanced cardiothoracic surgical suites.",
    whoShouldTake: ["Students aiming for highly specialized roles in cardiac surgery teams"],
    whatYoullLearn: [
      "Operate heart-lung machines and extracorporeal life support systems.",
      "Monitor and manage physiological parameters during bypass surgery.",
      "Incorporate advanced blood management and conservation techniques.",
      "Maintain perfusion equipment and troubleshoot critical failures."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-optometry",
    courseCode: "RMC-AHS011",
    title: "B.Sc. Optometry: Vision Science & Eye Care Excellence",
    shortTitle: "Optometry",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Optometry Admission | Eye Care Career | Revathi Institutions",
    seoDescription: "Train as a professional optometrist. Master vision correction, contact lenses, and eye health at Revathi Institutions.",
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1600",
    overview: "Optometry is a primary healthcare profession focusing on the eyes and visual system. This course prepares students to diagnose vision problems, prescribe corrective lenses, and detect eye diseases. Students benefit from the ophthalmology unit at Revathi Medical Center for clinical practice.",
    format: "4 Years (3+1), On-Campus, Professional Training",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Integrated training with comprehensive ophthalmology diagnostics.",
    whoShouldTake: ["Individuals interested in vision science and independent healthcare practice"],
    whatYoullLearn: [
      "Perform comprehensive eye exams and refractive vision testing.",
      "Fit and manage contact lenses for various ocular conditions.",
      "Diagnose and manage common eye diseases and binocular vision issues.",
      "Prescribe spectacles and visual aids for low vision rehabilitation."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-clinical-nutrition",
    courseCode: "RMC-AHS012",
    title: "B.Sc. Clinical Nutrition: Dietetics & Medical Nutrition Therapy",
    shortTitle: "Clinical Nutrition",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Clinical Nutrition | Dietetics & Wellness | Revathi",
    seoDescription: "Become an expert in medical nutrition therapy. specialized training in hospital dietetics at Revathi Institutions.",
    heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600",
    overview: "Clinical nutritionists are essential for patient recovery and managing lifestyle diseases. This course covers the science of dietetics, medical nutrition therapy for various conditions, and hospital food service management. Students work with our hospital's nutrition team to plan patient-specific diets.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Direct integration with hospital dietary and clinical management.",
    whoShouldTake: ["Students interested in health, wellness, and medical science through dietetics"],
     whatYoullLearn: [
      "Develop medical nutrition therapy plans for various clinical conditions.",
      "Conduct nutritional assessments and counseling for patients.",
      "Understand the biochemistry of food and its impact on disease.",
      "Manage hospital food systems and ensure nutritional safety."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-aect",
    courseCode: "RMC-AHS013",
    title: "B.Sc. AECT: Accident & Emergency Care Technology",
    shortTitle: "AECT",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. AECT | Accident & Emergency Care | Revathi Institutions",
    seoDescription: "Train for the fast-paced world of emergency medicine. Master trauma care and life support in our ER.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    overview: "AECT professionals provide immediate care in emergency situations. This program trains students in trauma management, basic and advanced life support, and emergency medical procedures. Training takes place in the busy emergency room of Revathi Medical Center.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "High-intensity training in our Level 1 trauma-ready emergency unit.",
    whoShouldTake: ["Students thriving in fast-paced, high-pressure medical environments"],
    whatYoullLearn: [
      "Manage acute trauma and medical emergencies in the ER.",
      "Incorporate life-support protocols (BLS/ACLS) during resuscitation.",
      "Assist emergency physicians in critical procedures and monitoring.",
      "Develop rapid triage skills and emergency diagnostic support."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-critical-care",
    courseCode: "RMC-AHS014",
    title: "B.Sc. Critical Care Technology: ICU mastery",
    shortTitle: "Critical Care",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. Critical Care Technology Admission | Revathi Institutions",
    seoDescription: "Join the ICU team. Master critical care technologies and life support systems at Revathi Medical Center.",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    overview: "Critical Care Technologists manage the sophisticated equipment found in Intensive Care Units. This program focuses on patient monitoring, ventilator management, and supporting the ICU team in life-saving procedures within multi-specialty ICUs.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Direct training in specialized medical and surgical ICUs.",
    whoShouldTake: ["Students interested in advanced biomedical technology and critical patient care"],
    whatYoullLearn: [
      "Operate and maintain critical care ventilators and monitors.",
      "Monitor arterial lines, central lines, and complex patient vitals.",
      "Assist in procedures like intubation and emergency bedside care.",
      "Maintain patient data and troubleshoot clinical technology in the ICU."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bsc-medical-lab-tech",
    courseCode: "RMC-AHS015",
    title: "B.Sc. Medical Lab Tech: Diagnostic Science excellence",
    shortTitle: "MLT",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "B.Sc. MLT Admission | Best Laboratory Science College | Revathi",
    seoDescription: "Launch your career in diagnostic lab science. Master pathology, microbiology, and biochemistry at Revathi Institutions.",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600",
    overview: "Medical Lab Technicians are the detectives of healthcare. This course covers Clinical Biochemistry, Microbiology, Hematology, and Histopathology. Students gain extensive experience in our fully automated hospital laboratory, processing real-world clinical samples.",
    format: "3 + 1 Years, On-Campus, Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Training in our NABL-accredited multi-specialty laboratory.",
    whoShouldTake: ["Science students with a passion for laboratory research and diagnostics"],
    whatYoullLearn: [
      "Perform complex biochemical analyses and microbiological testing.",
      "Master blood sampling, hematology testing, and cross-matching.",
      "Operate and maintain fully automated laboratory diagnostic systems.",
      "Ensure quality control and accurate clinical reporting."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "mha-hospital-administration",
    courseCode: "RMC-MHA001",
    title: "Master of Hospital Administration: Healthcare Leadership",
    shortTitle: "MHA",
    school: "Revathi College of Paramedical Sciences",
    seoTitle: "MHA Postgraduate Admission | Healthcare Management | Revathi",
    seoDescription: "Advance into healthcare management with a Master of Hospital Administration at Revathi Institutions. Learn within a living 300-bed hospital ecosystem.",
    heroImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1600",
    overview: "The MHA program bridges clinical excellence and administrative efficiency. This postgraduate course prepares future managers to lead hospital operations, quality management, and healthcare finance. Students gain unparalleled insight by observing real-world management at Revathi Medical Center.",
    format: "2 Years, On-Campus, Management Internship",
    tuition: "Contact Admissions",
    units: "15 Seats",
    notes: "Deep integration with hospital operations and quality assurance teams.",
    whoShouldTake: ["Graduates from any discipline, especially medical or science, seeking leadership roles"],
    whatYoullLearn: [
      "Manage hospital operations, planning, and service delivery.",
      "Implement quality management systems and NABH/NABL standards.",
      "Understand healthcare finance, marketing, and legal requirements.",
      "Lead human resources and organizational behavior in healthcare settings."
    ],
    accreditationText: "Accredited by TNMGRMU and Government of Tamil Nadu.",
    accreditationList: ["The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)", "Government of Tamil Nadu"],
    counselingCode: "500",
    color: "bg-primary"
  },
  {
    slug: "bot",
    courseCode: "RMC-BOT001",
    title: "Bachelor of Occupational Therapy: Enabling independence",
    shortTitle: "Occ. Therapy",
    school: "Revathi Institute of Occupational Therapy",
    seoTitle: "BOT Admissions | Best Occupational Therapy College | Revathi",
    seoDescription: "Master the art of enabling life through movement and activity. Pursue BOT at Revathi Institutions with clinical training.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    overview: "Occupational Therapy focuses on enabling people to participate in the activities of everyday life. This degree program combines medical knowledge with behavioral science to rehabilitate individuals with physical, mental, or developmental challenges. Students train in specialized OT labs and the rehab units of Revathi Medical Center.",
    format: "4.5 Years, On-Campus, 6-Month Internship",
    tuition: "Contact Admissions",
    units: "20 Seats",
    notes: "Clinical training in pediatric and adult neurological rehab units.",
    whoShouldTake: ["Individuals passionate about empowering people to live independent lives"],
    whatYoullLearn: [
      "Assess and treat patients with developmental and neurological disorders.",
      "Incorporate adaptive technologies and environmental modifications.",
      "Develop pediatric rehabilitation strategies through play and activity.",
      "Lead vocational rehabilitation and geriatric care programs."
    ],
    accreditationText: "Accredited by TNMGRMU and recognized by AIOTA and WFOT.",
    accreditationList: [
      "The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)",
      "Government of Tamil Nadu",
      "All India Occupational Therapists' Association (AIOTA)",
      "World Federation of Occupational Therapists (WFOT)"
    ],
    counselingCode: "954",
    color: "bg-primary"
  }
];

export function getCourseBySlug(slug: string): CourseContent | undefined {
  return coursesData.find((course) => course.slug === slug);
}
