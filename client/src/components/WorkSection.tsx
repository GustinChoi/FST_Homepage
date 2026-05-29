import { Network, Shield, Zap } from 'lucide-react';

/**
 * Work Section - Services Overview
 * Design: Modern Minimalism with Tech Sophistication
 * - Service cards with icons
 * - Turquoise accent on hover
 * - Clear service descriptions
 */

export default function WorkSection() {
  const services = [
    {
      icon: Network,
      title: '네트워크 구축',
      description: '기업의 규모와 요구사항에 맞춘 최적의 네트워크 인프라를 설계하고 구축합니다. 안정적이고 확장 가능한 솔루션으로 비즈니스 연속성을 보장합니다.',
      features: ['네트워크 설계', '인프라 구축', '성능 최적화'],
    },
    {
      icon: Shield,
      title: '보안 솔루션',
      description: '다층 방어 시스템으로 사이버 위협으로부터 기업을 보호합니다. 최신 보안 기술과 전문가 모니터링으로 24/7 안전을 제공합니다.',
      features: ['위협 탐지', '침입 방지', '데이터 보호'],
    },
    {
      icon: Zap,
      title: 'IT 솔루션',
      description: '클라우드, 데이터베이스, 애플리케이션 등 다양한 IT 서비스를 통합적으로 제공합니다. 디지털 트랜스포메이션을 위한 완벽한 솔루션입니다.',
      features: ['클라우드 서비스', '시스템 통합', '기술 지원'],
    },
  ];

  return (
    <section
      id="work"
      className="relative py-20 md:py-32 bg-white"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663652149162/GRC4GZYyRNRk6HVHpMvTJ8/services-bg-ihM9wSoXLYJUCumJR5h3te.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/92" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-sm font-semibold" style={{fontSize: '20px', fontWeight: '800'}}>
              Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            우리의 서비스
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            FairSysTech는 네트워크 구축부터 보안, IT 솔루션까지 기업의 모든 기술 요구사항을 충족합니다.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-[#E0E0E0] card-hover group"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-[#17B8A0]/10 rounded-lg group-hover:bg-[#17B8A0]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[#17B8A0]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#17B8A0]" />
                      <span className="text-[#666666] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
