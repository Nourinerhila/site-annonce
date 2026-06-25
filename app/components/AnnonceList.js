import annonces from "../data/annonces";
import AnnonceCard from "./AnnonceCard";

export default function AnnonceList() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Annonces récentes
        </h2>
        <p className="mt-2 text-gray-600">
          Découvrez les meilleures offres publiées en Tunisie.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {annonces.map((annonce) => (
          <AnnonceCard key={annonce.id} annonce={annonce} />
        ))}
      </div>
    </section>
  );
}