import React, { useState } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { ChevronRight, User2, Instagram, Twitter, Youtube, ChevronLeft, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type MemberRole = 'COACH' | 'ARTIST' | 'DESIGNER' | 'IT' | 'PROD';

interface Member {
  id: number;
  name: string;
  roles: MemberRole[];
  bio: string;
  social: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  achievements?: {
    type: string;
    description: string;
  }[];
}

const getRoleStyle = (role: MemberRole) => {
  switch (role) {
    case 'COACH':
      return {
        bg: 'from-blue-500/20 to-blue-900/20',
        border: 'border-blue-500/30',
        hover: 'hover:border-blue-500/50',
        icon: 'text-blue-500/60'
      };
    case 'ARTIST':
      return {
        bg: 'from-purple-500/20 to-purple-900/20',
        border: 'border-purple-500/30',
        hover: 'hover:border-purple-500/50',
        icon: 'text-purple-500/60'
      };
    case 'DESIGNER':
      return {
        bg: 'from-pink-500/20 to-pink-900/20',
        border: 'border-pink-500/30',
        hover: 'hover:border-pink-500/50',
        icon: 'text-pink-500/60'
      };
    case 'IT':
      return {
        bg: 'from-green-500/20 to-green-900/20',
        border: 'border-green-500/30',
        hover: 'hover:border-green-500/50',
        icon: 'text-green-500/60'
      };
    case 'PROD':
      return {
        bg: 'from-orange-500/20 to-orange-900/20',
        border: 'border-orange-500/30',
        hover: 'hover:border-orange-500/50',
        icon: 'text-orange-500/60'
      };
  }
};

const getAchievementStyle = (type: string) => {
  switch (type) {
    case "FR VETERAN":
      return {
        bg: "bg-yellow-500/20",
        border: "border-yellow-500/30",
        hover: "hover:border-yellow-500/50",
        icon: "text-yellow-500/60"
      };
    default:
      return {
        bg: "bg-white/20",
        border: "border-white/30",
        hover: "hover:border-white/50",
        icon: "text-white/60"
      };
  }
};

const members: Member[] = [
  {
    id: 1,
    name: "Alex Thompson",
    roles: ["COACH"],
    bio: "Experienced music producer with over 8 years in the industry. Specializes in electronic and hip-hop production.",
    social: {
      instagram: "https://instagram.com/alexthompson",
      twitter: "https://twitter.com/alexthompson",
      youtube: "https://youtube.com/alexthompson"
    }
  },
  {
    id: 2,
    name: "Sarah Chen",
    roles: ["ARTIST"],
    bio: "Sound design specialist with a passion for creating unique audio experiences. Expert in field recording and synthesis.",
    social: {
      instagram: "https://instagram.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      youtube: "https://youtube.com/sarahchen"
    },
    achievements: [
      {
        type: "FR VETERAN",
        description: "Участник FRANCHISE и FRANCHISE2"
      }
    ]
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    roles: ["PROD"],
    bio: "Award-winning mix engineer with a keen ear for detail. Known for his work in both studio and live environments.",
    social: {
      instagram: "https://instagram.com/marcusrodriguez",
      twitter: "https://twitter.com/marcusrodriguez",
      youtube: "https://youtube.com/marcusrodriguez"
    },
    achievements: [
      {
        type: "FR VETERAN",
        description: "Участник FRANCHISE и FRANCHISE2"
      }
    ]
  },
  {
    id: 4,
    name: "Emma Wilson",
    roles: ["ARTIST"],
    bio: "Versatile vocalist with a unique style blending soul and electronic elements. Known for her powerful live performances.",
    social: {
      instagram: "https://instagram.com/emmawilson",
      twitter: "https://twitter.com/emmawilson",
      youtube: "https://youtube.com/emmawilson"
    }
  },
  {
    id: 5,
    name: "David Kim",
    roles: ["IT"],
    bio: "Classically trained composer who brings orchestral elements to electronic music. Creates rich, layered soundscapes.",
    social: {
      instagram: "https://instagram.com/davidkim",
      twitter: "https://twitter.com/davidkim",
      youtube: "https://youtube.com/davidkim"
    }
  },
  {
    id: 6,
    name: "Lisa Patel",
    roles: ["DESIGNER"],
    bio: "Visual artist specializing in music videos and live performance visuals. Creates immersive experiences.",
    social: {
      instagram: "https://instagram.com/lisapatel",
      twitter: "https://twitter.com/lisapatel",
      youtube: "https://youtube.com/lisapatel"
    }
  }
];

export const Members: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsPerView = 3;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsPerView >= members.length ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex - cardsPerView < 0 ? members.length - cardsPerView : prevIndex - cardsPerView
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const extendedMembers = [...members, ...members.slice(0, cardsPerView)];
  const visibleMembers = extendedMembers.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section
      id="members"
      className="py-24 px-6 bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white/90">
            MEMBERS
          </h2>
          <div className="w-20 h-[2px] bg-white/20 mx-auto" />
        </motion.div>
        
        <div className="relative flex items-center">
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.06] transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white/60" />
            </button>
          )}
          
          <div className="relative h-[600px] overflow-hidden w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleMembers.map((member, index) => {
                  return (
                    <div key={`${member.id}-${index}`} className="w-full">
                      <Card className="group relative bg-[#141414] border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 min-h-[400px]">
                        <div className="absolute inset-[1px] bg-gradient-to-b from-white/[0.02] to-white/[0.01] rounded-lg pointer-events-none" />
                        <CardContent className="p-6 flex flex-col justify-between h-full">
                          <div className="flex flex-col items-center text-center">
                            <div className="relative">
                              <div className="w-20 h-20 rounded-full bg-white/[0.03] border-white/10 flex items-center justify-center mb-4">
                                <User2 className="w-10 h-10 text-white/60" />
                              </div>
                              {member.achievements && member.achievements.length > 0 && (
                                <div className="absolute -top-2 -right-2 flex gap-1">
                                  {member.achievements.map((achievement, idx) => {
                                    const style = getAchievementStyle(achievement.type);
                                    return (
                                      <HoverCard key={idx}>
                                        <HoverCardTrigger asChild>
                                          <div className={`w-8 h-8 rounded-full ${style.bg} ${style.border} ${style.hover} flex items-center justify-center cursor-help transition-all duration-300`}>
                                            <Star className={`w-4 h-4 ${style.icon}`} />
                                          </div>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                          <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">{achievement.type}</h4>
                                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                          </div>
                                        </HoverCardContent>
                                      </HoverCard>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                            <div>
                              <h3 className="text-2xl font-medium text-white/90 mb-2">{member.name}</h3>
                              <div className="flex flex-wrap gap-2 justify-center">
                                {member.roles.map(role => {
                                  const roleStyle = getRoleStyle(role);
                                  return (
                                    <span key={role} className={`text-sm ${roleStyle.icon} font-medium`}>
                                      {role}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-white/70 text-center max-w-sm mx-auto mt-12">
                            {member.bio}
                          </p>

                          <div className="pt-4">
                            <div className="flex items-center justify-center gap-4">
                              <a 
                                href={member.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors border-white/10"
                              >
                                <Instagram className="w-5 h-5 text-white/60" />
                              </a>
                              <a 
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors border-white/10"
                              >
                                <Twitter className="w-5 h-5 text-white/60" />
                              </a>
                              <a 
                                href={member.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors border-white/10"
                              >
                                <Youtube className="w-5 h-5 text-white/60" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {currentIndex + cardsPerView < members.length && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.06] transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white/60" />
            </button>
          )}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/all-members"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white/[0.03] text-white/90 hover:bg-white/[0.06] border border-white/[0.08] transition-all duration-300"
          >
            View All Members
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
