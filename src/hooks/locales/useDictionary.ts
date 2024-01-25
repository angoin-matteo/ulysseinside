"use client";

import type { Dictionary, Locale } from "@/types";

import { useEffect, useState } from "react";
import { getDictionary } from "@/dictionaries";

const defaultDictionary: Dictionary = {
  app: {
    aboutPage: {
      upperTitle: "Découvrez-nous",
      title: "À propos",
      description: "",
      introduction: "",
      arguments: {
        one: {
          title: "Analyse",
          description: "",
        },
        two: {
          title: "Formations",
          description: "",
        },
        three: {
          title: "Sécurité",
          description: "",
        },
      },
      conclusion: "",
      extra: {
        title: "",
        description: "",
      },
      alt: "À propos",
    },
    adminPage: {
      title: "Administration",
    },
    blogPage: {
      title: "Du blog",
      subTitle: "Apprenez à développer votre entreprise grâce à nos conseils d'experts.",
    },
    notFoundPage: {
      title: "Page non trouvée",
      subTitle: "Désolé, nous n'avons pas trouvé la page que vous recherchez.",
    },
    pricingPage: {
      upperTitle: "Tarifs",
      title: "",
      subTitle: "",
      offers: {
        callToAction: "Je suis prêt",
        perHour: "/heure",
        one: {
          title: "Basique",
          description: "",
        },
        two: {
          title: "Premium",
          description: "",
        },
      },
    },
    products: {
      analysisPage: {
        upperTitle: "Analysez les graphiques",
        title: "Analyse",
        description: "",
        arguments: {
          one: {
            title: "",
            description: "",
          },
          two: {
            title: "",
            description: "",
          },
          three: {
            title: "",
            description: "",
          },
        },
        alt: "Analyse",
      },
      trainingPage: {
        upperTitle: "Formez-vous aux cryptos",
        title: "Formations",
        description: "",
        arguments: {
          one: {
            title: "",
            description: "",
          },
          two: {
            title: "",
            description: "",
          },
          three: {
            title: "",
            description: "",
          },
        },
        alt: "Formations",
      },
      securityPage: {
        upperTitle: "Sécurisez vos cryptos",
        title: "Sécurité",
        description: "",
        arguments: {
          one: {
            title: "",
            description: "",
          },
          two: {
            title: "",
            description: "",
          },
          three: {
            title: "",
            description: "",
          },
        },
        alt: "Sécurité",
      },
    },
    rootPage: {
      title: "ulysseinside",
      subTitle: "Crypto & Web3",
      contactUs: "Contactez-nous",
      callToAction: "Formations",
      announcement: {
        title: "Nouvelle formation disponible",
        callToAction: "Voir maintenant",
      },
      stats: {
        one: {
          title: "10",
          description: "clients satisfaits",
        },
        two: {
          title: "40 000€",
          description: "générés en 6 mois",
        },
      },
      chart: {
        legend: "Évolution du prix du BTCUSD de 2013 à 2021",
        tooltipFormattedName: "Prix",
      },
    },
  },
  components: {
    badges: {
      new: "Nouveau",
    },
    handlers: {
      locales: {
        enAlt: "Français",
        frAlt: "Anglais",
      },
    },
    layout: {
      banner: {
        title: "Formations",
        subTitle: "Nouvelle formation disponible",
        callToAction: "Voir maintenant",
      },
      footer: {
        copyright: "Tous droits réservés",
      },
      header: {
        products: "Produits",
        pricing: "Tarifs",
        about: "À propos",
        blog: "Blog",
        analysis: {
          title: "Analyse",
          subTitle: "Analysez les graphiques",
        },
        training: {
          title: "Formations",
          subTitle: "Formez-vous aux cryptos",
        },
        security: {
          title: "Sécurité",
          subTitle: "Sécurisez vos cryptos",
        },
        discoverUs: "Découvrez-nous",
        contactUs: "Contactez-nous",
      },
    },
  },
};

export default function useDictionary(locale: Locale): Dictionary {
  const [dictionary, setDictionary] = useState<Dictionary>(defaultDictionary);

  useEffect(() => {
    getDictionary(locale)
      .then((_dictionary: Dictionary) => setDictionary(_dictionary));
  });

  return dictionary;
}
