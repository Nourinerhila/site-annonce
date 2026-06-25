export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              منصة annonces en Tunisie
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Trouvez, publiez et vendez en toute simplicité.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              ANNONCES TUNISIE vous permet de découvrir des offres fiables partout en Tunisie,
              avec une expérience claire, rapide et professionnelle.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/annonces"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white shadow-lg shadow-primary/20 transition hover:scale-105 hover:bg-primary/90"
              >
                Voir les annonces
              </a>

              <a
                href="/publier"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:border-primary hover:text-primary"
              >
                Publier une annonce
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <div>✔ Annonces locales</div>
              <div>✔ Interface moderne</div>
              <div>✔ Navigation rapide</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-white to-secondary/20 blur-2xl" />
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Annonces actives</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">1200+</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Catégories</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">15+</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Vendeurs</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">800+</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Villes couvertes</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}