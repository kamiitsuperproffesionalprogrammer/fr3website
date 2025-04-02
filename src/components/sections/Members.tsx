
import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export const Members: React.FC = () => {
  return (
    <section
      id="members"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">MEMBERS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <Card key={item} className="rounded-2xl overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800">Member {item}</h3>
                <p className="text-gray-500 text-sm">Artist</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-right">
          <a
            href="#all-members"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            all members
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
