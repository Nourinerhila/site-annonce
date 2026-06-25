import ContactForm from "../components/ContactForm";
export const metadata = {
  title: "Contact",
  description: "Page de contact",
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Contactez notre équipe
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contactez-nous
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Une question, une suggestion ou un problème concernant une annonce ?
            Notre équipe vous répond rapidement et vous accompagne avec soin.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
            <ContactForm />
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            <div className="bg-gradient-to-r from-primary to-secondary px-8 py-10 text-white">
              <h2 className="text-3xl font-bold">ANNONCES TUNISIE</h2>
              <p className="mt-2 text-sm text-white/90">
                Plateforme d'annonces en ligne en Tunisie
              </p>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Nos coordonnées
              </h3>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Site</p>
                    <p className="text-gray-600">ANNONCES TUNISIE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">Tunis, Tunisie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <p className="text-gray-600">+216 71 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@annoncestunisie.tn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-gray-50 p-4">
                  <span className="text-2xl">🕒</span>
                  <div>
                    <p className="font-semibold text-gray-900">Assistance</p>
                    <p className="text-gray-600">Disponible 7j/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-primary bg-blue-50 p-5">
                <h4 className="font-bold text-gray-900">Besoin d'aide ?</h4>
                <p className="mt-2 text-gray-600">
                  Nous sommes à votre disposition pour la publication, la
                  modification et la gestion de vos annonces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}