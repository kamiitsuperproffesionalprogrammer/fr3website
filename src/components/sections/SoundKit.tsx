
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
  ChevronRight
} from "lucide-react";

export const SoundKit: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId);
  };

  return (
    <section id="soundkit" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">SOUND KIT</h2>
        
        <Card className="ios-card w-full md:w-[500px] mx-auto overflow-hidden border-ios-gray-200">
          <CardContent className="p-0">
            <div className="flex">
              {/* Sidebar */}
              <ScrollArea className="h-[400px] w-full">
                <div className="p-3">
                  {/* Main Navigation Items */}
                  <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => handleItemClick('taskboard')}
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedItem === 'taskboard' 
                            ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Task Board</span>
                      </button>
                    </li>
                    
                    <li>
                      <button
                        onClick={() => handleItemClick('projects')}
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedItem === 'projects' 
                            ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Grid className="mr-2 h-4 w-4" />
                        <span>Projects</span>
                      </button>
                    </li>
                    
                    {/* Clients with nested accordion */}
                    <li>
                      <Accordion type="single" collapsible className="border-none">
                        <AccordionItem value="clients" className="border-none">
                          <AccordionTrigger 
                            onClick={() => handleItemClick('clients')}
                            className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                              selectedItem === 'clients' 
                                ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                                : 'text-gray-700 hover:bg-gray-100'
                            } [&[data-state=open]>svg]:rotate-90`}
                          >
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>Clients</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-1 pb-0">
                            <Accordion type="single" collapsible className="border-none ml-6">
                              <AccordionItem value="acme" className="border-none">
                                <AccordionTrigger 
                                  onClick={() => handleItemClick('acme')}
                                  className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                                    selectedItem === 'acme' 
                                      ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                                      : 'text-gray-700 hover:bg-gray-100'
                                  } [&[data-state=open]>svg]:rotate-90`}
                                >
                                  <Folder className="mr-2 h-4 w-4" />
                                  <span>Acme Inc.</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-0">
                                  <Accordion type="single" collapsible className="border-none ml-6">
                                    <AccordionItem value="projectA" className="border-none">
                                      <AccordionTrigger 
                                        onClick={() => handleItemClick('projectA')}
                                        className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                                          selectedItem === 'projectA' 
                                            ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                        } [&[data-state=open]>svg]:rotate-90`}
                                      >
                                        <FolderOpen className="mr-2 h-4 w-4" />
                                        <span>Project A</span>
                                      </AccordionTrigger>
                                      <AccordionContent className="ml-6 py-0">
                                        <ul className="space-y-1 py-1">
                                          <li>
                                            <button
                                              onClick={() => handleItemClick('document')}
                                              className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                                                selectedItem === 'document' 
                                                  ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                                                  : 'text-gray-700 hover:bg-gray-100'
                                              }`}
                                            >
                                              <FileText className="mr-2 h-4 w-4" />
                                              <span>document.txt</span>
                                            </button>
                                          </li>
                                          <li>
                                            <button
                                              onClick={() => handleItemClick('proposal')}
                                              className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                                                selectedItem === 'proposal' 
                                                  ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                                                  : 'text-gray-700 hover:bg-gray-100'
                                              }`}
                                            >
                                              <FileText className="mr-2 h-4 w-4" />
                                              <span>proposal_final_final02_final</span>
                                            </button>
                                          </li>
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="projectB" className="border-none">
                                      <button
                                        onClick={() => handleItemClick('projectB')}
                                        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                                          selectedItem === 'projectB' 
                                            ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                      >
                                        <Folder className="mr-2 h-4 w-4" />
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
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedItem === 'team' 
                            ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </button>
                    </li>
                    
                    <li>
                      <button
                        onClick={() => handleItemClick('other')}
                        className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedItem === 'other' 
                            ? 'bg-ios-blue/10 text-ios-blue font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <MoreHorizontal className="mr-2 h-4 w-4" />
                        <span>Other</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
