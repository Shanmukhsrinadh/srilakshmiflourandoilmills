export const BUSINESS = {
  name: "Sri Lakshmi Oil Mills",
  phone: "REPLACE_PHONE_NUMBER",
  whatsapp: "REPLACE_WHATSAPP_NUMBER",
  address: "REPLACE_BUSINESS_ADDRESS",
  timings: "Mon - Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 1:00 PM",
  email: "REPLACE_EMAIL",
  tagline: "Pure Traditional Oils, Trusted for Generations",
  experience: "40+",
};

export function getWhatsAppLink(message = "") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encoded}`;
}

export function getProductWhatsAppLink(productName, size = "") {
  const sizeText = size ? ` - ${size}` : "";
  const message = `Hi Sri Lakshmi Oil Mills, I'm interested in ${productName}${sizeText}. Please share price and availability.`;
  return getWhatsAppLink(message);
}

export function getCallLink() {
  return `tel:${BUSINESS.phone}`;
}
