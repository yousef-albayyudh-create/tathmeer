import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'استثمار عقاري',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // إعدادات EmailJS
  const EMAILJS_SERVICE_ID = "service_5tjzza7";
  const EMAILJS_TEMPLATE_ID = "template_xkx6njm";
  const EMAILJS_PUBLIC_KEY = "ZGXkDBjyky38ujjE5";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // إعداد البيانات لإرسال الإيميل
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_email: "your_email@example.com", // استبدل بإيميلك
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لك! سنتواصل معك قريباً",
      });

      // إعادة تعيين النموذج
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'استثمار عقاري',
        message: ''
      });

    } catch (error) {
      console.error('خطأ في إرسال الإيميل:', error);
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="real-estate-section" dir="rtl">
      <div className="real-estate-container">
        {/* Partnership Image */}
        <div className="text-center mb-12">
          <img
            src={import.meta.env.BASE_URL + "lovable-uploads/97024a74-156f-4795-8688-6681d4a859e6.png"}
            alt="تثمير - تحقيق أقصى استفادة من شراكتنا في استثمار العقارات"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-real-estate-text mb-4">
            تواصل معنا
          </h3>
          <p className="text-lg text-muted-foreground">
            نحن هنا لمساعدتك في تحقيق أهدافك الاستثمارية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="real-estate-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-real-estate-green rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text">اتصل بنا</h4>
                  <p className="text-muted-foreground" dir="ltr">+966 53 181 8159</p>
                </div>
              </div>
            </div>

            <div className="real-estate-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-real-estate-green rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground">info@thameer.com</p>
                </div>
              </div>
            </div>

            <div className="real-estate-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-real-estate-green rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text">العنوان</h4>
                  <p className="text-muted-foreground">الرياض - المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="real-estate-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-real-estate-green rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text">ساعات العمل</h4>
                  <p className="text-muted-foreground">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="real-estate-card p-8">
            <h4 className="text-2xl font-bold text-real-estate-text mb-6">احصل على استشارة مجانية</h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-real-estate-text font-medium mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-real-estate-green"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div>
                <label className="block text-real-estate-text font-medium mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-real-estate-green"
                  placeholder="رقم الهاتف"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-real-estate-text font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-real-estate-green"
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>

              <div>
                <label className="block text-real-estate-text font-medium mb-2">نوع الاستفسار</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-real-estate-green">
                  <option value="استثمار عقاري">استثمار عقاري</option>
                  <option value="تطوير مشروع">تطوير مشروع</option>
                  <option value="استشارة عامة">استشارة عامة</option>
                  <option value="شراكة تجارية">شراكة تجارية</option>
                </select>
              </div>

              <div>
                <label className="block text-real-estate-text font-medium mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-real-estate-green"
                  placeholder="اكتب رسالتك هنا..."
                  required
                ></textarea>
              </div>

              <Button type="submit" className="real-estate-button w-full" disabled={isLoading}>
                {isLoading ? "جاري الإرسال..." : "إرسال الاستفسار"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;