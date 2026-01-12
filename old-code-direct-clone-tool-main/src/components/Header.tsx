import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b" dir="rtl">
      <div className="real-estate-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/938f7ae7-a7d4-4e99-9154-1dc54158fe4a.png" 
                alt="شعار تثمير" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-real-estate-text">تثمير</h1>
              <p className="text-sm text-muted-foreground">استثمار ناجح ومستدام</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-real-estate-green" />
              <span dir="ltr">+966 53 181 8159</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-real-estate-green" />
              <span>info@thameer.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;