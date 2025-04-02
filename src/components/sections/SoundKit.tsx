import React, { useState } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  FileText, 
  Folder, 
  FolderOpen,
  Grid,
  LayoutDashboard,
  Users,
  Briefcase,
  MoreHorizontal,
  ChevronRight,
  Music,
  Play,
  Pause
} from "lucide-react";
import { motion } from "framer-motion";

export const SoundKit: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  return (
    <section id="soundkit" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            SOUND KIT
          </h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="w-full md:w-[600px] mx-auto overflow-hidden border-none shadow-xl rounded-3xl bg-white/80 backdrop-blur-xl">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <ScrollArea className="h-[500px] w-full md:w-64 border-r border-gray-100">
                  <div className="p-4">
                    {/* Main Navigation Items */}
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => handleItemClick('taskboard')}
                          className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                            selectedItem === 'taskboard' 
                              ? 'bg-black/10 text-black font-medium' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <LayoutDashboard className="mr-3 h-5 w-5" />
                          <span>Task Board</span>
                        </button>
                      </li>
                      
                      <li>
                        <button
                          onClick={() => handleItemClick('projects')}
                          className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                            selectedItem === 'projects' 
                              ? 'bg-black/10 text-black font-medium' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Grid className="mr-3 h-5 w-5" />
                          <span>Projects</span>
                        </button>
                      </li>
                      
                      {/* Clients with nested accordion */}
                      <li>
                        <Accordion type="single" collapsible className="border-none">
                          <AccordionItem value="clients" className="border-none">
                            <AccordionTrigger 
                              onClick={() => handleItemClick('clients')}
                              className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                                selectedItem === 'clients' 
                                  ? 'bg-black/10 text-black font-medium' 
                                  : 'text-gray-700 hover:bg-gray-50'
                              } [&[data-state=open]>svg]:rotate-90`}
                            >
                              <Briefcase className="mr-3 h-5 w-5" />
                              <span>Clients</span>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-0">
                              <Accordion type="single" collapsible className="border-none ml-6">
                                <AccordionItem value="acme" className="border-none">
                                  <AccordionTrigger 
                                    onClick={() => handleItemClick('acme')}
                                    className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                                      selectedItem === 'acme' 
                                        ? 'bg-black/10 text-black font-medium' 
                                        : 'text-gray-700 hover:bg-gray-50'
                                    } [&[data-state=open]>svg]:rotate-90`}
                                  >
                                    <Folder className="mr-3 h-5 w-5" />
                                    <span>Acme Inc.</span>
                                  </AccordionTrigger>
                                  <AccordionContent className="pt-2 pb-0">
                                    <Accordion type="single" collapsible className="border-none ml-6">
                                      <AccordionItem value="projectA" className="border-none">
                                        <AccordionTrigger 
                                          onClick={() => handleItemClick('projectA')}
                                          className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                                            selectedItem === 'projectA' 
                                              ? 'bg-black/10 text-black font-medium' 
                                              : 'text-gray-700 hover:bg-gray-50'
                                          } [&[data-state=open]>svg]:rotate-90`}
                                        >
                                          <FolderOpen className="mr-3 h-5 w-5" />
                                          <span>Project A</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="ml-6 py-0">
                                          <ul className="space-y-2 py-2">
                                            <li>
                                              <button
                                                onClick={() => handleItemClick('document')}
                                                className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                                                  selectedItem === 'document' 
                                                    ? 'bg-black/10 text-black font-medium' 
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                              >
                                                <Music className="mr-3 h-5 w-5" />
                                                <span>document.txt</span>
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                onClick={() => handleItemClick('proposal')}
                                                className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                                                  selectedItem === 'proposal' 
                                                    ? 'bg-black/10 text-black font-medium' 
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                              >
                                                <Music className="mr-3 h-5 w-5" />
                                                <span>proposal_final_final02_final</span>
                                              </button>
                                            </li>
                                          </ul>
                                        </AccordionContent>
                                      </AccordionItem>
                                      <AccordionItem value="projectB" className="border-none">
                                        <button
                                          onClick={() => handleItemClick('projectB')}
                                          className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                                            selectedItem === 'projectB' 
                                              ? 'bg-black/10 text-black font-medium' 
                                              : 'text-gray-700 hover:bg-gray-50'
                                          }`}
                                        >
                                          <Folder className="mr-3 h-5 w-5" />
                                          <span>Project B</span>
                                        </button>
                                      </AccordionItem>
                                    </Accordion>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                      
                      <li>
                        <button
                          onClick={() => handleItemClick('team')}
                          className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                            selectedItem === 'team' 
                              ? 'bg-black/10 text-black font-medium' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Users className="mr-3 h-5 w-5" />
                          <span>Team</span>
                        </button>
                      </li>
                      
                      <li>
                        <button
                          onClick={() => handleItemClick('other')}
                          className={`flex items-center w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                            selectedItem === 'other' 
                              ? 'bg-black/10 text-black font-medium' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <MoreHorizontal className="mr-3 h-5 w-5" />
                          <span>Other</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </ScrollArea>

                {/* Main Content Area */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Sound Preview</h3>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="h-[300px] rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <Music className="h-16 w-16 text-purple-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
