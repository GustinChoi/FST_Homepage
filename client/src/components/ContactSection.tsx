import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Section - Get in Touch
 * Design: Modern Minimalism with Tech Sophistication
 * - Contact form with validation
 * - Contact information
 * - Turquoise CTA button
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: '전화',
      value: '02-2038-8366',
    },
    {
      icon: Mail,
      label: '이메일',
      value: 'csa@fairsystech.com',
    },
    {
      icon: MapPin,
      label: '주소',
      value: '서울시 강서구 마곡동 799-9 마곡그랑타워 B동510호 <br> 강원도 춘천시 춘천로 188 211-A27호'</br>,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F5F5] to-white" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-sm font-semibold">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Contact US
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            FairSysTech는 고객의 가장 가까운 곳에서
가장 전문적인 해답을 제시하고 함께합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-[#E0E0E0] hover:border-[#17B8A0] transition-colors"
              >
                <div className="inline-block p-4 bg-[#17B8A0]/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-[#17B8A0]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  {info.label}
                </h3>
                <p className="text-[#666666]">{info.value}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-12 bg-white rounded-lg border border-[#E0E0E0]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:border-[#17B8A0] focus:ring-2 focus:ring-[#17B8A0]/20 transition-all"
                  placeholder="홍길동"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:border-[#17B8A0] focus:ring-2 focus:ring-[#17B8A0]/20 transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                전화
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:border-[#17B8A0] focus:ring-2 focus:ring-[#17B8A0]/20 transition-all"
                placeholder="+82-10-1234-5678"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] focus:outline-none focus:border-[#17B8A0] focus:ring-2 focus:ring-[#17B8A0]/20 transition-all resize-none"
                placeholder="문의 내용을 입력해주세요."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary px-8 py-3 rounded-lg flex items-center justify-center gap-2 group"
            >
              {submitted ? '전송 완료!' : '메시지 전송'}
              {!submitted && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>

            {submitted && (
              <div className="p-4 bg-[#17B8A0]/10 text-[#17B8A0] rounded-lg text-center font-semibold">
                감사합니다! 곧 연락드리겠습니다.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
