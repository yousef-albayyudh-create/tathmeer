import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background" dir="rtl">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-real-estate-text">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">عذراً! الصفحة غير موجودة</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-real-estate-green text-white rounded-lg hover:bg-real-estate-dark-green transition-colors"
        >
          العودة للصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default NotFound;
