/**
 * Footer Component - FairSysTech Footer
 * Design: Modern Minimalism with Tech Sophistication
 * - Company info
 * - Quick links
 * - Copyright
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container py-16 md:py-20">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">FairSysTech</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              기업의 디지털 신뢰성을 구현하는 기술 전문 기업입니다.
              네트워크 구축, 보안, IT 솔루션을 통해 비즈니스 성공을 지원합니다.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#work" className="hover:text-[#17B8A0] transition-colors">
                  네트워크 구축
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#17B8A0] transition-colors">
                  보안 솔루션
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#17B8A0] transition-colors">
                  IT 솔루션
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-[#17B8A0] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-[#17B8A0] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#17B8A0] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:0220388366" className="hover:text-[#17B8A0] transition-colors">
                  02-2038-8366
                </a>
              </li>
              <li>
                <a href="mailto:csa@fairsystech.com" className="hover:text-[#17B8A0] transition-colors">
                  csa@fairsystech.com
                </a>
              </li>
              <li className="text-gray-500">
                Seoul, South Korea
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} FairSysTech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#17B8A0] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#17B8A0] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
