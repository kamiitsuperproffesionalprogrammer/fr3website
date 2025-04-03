import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

import fr1Cover from "@/pictures/fr1 cover.jpg";
import fr2Cover from "@/pictures/fr2 cover.jpg";
import fr3Cover from "@/pictures/fr3 cover.jpg";

const franchiseImages = [
  fr1Cover,
  fr2Cover,
  fr3Cover
];

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const tabs = [
    {
      title: "1",
      content: {
        title: t('about.tabs.1.title'),
        description: t('about.tabs.1.description'),
        features: t('about.tabs.1.features', { returnObjects: true }) as string[]
      }
    },
    {
      title: "2",
      content: {
        title: t('about.tabs.2.title'),
        description: t('about.tabs.2.description'),
        features: t('about.tabs.2.features', { returnObjects: true }) as string[]
      }
    },
    {
      title: "3",
      content: {
        title: t('about.tabs.3.title'),
        description: t('about.tabs.3.description'),
        features: t('about.tabs.3.features', { returnObjects: true }) as string[]
      }
    }
  ];

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
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardContent className="p-8">
              <p className="text-gray-700 text-xl leading-relaxed font-light">
                {t('about.description')}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center text-xl font-semibold",
                activeTab === index
                  ? "bg-black text-white shadow-lg"
                  : "bg-white/60 text-gray-700 hover:bg-white/80"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    {tabs[activeTab].content.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-light mb-8">
                    {tabs[activeTab].content.description}
                  </p>
                  {tabs[activeTab].content.features.length > 0 && (
                    <div className="space-y-4">
                      {tabs[activeTab].content.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-black rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <motion.div
                  key={`image-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-4"
                >
                  <img
                    src={franchiseImages[activeTab]}
                    alt={`Franchise ${activeTab + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
