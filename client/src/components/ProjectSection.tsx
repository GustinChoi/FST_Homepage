export default function ProjectSection() {
  const projects = [
    {
      title: 'SchoolNet 4단계 대응 교육청 및 직속기관 네트워크 구축',
      category: '네트워크 보안',
      description: '본청 및 직속기관 네트워크구축 및 중앙관리체계 수립',
      results: ['각급 기관별 UTM 설치', '직속 공공도서관 통합홈페이지 서버 구축 및 솔루션 유지보수', '무선네트워크 증속 및 품질개선 사업'],
      url: 'https://www.ahnlab.com/ko/product/next-generation-firewall',
    },
    {
      title: 'DB암호화 및 DB접근제어 솔루션',
      category: '보안 솔루션',
      description: 'DB탈취 및 해킹방지, 비인가 DB접근권한 제한솔루션',
      results: ['Application 서버에 암복호화 API를 삽입하여 데이터 암복호화 수행', 'DB서버에 패키지, 엔진 등을 설치하여 데이터 암복호화 수행', 'OS 커널 레벨에서 정형/비정형 데이터 암복호화 수행'],
      url: 'https://www.pentasecurity.co.kr/damo/',
    },
    {
      title: '네트워크 현황 분석 및 장애포인트 체크',
      category: 'IT 솔루션',
      description: '네트워크와 서비스의 현황을 파악하고 문제점을 진단하며 해결방안 제시',
      results: ['Network 서비스 진단', 'Network 장애 원인 추적', '장애 이슈해결을 위한 최적 방안 제시'],
      url: 'http://www.lampad.co.kr/',
    },
    {
      title: '중소규모 생산시설 Network보안 구축',
      category: '네트워크 보안',
      description: '생산자동화 시설의 네트워크 공격 및 장애로 인한 생산량 저하 방지',
      results: ['L2 보안스위치 설치 및 UTM 설치', '사무동, 생산동 스위치 및 패치 회선 점검 및 정리', '본, 지사간 VPN 구축으로 전용선 회선비용절감'],
      url: 'https://www.piolink.com/kr/',
    },
    {
      title: '백업솔루션 도입 및 LTO 설치',
      category: '백업 솔루션',
      description: '재난상황 데이터 소실 대비 주기적 백업 스케줄 및 Tape 매체 소산',
      results: ['주기적 DB데이터 백업으로 재난 상황대비', 'Tape 매체 최대압축 용량 48TB', '장애,재난에 의한 데이터 소실시 소산 데이터로 시스템 복구'],
      url: 'https://www.quantum.com/ko/products/tape-storage/lto-media/',
    },
    {
      title: '논리적 망분리 솔루션',
      category: 'IT 솔루션',
      description: 'CBC 방식으로 네트워크 케이블 공사나 서버증설 없이 사용자 영역의 컴퓨팅 환경을 실제영역과 가상영역으로 분리',
      results: ['물리적망분리 수준의 보안성 보장', '물리적 망분리 대비 50%이상 비용 감소', '소프트웨어 충돌없는 호환성과 안정성 보장'],
      url: 'https://www.vmsolution.co.kr/home/index.php',
    },
  ];

  return (
    <section
      id="project"
      className="relative py-20 md:py-32 bg-white"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663652149162/GRC4GZYyRNRk6HVHpMvTJ8/projects-bg-dYXusn8RRDZRo4HJZJHVK8.webp )',
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
            <span className="px-4 py-2 bg-[#17B8A0]/10 text-[#17B8A0] rounded-full text-sm font-semibold" style={{fontSize: '20px', fontWeight: '800'}}>
              Project
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            FairSysTech Project
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            다양한 산업과 규모의 기업들과 함께 성공적인 프로젝트를 진행해왔습니다. 실제 사례를 통해 우리의 역량을 확인하세요.
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

              {/* CTA - 링크로 변경 */}
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#17B8A0] font-semibold hover:gap-3 transition-all group/btn"
              >
                자세히 보기
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
