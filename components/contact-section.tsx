"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Hotline",
    value: "1900 1234 56",
    description: "Miễn phí, 24/7",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hotro@trungtamluatsux.vn",
    description: "Phản hồi trong 24h",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "123 Nguyễn Huệ, Quận 1",
    description: "TP. Hồ Chí Minh",
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "8:00 - 18:00",
    description: "Thứ 2 - Thứ 7",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Để lại thông tin, chúng tôi sẽ liên hệ bạn
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hoặc liên hệ trực tiếp qua các kênh bên dưới
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border/50 rounded-3xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Họ và tên
                    </label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      className="rounded-xl bg-muted/50 border-border/50 focus:border-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Số điện thoại
                    </label>
                    <Input
                      id="phone"
                      placeholder="0912 345 678"
                      className="rounded-xl bg-muted/50 border-border/50 focus:border-primary"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="rounded-xl bg-muted/50 border-border/50 focus:border-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mô tả vấn đề của bạn
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Vui lòng mô tả ngắn gọn vấn đề pháp lý bạn đang gặp phải..."
                    className="rounded-xl bg-muted/50 border-border/50 focus:border-primary min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg gap-2"
                >
                  <Send size={20} />
                  Gửi yêu cầu tư vấn
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-muted/30 rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-lg font-semibold text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
