import { useState } from "react";
import { Search, Users, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MovieCard from "@/components/MovieCard";
import TelegramJoin from "@/components/TelegramJoin";
import TelegramPopup from "@/components/TelegramPopup";
import { ThemeToggle } from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import PopularMovies from "@/components/PopularMovies";
import { useMovies } from "@/hooks/useMovies";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import MobileSliderNav from "@/components/MobileSliderNav";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies: featuredMovies, loading, error } = useMovies(undefined, 12);
  const { isVisible, showNavbar, hideNavbar } = useScrollDirection();

  const filteredMovies = featuredMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Navigation Controls */}
     {/* Desktop Sticky Scrollable Navbar */}
<nav className={`hidden md:block fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
}`}>
  <div className="backdrop-blur-xl bg-card/90 border-b border-border/30 shadow-md px-4 py-3">
    <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
      {/* Logo */}
      <div className="flex items-center shrink-0">
        <img 
          src="/lovable-uploads/bec29b2b-a15c-4ec9-a80b-1420906c2bd9.png" 
          alt="Death Logo" 
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Navigation Items */}
      {[
        { label: 'Hollywood', path: '/hollywood' },
        { label: 'Bollywood', path: '/bollywood' },
        { label: 'Web Series', path: '/web-series' },
        { label: 'Dual Audio', path: '/dual-audio' },
        { label: 'K-Drama', path: '/kdrama-series' },
        { label: 'Horror', path: '/horror' },
        { label: '4K Movies', path: '/4k-movies' },
      ].map(item => (
        <Link
          key={item.path}
          to={item.path}
          className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition whitespace-nowrap shrink-0"
        >
          {item.label}
        </Link>
      ))}

      {/* Telegram Link */}
      <Link to="/join-group" className="px-4 py-2 text-sm text-primary hover:text-primary/80 hover:bg-muted/50 rounded-full transition flex items-center gap-1 whitespace-nowrap shrink-0">
        <Users className="w-4 h-4" />
        Telegram
      </Link>

      {/* Theme Toggle */}
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  </div>
</nav>

{/* Mobile Sticky Grid Navbar */}
<nav className={`md:hidden fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
}`}>
  <div className="backdrop-blur-xl bg-card/90 border-b border-border/30 shadow-md p-4">
    <div className="flex items-center justify-between mb-3">
      <img 
        src="/lovable-uploads/bec29b2b-a15c-4ec9-a80b-1420906c2bd9.png" 
        alt="Death Logo" 
        className="w-8 h-8 object-contain"
      />
      <ThemeToggle />
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        'Hollywood', 'Bollywood', 'Web Series',
        'Dual Audio', 'K-Drama', 'Horror',
        '4K Movies', 'Telegram'
      ].map((item, i) => (
        <Link
          key={i}
          to={`/${item.toLowerCase().replace(/\s+/g, '-').replace('telegram', 'join-group')}`}
          className={`flex flex-col items-center p-3 rounded-xl transition-all ${
            item === 'Telegram'
              ? 'text-primary hover:text-primary/80 hover:bg-muted/50'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          {item === 'Telegram' && <Users className="w-4 h-4 mb-1" />}
          <span className="text-xs font-medium">{item}</span>
        </Link>
      ))}
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <Hero />

      {/* Popular Movies Section */}
      <PopularMovies />

      {/* Search Section */}
      <section className="relative z-10 px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-card/80 border border-border rounded-2xl p-4 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 md:w-5 md:h-5 z-10" />
                <Input
                  type="text"
                  placeholder="Search movies, genres..."
                  className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-input border-border text-foreground placeholder-muted-foreground rounded-xl backdrop-blur-sm focus:border-primary transition-all text-sm md:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-6 md:px-8 py-2 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="relative z-10 px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-card/60 border border-border rounded-2xl p-4 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Movies"}
            </h2>
            
            {loading ? (
              <div className="text-center py-8 md:py-12">
                <p className="text-muted-foreground text-base md:text-lg">Loading movies...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8 md:py-12">
                <p className="text-muted-foreground text-base md:text-lg">Error loading movies: {error}</p>
                <p className="text-muted-foreground/60 mt-2 text-sm md:text-base">Please try again later</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
            
            {!loading && !error && filteredMovies.length === 0 && searchQuery && (
              <div className="text-center py-8 md:py-12">
                <p className="text-muted-foreground text-base md:text-lg">No movies found for "{searchQuery}"</p>
                <p className="text-muted-foreground/60 mt-2 text-sm md:text-base">Try searching for something else</p>
              </div>
            )}
            
            {!loading && !error && featuredMovies.length === 0 && !searchQuery && (
              <div className="text-center py-8 md:py-12">
                <p className="text-muted-foreground text-base md:text-lg">No movies available</p>
                <p className="text-muted-foreground/60 mt-2 text-sm md:text-base">Please check back later</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 md:px-6 py-4 md:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-card/40 border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            {/* Logo and Description */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img 
                  src="/lovable-uploads/bec29b2b-a15c-4ec9-a80b-1420906c2bd9.png" 
                  alt="Death Logo" 
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm md:text-base text-center md:text-right max-w-md">
                Your Premium Destination For High-Quality Movie Downloads.
              </p>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 mb-2 md:mb-6">
              <Link to="/hollywood" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Hollywood</Link>
              <Link to="/bollywood" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Bollywood</Link>
              <Link to="/web-series" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Web Series</Link>
              <Link to="/dual-audio" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Dual Audio</Link>
              <Link to="/kdrama-series" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">K-Drama</Link>
              <Link to="/horror" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Horror</Link>
              <Link to="/4k-movies" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">4K Movies</Link>
            </div>

            {/* Footer Pages */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 mb-2 md:mb-6">
              <Link to="/how-to-download" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">How to Download</Link>
              <Link to="/report-broken-links" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Report Broken Links</Link>
              <Link to="/about-us" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">About Us</Link>
              <span className="text-muted-foreground/30">|</span>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Contact</Link>
              <Link to="/request-movie" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Request Movie</Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">Privacy Policy</Link>
              <Link to="/dmca" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">DMCA</Link>
            </div>
            
            <div className="border-t border-border pt-6 text-center">
              <p className="text-muted-foreground text-xs md:text-sm">© 2025 Death Movie. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Telegram Popup */}
      <TelegramPopup />
    </div>
  );
};

export default Index;
