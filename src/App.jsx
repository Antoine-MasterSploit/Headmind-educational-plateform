import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, Users, Mail, Phone, MapPin, Clock, Star, ArrowRight, Check, X, Menu, Globe } from 'lucide-react';

// Language translations
const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      services: "Services",
      courses: "Cours",
      team: "Équipe",
      upcoming: "À venir",
      contact: "Contact"
    },
    // Hero
    hero: {
      title1: "Élevez Votre Apprentissage",
      title2: "avec",
      highlight: "des Tuteurs Experts",
      description: "Une éducation personnalisée conçue pour libérer tout votre potentiel. Rejoignez des milliers d'étudiants qui atteignent l'excellence académique grâce à nos cours complets et notre tutorat dédié.",
      exploreCourses: "Explorer les Cours",
      meetTutors: "Rencontrer Nos Tuteurs"
    },
    // Services
    services: {
      title: "Nos Services",
      subtitle: "Des solutions éducatives complètes adaptées à vos objectifs académiques et à votre style d'apprentissage",
      premiumCourses: "Cours Premium",
      premiumDesc: "Programme d'études conçu par des experts couvrant les matières essentielles avec des leçons interactives, du matériel de pratique et des évaluations complètes.",
      personalTutoring: "Tutorat Personnel",
      personalDesc: "Sessions individuelles avec des éducateurs expérimentés qui s'adaptent à votre rythme d'apprentissage et vous accordent une attention ciblée.",
      testPrep: "Préparation aux Examens",
      testPrepDesc: "Programmes spécialisés conçus pour vous préparer aux tests standardisés avec des stratégies éprouvées et des examens pratiques.",
      features: {
        structuredPaths: "Parcours structurés",
        videoLectures: "Cours vidéo & ressources",
        progressTracking: "Suivi des progrès",
        certification: "Certification à la fin",
        flexibleScheduling: "Horaires flexibles",
        customizedPlans: "Plans personnalisés",
        realtimeFeedback: "Feedback en temps réel",
        goalOriented: "Approche orientée objectifs",
        satActPrep: "Préparation SAT, ACT, AP",
        practiceTests: "Tests pratiques complets",
        scoreGuarantee: "Garantie d'amélioration",
        expertStrategies: "Stratégies d'experts"
      }
    },
    // Courses
    courses: {
      title: "Cours en Vedette",
      subtitle: "Découvrez notre sélection de cours complets conçus par des experts de l'industrie",
      weeks: "semaines",
      students: "étudiants",
      enrollNow: "S'inscrire",
      features: {
        liveSessions: "Sessions en Direct",
        practiceProblems: "Exercices Pratiques",
        certificate: "Certificat",
        support: "Support 1-à-1",
        projectBased: "Basé sur Projets",
        codeReviews: "Revues de Code",
        careerGuidance: "Orientation Carrière",
        portfolioBuilding: "Création de Portfolio",
        writingWorkshops: "Ateliers d'Écriture",
        bookClub: "Club de Lecture",
        essayReviews: "Revues de Dissertations",
        grammarMastery: "Maîtrise de la Grammaire",
        virtualLabs: "Laboratoires Virtuels",
        problemSolving: "Résolution de Problèmes",
        examPrep: "Préparation aux Examens",
        researchMethods: "Méthodes de Recherche"
      },
      levels: {
        advanced: "Avancé",
        intermediate: "Intermédiaire",
        allLevels: "Tous Niveaux"
      }
    },
    // Course titles and descriptions
    courseData: {
      math: {
        title: "Mathématiques Avancées",
        description: "Couverture complète du calcul, de l'algèbre et de la géométrie analytique pour les étudiants avancés"
      },
      cs: {
        title: "Fondamentaux de l'Informatique",
        description: "Maîtrisez les concepts de programmation, les algorithmes et les structures de données avec des projets pratiques"
      },
      english: {
        title: "Langue et Littérature Anglaise",
        description: "Améliorez vos compétences en écriture, analyse littéraire et excellence en communication"
      },
      physics: {
        title: "Physique et Sciences de Laboratoire",
        description: "Explorez la mécanique, l'électromagnétisme et la physique expérimentale avec des laboratoires virtuels"
      }
    },
    // Team
    team: {
      title: "Rencontrez Nos Tuteurs Experts",
      subtitle: "Apprenez auprès d'éducateurs passionnés avec des années d'expérience et des résultats prouvés",
      rating: "Note",
      students: "Étudiants",
      experience: "Expérience",
      education: "Formation",
      available: "Disponible",
      reserveSession: "Réserver une Session",
      years: "ans"
    },
    // Tutor data
    tutorData: {
      sarah: {
        name: "Dr. Sarah Mitchell",
        specialty: "Mathématiques & Physique",
        bio: "Passionnée par rendre les concepts complexes accessibles et engageants pour tous les étudiants",
        education: "Doctorat en Mathématiques Appliquées, MIT"
      },
      james: {
        name: "Prof. James Chen",
        specialty: "Informatique",
        bio: "Vétéran de l'industrie apportant une expertise de programmation du monde réel en classe",
        education: "Master en Informatique, Stanford"
      },
      emily: {
        name: "Dr. Emily Rodriguez",
        specialty: "Anglais & Littérature",
        bio: "Dévouée à favoriser la pensée critique et l'expression créative chez les étudiants",
        education: "Doctorat en Littérature Anglaise, Oxford"
      },
      michael: {
        name: "Dr. Michael Park",
        specialty: "Sciences de Laboratoire",
        bio: "Combinant connaissances théoriques et expérience pratique en laboratoire",
        education: "Doctorat en Physique, Caltech"
      }
    },
    // Upcoming
    upcoming: {
      title: "Cours à Venir",
      subtitle: "Inscrivez-vous maintenant pour notre prochaine session qui commence bientôt avec des places limitées",
      starts: "Début",
      spotsLeft: "places restantes",
      registerNow: "S'inscrire Maintenant",
      satPrep: "Bootcamp Préparation SAT",
      webDev: "Intensif Développement Web",
      creativeWriting: "Atelier d'Écriture Créative"
    },
    // Contact
    contact: {
      title: "Contactez-Nous",
      subtitle: "Des questions? Nous sommes là pour vous aider à commencer votre parcours d'apprentissage",
      info: "Informations de Contact",
      infoDesc: "Contactez-nous par l'un de ces canaux et nous vous répondrons dans les 24 heures.",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      addressValue: "123 Avenue de l'Éducation, Paris, 75001",
      form: {
        fullName: "Nom Complet",
        email: "Adresse Email",
        phone: "Numéro de Téléphone",
        message: "Message",
        send: "Envoyer le Message"
      }
    },
    // Footer
    footer: {
      description: "Accompagner les étudiants du monde entier avec une éducation de qualité et des services de tutorat personnalisés depuis 2015.",
      quickLinks: "Liens Rapides",
      resources: "Ressources",
      legal: "Légal",
      blog: "Blog",
      faq: "FAQ",
      support: "Support",
      careers: "Carrières",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      refund: "Politique de Remboursement",
      rights: "Tous droits réservés. Conçu avec excellence en éducation."
    },
    // Modals
    modals: {
      courseRegistration: "Inscription au Cours",
      tutorReservation: "Réserver une Session de Tutorat",
      selectedCourse: "Cours Sélectionné",
      selectedTutor: "Tuteur Sélectionné",
      additionalInfo: "Informations Supplémentaires",
      learningGoals: "Parlez-nous de vos objectifs d'apprentissage...",
      preferredDate: "Date Préférée",
      preferredTime: "Heure Préférée",
      selectTime: "Sélectionner l'heure...",
      sessionGoals: "Objectifs de la Session",
      sessionGoalsPlaceholder: "Sur quoi aimeriez-vous vous concentrer pendant cette session?",
      completeRegistration: "Compléter l'Inscription",
      confirmReservation: "Confirmer la Réservation",
      thankYou: "Merci! Nous vous contacterons bientôt à"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      courses: "Courses",
      team: "Team",
      upcoming: "Upcoming",
      contact: "Contact"
    },
    // Hero
    hero: {
      title1: "Elevate Your Learning",
      title2: "with",
      highlight: "Expert Tutors",
      description: "Personalized education designed to unlock your full potential. Join thousands of students achieving academic excellence through our comprehensive courses and dedicated tutoring.",
      exploreCourses: "Explore Courses",
      meetTutors: "Meet Our Tutors"
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "Comprehensive educational solutions tailored to your academic goals and learning style",
      premiumCourses: "Premium Courses",
      premiumDesc: "Expertly crafted curriculum covering essential subjects with interactive lessons, practice materials, and comprehensive assessments.",
      personalTutoring: "Personal Tutoring",
      personalDesc: "One-on-one sessions with experienced educators who adapt to your learning pace and provide focused attention.",
      testPrep: "Test Preparation",
      testPrepDesc: "Specialized programs designed to prepare you for standardized tests with proven strategies and practice exams.",
      features: {
        structuredPaths: "Structured learning paths",
        videoLectures: "Video lectures & resources",
        progressTracking: "Progress tracking",
        certification: "Certification upon completion",
        flexibleScheduling: "Flexible scheduling",
        customizedPlans: "Customized lesson plans",
        realtimeFeedback: "Real-time feedback",
        goalOriented: "Goal-oriented approach",
        satActPrep: "SAT, ACT, AP prep",
        practiceTests: "Full-length practice tests",
        scoreGuarantee: "Score improvement guarantee",
        expertStrategies: "Expert test strategies"
      }
    },
    // Courses
    courses: {
      title: "Featured Courses",
      subtitle: "Discover our selection of comprehensive courses designed by industry experts",
      weeks: "weeks",
      students: "students",
      enrollNow: "Enroll Now",
      features: {
        liveSessions: "Live Sessions",
        practiceProblems: "Practice Problems",
        certificate: "Certificate",
        support: "1-on-1 Support",
        projectBased: "Project-Based",
        codeReviews: "Code Reviews",
        careerGuidance: "Career Guidance",
        portfolioBuilding: "Portfolio Building",
        writingWorkshops: "Writing Workshops",
        bookClub: "Book Club",
        essayReviews: "Essay Reviews",
        grammarMastery: "Grammar Mastery",
        virtualLabs: "Virtual Labs",
        problemSolving: "Problem Solving",
        examPrep: "Exam Prep",
        researchMethods: "Research Methods"
      },
      levels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        allLevels: "All Levels"
      }
    },
    // Course titles and descriptions
    courseData: {
      math: {
        title: "Advanced Mathematics",
        description: "Comprehensive coverage of calculus, algebra, and analytical geometry for advanced students"
      },
      cs: {
        title: "Computer Science Fundamentals",
        description: "Master programming concepts, algorithms, and data structures with hands-on projects"
      },
      english: {
        title: "English Language & Literature",
        description: "Enhance writing skills, literary analysis, and communication excellence"
      },
      physics: {
        title: "Physics & Laboratory Sciences",
        description: "Explore mechanics, electromagnetism, and experimental physics with virtual labs"
      }
    },
    // Team
    team: {
      title: "Meet Our Expert Tutors",
      subtitle: "Learn from passionate educators with years of teaching experience and proven track records",
      rating: "Rating",
      students: "Students",
      experience: "Experience",
      education: "Education",
      available: "Available",
      reserveSession: "Reserve Session",
      years: "years"
    },
    // Tutor data
    tutorData: {
      sarah: {
        name: "Dr. Sarah Mitchell",
        specialty: "Mathematics & Physics",
        bio: "Passionate about making complex concepts accessible and engaging for all students",
        education: "PhD in Applied Mathematics, MIT"
      },
      james: {
        name: "Prof. James Chen",
        specialty: "Computer Science",
        bio: "Industry veteran bringing real-world programming expertise to the classroom",
        education: "MS Computer Science, Stanford"
      },
      emily: {
        name: "Dr. Emily Rodriguez",
        specialty: "English & Literature",
        bio: "Dedicated to fostering critical thinking and creative expression in students",
        education: "PhD English Literature, Oxford"
      },
      michael: {
        name: "Dr. Michael Park",
        specialty: "Laboratory Sciences",
        bio: "Combining theoretical knowledge with practical laboratory experience",
        education: "PhD Physics, Caltech"
      }
    },
    // Upcoming
    upcoming: {
      title: "Upcoming Courses",
      subtitle: "Register now for our next session starting soon with limited spots available",
      starts: "Starts",
      spotsLeft: "spots left",
      registerNow: "Register Now",
      satPrep: "SAT Preparation Bootcamp",
      webDev: "Web Development Intensive",
      creativeWriting: "Creative Writing Workshop"
    },
    // Contact
    contact: {
      title: "Get In Touch",
      subtitle: "Have questions? We're here to help you start your learning journey",
      info: "Contact Information",
      infoDesc: "Reach out to us through any of these channels and we'll respond within 24 hours.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      addressValue: "123 Education Ave, Learning City, LC 12345",
      form: {
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message",
        send: "Send Message"
      }
    },
    // Footer
    footer: {
      description: "Empowering students worldwide with quality education and personalized tutoring services since 2015.",
      quickLinks: "Quick Links",
      resources: "Resources",
      legal: "Legal",
      blog: "Blog",
      faq: "FAQ",
      support: "Support",
      careers: "Careers",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      refund: "Refund Policy",
      rights: "All rights reserved. Designed with excellence in education."
    },
    // Modals
    modals: {
      courseRegistration: "Course Registration",
      tutorReservation: "Reserve Tutoring Session",
      selectedCourse: "Selected Course",
      selectedTutor: "Selected Tutor",
      additionalInfo: "Additional Information",
      learningGoals: "Tell us about your learning goals...",
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time",
      selectTime: "Select time...",
      sessionGoals: "Session Goals",
      sessionGoalsPlaceholder: "What would you like to focus on during this session?",
      completeRegistration: "Complete Registration",
      confirmReservation: "Confirm Reservation",
      thankYou: "Thank you! We'll contact you shortly at"
    }
  }
};

