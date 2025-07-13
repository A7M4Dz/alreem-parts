import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, FileText } from 'lucide-react';

interface RFQFormProps {
  isArabic: boolean;
}

export const RFQForm = ({ isArabic }: RFQFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partType: '',
    partNumber: '',
    quantity: '',
    urgency: '',
    description: '',
    preferredContact: ''
  });

  const content = {
    en: {
      title: 'Request for Quotation',
      subtitle: 'Get a quote for your truck parts needs',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name',
        partType: 'Part Type',
        partNumber: 'Part Number',
        quantity: 'Quantity',
        urgency: 'Urgency Level',
        description: 'Additional Details',
        preferredContact: 'Preferred Contact Method'
      },
      placeholders: {
        name: 'Enter your full name',
        email: 'your.email@example.com',
        phone: '+966xxxxxxxxx',
        company: 'Your company name',
        partNumber: 'Part number if known',
        quantity: 'How many parts needed',
        description: 'Any additional information about your requirements...'
      },
      options: {
        partTypes: ['Engine Parts', 'Transmission', 'Brake System', 'Electrical', 'Suspension', 'Body Parts', 'Other'],
        urgency: ['Standard (7-14 days)', 'Urgent (2-7 days)', 'Emergency (24-48 hours)'],
        contact: ['WhatsApp', 'Phone Call', 'Email']
      },
      button: 'Send Request',
      sending: 'Sending...',
      success: 'RFQ sent successfully!',
      error: 'Failed to send RFQ. Please try again.',
      required: 'This field is required'
    },
    ar: {
      title: 'طلب عرض سعر',
      subtitle: 'احصل على عرض سعر لاحتياجاتك من قطع الشاحنات',
      fields: {
        name: 'الاسم الكامل',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        company: 'اسم الشركة',
        partType: 'نوع القطعة',
        partNumber: 'رقم القطعة',
        quantity: 'الكمية',
        urgency: 'مستوى الأولوية',
        description: 'تفاصيل إضافية',
        preferredContact: 'طريقة التواصل المفضلة'
      },
      placeholders: {
        name: 'أدخل اسمك الكامل',
        email: 'your.email@example.com',
        phone: '+966xxxxxxxxx',
        company: 'اسم شركتك',
        partNumber: 'رقم القطعة إذا كان معروفاً',
        quantity: 'كم قطعة تحتاج',
        description: 'أي معلومات إضافية حول متطلباتك...'
      },
      options: {
        partTypes: ['قطع المحرك', 'ناقل الحركة', 'نظام الفرامل', 'كهربائي', 'نظام التعليق', 'قطع الهيكل', 'أخرى'],
        urgency: ['عادي (7-14 يوم)', 'عاجل (2-7 أيام)', 'طارئ (24-48 ساعة)'],
        contact: ['واتساب', 'مكالمة هاتفية', 'بريد إلكتروني']
      },
      button: 'إرسال الطلب',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال طلب عرض السعر بنجاح!',
      error: 'فشل في إرسال الطلب. يرجى المحاولة مرة أخرى.',
      required: 'هذا الحقل مطلوب'
    }
  };

  const t = content[isArabic ? 'ar' : 'en'];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const required = ['name', 'email', 'phone', 'partType', 'quantity', 'urgency'];
    return required.every(field => formData[field].trim() !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: isArabic ? 'خطأ' : 'Error',
        description: t.required,
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.ahmed.today/webhook/9446a083-6da6-4175-9978-4e2f335e27c9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          language: isArabic ? 'ar' : 'en',
          source: 'alreem-website'
        }),
      });

      if (response.ok) {
        toast({
          title: isArabic ? 'تم بنجاح' : 'Success',
          description: t.success,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          partType: '',
          partNumber: '',
          quantity: '',
          urgency: '',
          description: '',
          preferredContact: ''
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending RFQ:', error);
      toast({
        title: isArabic ? 'خطأ' : 'Error',
        description: t.error,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-white">
      <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-slate-50 rounded-t-lg">
        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
          <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          {t.title}
        </CardTitle>
        <p className="text-slate-600 mt-2">{t.subtitle}</p>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-700 font-medium">
                {t.fields.name} *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder={t.placeholders.name}
                required
                className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">
                {t.fields.email} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder={t.placeholders.email}
                required
                className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700 font-medium">
                {t.fields.phone} *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder={t.placeholders.phone}
                required
                className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-700 font-medium">
                {t.fields.company}
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder={t.placeholders.company}
                className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Part Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="partType" className="text-slate-700 font-medium">
                {t.fields.partType} *
              </Label>
              <Select value={formData.partType} onValueChange={(value) => handleChange('partType', value)}>
                <SelectTrigger className="border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder={`Select ${t.fields.partType.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {t.options.partTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="partNumber" className="text-slate-700 font-medium">
                {t.fields.partNumber}
              </Label>
              <Input
                id="partNumber"
                value={formData.partNumber}
                onChange={(e) => handleChange('partNumber', e.target.value)}
                placeholder={t.placeholders.partNumber}
                className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-slate-700 font-medium">
                {t.fields.quantity} *
              </Label>
              <Input
                id="quantity"
                value={formData.quantity}
                onChange={(e) => handleChange('quantity', e.target.value)}
                placeholder={t.placeholders.quantity}
                required
                className="border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency" className="text-slate-700 font-medium">
                {t.fields.urgency} *
              </Label>
              <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
                <SelectTrigger className="border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder={`Select ${t.fields.urgency.toLowerCase()}`} />
                </SelectTrigger>
                <SelectContent>
                  {t.options.urgency.map((level) => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredContact" className="text-slate-700 font-medium">
              {t.fields.preferredContact}
            </Label>
            <Select value={formData.preferredContact} onValueChange={(value) => handleChange('preferredContact', value)}>
              <SelectTrigger className="border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder={`Select ${t.fields.preferredContact.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {t.options.contact.map((method) => (
                  <SelectItem key={method} value={method}>{method}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-slate-700 font-medium">
              {t.fields.description}
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder={t.placeholders.description}
              rows={4}
              className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {t.sending}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t.button}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};