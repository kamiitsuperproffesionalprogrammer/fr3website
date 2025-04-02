import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Members } from "@/components/sections/Members";
import { SoundKit } from "@/components/sections/SoundKit";
import { Album } from "@/components/sections/Album";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <SoundKit />
        <Album />
      </main>
    </div>
  );
};

export default Index;
