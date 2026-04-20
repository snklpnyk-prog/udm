export default function WhatsAppButton() {
  const phone = "919993663668";
  const message = encodeURIComponent(
    "Hi UDM Techno Solutions, I'd like to know more about your digital marketing services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UDM Techno Solutions on WhatsApp"
      className="fixed bottom-16 right-6 z-50 w-16 h-16 bg-[#25D366] border-4 border-black rounded-full brutalist-shadow flex items-center justify-center hover:scale-110 transition-transform animate-pulse hover:animate-none"
    >
      <iconify-icon icon="logos:whatsapp-icon" className="text-3xl" />
      <span className="absolute -top-1 -right-2 w-5 h-5 bg-brand border-2 border-black rounded-full" />
    </a>
  );
}
