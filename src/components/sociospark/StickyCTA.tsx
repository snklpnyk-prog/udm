import { Link } from "react-router-dom";

export default function StickyCTA() {
  return (
    <Link
      to="/get-proposal"
      className="fixed left-1/2 -translate-x-1/2 bottom-4 z-40 bg-black text-brand px-6 py-3 rounded-full border-2 border-brand brutalist-shadow font-black text-sm md:text-base hover:bg-brand hover:text-black transition-colors whitespace-nowrap"
    >
      Get Free Proposal
    </Link>
  );
}
