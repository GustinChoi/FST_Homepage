import { CheckCircle2 } from 'lucide-react';

/**
 * About Section - Company Information
 * Design: Modern Minimalism with Tech Sophistication
 * - Background image with geometric patterns
 * - Company mission and values
 * - Key differentiators with icons
 */

export default function AboutSection() {
  const values = [
    {
      title: '신뢰성',
      description: '견고한 기술과 일관된 서비스로 고객의 신뢰를 구축합니다.',
    },
    {
      title: '혁신',
      description: '최신 기술 트렌드를 선도하며 지속적인 개선을 추구합니다.',
    },
    {
      title: '전문성',
      description: '경험 많은 전문가 팀이 최적의 솔루션을 제공합니다.',
    },
    {
      title: '보안',
      description: '최고 수준의 보안 표준으로 데이터를 보호합니다.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663652149162/GRC4GZYyRNRk6HVHpMvTJ8/about-bg-D9X9i8gGCgQegLgAy8rbRJ.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-sm font-semibold" style={{fontSize: '20px', fontWeight: '800'}}>
              About
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            About FairSysTech
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            단순한 IT 지원을 넘어 기업의 생존과 성장을 결정짓는 핵심 동력을 설계합니다.<br/>
            Fairsystech(페어시스텍)은 투명한 기술 원칙(Fair)과 고도화된 아키텍처(System)를<br/>
            바탕으로 고객사의 디지털 전환을 완벽하게 지원하는 IT 인프라 전문 기업입니다
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 bg-white rounded-lg border border-[#E0E0E0] hover:border-[#17B8A0] transition-colors duration-300 card-hover"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#17B8A0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-16 md:mt-20 p-12 bg-gradient-to-r from-[#17B8A0] to-[#0FA38A] rounded-lg text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            약속합니다.
          </h3>
          <p className="text-lg leading-relaxed">
            문제 대응에 유연한 사고로 빠르게 대응하고 숙련된<br/>
            기술로 가장 안정적인 결과물을 만들어 귀사의 비즈니스의<br/>
            곁을 지키는 기술 파트너가 되겠습니다
          </p>
        </div>
      </div>
    </section>
  );
}
