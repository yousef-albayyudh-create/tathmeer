import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-real-estate-text text-white" dir="rtl">
      <div className="real-estate-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center">
                <img
                  src={import.meta.env.BASE_URL + "lovable-uploads/938f7ae7-a7d4-4e99-9154-1dc54158fe4a.png"}
                  alt="شعار تثمير"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold">تثمير</h3>
                <p className="text-sm text-gray-300">استثمار ناجح ومستدام</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن شركة رائدة في مجال التطوير العقاري والاستثمار، نقدم حلولاً مبتكرة ومستدامة لعملائنا.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-real-estate-green transition-colors">عن الشركة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-real-estate-green transition-colors">مشاريعنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-real-estate-green transition-colors">خدماتنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-real-estate-green transition-colors">الاستثمار</a></li>
              <li><a href="#" className="text-gray-300 hover:text-real-estate-green transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-real-estate-green" />
                <span className="text-gray-300" dir="ltr">+966 53 181 8159</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-real-estate-green" />
                <span className="text-gray-300">info@thameer.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-real-estate-green" />
                <span className="text-gray-300">الرياض - المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 شركة تثمير. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-real-estate-green transition-colors text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-real-estate-green transition-colors text-sm">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;