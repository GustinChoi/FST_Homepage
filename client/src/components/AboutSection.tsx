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
            <span className="px-4 py-2 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-sm font-semibold">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            FairSysTech에 대해
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            우리는 기업의 디지털 신뢰성을 구현하기 위해 네트워크 구축, 보안, IT 솔루션을 제공하는 전문 기업입니다.
            15년 이상의 경험으로 500개 이상의 고객사를 성공적으로 지원해왔습니다.
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
            우리의 미션
          </h3>
          <p className="text-lg leading-relaxed">
            기술의 힘으로 기업의 성장을 가속화하고, 안전한 디지털 환경을 구축하여
            고객의 비즈니스 목표 달성을 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
