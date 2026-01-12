// Removed import as we're using direct URL
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section dir="rtl" className="real-estate-section bg-real-estate-gray bg-white">
      <div className="real-estate-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-real-estate-text mb-4">
            استثمار ناجح ومستدام
          </h2>
          <p className="text-lg text-muted-foreground">
            إجعل أرضك إستثماراً مربحاً
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
          <img src="/lovable-uploads/2d27575c-d03e-45cb-acd3-a673bbf58515.png" alt="مناظر المدينة الحديثة" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
        </div>

        <div className="text-center">
          <Button className="real-estate-button">
            أفضل فرصة إستثمارية
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;