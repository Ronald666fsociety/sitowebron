// Builds a WhatsApp click-to-chat link with a pre-filled message.
export function buildWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
