import { ExternalLink } from 'lucide-react';

/**
 * Project Section - Case Studies & Portfolio
 * Design: Modern Minimalism with Tech Sophistication
 * - Project cards with descriptions
 * - Turquoise accent elements
 * - Asymmetric layout for visual interest
 */

export default function ProjectSection() {
  const projects = [
    {
      title: '금융 기관 네트워크 현대화',
      category: '네트워크 구축',
      description: '대형 금융 기관의 레거시 네트워크를 클라우드 기반 인프라로 전환하여 성능을 300% 향상시켰습니다.',
      results: ['성능 300% 향상', '비용 40% 절감', '99.99% 가용성'],
    },
    {
      title: '엔터프라이즈 보안 시스템 구축',
      category: '보안 솔루션',
      description: '다층 보안 아키텍처를 설계하여 사이버 위협으로부터 기업을 보호하고 규정 준수를 달성했습니다.',
      results: ['위협 탐지율 99.8%', '규정 준수 달성', '인시던트 0건'],
    },
    {
      title: '디지털 트랜스포메이션 프로젝트',
      category: 'IT 솔루션',
      description: '클라우드 마이그레이션과 애플리케이션 현대화를 통해 기업의 디지털 경쟁력을 강화했습니다.',
      results: ['시간 50% 단축', '생산성 45% 증가', 'ROI 6개월'],
    },
    {
      title: '글로벌 네트워크 통합',
      category: '네트워크 구축',
      description: '다국적 기업의 분산된 네트워크를 통합하여 글로벌 협업을 가능하게 했습니다.',
      results: ['통합 완료', '지연시간 60% 감소', '사용자 만족도 95%'],
    },
    {
      title: '데이터 센터 보안 강화',
      category: '보안 솔루션',
      description: '물리적, 논리적 보안을 강화하여 데이터 센터의 안전성을 최고 수준으로 향상시켰습니다.',
      results: ['보안 등급 A+', '감사 통과율 100%', '다운타임 0'],
    },
    {
      title: 'AI 기반 모니터링 시스템',
      category: 'IT 솔루션',
      description: '인공지능 기반 모니터링 시스템으로 네트워크 이상을 사전에 감지하고 대응합니다.',
      results: ['예측 정확도 98%', '대응 시간 70% 단축', '자동화율 85%'],
    },
  ];

  return (
    <section
      id="project"
      className="relative py-20 md:py-32 bg-white"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663652149162/GRC4GZYyRNRk6HVHpMvTJ8/projects-bg-dYXusn8RRDZRo4HJZJHVK8.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/93" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-sm font-semibold">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            우리의 프로젝트
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            다양한 산업과 규모의 기업들과 함께 성공적인 프로젝트를 진행해왔습니다.\n            실제 사례를 통해 우리의 역량을 확인하세요.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg border border-[#E0E0E0] card-hover group hover:shadow-xl transition-all duration-300"
            >
              {/* Category badge */}
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#17B8A0] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#666666] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Results */}
              <div className="space-y-2 mb-6 pb-6 border-b border-[#E0E0E0]">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#17B8A0]" />
                    <span className="text-[#666666] text-sm">{result}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="flex items-center gap-2 text-[#17B8A0] font-semibold hover:gap-3 transition-all group/btn">
                자세히 보기
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
