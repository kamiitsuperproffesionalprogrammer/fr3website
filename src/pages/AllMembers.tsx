import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User2, Instagram, Twitter, Youtube, Search, ChevronLeft, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

const roles: MemberRole[] = ['COACH', 'ARTIST', 'DESIGNER', 'IT', 'PROD'];

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

const getCombinedStyles = (roles: MemberRole[]) => {
  const styles = roles.map(role => getRoleStyle(role));
  
  return {
    bg: styles.map(s => s.bg).join(' '),
    border: styles.map(s => s.border).join(' '),
    hover: styles.map(s => s.hover).join(' '),
    icon: styles.map(s => s.icon).join(' ')
  };
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

const generateMembers = () => {
  const members: Member[] = [];
  const names = [
    "Alex Thompson", "Sarah Chen", "Marcus Rodriguez", "Emma Wilson",
    "David Kim", "Lisa Patel", "James Wilson", "Sophia Lee",
    "Michael Brown", "Olivia Davis", "William Taylor", "Ava Martinez",
    "Benjamin Anderson", "Mia Garcia", "Daniel Wilson", "Charlotte Rodriguez",
    "Matthew Martinez", "Amelia Hernandez", "Andrew Lopez", "Harper Gonzalez"
  ];

  for (let i = 0; i < 20; i++) {
    const randomRoles = roles
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 2) + 1);

    // Add achievements to some members
    const achievements = Math.random() < 0.3 ? [{
      type: "FR VETERAN",
      description: "Участник FRANCHISE и FRANCHISE2"
    }] : undefined;

    members.push({
      id: i + 1,
      name: names[i],
      roles: randomRoles,
      bio: `Experienced professional with expertise in ${randomRoles.join(' and ')}.`,
      social: {
        instagram: `https://instagram.com/${names[i].toLowerCase().replace(/\s+/g, '')}`,
        twitter: `https://twitter.com/${names[i].toLowerCase().replace(/\s+/g, '')}`,
        youtube: `https://youtube.com/${names[i].toLowerCase().replace(/\s+/g, '')}`
      },
      achievements
    });
  }
  return members;
};

const allMembers = generateMembers();
const ITEMS_PER_PAGE = 12;

export const AllMembers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<MemberRole[]>([]);
  const [showVeterans, setShowVeterans] = useState(false);

  const filteredMembers = useMemo(() => {
    return allMembers.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = selectedRoles.length === 0 || 
        selectedRoles.every(role => member.roles.includes(role));
      const matchesVeteran = !showVeterans || 
        (member.achievements && member.achievements.some(a => a.type === "FR VETERAN"));
      return matchesSearch && matchesRole && matchesVeteran;
    });
  }, [searchQuery, selectedRoles, showVeterans]);

  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
  const currentMembers = filteredMembers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleRole = (role: MemberRole) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedRoles([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white/90">
              ALL MEMBERS
            </h2>
            <div className="w-20 h-[2px] bg-white/20 mx-auto" />
          </div>
          <div className="w-24" /> {/* Spacer for alignment */}
        </motion.div>

        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 bg-white/[0.03] border-white/[0.08] text-white/90 placeholder:text-white/40"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map(role => {
              const roleStyle = getRoleStyle(role);
              const isActive = selectedRoles.includes(role);
              return (
                <Button
                  key={role}
                  onClick={() => toggleRole(role)}
                  className={`${roleStyle.border} ${roleStyle.icon} ${
                    isActive 
                      ? 'bg-white/[0.06] ring-2 ring-offset-2 ring-offset-[#0A0A0A] ring-white/20' 
                      : 'bg-white/[0.03] hover:bg-white/[0.06]'
                  } transition-all duration-200 group relative`}
                >
                  {role}
                  {isActive && (
                    <span className="ml-2 text-white/40 group-hover:text-black transition-colors duration-200">
                      ×
                    </span>
                  )}
                </Button>
              );
            })}
            
            <Button
              onClick={() => setShowVeterans(!showVeterans)}
              className={`${
                showVeterans 
                  ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-500/60 ring-2 ring-offset-2 ring-offset-[#0A0A0A] ring-yellow-500/20' 
                  : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/30 text-white/60'
              } transition-all duration-200 group relative`}
            >
              FR VETERAN
              {showVeterans && (
                <span className="ml-2 text-white/40 group-hover:text-black transition-colors duration-200">
                  ×
                </span>
              )}
            </Button>

            {(selectedRoles.length > 0 || showVeterans) && (
              <Button
                onClick={() => {
                  setSelectedRoles([]);
                  setShowVeterans(false);
                }}
                className="text-white/60 hover:text-white/80 transition-colors bg-white/[0.03] hover:bg-white/[0.06]"
              >
                Clear all
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {currentMembers.map((member) => {
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
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
              </motion.div>
            );
          })}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}; 