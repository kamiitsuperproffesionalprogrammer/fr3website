
import React from "react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"}} />
      
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">FRANCHISE</h1>
        <p className="text-lg text-gray-600 mb-8">
          Сезонный медиапроект, созданный для р
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="rounded-full px-8 py-6">Explore Music</Button>
          <Button variant="outline" className="rounded-full px-8 py-6">Learn More</Button>
        </div>
      </div>
    </section>
  );
};
