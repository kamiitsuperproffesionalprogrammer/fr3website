import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            ABOUT US
          </h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardContent className="p-12">
              <p className="text-gray-700 text-xl leading-relaxed font-light">
                FRANCHISE — сезонный медиапроект, созданный в целях развития музыкальной
                культуры в России и роста каждого участника как творческой и командной
                единицы.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Музыка",
              description: "Создание уникального звучания"
            },
            {
              title: "Культура",
              description: "Развитие музыкальной культуры"
            },
            {
              title: "Команда",
              description: "Рост каждого участника"
            }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-lg rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
