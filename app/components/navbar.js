import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://placehold.co/120x120/png?text=AT"
            alt="Logo ANNONCES TUNISIE"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="font-semibold text-lg">ANNONCES TUNISIE</span>
        </div>

        <ul className="flex gap-8 font-[var(--font-montserrat)]">
          <li><Link href="/" className="transition-colors duration-300 hover:text-primary">Accueil</Link></li>
          <li><Link href="/annonces" className="transition-colors duration-300 hover:text-primary">Annonces</Link></li>
          <li><Link href="/publier" className="transition-colors duration-300 hover:text-primary">Publier</Link></li>
          <li><Link href="/inscription" className="transition-colors duration-300 hover:text-primary">Inscription</Link></li>
          <li><Link href="/contact" className="transition-colors duration-300 hover:text-primary">Contact</Link></li>
        </ul>

        <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-300">
          Connexion
        </button>
      </div>
    </nav>
  );
}