const EducationPlatform = () => {
  const [language, setLanguage] = useState('fr'); // Default French
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [reservationModal, setReservationModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    tutor: '',
    date: '',
    time: '',
    message: ''
  });

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const courses = [
    {
      id: 1,
      titleKey: 'math',
      price: "$299",
      duration: 12,
      level: t.courses.levels.advanced,
      students: 145,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      features: [t.courses.features.liveSessions, t.courses.features.practiceProblems, t.courses.features.certificate, t.courses.features.support]
    },
    {
      id: 2,
      titleKey: 'cs',
      price: "$349",
      duration: 16,
      level: t.courses.levels.intermediate,
      students: 238,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      features: [t.courses.features.projectBased, t.courses.features.codeReviews, t.courses.features.careerGuidance, t.courses.features.portfolioBuilding]
    },
    {
      id: 3,
      titleKey: 'english',
      price: "$249",
      duration: 10,
      level: t.courses.levels.allLevels,
      students: 189,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
      features: [t.courses.features.writingWorkshops, t.courses.features.bookClub, t.courses.features.essayReviews, t.courses.features.grammarMastery]
    },
    {
      id: 4,
      titleKey: 'physics',
      price: "$329",
      duration: 14,
      level: t.courses.levels.advanced,
      students: 167,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      features: [t.courses.features.virtualLabs, t.courses.features.problemSolving, t.courses.features.examPrep, t.courses.features.researchMethods]
    }
  ];

  const tutors = [
    {
      id: 1,
      key: 'sarah',
      experience: 15,
      rating: 4.9,
      students: 450,
      availability: ["Lun-Mer-Ven", "14h-18h"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 2,
      key: 'james',
      experience: 12,
      rating: 4.8,
      students: 380,
      availability: ["Mar-Jeu-Sam", "15h-19h"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 3,
      key: 'emily',
      experience: 10,
      rating: 4.9,
      students: 420,
      availability: ["Lun-Mer-Ven", "13h-17h"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 4,
      key: 'michael',
      experience: 18,
      rating: 4.9,
      students: 395,
      availability: ["Mar-Jeu", "16h-20h"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  const upcomingCourses = [
    {
      id: 1,
      titleKey: 'satPrep',
      startDate: "15 Fév 2026",
      duration: 8,
      instructor: "Dr. Sarah Mitchell",
      spots: 12,
      price: "$399",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      titleKey: 'webDev',
      startDate: "22 Fév 2026",
      duration: 12,
      instructor: "Prof. James Chen",
      spots: 8,
      price: "$449",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      titleKey: 'creativeWriting',
      startDate: "1 Mar 2026",
      duration: 6,
      instructor: "Dr. Emily Rodriguez",
      spots: 15,
      price: "$279",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
    }
  ];

  const handleRegistration = (course) => {
    setSelectedCourse(course);
    setFormData({ ...formData, course: t.courseData[course.titleKey].title });
    setRegistrationModal(true);
  };

  const handleReservation = (tutor) => {
    setSelectedTutor(tutor);
    setFormData({ ...formData, tutor: t.tutorData[tutor.key].name });
    setReservationModal(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(`${t.modals.thankYou} ${formData.email}`);
    setRegistrationModal(false);
    setReservationModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      tutor: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="education-platform">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Crimson+Pro:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #7c3aed;
          --primary-dark: #5b21b6;
          --primary-light: #a78bfa;
          --secondary: #4f46e5;
          --accent: #ec4899;
          --grey-50: #f9fafb;
          --grey-100: #f3f4f6;
          --grey-200: #e5e7eb;
          --grey-300: #d1d5db;
          --grey-400: #9ca3af;
          --grey-600: #4b5563;
          --grey-800: #1f2937;
          --grey-900: #111827;
          --white: #ffffff;
          --black: #0a0a0a;
        }

        body {
          font-family: 'Crimson Pro', serif;
          background: var(--grey-50);
          color: var(--black);
          line-height: 1.7;
          overflow-x: hidden;
        }

        .education-platform {
          min-height: 100vh;
          position: relative;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--grey-200);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--grey-800);
          font-weight: 500;
          font-size: 1.05rem;
          position: relative;
          transition: color 0.3s;
          letter-spacing: 0.3px;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .lang-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(124, 58, 237, 0.3);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--grey-800);
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Hero Section */
        .hero {
          padding: 10rem 2rem 6rem;
          background-image: 
            linear-gradient(
              135deg,
              rgba(124, 58, 237, 0.85) 0%,
              rgba(91, 33, 182, 0.75) 50%,
              rgba(79, 70, 229, 0.85) 100%
            ),
            url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: white;
          letter-spacing: -2px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .hero h1 .highlight {
          color: #fde68a;
          display: inline-block;
        }

        .hero p {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.95);
          max-width: 700px;
          margin: 0 auto 3rem;
          font-weight: 400;
          line-height: 1.8;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 1.2rem 3rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          letter-spacing: 0.3px;
        }

        .btn-primary {
          background: white;
          color: var(--primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: white;
          color: var(--primary);
          transform: translateY(-2px);
        }

        /* Services Section */
        .services {
          padding: 6rem 2rem;
          background: white;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--grey-900);
          letter-spacing: -1px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--grey-600);
          line-height: 1.8;
        }

        .services-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          background: var(--grey-50);
          padding: 3rem 2.5rem;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-light);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.15);
          background: white;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1.8rem;
          font-size: 1.8rem;
        }

        .service-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          color: var(--grey-900);
          font-weight: 600;
        }

        .service-card p {
          color: var(--grey-600);
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .service-card ul {
          margin-top: 1.5rem;
          list-style: none;
        }

        .service-card li {
          padding: 0.6rem 0;
          color: var(--grey-700);
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .service-card li svg {
          color: var(--primary);
          flex-shrink: 0;
        }

        /* Courses Section */
        .courses {
          padding: 6rem 2rem;
          background: var(--grey-50);
        }

        .courses-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .course-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid var(--grey-200);
          display: flex;
          flex-direction: column;
        }

        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
          border-color: var(--primary);
        }

        .course-image {
          height: 240px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .course-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        .course-content {
          padding: 2.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .course-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          color: var(--grey-900);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .course-level {
          background: var(--primary-light);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .course-card p {
          color: var(--grey-600);
          margin-bottom: 1.5rem;
          line-height: 1.7;
          flex: 1;
        }

        .course-meta {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--grey-200);
          flex-wrap: wrap;
        }

        .course-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--grey-700);
          font-size: 0.95rem;
        }

        .course-meta-item svg {
          color: var(--primary);
        }

        .course-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          background: var(--grey-100);
          padding: 0.6rem 1rem;
          border-radius: 12px;
          font-size: 0.9rem;
          color: var(--grey-700);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-tag svg {
          color: var(--primary);
          width: 16px;
          height: 16px;
        }

        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .course-price {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
        }

        .enroll-btn {
          padding: 0.9rem 2rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .enroll-btn:hover {
          background: var(--primary-dark);
          transform: translateX(3px);
        }

        /* Team Section */
        .team {
          padding: 6rem 2rem;
          background: white;
        }

        .team-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .tutor-card {
          background: var(--grey-50);
          border-radius: 24px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .tutor-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05));
          opacity: 0;
          transition: opacity 0.4s;
        }

        .tutor-card:hover::before {
          opacity: 1;
        }

        .tutor-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.2);
          background: white;
        }

        .tutor-avatar {
          width: 140px;
          height: 140px;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          border: 5px solid white;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
          position: relative;
          z-index: 1;
        }

        .tutor-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          color: var(--grey-900);
          margin-bottom: 0.5rem;
          font-weight: 600;
          position: relative;
          z-index: 1;
        }

        .tutor-specialty {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
        }

        .tutor-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 1.5rem 0;
          padding: 1.5rem 0;
          border-top: 1px solid var(--grey-200);
          border-bottom: 1px solid var(--grey-200);
          position: relative;
          z-index: 1;
        }

        .tutor-stat {
          text-align: center;
        }

        .tutor-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
        }

        .tutor-stat-label {
          font-size: 0.9rem;
          color: var(--grey-600);
          margin-top: 0.3rem;
        }

        .tutor-bio {
          color: var(--grey-600);
          line-height: 1.7;
          margin: 1.5rem 0;
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
        }

        .tutor-info {
          background: white;
          padding: 1rem;
          border-radius: 12px;
          margin: 1.5rem 0;
          text-align: left;
          position: relative;
          z-index: 1;
        }

        .tutor-info-item {
          padding: 0.7rem 0;
          color: var(--grey-700);
          font-size: 0.95rem;
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
        }

        .tutor-info-item strong {
          color: var(--grey-900);
          min-width: 100px;
        }

        .reserve-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 1rem;
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
        }

        .reserve-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
        }

        /* Upcoming Courses */
        .upcoming {
          padding: 6rem 2rem;
          background: linear-gradient(180deg, var(--grey-50) 0%, white 100%);
        }

        .upcoming-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 2rem;
        }

        .upcoming-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 300px 1fr auto;
          gap: 0;
          align-items: stretch;
          border: 2px solid var(--grey-200);
          transition: all 0.3s;
        }

        .upcoming-card:hover {
          border-color: var(--primary);
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.1);
          transform: translateX(5px);
        }

        .upcoming-image {
          width: 100%;
          height: 100%;
          min-height: 220px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .upcoming-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 100%);
        }

        .upcoming-info {
          padding: 2.5rem;
        }

        .upcoming-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: var(--grey-900);
          margin-bottom: 1.2rem;
          font-weight: 600;
        }

        .upcoming-details {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 1.2rem;
          flex-wrap: wrap;
        }

        .upcoming-detail {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--grey-700);
          font-size: 1.05rem;
        }

        .upcoming-detail svg {
          color: var(--primary);
        }

        .spots-remaining {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          color: #92400e;
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.95rem;
          display: inline-block;
        }

        .upcoming-action {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.5rem;
          background: var(--grey-50);
          min-width: 200px;
        }

        .upcoming-price {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        /* Contact Section */
        .contact {
          padding: 6rem 2rem;
          background: white;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }

        .contact-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: var(--grey-900);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .contact-info p {
          color: var(--grey-600);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.5rem;
          background: var(--grey-50);
          border-radius: 16px;
          transition: all 0.3s;
        }

        .contact-method:hover {
          background: var(--primary-light);
          color: white;
          transform: translateX(5px);
        }

        .contact-method-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .contact-method-info h4 {
          font-weight: 600;
          margin-bottom: 0.3rem;
          font-size: 1.05rem;
        }

        .contact-method-info p {
          margin: 0;
          font-size: 1rem;
        }

        .contact-form {
          background: var(--grey-50);
          padding: 3rem;
          border-radius: 24px;
          border: 2px solid var(--grey-200);
        }

        .form-group {
          margin-bottom: 1.8rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.6rem;
          color: var(--grey-800);
          font-weight: 600;
          font-size: 1.05rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          border: 2px solid var(--grey-300);
          border-radius: 12px;
          font-family: 'Crimson Pro', serif;
          font-size: 1.05rem;
          transition: all 0.3s;
          background: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.3);
        }

        /* Footer */
        footer {
          background: var(--grey-900);
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-section p {
          color: var(--grey-400);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: var(--grey-400);
          text-decoration: none;
          transition: color 0.3s;
          font-size: 1.05rem;
        }

        .footer-links a:hover {
          color: var(--primary-light);
        }

        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid var(--grey-800);
          text-align: center;
          color: var(--grey-400);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
          animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s;
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: var(--grey-900);
          font-weight: 600;
        }

        .close-btn {
          background: var(--grey-100);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .close-btn:hover {
          background: var(--grey-200);
          transform: rotate(90deg);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }

          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            gap: 1.5rem;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero h1 {
            font-size: 3rem;
          }

          .upcoming-card {
            grid-template-columns: 1fr;
          }

          .upcoming-image {
            min-height: 250px;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero {
            background-attachment: scroll;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.2rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .courses-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .upcoming-card {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .upcoming-action {
            text-align: left;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <div className="logo">Headmind Academy</div>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a></li>
            <li><a href="#courses" onClick={() => setMobileMenuOpen(false)}>{t.nav.courses}</a></li>
            <li><a href="#team" onClick={() => setMobileMenuOpen(false)}>{t.nav.team}</a></li>
            <li><a href="#upcoming" onClick={() => setMobileMenuOpen(false)}>{t.nav.upcoming}</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a></li>
            <li>
              <button className="lang-toggle" onClick={toggleLanguage}>
                <Globe size={18} />
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </li>
          </ul>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            {t.hero.title1}<br />
            {t.hero.title2} <span className="highlight">{t.hero.highlight}</span>
          </h1>
          <p>{t.hero.description}</p>
          <div className="cta-buttons">
            <a href="#courses" className="btn-primary">
              {t.hero.exploreCourses} <ArrowRight size={20} />
            </a>
            <a href="#team" className="btn-secondary">
              {t.hero.meetTutors}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <BookOpen size={32} />
            </div>
            <h3>{t.services.premiumCourses}</h3>
            <p>{t.services.premiumDesc}</p>
            <ul>
              <li><Check size={18} /> {t.services.features.structuredPaths}</li>
              <li><Check size={18} /> {t.services.features.videoLectures}</li>
              <li><Check size={18} /> {t.services.features.progressTracking}</li>
              <li><Check size={18} /> {t.services.features.certification}</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Users size={32} />
            </div>
            <h3>{t.services.personalTutoring}</h3>
            <p>{t.services.personalDesc}</p>
            <ul>
              <li><Check size={18} /> {t.services.features.flexibleScheduling}</li>
              <li><Check size={18} /> {t.services.features.customizedPlans}</li>
              <li><Check size={18} /> {t.services.features.realtimeFeedback}</li>
              <li><Check size={18} /> {t.services.features.goalOriented}</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Calendar size={32} />
            </div>
            <h3>{t.services.testPrep}</h3>
            <p>{t.services.testPrepDesc}</p>
            <ul>
              <li><Check size={18} /> {t.services.features.satActPrep}</li>
              <li><Check size={18} /> {t.services.features.practiceTests}</li>
              <li><Check size={18} /> {t.services.features.scoreGuarantee}</li>
              <li><Check size={18} /> {t.services.features.expertStrategies}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <div className="section-header">
          <h2>{t.courses.title}</h2>
          <p>{t.courses.subtitle}</p>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div 
                className="course-image" 
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="course-content">
                <div className="course-header">
                  <div>
                    <h3>{t.courseData[course.titleKey].title}</h3>
                    <span className="course-level">{course.level}</span>
                  </div>
                </div>
                <p>{t.courseData[course.titleKey].description}</p>
                <div className="course-meta">
                  <div className="course-meta-item">
                    <Clock size={18} />
                    <span>{course.duration} {t.courses.weeks}</span>
                  </div>
                  <div className="course-meta-item">
                    <Users size={18} />
                    <span>{course.students} {t.courses.students}</span>
                  </div>
                  <div className="course-meta-item">
                    <Star size={18} fill="currentColor" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div className="course-features">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="feature-tag">
                      <Check size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <button className="enroll-btn" onClick={() => handleRegistration(course)}>
                    {t.courses.enrollNow} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="section-header">
          <h2>{t.team.title}</h2>
          <p>{t.team.subtitle}</p>
        </div>
        <div className="team-grid">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="tutor-card">
              <div 
                className="tutor-avatar" 
                style={{ backgroundImage: `url(${tutor.image})` }}
              />
              <h3>{t.tutorData[tutor.key].name}</h3>
              <p className="tutor-specialty">{t.tutorData[tutor.key].specialty}</p>
              <div className="tutor-stats">
                <div className="tutor-stat">
                  <div className="tutor-stat-value">
                    {tutor.rating} <Star size={20} fill="currentColor" />
                  </div>
                  <div className="tutor-stat-label">{t.team.rating}</div>
                </div>
                <div className="tutor-stat">
                  <div className="tutor-stat-value">{tutor.students}</div>
                  <div className="tutor-stat-label">{t.team.students}</div>
                </div>
              </div>
              <p className="tutor-bio">{t.tutorData[tutor.key].bio}</p>
              <div className="tutor-info">
                <div className="tutor-info-item">
                  <strong>{t.team.experience}:</strong> {tutor.experience} {t.team.years}
                </div>
                <div className="tutor-info-item">
                  <strong>{t.team.education}:</strong> {t.tutorData[tutor.key].education}
                </div>
                <div className="tutor-info-item">
                  <strong>{t.team.available}:</strong> {tutor.availability.join(', ')}
                </div>
              </div>
              <button className="reserve-btn" onClick={() => handleReservation(tutor)}>
                {t.team.reserveSession}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Courses */}
      <section id="upcoming" className="upcoming">
        <div className="section-header">
          <h2>{t.upcoming.title}</h2>
          <p>{t.upcoming.subtitle}</p>
        </div>
        <div className="upcoming-grid">
          {upcomingCourses.map((course) => (
            <div key={course.id} className="upcoming-card">
              <div 
                className="upcoming-image" 
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="upcoming-info">
                <h3>{t.upcoming[course.titleKey]}</h3>
                <div className="upcoming-details">
                  <div className="upcoming-detail">
                    <Calendar size={20} />
                    <span>{t.upcoming.starts} {course.startDate}</span>
                  </div>
                  <div className="upcoming-detail">
                    <Clock size={20} />
                    <span>{course.duration} {t.courses.weeks}</span>
                  </div>
                  <div className="upcoming-detail">
                    <Users size={20} />
                    <span>{course.instructor}</span>
                  </div>
                </div>
                <span className="spots-remaining">{course.spots} {t.upcoming.spotsLeft}</span>
              </div>
              <div className="upcoming-action">
                <div className="upcoming-price">{course.price}</div>
                <button className="enroll-btn" onClick={() => handleRegistration(course)}>
                  {t.upcoming.registerNow} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-header">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>{t.contact.info}</h3>
            <p>{t.contact.infoDesc}</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-method-info">
                  <h4>{t.contact.phone}</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-method-info">
                  <h4>{t.contact.email}</h4>
                  <p>contact@headmindacademy.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-method-info">
                  <h4>{t.contact.address}</h4>
                  <p>{t.contact.addressValue}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label>{t.contact.form.fullName}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.phone}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.message}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                {t.contact.form.send} <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Headmind Academy</h3>
            <p>{t.footer.description}</p>
          </div>
          <div className="footer-section">
            <h3>{t.footer.quickLinks}</h3>
            <ul className="footer-links">
              <li><a href="#home">{t.nav.home}</a></li>
              <li><a href="#services">{t.nav.services}</a></li>
              <li><a href="#courses">{t.nav.courses}</a></li>
              <li><a href="#team">{t.nav.team}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t.footer.resources}</h3>
            <ul className="footer-links">
              <li><a href="#blog">{t.footer.blog}</a></li>
              <li><a href="#faq">{t.footer.faq}</a></li>
              <li><a href="#support">{t.footer.support}</a></li>
              <li><a href="#careers">{t.footer.careers}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t.footer.legal}</h3>
            <ul className="footer-links">
              <li><a href="#privacy">{t.footer.privacy}</a></li>
              <li><a href="#terms">{t.footer.terms}</a></li>
              <li><a href="#refund">{t.footer.refund}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Headmind Academy. {t.footer.rights}</p>
        </div>
      </footer>

      {/* Registration Modal */}
      {registrationModal && (
        <div className="modal-overlay" onClick={() => setRegistrationModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{t.modals.courseRegistration}</h2>
              <button className="close-btn" onClick={() => setRegistrationModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label>{t.contact.form.fullName}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.phone}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.modals.selectedCourse}</label>
                <input
                  type="text"
                  value={formData.course}
                  readOnly
                  style={{ background: 'var(--grey-100)' }}
                />
              </div>
              <div className="form-group">
                <label>{t.modals.additionalInfo}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.modals.learningGoals}
                />
              </div>
              <button type="submit" className="submit-btn">
                {t.modals.completeRegistration} <Check size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      {reservationModal && (
        <div className="modal-overlay" onClick={() => setReservationModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{t.modals.tutorReservation}</h2>
              <button className="close-btn" onClick={() => setReservationModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label>{t.contact.form.fullName}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.contact.form.phone}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.modals.selectedTutor}</label>
                <input
                  type="text"
                  value={formData.tutor}
                  readOnly
                  style={{ background: 'var(--grey-100)' }}
                />
              </div>
              <div className="form-group">
                <label>{t.modals.preferredDate}</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t.modals.preferredTime}</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                >
                  <option value="">{t.modals.selectTime}</option>
                  <option value="9:00">9:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
              <div className="form-group">
                <label>{t.modals.sessionGoals}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.modals.sessionGoalsPlaceholder}
                />
              </div>
              <button type="submit" className="submit-btn">
                {t.modals.confirmReservation} <Check size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationPlatform;