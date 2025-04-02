import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pictures/background pic 1.jpg')",
          filter: "grayscale(100%)"
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold mb-6 text-white">
            FRANCHISE
          </h1>
          <p className="text-xl text-white/80 mb-12 font-light">
            Сезонный медиапроект, созданный для развития музыкальной культуры
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            className="rounded-lg px-8 py-6 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            Explore Music
          </Button>
          <Button 
            variant="outline" 
            className="rounded-lg px-8 py-6 border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
