import { getProductWhatsAppLink, getWhatsAppLink } from '../config/business'

export default function WhatsAppButton({ productName, size, message, children, className = '', ...props }) {
  const href = message
    ? getWhatsAppLink(message)
    : productName
    ? getProductWhatsAppLink(productName, size)
    : getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`btn btn-whatsapp ${className}`}
      {...props}
    >
      💬 {children || 'WhatsApp Enquiry'}
    </a>
  )
}
