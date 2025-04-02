
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">ABOUT US</h2>
        
        <Card className="border-none shadow-lg rounded-2xl overflow-hidden bg-gray-50">
          <CardContent className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              FRANCHISE — сезонный медиапроект, созданный в целях развития музыкальной
              культуры в России и роста каждого участника как творческой и командной
              единицы.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
