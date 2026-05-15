import { getWhatsAppLink } from '../config/business'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const href = getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="floating-wa-icon">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path d="M22.5 9.5C20.9 7.9 18.7 7 16.4 7C11.6 7 7.7 10.9 7.7 15.7C7.7 17.3 8.1 18.8 8.9 20.1L7.6 25L12.6 23.7C13.9 24.4 15.1 24.8 16.4 24.8C21.2 24.8 25.1 20.9 25.1 16.1C25.1 13.8 24.1 11.1 22.5 9.5ZM16.4 23.2C15.2 23.2 14.1 22.9 13 22.3L12.8 22.2L10 22.9L10.7 20.2L10.5 20C9.8 18.8 9.4 17.3 9.4 15.7C9.4 11.8 12.6 8.7 16.5 8.7C18.3 8.7 20 9.4 21.3 10.7C22.6 12 23.4 13.7 23.4 15.5C23.4 19.4 20.3 23.2 16.4 23.2ZM20.3 17.5C20.1 17.4 19.1 16.9 18.9 16.8C18.7 16.7 18.6 16.7 18.4 16.9C18.3 17.1 17.9 17.6 17.8 17.7C17.7 17.8 17.6 17.9 17.4 17.8C17.2 17.7 16.6 17.5 15.9 16.8C15.3 16.3 14.9 15.6 14.8 15.4C14.7 15.2 14.8 15.1 14.9 15C15 14.9 15.1 14.8 15.2 14.7C15.3 14.6 15.3 14.5 15.4 14.4C15.5 14.3 15.4 14.2 15.4 14.1C15.4 14 14.9 13 14.8 12.6C14.6 12.2 14.5 12.3 14.4 12.3H14.1C13.9 12.3 13.7 12.4 13.6 12.5C13.4 12.7 12.9 13.2 12.9 14.2C12.9 15.2 13.6 16.1 13.7 16.2C13.8 16.3 14.9 18 16.6 18.9C17 19.1 17.3 19.2 17.6 19.3C18 19.5 18.4 19.4 18.7 19.4C19 19.3 19.7 18.9 19.9 18.4C20.1 17.9 20.1 17.5 20 17.4L20.3 17.5Z" fill="white"/>
      </svg>
      <span className="floating-wa-label">WhatsApp</span>
    </a>
  )
}
