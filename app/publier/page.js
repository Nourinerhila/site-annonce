import AnnonceForm from "../components/AnnonceForm";

export const metadata = {
  title: "Publier une annonce",
  description: "Publier une nouvelle annonce",
};

export default function PublierPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Publier rapidement
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Publier une annonce
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ajoutez votre annonce en quelques étapes simples avec un design
            clair, professionnel et facile à remplir.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white shadow-2xl">
          <AnnonceForm />
        </div>
      </section>
    </main>
  );
}