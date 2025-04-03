import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Members } from "@/components/sections/Members";
import { SoundKit } from "@/components/sections/SoundKit";
import { Album } from "@/components/sections/Album";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Members />
        <SoundKit />
        <Album />
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
