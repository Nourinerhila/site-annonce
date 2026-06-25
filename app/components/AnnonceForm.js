"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),

  image: yup
    .string()
    .required("L'image est obligatoire")
    .url("Veuillez entrer une URL d'image valide"),

  prix: yup
    .string()
    .required("Le prix est obligatoire")
    .matches(/^\d+$/, "Le prix doit contenir uniquement des chiffres"),

  description: yup
    .string()
    .required("La description est obligatoire")
    .min(20, "La description doit contenir au moins 20 caractères")
    .max(500, "La description ne doit pas dépasser 500 caractères"),

  categorie: yup
    .string()
    .required("La catégorie est obligatoire"),
});

export default function AnnonceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Annonce publiée !");
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 sm:p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Informations de l’annonce</h2>
        <p className="mt-2 text-gray-600">
          Renseignez les détails de votre annonce pour la rendre attractive.
        </p>
      </div>

      <div className="grid gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Nom de l’annonce</label>
          <input type="text" {...register("nom")} className={inputStyle} />
          <p className="mt-1 text-sm text-red-500">{errors.nom?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">URL de l'image</label>
          <input
            type="text"
            placeholder="https://..."
            {...register("image")}
            className={inputStyle}
          />
          <p className="mt-1 text-sm text-red-500">{errors.image?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Prix</label>
          <div className="relative">
            <input type="text" {...register("prix")} className={inputStyle + " pr-16"} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              DT
            </span>
          </div>
          <p className="mt-1 text-sm text-red-500">{errors.prix?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description")}
            rows="5"
            className={inputStyle}
          />
          <p className="mt-1 text-sm text-red-500">{errors.description?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Catégorie</label>
          <select {...register("categorie")} className={inputStyle}>
            <option value="">-- Choisir une catégorie --</option>
            <option value="Immobilier">Immobilier</option>
            <option value="Voiture">Voiture</option>
            <option value="Informatique">Informatique</option>
            <option value="Téléphone">Téléphone</option>
          </select>
          <p className="mt-1 text-sm text-red-500">{errors.categorie?.message}</p>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
        >
          Publier l’annonce
        </button>
      </div>
    </form>
  );
}