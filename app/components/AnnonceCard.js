import Link from "next/link";
import Image from "next/image";

export default function AnnonceCard({ annonce }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={annonce.image}
          alt={annonce.nom}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {annonce.categorie}
          </span>

          <span className="text-sm font-medium text-gray-500">
            Disponible
          </span>
        </div>

        <h2 className="mt-4 line-clamp-1 text-xl font-bold text-gray-900">
          {annonce.nom}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {annonce.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            {annonce.prix} DT
          </span>

          <Link
            href={`/annonces/${annonce.id}`}
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
          >
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
}