'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center z-40"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl z-40 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chatbot Hỗ Trợ</h3>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center text-gray-500">
            <p>Chatbot sẵn sàng hỗ trợ bạn</p>
          </div>
        </div>
      )}
    </>
  )
}
