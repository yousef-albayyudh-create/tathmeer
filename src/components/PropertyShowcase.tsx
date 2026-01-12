import residentialVillas from "@/assets/residential-villas.jpg";
import commercialBuilding from "@/assets/commercial-building.jpg";
import hotelBuilding from "@/assets/hotel-building.jpg";
import { Button } from "@/components/ui/button";
const PropertyShowcase = () => {
  return <section className="real-estate-section" dir="rtl">
    <div className="real-estate-container">
      {/* What Makes Tamayoz Different */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-real-estate-text mb-4">ما هو برنامج تثمير؟</h3>
          <p className="text-lg font-normal text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            اكتشف كيف يحوّل برنامج "تثمير" أراضيك غير المستغلة إلى استثمارات مربحة، بدون أي عناء عليك. نعتني بكل التفاصيل، من التطوير إلى الإدارة والتمويل
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="real-estate-card p-6">
              <h4 className="text-xl font-semibold mb-3 text-real-estate-text">حل مبتكر</h4>
              <p className="text-muted-foreground">منتج مبتكر يحول الأراضي التجارية غير المستغلة إلى مشاريع مدرة للدخل دون أن يتحمل مالك الأرض أي أعباء مالية أو تشغيلية.</p>
            </div>
            <div className="real-estate-card p-6">
              <h4 className="text-xl font-semibold mb-3 text-real-estate-text">الفلسفة الاساسية </h4>
              <p className="text-muted-foreground">أرضك تبقى ملكك والتطوير والإدارة والتمويل علينا. نحول الأصول المجمدة إلى استثمارات مربحة من خلال شراكة عادلة ومستدامة.</p>
            </div>
            <div className="real-estate-card p-6">
              <h4 className="text-xl font-semibold mb-3 text-real-estate-text">نموذج الشراكة </h4>
              <p className="text-muted-foreground">شراكة بنسبة 75% للمالك و 25% لدلمون من صافي الأرباح، مع احتفاظ المالك بملكية الأرض بالكامل.</p>
            </div>
            <div className="real-estate-card p-6">
              <h4 className="text-xl font-semibold mb-3 text-real-estate-text">مدة الشراكة </h4>
              <p className="text-muted-foreground">تتراوح بين 15-25 سنة حسب طبيعة المشروع، مع إمكانية التجديد بالاتفاق بين الطرفين.</p>
            </div>
          </div>

          <div className="real-estate-card overflow-hidden">
            <img src={residentialVillas} alt="مشاريع سكنية فاخرة" className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="real-estate-card overflow-hidden">
            <img src={commercialBuilding} alt="مباني تجارية حديثة" className="w-full h-96 object-cover" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-real-estate-text mb-8">كيف يعمل برنامج  تثمير؟</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-real-estate-green text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text mb-2">تحديد الفرص</h4>
                  <p className="text-muted-foreground">نقوم بتحديد الأراضي التجارية الواعدة وغير المستغلة ذات الإمكانيات العالية للتطوير.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-real-estate-green text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text mb-2">دراسة الجدوى</h4>
                  <p className="text-muted-foreground">نُجري دراسات جدوى شاملة لتحديد أفضل استخدام للأرض وضمان أعلى عائد استثماري.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-real-estate-green text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text mb-2">التطوير والتمويل</h4>
                  <p className="text-muted-foreground">نتولى اختيار الاستخدام الأنسب للمشروع بناءً على العائد وإمكانية التسويق ونقوم نيابة عن المالك بجميع جوانب التطوير والبحث واختيار التمويل الأنسب للمشروع.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-real-estate-green text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text mb-2">الإدارة والتشغيل</h4>
                  <p className="text-muted-foreground">نتولى إدارة وتشغيل المشروع بعد اكتماله لضمان استمرارية النجاح وتحقيق الأرباح.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-real-estate-green text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-real-estate-text mb-2">صرف الأيرادات</h4>
                  <p className="text-muted-foreground">يتم صرف صافي الإيرادات للمالك وفقاً لنسب الاشتراك.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Tamayoz Programs */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-real-estate-text text-center mb-12">
          لماذا برامج تثمير؟
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center real-estate-card p-6">
            <div className="w-16 h-16 bg-real-estate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">01</span>
            </div>
            <h4 className="font-semibold text-real-estate-text mb-2">الخبرة والمعرفة</h4>
            <p className="text-sm text-muted-foreground">تبقى الأرض مسجلة باسمك بالكامل، وأي زيادة في قيمتها تعود إليك</p>
          </div>

          <div className="text-center real-estate-card p-6">
            <div className="w-16 h-16 bg-real-estate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">02</span>
            </div>
            <h4 className="font-semibold text-real-estate-text mb-2">صفر تكاليف عليك</h4>
            <p className="text-sm text-muted-foreground">نتحمل كافة تكاليف التطوير والبناء والتشغيل دون أي التزامات مالية عليك</p>
          </div>

          <div className="text-center real-estate-card p-6">
            <div className="w-16 h-16 bg-real-estate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">03</span>
            </div>
            <h4 className="font-semibold text-real-estate-text mb-2">إدارة شاملة ومتخصصة</h4>
            <p className="text-sm text-muted-foreground">نتولى كافة جوانب المشروع من التصميم والتراخيص حتى التسويق والصيانة</p>
          </div>

          <div className="text-center real-estate-card p-6">
            <div className="w-16 h-16 bg-real-estate-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">04</span>
            </div>
            <h4 className="font-semibold text-real-estate-text mb-2">عوائد مجزية ومستدامة</h4>
            <p className="text-sm text-muted-foreground">نضمن لك تحقيق أقصى استفادة من أرضك عبر عوائد مالية مستقرة ومتنامية</p>
          </div>
        </div>

        <div className="real-estate-card overflow-hidden">
          <img src={import.meta.env.BASE_URL + "lovable-uploads/a725ccfe-884e-47c7-9a50-74bbe3b66adf.png"} alt="مشاريع حديثة ومتطورة" className="w-full h-80 object-cover" />
        </div>

        {/* Call to Action Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-real-estate-text mb-4">
                ابدأ رحلة النجاح الآن وحوّل أرضك إلى استثمار مربح ومستدام مع برنامج تثمير.
              </p>
              <p className="text-base leading-relaxed text-real-estate-text mb-6">
                لا تتردد! احجز استشارة مجانية أو تواصل معنا عبر الواتساب.
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                إبدأ استثمارك الآن
              </Button>
            </div>

            <div className="real-estate-card overflow-hidden">
              <img src={hotelBuilding} alt="مبنى فندقي فاخر" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default PropertyShowcase;