
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, MessageCircle, ArrowUp, Globe, Menu, X } from 'lucide-react';

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
        subtitle: 'تواصل مع فريق الخبراء لدينا',
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
    window.open('https://wa.me/966504106845', '_blank');
  };

  const openGoogleMaps = () => {
    const mapUrl = 'https://maps.app.goo.gl/8jsYZQAgsZgNrca47';
    window.open(mapUrl, '_blank');
  };

  const callPhone = () => {
    window.open('tel:+966504106845');
  };

  const t = content[isArabic ? 'ar' : 'en'];

  return (
    <div className={`min-h-screen bg-white ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary-800">
              {t.hero.title}
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.home}
              </a>
              <a href="#brands" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.brands}
              </a>
              <a href="#location" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.location}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsArabic(!isArabic)}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{isArabic ? 'EN' : 'AR'}</span>
              </Button>
              
              {/* Mobile Menu Button */}
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
            <nav className="md:hidden mt-4 space-y-2 animate-fade-in">
              <a href="#home" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.home}
              </a>
              <a href="#brands" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.brands}
              </a>
              <a href="#location" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                {t.nav.location}
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-right text-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fade-in text-shadow-md">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl opacity-90 animate-fade-in text-shadow-md">
              {t.hero.description}
            </p>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.brands.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.brands.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* IVECO Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-primary-800">I</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.brands.iveco.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.brands.iveco.description}
                </p>
              </CardContent>
            </Card>

            {/* MAN Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-primary-800">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.brands.man.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.brands.man.description}
                </p>
              </CardContent>
            </Card>

            {/* ZF Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-primary-800">ZF</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.brands.zf.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.brands.zf.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section with Enhanced Map */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.location.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.location.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Enhanced Map Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 flex items-center justify-center animate-fade-in shadow-lg overflow-hidden relative group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"%23ddd\"/></svg>')" }}
              />
              <div className="text-center relative z-10">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4 animate-bounce" />
                <p className="text-gray-700 text-lg font-semibold mb-2">ALREEM Location</p>
                <p className="text-gray-600 mb-4">Click to view on Google Maps</p>
                <Button onClick={openGoogleMaps} className="bg-primary-600 hover:bg-primary-700 shadow-lg">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t.location.directions}
                </Button>
              </div>
            </div>

            {/* Enhanced Hours */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary-600" />
                  {t.location.hours}
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium">{t.location.schedule.split(':')[0]}:</span>
                    <span className="text-primary-600 font-semibold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg shadow-sm">
                    <span className="text-red-700 font-medium">{t.location.friday}</span>
                    <span className="text-red-600 font-semibold">Closed | مغلق</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700 font-medium">{t.location.saturday.split(':')[0]}:</span>
                    <span className="text-primary-600 font-semibold">7:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.contact.email}
                  </h3>
                  <Button
                    onClick={() => window.open('mailto:info@alreem.sa')}
                    variant="outline"
                    className="w-full hover:bg-primary-50 border-primary-200"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.contact.phone}
                  </h3>
                  <Button
                    onClick={callPhone}
                    variant="outline"
                    className="w-full hover:bg-primary-50 border-primary-200"
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
      <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">{t.hero.title}</h3>
              <p className="text-primary-200">{t.hero.subtitle}</p>
            </div>
            <p className="text-lg mb-6 text-primary-100">{t.footer.rights}</p>
            <Button
              onClick={callPhone}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.footer.phone}
            </Button>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-float hover:scale-110 transition-all duration-300"
        size="sm"
        title={t.whatsapp}
      >
        <MessageCircle className="w-7 h-7" />
      </Button>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-primary-600 hover:bg-primary-700 text-white rounded-full w-16 h-16 shadow-2xl animate-fade-in hover:scale-110 transition-all duration-300"
          size="sm"
          title={t.scrollTop}
        >
          <ArrowUp className="w-7 h-7" />
        </Button>
      )}
    </div>
  );
};

export default Index;
