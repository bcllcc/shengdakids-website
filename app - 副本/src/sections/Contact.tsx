import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      content: '400-888-8888',
      subContent: '周一至周日 9:00-18:00',
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: 'business@shengda.com',
      subContent: '24小时内回复',
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: '浙江省温州市鞋都大道888号',
      subContent: '欢迎莅临参观',
    },
    {
      icon: Clock,
      title: t.contact.hours,
      content: '周一至周日',
      subContent: '9:00 - 18:00',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-brand-bg-light"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区 */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-subtitle">{t.contact.subtitle}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc mt-4">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* 联系信息 */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm text-brand-text-muted mb-1">{item.title}</h4>
                      <p className="font-medium text-brand-text">{item.content}</p>
                      <p className="text-sm text-brand-text-muted mt-0.5">{item.subContent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 表单 */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-brand-text mb-6">在线咨询</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-brand-text mb-2">提交成功</h4>
                  <p className="text-brand-text-secondary">我们会尽快与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-2">
                        {t.contact.form.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder={t.contact.form.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-2">
                        {t.contact.form.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder={t.contact.form.phone}
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-2">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder={t.contact.form.email}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-2">
                        {t.contact.form.company}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder={t.contact.form.company}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brand-text mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                      placeholder={t.contact.form.message}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary py-4"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t.contact.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
