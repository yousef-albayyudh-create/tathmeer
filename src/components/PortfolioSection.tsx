import residentialComplex from "@/assets/residential-complex.jpg";
import retailComplex from "@/assets/retail-complex.jpg";
import officeTowers from "@/assets/office-towers.jpg";
import mixedDevelopment from "@/assets/mixed-development.jpg";
const PortfolioSection = () => {
  return <section dir="rtl" className="real-estate-section bg-real-estate-gray bg-white">
      <div className="real-estate-container">
        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-real-estate-text text-center mb-12">
            أنواع المشاريع التي نطورها
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="real-estate-card overflow-hidden group cursor-pointer">
              <div className="relative">
                <img src={residentialComplex} alt="مجمعات سكنية" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold text-lg mb-2">مجمعات سكنية</h4>
                  <p className="text-sm opacity-90">تطوير مجمعات سكنية متكاملة للعائلات</p>
                </div>
              </div>
            </div>
            
            <div className="real-estate-card overflow-hidden group cursor-pointer">
              <div className="relative">
                <img src={retailComplex} alt="مجمعات تجارية" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold text-lg mb-2">مجمعات تجارية</h4>
                  <p className="text-sm opacity-90">مراكز تسوق ومجمعات تجارية حديثة</p>
                </div>
              </div>
            </div>
            
            <div className="real-estate-card overflow-hidden group cursor-pointer">
              <div className="relative">
                <img src={officeTowers} alt="أبراج مكتبية" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold text-lg mb-2">أبراج مكتبية</h4>
                  <p className="text-sm opacity-90">أبراج الأعمال والمكاتب التجارية</p>
                </div>
              </div>
            </div>
            
            <div className="real-estate-card overflow-hidden group cursor-pointer">
              <div className="relative">
                <img src={mixedDevelopment} alt="مشاريع متعددة الاستخدام" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-semibold text-lg mb-2">مشاريع متنوعة</h4>
                  <p className="text-sm opacity-90">تطوير مشاريع متعددة الاستخدام</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Opportunities Image */}
        <div>
          <img src="/lovable-uploads/edea60fc-618b-4338-8951-05929b638142.png" alt="فرص الاستثمارية محزية لأرضك" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </section>;
};
export default PortfolioSection;