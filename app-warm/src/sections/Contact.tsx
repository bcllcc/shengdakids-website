import { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertCircle, Phone, Mail, MapPin, Send, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05, rootMargin: '0px' }
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
            const ACCESS_KEY = '85b05447-680d-42d0-9686-dbf5a9e86e87';

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    subject: `新官网留言: 来自 ${formData.name}`,
                    from_name: formData.name,
                    phone: formData.phone,
                    message: formData.message,
                    cc: 'jjhnb123@gmail.com',
                })
            });

            const result = await response.json();

            if (response.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', phone: '', message: '' });
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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const contactInfo = [
        {
            icon: Phone,
            title: t.contact.phone,
            detail: '+86 136 7658 2993',
            action: 'tel:+8613676582993',
            accent: 'text-brand-primary'
        },
        {
            icon: Mail,
            title: t.contact.email,
            detail: 'wzshengdaxieye@163.com',
            action: 'mailto:wzshengdaxieye@163.com',
            accent: 'text-brand-secondary'
        },
        {
            icon: MapPin,
            title: t.contact.address,
            detail: language === 'zh' ? '浙江省温州市瓯北黎明路9号' : 'No. 9 Liming Road, Oubei, Wenzhou, Zhejiang, China',
            action: 'https://maps.google.com/?q=浙江省温州市瓯北黎明路9号',
            accent: 'text-brand-accent'
        }
    ];

    return (
        <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-[#F9FAFB] relative overflow-hidden">

            {/* 柔光背景 */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className={`text-center max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
                    <span className="text-brand-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">{t.contact.getInTouch}</span>
                    <h2 className="section-title">{t.contact.startCooperation}</h2>
                    <p className="text-brand-text-secondary text-lg font-light whitespace-nowrap">{t.contact.cooperationDesc}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* 左侧优雅名片排版 */}
                    <div
                        className={`flex flex-col justify-center space-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="card-premium p-10 bg-white/60 backdrop-blur-xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className="font-sans text-3xl text-brand-text mb-8 font-bold">{t.contact.contactTitle}</h3>
                                <div className="space-y-8">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.action}
                                            target={info.icon === MapPin ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-5 group"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl bg-brand-bg-light shadow-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md ${info.accent}`}>
                                                <info.icon className="w-5 h-5" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-brand-text-secondary uppercase tracking-widest mb-1">{info.title}</p>
                                                <p className="font-medium text-brand-text text-lg transition-colors duration-300 group-hover:text-brand-primary break-all">
                                                    {info.detail}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
                                <span className="text-sm font-medium text-brand-text-secondary uppercase tracking-widest">{t.contact.followUs}</span>
                                <div className="flex gap-3">
                                    {/* 可以替换为微信/微博/小红书等本土化图标 */}
                                    <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-300">
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右侧高级极简表单 */}
                    <div
                        className={`card-premium p-10 md:p-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-90'}`}
                        style={{ transitionDelay: '350ms' }}
                    >
                        <h3 className="font-sans text-3xl text-brand-text mb-8 font-bold">{t.contact.inquiryTitle}</h3>

                        {submitStatus === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="text-xl font-bold text-brand-text mb-2">
                                    {language === 'zh' ? '提交成功！' : 'Submitted Successfully!'}
                                </h4>
                                <p className="text-brand-text-secondary mt-2">
                                    {language === 'zh'
                                        ? '感谢您的留言，我们会尽快与您联系。'
                                        : 'Thank you for your message, we will contact you shortly.'}
                                </p>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
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
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-brand-text-secondary tracking-wide uppercase">{t.contact.form.name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-brand-bg/50 border border-gray-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                            placeholder={t.contact.form.namePlaceholder}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-brand-text-secondary tracking-wide uppercase">{t.contact.form.phone}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-brand-bg/50 border border-gray-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                                            placeholder={t.contact.form.phonePlaceholder}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-brand-text-secondary tracking-wide uppercase">{t.contact.form.message}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-brand-bg/50 border border-gray-200 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none"
                                        placeholder={t.contact.form.messagePlaceholder}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn-primary w-full group py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <span className="tracking-widest mr-2">
                                        {isSubmitting
                                            ? (language === 'zh' ? '提交中...' : 'Submitting...')
                                            : t.contact.form.submit}
                                    </span>
                                    {!isSubmitting && <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
