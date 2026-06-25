import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">ANNONCES TUNISIE © 2026</p>

          <div className="flex gap-6 text-sm">
            <Link href="/contact" className="transition hover:text-primary">Contact</Link>
            <a href="https://facebook.com" target="_blank" className="transition hover:text-primary">Facebook</a>
            <a href="https://instagram.com" target="_blank" className="transition hover:text-primary">Instagram</a>
            <a href="https://linkedin.com" target="_blank" className="transition hover:text-primary">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}