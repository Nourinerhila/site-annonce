import InscriptionForm from "../components/InscriptionForm";

export const metadata = {
  title: "Inscription",
  description: "Page d'inscription",
};

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 flex items-center justify-center">
      <InscriptionForm />
    </main>
  );
}