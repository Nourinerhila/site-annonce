"use client";

import Image from "next/image";

export default function DetailsAnnonceCard({ annonce }) {
  const commander = () => {
    alert("Commande confirmée");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-2">
        <div className="relative min-h-[320px] bg-gray-100 lg:min-h-full">
          <Image
            src={annonce.image}
            alt={annonce.nom}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {annonce.categorie}
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            {annonce.nom}
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            {annonce.description}
          </p>

          <div className="mt-6 rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Prix</p>
            <p className="text-3xl font-bold text-green-600">
              {annonce.prix} DT
            </p>
          </div>

          <button
            onClick={commander}
            className="mt-6 inline-flex items-center rounded-xl bg-secondary px-6 py-3 font-semibold text-white transition hover:bg-secondary/90"
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}