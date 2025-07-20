import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

const navLinks = [
  { label: "Hollywood", to: "/hollywood" },
  { label: "Bollywood", to: "/bollywood" },
  { label: "Web Series", to: "/web-series" },
  { label: "Dual Audio", to: "/dual-audio" },
  { label: "K-Drama", to: "/kdrama-series" },
  { label: "Horror", to: "/horror" },
  { label: "4K Movies", to: "/4k-movies" },
  {
    label: "Telegram",
    to: "/join-group",
    icon: <Users className="w-3 h-3" />,
    isPrimary: true,
  },
];

const MobileSliderNav = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full my-4">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex justify-center gap-4 flex-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 text-sm rounded-full transition whitespace-nowrap flex items-center gap-1 ${
              link.isPrimary
                ? "text-primary hover:text-primary/80 hover:bg-muted/50"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Slider Navigation */}
      <div className="sm:hidden relative px-6">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/50 p-1 rounded-full shadow-md"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Scrollable Nav Items */}
        <div
          ref={scrollRef}
          className="flex items-center space-x-2 overflow-x-auto scrollbar-hide px-6 py-2 mx-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm rounded-full transition-all flex items-center gap-1 whitespace-nowrap shrink-0 ${
                link.isPrimary
                  ? "text-primary hover:text-primary/80 hover:bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/50 p-1 rounded-full shadow-md"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  );
};

export default MobileSliderNav;
