"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Minus, MessageCircle } from "lucide-react"

const suggestedQuestions = [
  "Tôi muốn kiểm tra hợp đồng mua nhà",
  "Thủ tục ly hôn cần những gì?",
  "Làm sao để đăng ký kinh doanh?",
]

const curiosityTexts = [
  "99% người mua nhà không biết điều này...",
  "Bạn có quyền lợi này mà không hề hay biết!",
  "Luật mới 2026: Thay đổi quan trọng!",
  "Đừng ký hợp đồng trước khi đọc điều này",
  "Vấn đề pháp lý? Hỏi miễn phí ngay!",
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentCuriosityIndex, setCurrentCuriosityIndex] = useState(0)

  // Rotate curiosity text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCuriosityIndex((prev) => (prev + 1) % curiosityTexts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleOpen = () => {
    setIsOpen(true)
    setIsMinimized(false)
  }

  // Closed state - show floating button with curiosity text
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Curiosity bubble */}
        <div 
          className="bg-card rounded-2xl shadow-xl border border-border/50 p-4 max-w-[280px] cursor-pointer animate-bounce-subtle"
          onClick={handleOpen}
        >
          <p className="text-sm font-medium text-foreground leading-relaxed">
            {curiosityTexts[currentCuriosityIndex]}
          </p>
          <div className="mt-2 flex gap-2">
            <span className="text-xs text-primary font-medium">Hỏi ngay</span>
            <span className="text-xs text-muted-foreground">→</span>
          </div>
        </div>
        
        {/* Mascot button */}
        <button
          onClick={handleOpen}
          className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 overflow-hidden"
          aria-label="Mở chatbot tư vấn"
        >
          <Image
            src="/images/chatbot-mascot.jpg"
            alt="Trợ lý pháp lý"
            fill
            className="object-cover"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse" />
        </button>
      </div>
    )
  }

  // Minimized state
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Suggested questions when minimized */}
        <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-4 max-w-[300px]">
          <p className="text-sm font-semibold text-foreground mb-3">
            Bạn có thể hỏi:
          </p>
          <div className="flex flex-col gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={handleOpen}
                className="text-left text-sm text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/10 rounded-lg px-3 py-2 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mascot button with controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-card shadow-lg border border-border/50 flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
            aria-label="Đóng chatbot"
          >
            <X size={16} />
          </button>
          <button
            onClick={handleOpen}
            className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            aria-label="Mở rộng chatbot"
          >
            <Image
              src="/images/chatbot-mascot.jpg"
              alt="Trợ lý pháp lý"
              fill
              className="object-cover"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse" />
          </button>
        </div>
      </div>
    )
  }

  // Fully open state
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <div className="w-[380px] h-[600px] bg-card rounded-3xl shadow-2xl border border-border/50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-card/30">
              <Image
                src="/images/chatbot-mascot.jpg"
                alt="Trợ lý pháp lý"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-primary-foreground font-semibold text-sm">
                Trợ lý pháp lý
              </p>
              <p className="text-primary-foreground/80 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Đang hoạt động
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleMinimize}
              className="w-8 h-8 rounded-full hover:bg-card/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Thu nhỏ"
            >
              <Minus size={18} />
            </button>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full hover:bg-card/20 flex items-center justify-center text-primary-foreground transition-colors"
              aria-label="Đóng"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        {/* Suggested questions inside chat */}
        <div className="p-4 bg-muted/30 border-b border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Câu hỏi gợi ý:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="text-xs bg-card hover:bg-primary/10 text-foreground hover:text-primary border border-border/50 hover:border-primary/30 rounded-full px-3 py-1.5 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        
        {/* Iframe chatbot */}
        <div className="flex-1 relative">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/24/14/20260124142242-0E3ZCWBR.json"
            className="absolute inset-0 w-full h-full border-0"
            title="Chatbot tư vấn pháp lý"
          />
        </div>
      </div>
    </div>
  )
}
