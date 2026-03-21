import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Mail } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Tư vấn bất động sản", href: "#" },
    { label: "Tư vấn doanh nghiệp", href: "#" },
    { label: "Tư vấn hôn nhân gia đình", href: "#" },
    { label: "Tư vấn lao động", href: "#" },
  ],
  resources: [
    { label: "Tin tức pháp luật", href: "#news" },
    { label: "Câu hỏi thường gặp", href: "#faq" },
    { label: "Văn bản pháp luật", href: "#" },
    { label: "Biểu mẫu pháp lý", href: "#" },
  ],
  company: [
    { label: "Về chúng tôi", href: "#" },
    { label: "Đội ngũ luật sư", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Điều khoản sử dụng", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/mascot.jpg"
                  alt="TrungTamLuatSuX Mascot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-card">
                  TrungTamLuatSuX
                </span>
                <span className="text-xs text-card/60">
                  Tư vấn pháp lý thân thiện
                </span>
              </div>
            </Link>
            <p className="text-card/70 mb-6 max-w-sm leading-relaxed">
              Chúng tôi cam kết mang đến dịch vụ tư vấn pháp lý chuyên nghiệp, 
              thân thiện và dễ tiếp cận cho mọi người.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-card mb-4">Dịch vụ</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-card mb-4">Tài nguyên</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-card mb-4">Công ty</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/60 text-sm">
            © 2026 TrungTamLuatSuX. Bảo lưu mọi quyền.
          </p>
          <p className="text-card/60 text-sm">
            Giấy phép hoạt động số: 123/GP-ĐKKD
          </p>
        </div>
      </div>
    </footer>
  )
}
