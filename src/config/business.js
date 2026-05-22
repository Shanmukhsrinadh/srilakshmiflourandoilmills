export const BUSINESS = {
  name: "Sri Lakshmi Flour & Oil Mill",
  shortName: "Sri Lakshmi Oil Mills",
  phone: "9848183737",
  whatsapp: "919848183737",
  address: "Sri Lakshmi Flour & Oil Mill, Andhra Pradesh",
  mapsUrl: "https://maps.app.goo.gl/4tbsRDvH8MSnmbZ47",
  mapsEmbed: "https://www.google.com/maps?q=17.7357809,83.3127459&z=17&output=embed",
  timings: "Mon - Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 1:00 PM",
  email: "",
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
