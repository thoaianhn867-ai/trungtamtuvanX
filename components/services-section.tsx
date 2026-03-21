"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Home, 
  Briefcase, 
  Users, 
  FileText, 
  Shield, 
  Scale 
} from "lucide-react"

const services = [
  {
    icon: Home,
    question: "Đang có tranh chấp đất đai?",
    description: "Hỗ trợ giải quyết mọi vấn đề về nhà đất, quyền sử dụng đất, thừa kế bất động sản.",
  },
  {
    icon: Briefcase,
    question: "Cần tư vấn hợp đồng kinh doanh?",
    description: "Soạn thảo, rà soát hợp đồng, bảo vệ quyền lợi doanh nghiệp của bạn.",
  },
  {
    icon: Users,
    question: "Đang gặp vấn đề hôn nhân gia đình?",
    description: "Tư vấn ly hôn, quyền nuôi con, phân chia tài sản chung.",
  },
  {
    icon: FileText,
    question: "Cần hỗ trợ thủ tục hành chính?",
    description: "Hướng dẫn làm giấy tờ, đăng ký kinh doanh, các thủ tục pháp lý.",
  },
  {
    icon: Shield,
    question: "Đang bị xâm phạm quyền lợi?",
    description: "Bảo vệ quyền lợi người tiêu dùng, bồi thường thiệt hại.",
  },
  {
    icon: Scale,
    question: "Cần đại diện tại tòa án?",
    description: "Luật sư đại diện, bào chữa, bảo vệ quyền lợi hợp pháp của bạn.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bạn đang gặp vấn đề gì?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chọn lĩnh vực bạn cần hỗ trợ, chúng tôi sẽ kết nối bạn với luật sư phù hợp nhất
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group bg-card hover:bg-secondary/50 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
