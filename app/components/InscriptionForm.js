"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Le nom est obligatoire")
    .min(5, "Le nom doit contenir au moins 5 caractères"),

  cin: yup
    .string()
    .required("Le CIN est obligatoire")
    .matches(/^\d{8}$/, "Le CIN doit contenir exactement 8 chiffres"),

  email: yup
    .string()
    .required("L'email est obligatoire")
    .email("Email invalide"),

  password: yup
    .string()
    .required("Le mot de passe est obligatoire")
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),

  confirmPassword: yup
    .string()
    .required("Veuillez confirmer le mot de passe")
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),

  conditions: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions"),
});

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Inscription validée !");
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
      <div className="bg-gradient-to-r from-primary to-secondary px-8 py-10 text-white">
        <h1 className="text-3xl font-bold tracking-tight">
          Créer un compte
        </h1>
        <p className="mt-2 text-sm text-white/90">
          Inscrivez-vous pour publier et gérer vos annonces en Tunisie.
        </p>
      </div>

      <div className="p-8 sm:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Nom complet</label>
            <input type="text" {...register("nom")} className={inputStyle} />
            <p className="mt-1 text-sm text-red-500">{errors.nom?.message}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">CIN</label>
            <input type="text" {...register("cin")} className={inputStyle} />
            <p className="mt-1 text-sm text-red-500">{errors.cin?.message}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" {...register("email")} className={inputStyle} />
            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                {...register("password")}
                className={inputStyle}
              />
              <p className="mt-1 text-sm text-red-500">{errors.password?.message}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirmation
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                className={inputStyle}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                {...register("conditions")}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <div>
                <label className="text-sm text-gray-700">
                  J'accepte les conditions d'utilisation
                </label>
                <p className="mt-1 text-sm text-red-500">
                  {errors.conditions?.message}
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}