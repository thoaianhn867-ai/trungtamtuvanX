import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Hỗ trợ trực tuyến 24/7
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Pháp luật
              <span className="text-primary"> không còn </span>
              phức tạp
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Chúng tôi biến những điều luật khô khan thành lời giải đáp dễ hiểu. 
              Hãy để chúng tôi đồng hành cùng bạn trong mọi vấn đề pháp lý.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg gap-2">
                Đặt câu hỏi ngay
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-secondary rounded-full px-8 py-6 text-lg gap-2"
              >
                <MessageCircle size={20} />
                Trò chuyện với luật sư
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10K+</span>
                <span className="text-sm text-muted-foreground">Khách hàng tin tưởng</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">98%</span>
                <span className="text-sm text-muted-foreground">Hài lòng dịch vụ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Năm kinh nghiệm</span>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/images/hero-illustration.jpg"
                  alt="Tư vấn pháp lý thân thiện"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
