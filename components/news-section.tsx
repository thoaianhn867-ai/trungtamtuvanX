import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    category: "Bất động sản",
    title: "Mua nhà lần đầu cần lưu ý những gì về pháp lý?",
    excerpt: "Hướng dẫn chi tiết các bước kiểm tra pháp lý khi mua nhà để tránh rủi ro tranh chấp sau này.",
    date: "20/03/2026",
    readTime: "5 phút đọc",
  },
  {
    id: 2,
    image: "/images/news-2.jpg",
    category: "Doanh nghiệp",
    title: "Thay đổi quan trọng trong Luật Doanh nghiệp 2026",
    excerpt: "Những điểm mới cần biết về quy định thành lập và vận hành doanh nghiệp theo luật mới.",
    date: "18/03/2026",
    readTime: "8 phút đọc",
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    category: "Công nghệ",
    title: "Quyền riêng tư dữ liệu cá nhân được bảo vệ thế nào?",
    excerpt: "Tìm hiểu về quy định bảo vệ dữ liệu cá nhân và cách bạn có thể bảo vệ quyền lợi của mình.",
    date: "15/03/2026",
    readTime: "6 phút đọc",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
              Tin tức pháp luật mới nhất
            </h2>
            <p className="text-muted-foreground text-lg">
              Cập nhật những thay đổi quan trọng trong pháp luật Việt Nam
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Xem tất cả tin tức
            <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground rounded-full px-3 py-1">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
