
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
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
      title: 'IVECO Trucks',
      titleAr: 'شاحنات إيفيكو'
    },
    {
      image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1200&q=80',
      title: 'MAN Trucks',
      titleAr: 'شاحنات مان'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      title: 'ZF Parts',
      titleAr: 'قطع زد إف'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
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
    const mapUrl = 'https://maps.google.com/';
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

      {/* Hero Section with Slideshow */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={isArabic ? slide.titleAr : slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-right">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-fade-in">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl opacity-90 animate-fade-in">
              {t.hero.description}
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-gray-50">
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
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl font-bold text-primary-800">I</span>
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
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl font-bold text-primary-800">M</span>
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
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <span className="text-2xl font-bold text-primary-800">ZF</span>
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

      {/* Location Section */}
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
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center animate-fade-in">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Map</p>
                <Button onClick={openGoogleMaps} className="mt-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t.location.directions}
                </Button>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary-600" />
                  {t.location.hours}
                </h3>
                <div className="space-y-3 text-lg">
                  <p className="text-gray-700">{t.location.schedule}</p>
                  <p className="text-red-600 font-semibold">{t.location.friday}</p>
                  <p className="text-gray-700">{t.location.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-50">
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
              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.contact.email}
                  </h3>
                  <Button
                    onClick={() => window.open('mailto:info@alreem.sa')}
                    variant="outline"
                    className="w-full"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t.contact.phone}
                  </h3>
                  <Button
                    onClick={callPhone}
                    variant="outline"
                    className="w-full"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg mb-4">{t.footer.rights}</p>
            <Button
              onClick={callPhone}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-900"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.footer.phone}
            </Button>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-float"
        size="sm"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-primary-600 hover:bg-primary-700 text-white rounded-full w-14 h-14 shadow-lg animate-fade-in"
          size="sm"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;
