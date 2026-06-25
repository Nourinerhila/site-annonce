"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),

  email: yup.string().email("Email invalide").required("Email obligatoire"),

  telephone: yup
    .string()
    .required("Numéro de téléphone obligatoire")
    .matches(/^\d{8}$/, "Le numéro doit contenir exactement 8 chiffres"),

  message: yup
    .string()
    .required("Message obligatoire")
    .max(300, "Le message ne doit pas dépasser 300 caractères"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Votre message a bien été envoyé. Notre équipe vous contactera bientôt.");
    reset();
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-2">
        <h2 className="text-3xl font-bold text-gray-900">Envoyer un message</h2>
        <p className="mt-2 text-gray-600">
          Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Nom complet</label>
        <input type="text" {...register("name")} className={inputStyle} />
        <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input type="email" {...register("email")} className={inputStyle} />
          <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Téléphone</label>
          <input type="text" {...register("telephone")} className={inputStyle} />
          <p className="mt-1 text-sm text-red-500">{errors.telephone?.message}</p>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Message</label>
        <textarea
          {...register("message")}
          rows="5"
          className={inputStyle}
        />
        <p className="mt-1 text-sm text-red-500">{errors.message?.message}</p>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
      >
        Envoyer le message
      </button>
    </form>
  );
}