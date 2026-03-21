"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
              <Image
                src="/images/mascot.jpg"
                alt="TrungTamLuatSuX Mascot"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">
                TrungTamLuatSuX
              </span>
              <span className="text-xs text-muted-foreground">
                Tư vấn pháp lý thân thiện
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Bạn đang gặp vấn đề gì?
            </Link>
            <Link
              href="#news"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Tin tức pháp luật
            </Link>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Câu hỏi thường gặp
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Liên hệ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="#services"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Bạn đang gặp vấn đề gì?
            </Link>
            <Link
              href="#news"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tin tức pháp luật
            </Link>
            <Link
              href="#faq"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Câu hỏi thường gặp
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full mt-2">
              Tư vấn miễn phí
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
