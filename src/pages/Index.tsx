import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, MessageCircle, ArrowUp, Globe, Menu, X, Sun, Moon, Truck, Zap, Settings, Shield } from 'lucide-react';
import { RFQForm } from '@/components/RFQForm';

// Import embedded images
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import ivecoLogo from '@/assets/iveco-logo.png';
import manLogo from '@/assets/man-logo.png';
import zfLogo from '@/assets/zf-logo.png';

const Index = () => {
  const [isArabic, setIsArabic] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const content = {
    en: {
      nav: {
        home: 'Home',
        brands: 'Brands',
        location: 'Location',
        contact: 'Contact'
      },
      hero: {
        title: 'ALREEM',
        subtitle: 'Premium Truck Parts & Solutions',
        description: 'Your trusted partner for IVECO, MAN, and ZF truck parts and services'
      },
      brands: {
        title: 'Our Brands',
        subtitle: 'Leading truck manufacturers we proudly represent',
        iveco: {
          title: 'IVECO',
          description: 'Italian commercial vehicle manufacturer known for innovative trucks, buses, and specialized vehicles with advanced technology and fuel efficiency.',
          features: ['Advanced Technology', 'Fuel Efficiency', 'Innovation']
        },
        man: {
          title: 'MAN',
          description: 'German automotive company producing high-quality trucks and buses, renowned for durability, performance, and cutting-edge engineering solutions.',
          features: ['German Engineering', 'Durability', 'Performance']
        },
        zf: {
          title: 'ZF',
          description: 'Global technology company specializing in driveline and chassis technology, providing advanced transmission and steering systems for commercial vehicles.',
          features: ['Transmission Tech', 'Chassis Systems', 'Global Leader']
        }
      },
      location: {
        title: 'Our Location',
        subtitle: 'Visit our store for all your truck parts needs',
        hours: 'Opening Hours',
        schedule: 'Sunday - Thursday: 7:00 AM - 7:00 PM',
        friday: 'Friday: Closed',
        saturday: 'Saturday: 7:00 AM - 7:00 PM',
        directions: 'Get Directions'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our expert team',
        email: 'Email us at info@alreem.sa',
        phone: 'Call us at +966504106845'
      },
      footer: {
        rights: '© 2025 ALREEM. All rights reserved.',
        phone: '+966504106845'
      },
      whatsapp: 'WhatsApp',
      scrollTop: 'Scroll to top'
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        brands: 'العلامات التجارية',
        location: 'الموقع',
        contact: 'اتصل بنا'
      },
      hero: {
        title: 'الريم',
        subtitle: 'قطع غيار الشاحنات والحلول المتقدمة',
        description: 'شريكك الموثوق لقطع غيار وخدمات شاحنات إيفيكو ومان وزد إف'
      },
      brands: {
        title: 'علاماتنا التجارية',
        subtitle: 'الشركات الرائدة في تصنيع الشاحنات التي نمثلها بفخر',
        iveco: {
          title: 'إيفيكو',
          description: 'شركة إيطالية لتصنيع المركبات التجارية معروفة بالشاحنات والحافلات والمركبات المتخصصة المبتكرة مع التكنولوجيا المتقدمة وكفاءة الوقود.',
          features: ['تكنولوجيا متقدمة', 'كفاءة الوقود', 'الابتكار']
        },
        man: {
          title: 'مان',
          description: 'شركة سيارات ألمانية تنتج شاحنات وحافلات عالية الجودة، مشهورة بالمتانة والأداء وحلول الهندسة المتطورة.',
          features: ['هندسة ألمانية', 'المتانة', 'الأداء']
        },
        zf: {
          title: 'زد إف',
          description: 'شركة تكنولوجيا عالمية متخصصة في تكنولوجيا نقل الحركة والهيكل، تقدم أنظمة نقل وتوجيه متقدمة للمركبات التجارية.',
          features: ['تقنية النقل', 'أنظمة الهيكل', 'رائد عالمي']
        }
      },
      location: {
        title: 'موقعنا',
        subtitle: 'قم بزيارة متجرنا لجميع احتياجاتك من قطع غيار الشاحنات',
        hours: 'ساعات العمل',
        schedule: 'الأحد - الخميس: 7:00 صباحاً - 7:00 مساءً',
        friday: 'الجمعة: مغلق',
        saturday: 'السبت: 7:00 صباحاً - 7:00 مساءً',
        directions: 'احصل على الاتجاهات'
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل معنا',
        email: 'راسلنا على info@alreem.sa',
        phone: 'اتصل بنا على +966504106845'
      },
      footer: {
        rights: '© 2025 الريم. جميع الحقوق محفوظة.',
        phone: '+966504106845'
      },
      whatsapp: 'واتساب',
      scrollTop: 'العودة للأعلى'
    }
  };

  const slides = [
    {
      image: heroSlide1,
      title: 'IVECO Technology',
      titleAr: 'تقنية إيفيكو'
    },
    {
      image: heroSlide2,
      title: 'MAN Engineering',
      titleAr: 'هندسة مان'
    },
    {
      image: heroSlide3,
      title: 'ZF Innovation',
      titleAr: 'ابتكار زد إف'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = 'whatsapp://send?phone=966504106845';
    } else {
      window.open('https://wa.me/966504106845', '_blank');
    }
  };

  const openGoogleMaps = () => {
    // Updated coordinates for the location
    const coords = '26.461504,50.013986';
    const place = 'ALREEM Truck Parts, Saudi Arabia';
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      const mapsAppUrl = `maps://?q=${coords}&ll=${coords}&z=15`;
      window.location.href = mapsAppUrl;
      
      setTimeout(() => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${coords}&zoom=15`, '_blank');
      }, 1000);
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${coords}&zoom=15`, '_blank');
    }
  };

  const callPhone = () => {
    window.open('tel:+966504106845');
  };

  const t = content[isArabic ? 'ar' : 'en'];

  return (
    <div className={`min-h-screen bg-background ${isArabic ? 'rtl font-arabic' : 'ltr'} font-sans transition-colors duration-300`}>
      {/* Enhanced Header */}
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-primary tracking-wide gradient-text">
              {t.hero.title}
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
                {t.nav.home}
              </a>
              <a href="#brands" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
                {t.nav.brands}
              </a>
              <a href="#location" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
                {t.nav.location}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 text-sm"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              
              <Button
                onClick={() => setIsArabic(!isArabic)}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{isArabic ? 'EN' : 'AR'}</span>
              </Button>
              
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="outline"
                size="sm"
                className="md:hidden"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2 animate-fade-in border-t pt-4 border-border">
              <a href="#home" className="block py-3 text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.home}
              </a>
              <a href="#brands" className="block py-3 text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.brands}
              </a>
              <a href="#location" className="block py-3 text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.location}
              </a>
              <a href="#contact" className="block py-3 text-foreground hover:text-primary transition-colors font-medium">
                {t.nav.contact}
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Enhanced Slideshow */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={isArabic ? slide.titleAr : slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/20 dark:from-background/90 dark:via-background/70 dark:to-background/40" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-foreground">
          <div className="max-w-4xl mx-auto px-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-slide-in-right text-shadow-lg leading-tight gradient-text">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 animate-fade-in text-shadow-md font-medium">
              {t.hero.subtitle}
            </p>
            <p className="text-base md:text-lg lg:text-xl opacity-90 animate-fade-in text-shadow-md leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125 shadow-glow' 
                  : 'bg-primary/50 hover:bg-primary/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Modern Brands Section */}
      <section id="brands" className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t.brands.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.brands.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* IVECO Card */}
            <Card className="group hover:shadow-large transition-all duration-500 hover:-translate-y-3 animate-fade-in border-border/50 shadow-medium bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-background rounded-lg flex items-center justify-center mx-auto mb-6 shadow-medium border border-border group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={ivecoLogo} 
                    alt="IVECO Logo" 
                    className="w-28 h-auto md:w-36 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.brands.iveco.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                  {t.brands.iveco.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.brands.iveco.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* MAN Card */}
            <Card className="group hover:shadow-large transition-all duration-500 hover:-translate-y-3 animate-fade-in border-border/50 shadow-medium bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-background rounded-lg flex items-center justify-center mx-auto mb-6 shadow-medium border border-border group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={manLogo} 
                    alt="MAN Logo" 
                    className="w-24 h-auto md:w-32 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.brands.man.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                  {t.brands.man.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.brands.man.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ZF Card */}
            <Card className="group hover:shadow-large transition-all duration-500 hover:-translate-y-3 animate-fade-in border-border/50 shadow-medium bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-background rounded-lg flex items-center justify-center mx-auto mb-6 shadow-medium border border-border group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={zfLogo} 
                    alt="ZF Logo" 
                    className="w-20 h-auto md:w-24 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.brands.zf.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
                  {t.brands.zf.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.brands.zf.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section with Enhanced Map */}
      <section id="location" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t.location.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.location.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Enhanced Map Placeholder */}
            <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-xl h-80 md:h-96 flex items-center justify-center animate-fade-in shadow-large overflow-hidden relative group cursor-pointer glass-effect" onClick={openGoogleMaps}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"></div>
              <div className="text-center z-10 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold text-foreground mb-2">ALREEM Location</h3>
                <p className="text-muted-foreground mb-4">26.461504, 50.013986</p>
                <Button onClick={openGoogleMaps} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t.location.directions}
                </Button>
              </div>
            </div>

            {/* Enhanced Business Hours */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-large border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {t.location.hours}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm md:text-base">
                    <p className="text-muted-foreground leading-relaxed">{t.location.schedule}</p>
                    <p className="text-muted-foreground leading-relaxed">{t.location.friday}</p>
                    <p className="text-muted-foreground leading-relaxed">{t.location.saturday}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  onClick={callPhone} 
                  variant="outline" 
                  className="flex items-center justify-center space-x-2 h-12 border-primary/20 hover:bg-primary/10"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Button>
                <Button 
                  onClick={openWhatsApp} 
                  variant="outline"
                  className="flex items-center justify-center space-x-2 h-12 border-primary/20 hover:bg-primary/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.whatsapp}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern RFQ Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RFQForm isArabic={isArabic} />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-card border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-4 gradient-text">
              {t.hero.title}
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {t.hero.description}
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button onClick={callPhone} variant="ghost" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                {t.footer.phone}
              </Button>
              <Button onClick={openWhatsApp} variant="ghost" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.whatsapp}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-large z-40 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-large z-40 animate-fade-in hover:scale-110 transition-all duration-300"
          size="lg"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;