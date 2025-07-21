import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const MobileSliderNav = () => {
  return (
    <nav className="w-full bg-background border-b border-border shadow-sm md:hidden">
      {/* Top Logo and Theme Toggle */}
      <div className="flex items-center justify-between px-4 py-3">
        <img 
          src="/lovable-uploads/bec29b2b-a15c-4ec9-a80b-1420906c2bd9.png" 
          alt="Death Logo" 
          className="w-8 h-8 object-contain"
        />
        <ThemeToggle />
      </div>

      {/* Scrollable Nav Links */}
      <div className="flex overflow-x-auto gap-2 px-4 pb-3 scrollbar-hide">
        <Link to="/hollywood" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          Hollywood
        </Link>
        <Link to="/bollywood" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          Bollywood
        </Link>
        <Link to="/web-series" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          Web Series
        </Link>
        <Link to="/dual-audio" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          Dual Audio
        </Link>
        <Link to="/kdrama-series" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          K-Drama
        </Link>
        <Link to="/horror" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          Horror
        </Link>
        <Link to="/4k-movies" className="flex-shrink-0 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full whitespace-nowrap">
          4K Movies
        </Link>
        <Link to="/join-group" className="flex-shrink-0 px-4 py-2 text-sm text-primary hover:text-primary/80 hover:bg-muted/50 rounded-full whitespace-nowrap flex items-center gap-1">
          <Users className="w-4 h-4" />
          Telegram
        </Link>
      </div>
    </nav>
  );
};

export default MobileSliderNav;

