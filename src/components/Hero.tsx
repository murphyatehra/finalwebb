
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleJoinTelegram = () => {
    window.open("https://t.me/death_movie", "_blank");
  };

  return (
    <section className="relative min-h-[40vh] bg-white dark:bg-black flex items-center justify-center overflow-hidden">
      {/* Background pattern/texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        {/* Tagline */}
        <p className="text-white dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 whitespace-nowrap text-center">
        Your premium destination for high-quality movie downloads
       </p>

        
        {/* Join Telegram Button */}
        <div className="px-2">
          <Button 
            onClick={handleJoinTelegram}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto overflow-hidden"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0 min-w-[1rem]" />
            <span className="text-center leading-tight break-words">
              Domains & Content Updates: Telegram channel
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
