import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - FairSysTech Landing
 * Design: Modern Minimalism with Tech Sophistication
 * - Large background image with geometric elements
 * - Bold headline with turquoise accent
 * - Clear value proposition
 * - CTA button with hover effects
 */

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663652149162/GRC4GZYyRNRk6HVHpMvTJ8/hero-bg-Ly4GZK3pLi4rMBPvVqvEgU.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-0">
        <div className="max-w-2xl">
          {/* Accent line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-[#17B8A0]" />
            <span className="text-[#17B8A0] font-semibold text-sm md:text-base">
              Fair And Square
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Network Security &
            <span className="text-[#17B8A0]"> IT Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#666666] mb-8 leading-relaxed">
            FairSysTech는 기업의 네트워크 구축, 보안, IT 솔루션을 통해 디지털 신뢰성을 구현합니다.
            최고의 기술력과 전문성으로 귀사의 성공을 지원합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onCtaClick}
              className="btn-primary px-8 py-3 rounded-lg flex items-center justify-center gap-2 group"
            >
              시작하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
  href="#project"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="px-8 py-3 rounded-lg border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors font-semibold inline-block cursor-pointer"
>
  더 알아보기
</a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-[#E0E0E0]">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#17B8A0] mb-2">
                
              </div>
              <p className="text-[#666666] text-sm"></p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#17B8A0] mb-2">
                
              </div>
              <p className="text-[#666666] text-sm"></p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#17B8A0] mb-2">
                
              </div>
              <p className="text-[#666666] text-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
