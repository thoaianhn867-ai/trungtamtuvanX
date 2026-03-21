"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Tôi có thể tư vấn miễn phí lần đầu không?",
    answer: "Có, chúng tôi cung cấp tư vấn miễn phí lần đầu trong 30 phút để hiểu rõ vấn đề của bạn và đề xuất giải pháp phù hợp. Bạn có thể đặt lịch qua chatbot hoặc hotline của chúng tôi.",
  },
  {
    question: "Chi phí thuê luật sư được tính như thế nào?",
    answer: "Chi phí phụ thuộc vào độ phức tạp của vụ việc. Chúng tôi có nhiều gói dịch vụ linh hoạt: tư vấn theo giờ, theo vụ việc, hoặc gói retainer hàng tháng cho doanh nghiệp. Báo giá chi tiết sẽ được gửi sau buổi tư vấn đầu tiên.",
  },
  {
    question: "Thời gian giải quyết một vụ việc thường mất bao lâu?",
    answer: "Thời gian phụ thuộc vào loại vụ việc và mức độ phức tạp. Tư vấn đơn giản có thể hoàn thành trong 1-3 ngày. Các vụ tranh chấp cần đưa ra tòa có thể mất từ 3-12 tháng. Chúng tôi sẽ thông báo rõ ràng timeline ngay từ đầu.",
  },
  {
    question: "Thông tin của tôi có được bảo mật không?",
    answer: "Tuyệt đối bảo mật. Tất cả thông tin khách hàng được bảo vệ theo quy định về bảo mật nghề luật sư và Luật Bảo vệ dữ liệu cá nhân. Chúng tôi cam kết không tiết lộ thông tin cho bất kỳ bên thứ ba nào.",
  },
  {
    question: "Tôi có thể tư vấn trực tuyến không?",
    answer: "Có, chúng tôi hỗ trợ tư vấn trực tuyến qua video call, điện thoại, hoặc chat. Bạn có thể sử dụng chatbot trên website để đặt câu hỏi nhanh hoặc đặt lịch tư vấn video với luật sư.",
  },
  {
    question: "Làm sao để biết luật sư nào phù hợp với vấn đề của tôi?",
    answer: "Sau khi bạn mô tả vấn đề, hệ thống sẽ tự động đề xuất luật sư chuyên môn phù hợp. Mỗi luật sư của chúng tôi đều có chuyên môn sâu trong từng lĩnh vực cụ thể như bất động sản, doanh nghiệp, hôn nhân gia đình...",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bạn đang thắc mắc điều gì?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Những câu hỏi thường gặp khi sử dụng dịch vụ tư vấn pháp lý
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
