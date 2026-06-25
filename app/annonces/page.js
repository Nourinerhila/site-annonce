import AnnonceList from "../components/AnnonceList";

export default function AnnoncesPage() {
  return (
    <section className="px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Nos Annonces
      </h1>

      <AnnonceList />
    </section>
  );
}