"use client";

import PricingCard from "@/components/Pricing";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { useState } from "react";
type Interval = "month" | "year";

const pricingDetails = [
  {
    title: "Essentiel",
    main: false,
    monthlyPrice: 179,
    yearlyPrice: 159,
    features: [
      "+2500 vues/mois",
      "+60 clics sur votre site",
      "+15 appels/mois",
      "+15 demandes d'itinéraires",
      "Plus de visibilité sur Google",
      "Réponse aux avis google inclus",
    ],
  },
  {
    title: "Ultime",
    main: true,
    monthlyPrice: 439,
    yearlyPrice: 419,
    features: [
      "+11 000 vues/mois",
      "+500 clics sur votre site",
      "+80 appels/mois",
      "+80 demandes d'itinéraires",
      "Plus de visibilité sur Google",
      "Réponse aux avis google inclus",
      "1 shooting par semestre inclus",
      "QR code personnalisé",
    ],
  },
  {
    title: "Premium",
    main: false,
    monthlyPrice: 319,
    yearlyPrice: 299,
    features: [
      "+6500 vues/mois",
      "+200 clics sur votre site",
      "+40 appels/mois",
      "+40 demandes d'itinéraires",
      "Plus de visibilité sur Google",
      "Réponse aux avis google inclus",
      "1 shooting",
    ],
  },
];

export default function Home() {
  const [interval, setInterval] = useState<Interval>("month");

  return (
    <section className="relative w-full mx-auto">
      <div className="mx-auto flex items-center max-w-screen-xl flex-col gap-8 px-4 text-white py-14 md:px-8">
        <div className="relative z-50 flex flex-col items-center max-w-5xl text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-full w-fit mx-auto border-[0.5px] border-[#97BAFF]/40 bg-dark-radial origin-center"
          >
            <p className="flex items-center gap-2 px-5 py-1 text-sm font-light gradient-on-text-badge">
              Nos offres
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl max-w-2xl mx-auto mt-4 font-bold tracking-tight sm:text-6xl"
          >
            Des prix en accord avec{" "}
            <span className="gradient-on-text-heading">notre vision</span>
          </motion.h2>

          <div className="flex max-w-lg w-full items-center justify-center space-x-2 mt-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-1/2 flex-1"
            >
              <Button
                size="lg"
                className="text-md w-full"
                onClick={() => setInterval("month")}
                variant={interval === "month" ? "default" : "off"}
              >
                Paiement Mensuel
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-1/2 flex-1"
            >
              <Button
                size="lg"
                className="text-md w-full"
                variant={interval === "year" ? "default" : "off"}
                onClick={() => setInterval("year")}
              >
                Paiement Annuel (-20%)
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl relative z-50 w-full gap-8 flex mt-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PricingCard interval={interval} details={pricingDetails[0]} />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <PricingCard interval={interval} details={pricingDetails[1]} />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PricingCard interval={interval} details={pricingDetails[2]} />
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-[1800px] h-[200px] bg-[#1241C5]/40 rotate-45 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/2 -left-1/3 z-0 w-[1800px] h-[200px] bg-[#1241C5]/40 rotate-45 blur-[150px] rounded-full"></div>
    </section>
  );
}
