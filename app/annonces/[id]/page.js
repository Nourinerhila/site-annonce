import annonces from "../../data/annonces";
import DetailsAnnonceCard from "../../components/DetailsAnnonceCard";

export default async function Page({ params }) {
  const { id } = await params;

  const annonce = annonces.find(
    (a) => a.id === Number(id)
  );

  if (!annonce) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Annonce introuvable
      </h1>
    );
  }

  return (
    <div className="p-8">
      <DetailsAnnonceCard annonce={annonce} />
    </div>
  );
}