import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });
  const { t, language } = useLanguage();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 请在 https://web3forms.com/ 注册并获取免费的 Access Key 替换这里的 'YOUR_ACCESS_KEY_HERE'
      const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `新官网留言: 来自 ${formData.name}`,
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.error('Submission failed:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      content: t.contact.info.phoneValue,
      subContent: t.contact.info.phoneDesc,
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: t.contact.info.emailValue,
      subContent: t.contact.info.emailDesc,
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.info.addressValue,
      subContent: t.contact.info.addressDesc,
    },
    {
      icon: Clock,
      title: t.contact.hours,
      content: t.contact.info.hoursDays,
      subContent: t.contact.info.hoursTime,
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
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
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
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-brand-text mb-6">{t.contact.consulting}</h3>

              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-brand-text mb-2">
                    {language === 'zh' ? '提交成功！' : 'Submitted Successfully!'}
                  </h4>
                  <p className="text-brand-text-secondary mt-2">
                    {language === 'zh'
                      ? '感谢您的留言，我们会尽快与您联系。'
                      : 'Thank you for your message, we will contact you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start text-red-600 mb-6 text-sm">
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <p>
                        {language === 'zh'
                          ? '表单提交失败，请确保网站管理员配置了有效的 Access Key 或直接拨打电话联系我们。'
                          : 'Submission failed. Please ask the site admin to configure a valid Access Key or contact us by phone instead.'}
                      </p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-2">
                        {t.contact.form.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder={t.contact.form.namePlaceholder || t.contact.form.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-2">
                        {t.contact.form.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder={t.contact.form.phonePlaceholder || t.contact.form.phone}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                      placeholder={t.contact.form.messagePlaceholder || t.contact.form.message}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary py-4 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    {!isSubmitting && <Send className="w-4 h-4 mr-2" />}
                    {isSubmitting
                      ? language === 'zh'
                        ? '提交中...'
                        : 'Submitting...'
                      : t.contact.form.submit}
                  </button>
                  <p className="text-xs text-brand-text-secondary/60 text-center mt-4">
                    {language === 'zh'
                      ? '我们承诺会对您的信息进行保密，不会用于其它商业用途。'
                      : 'We promise to keep your info confidential and not use it for other commercial purposes.'}
                  </p>
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
