import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { ChevronRight, User2 } from "lucide-react";
import { motion } from "framer-motion";

export const Members: React.FC = () => {
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
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="group relative bg-[#141414] border border-white/[0.08] rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-[1px] bg-gradient-to-b from-white/[0.07] to-transparent rounded-lg pointer-events-none" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                      <User2 className="w-6 h-6 text-white/60" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white/90 mb-1">Member {item}</h3>
                      <p className="text-sm text-white/60">Designer & Developer</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-white/40">Projects</p>
                        <p className="text-white/90 font-medium">15</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-white/40">Experience</p>
                        <p className="text-white/90 font-medium">5 years</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-white/40">Role</p>
                        <p className="text-white/90 font-medium">Lead</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#all-members"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white/[0.03] text-white/90 hover:bg-white/[0.06] border border-white/[0.08] transition-all duration-300"
          >
            View All Members
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
