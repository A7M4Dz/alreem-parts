import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, MessageCircle, ArrowUp, Globe, Menu, X } from 'lucide-react';
import { RFQForm } from '@/components/RFQForm';

const Index = () => {
  const [isArabic, setIsArabic] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          description: 'Italian commercial vehicle manufacturer known for innovative trucks, buses, and specialized vehicles with advanced technology and fuel efficiency.'
        },
        man: {
          title: 'MAN',
          description: 'German automotive company producing high-quality trucks and buses, renowned for durability, performance, and cutting-edge engineering solutions.'
        },
        zf: {
          title: 'ZF',
          description: 'Global technology company specializing in driveline and chassis technology, providing advanced transmission and steering systems for commercial vehicles.'
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
          description: 'شركة إيطالية لتصنيع المركبات التجارية معروفة بالشاحنات والحافلات والمركبات المتخصصة المبتكرة مع التكنولوجيا المتقدمة وكفاءة الوقود.'
        },
        man: {
          title: 'مان',
          description: 'شركة سيارات ألمانية تنتج شاحنات وحافلات عالية الجودة، مشهورة بالمتانة والأداء وحلول الهندسة المتطورة.'
        },
        zf: {
          title: 'زد إف',
          description: 'شركة تكنولوجيا عالمية متخصصة في تكنولوجيا نقل الحركة والهيكل، تقدم أنظمة نقل وتوجيه متقدمة للمركبات التجارية.'
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
      image: '/lovable-uploads/6a846b3b-bca0-487c-980d-953b71338401.png',
      title: 'ZF PowerLine Technology',
      titleAr: 'تقنية زد إف باور لاين'
    },
    {
      image: '/lovable-uploads/0c3fdcc3-e54d-4923-af6b-b5b885b68c48.png',
      title: 'IVECO Stralis Trucks',
      titleAr: 'شاحنات إيفيكو ستراليس'
    },
    {
      image: '/lovable-uploads/098dd476-7415-4b8c-ae82-cc71f15dfbf6.png',
      title: 'IVECO S-WAY Electric',
      titleAr: 'إيفيكو إس-واي الكهربائية'
    },
    {
      image: '/lovable-uploads/35987b35-7fe3-438e-8aac-0b28498a4b14.png',
      title: 'IVECO S-WAY Next Gen',
      titleAr: 'إيفيكو إس-واي الجيل الجديد'
    },
    {
      image: '/lovable-uploads/08bd2653-a697-4829-8245-e8c870070726.png',
      title: 'MAN TGX Trucks',
      titleAr: 'شاحنات مان تي جي إكس'
    },
    {
      image: '/lovable-uploads/41796176-d4a3-42be-973a-4b3fe2acb9de.png',
      title: 'IVECO S-WAY Heavy Duty',
      titleAr: 'إيفيكو إس-واي للخدمة الشاقة'
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
      // Try WhatsApp app first on mobile
      window.location.href = 'whatsapp://send?phone=966504106845';
    } else {
      // Open web WhatsApp on desktop
      window.open('https://wa.me/966504106845', '_blank');
    }
  };

  const openGoogleMaps = () => {
    // Use Google Maps app URL scheme for mobile, fallback to web
    const mapsAppUrl = 'comgooglemaps://?q=24.7136,46.6753&center=24.7136,46.6753&zoom=14';
    const webUrl = 'https://maps.app.goo.gl/8jsYZQAgsZgNrca47';
    
    // Try to open Google Maps app first
    const link = document.createElement('a');
    link.href = mapsAppUrl;
    link.click();
    
    // Fallback to web version after a short delay if app doesn't open
    setTimeout(() => {
      window.open(webUrl, '_blank');
    }, 500);
  };

  const callPhone = () => {
    window.open('tel:+966504106845');
  };

  const t = content[isArabic ? 'ar' : 'en'];

  return (
    <div className={`min-h-screen bg-white ${isArabic ? 'rtl font-arabic' : 'ltr'} font-sans`}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-bold text-slate-800 tracking-wide">
              {t.hero.title}
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.home}
              </a>
              <a href="#brands" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.brands}
              </a>
              <a href="#location" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.location}
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                onClick={() => setIsArabic(!isArabic)}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 text-sm border-slate-200 hover:bg-slate-50"
              >
                <Globe className="w-4 h-4" />
                <span>{isArabic ? 'EN' : 'AR'}</span>
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="outline"
                size="sm"
                className="md:hidden border-slate-200 hover:bg-slate-50"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2 animate-fade-in border-t pt-4 border-slate-100">
              <a href="#home" className="block py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.home}
              </a>
              <a href="#brands" className="block py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.brands}
              </a>
              <a href="#location" className="block py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                {t.nav.location}
              </a>
              <a href="#contact" className="block py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium">
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-700/30" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-slide-in-right text-shadow-lg leading-tight">
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
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brands Section with Logos */}
      <section id="brands" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {t.brands.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.brands.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* IVECO Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md border border-slate-100 group-hover:scale-105 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/451b023c-8e9a-476f-b79a-fa85b2f46255.png" 
                    alt="IVECO Logo" 
                    className="w-28 h-auto md:w-36 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {t.brands.iveco.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t.brands.iveco.description}
                </p>
              </CardContent>
            </Card>

            {/* MAN Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md border border-slate-100 group-hover:scale-105 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/84895c8a-1944-4027-b85f-682c841e01cc.png" 
                    alt="MAN Logo" 
                    className="w-24 h-auto md:w-32 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {t.brands.man.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t.brands.man.description}
                </p>
              </CardContent>
            </Card>

            {/* ZF Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg bg-white">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-md border border-slate-100 group-hover:scale-105 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/13551a0e-f2d3-40de-8bda-f827d4768f1d.png" 
                    alt="ZF Logo" 
                    className="w-20 h-auto md:w-24 object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {t.brands.zf.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {t.brands.zf.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section with Enhanced Map */}
      <section id="location" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {t.location.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.location.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Enhanced Map Placeholder */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl h-80 md:h-96 flex items-center justify-center animate-fade-in shadow-lg overflow-hidden relative group cursor-pointer" onClick={openGoogleMaps}>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"%23ddd\"/></svg>')" }}
              />
              <div className="text-center relative z-10">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                <p className="text-slate-700 text-lg md:text-xl font-semibold mb-2">ALREEM Location</p>
                <p className="text-slate-600 mb-4 text-sm md:text-base">Click to view on Google Maps</p>
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t.location.directions}
                </Button>
              </div>
            </div>

            {/* Enhanced Hours */}
            <div className="space-y-6 md:space-y-8 animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 mr-3 text-blue-600" />
                  {t.location.hours}
                </h3>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg">
                  <div className="flex justify-between items-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-slate-700 font-medium text-sm md:text-base">{t.location.schedule.split(':')[0]}:</span>
                    <span className="text-blue-600 font-semibold text-sm md:text-base">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 md:p-4 bg-red-50 rounded-lg shadow-sm">
                    <span className="text-red-700 font-medium text-sm md:text-base">{t.location.friday}</span>
                    <span className="text-red-600 font-semibold text-sm md:text-base">Closed | مغلق</span>
                  </div>
                  <div className="flex justify-between items-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-slate-700 font-medium text-sm md:text-base">{t.location.saturday.split(':')[0]}:</span>
                    <span className="text-blue-600 font-semibold text-sm md:text-base">7:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* RFQ Form */}
            <div className="animate-fade-in">
              <RFQForm isArabic={isArabic} />
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg bg-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
                    {t.contact.email}
                  </h3>
                  <Button
                    onClick={() => window.open('mailto:info@alreem.sa')}
                    variant="outline"
                    className="w-full hover:bg-blue-50 border-blue-200"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg bg-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
                    {t.contact.phone}
                  </h3>
                  <Button
                    onClick={callPhone}
                    variant="outline"
                    className="w-full hover:bg-blue-50 border-blue-200"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{t.hero.title}</h3>
              <p className="text-slate-300 text-sm md:text-base">{t.hero.subtitle}</p>
            </div>
            <p className="text-base md:text-lg mb-6 text-slate-200">{t.footer.rights}</p>
            <Button
              onClick={callPhone}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm md:text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.footer.phone}
            </Button>
          </div>
        </div>
      </footer>

      {/* Static WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl transition-all duration-300"
        size="sm"
        title={t.whatsapp}
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </Button>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl animate-fade-in transition-all duration-300"
          size="sm"
          title={t.scrollTop}
        >
          <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
        </Button>
      )}
    </div>
  );
};

export default Index;
