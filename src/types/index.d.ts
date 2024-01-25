import type { Article, Category, Profile } from "@prisma/client";

import i18n from "../../i18n.config";

export type Dictionary = {
  app: {
    aboutPage: {
      upperTitle: string,
      title: string,
      description: string,
      introduction: string,
      arguments: {
        one: {
          title: string,
          description: string,
        },
        two: {
          title: string,
          description: string,
        },
        three: {
          title: string,
          description: string,
        },
      },
      conclusion: string,
      extra: {
        title: string,
        description: string,
      },
      alt: string,
    },
    adminPage: {
      title: string,
    },
    blogPage: {
      title: string,
      subTitle: string,
    },
    notFoundPage: {
      title: string,
      subTitle: string,
    },
    pricingPage: {
      upperTitle: string,
      title: string,
      subTitle: string,
      offers: {
        callToAction: string,
        perHour: string,
        one: {
          title: string,
          description: string,
        },
        two: {
          title: string,
          description: string,
        },
      },
    },
    products: {
      analysisPage: {
        upperTitle: string,
        title: string,
        description: string,
        arguments: {
          one: {
            title: string,
            description: string,
          },
          two: {
            title: string,
            description: string,
          },
          three: {
            title: string,
            description: string,
          },
        },
        alt: string,
      },
      trainingPage: {
        upperTitle: string,
        title: string,
        description: string,
        arguments: {
          one: {
            title: string,
            description: string,
          },
          two: {
            title: string,
            description: string,
          },
          three: {
            title: string,
            description: string,
          },
        },
        alt: string,
      },
      securityPage: {
        upperTitle: string,
        title: string,
        description: string,
        arguments: {
          one: {
            title: string,
            description: string,
          },
          two: {
            title: string,
            description: string,
          },
          three: {
            title: string,
            description: string,
          },
        },
        alt: string,
      },
    },
    rootPage: {
      title: string,
      subTitle: string,
      contactUs: string,
      callToAction: string,
      announcement: {
        title: string,
        callToAction: string,
      },
      stats: {
        one: {
          title: string,
          description: string,
        },
        two: {
          title: string,
          description: string,
        },
      },
      chart: {
        legend: string,
        tooltipFormattedName: string,
      },  
    },
  },
  components: {
    badges: {
      new: string,
    },
    handlers: {
      locales: {
        enAlt: string,
        frAlt: string,
      },
    },
    layout: {
      banner: {
        title: string,
        subTitle: string,
        callToAction: string,
      },
      footer: {
        copyright: string,
      },
      header: {
        products: string,
        pricing: string,
        about: string,
        blog: string,
        analysis: {
          title: string,
          subTitle: string,
        },
        training: {
          title: string,
          subTitle: string,
        },
        security: {
          title: string,
          subTitle: string,
        },
        discoverUs: string,
        contactUs: string,
      },
    },
  },
};

export type ExtendedArticle = Article & { category: Category } & { profile: Profile };
export type ExtendedProfile = Profile & { articles: Article[] } & { category: Category };

export type Locale = (typeof i18n)["locales"][number];

/*
export type Dictionary = 
  | null
  | string
  | number
  | boolean
  | Dictionary[]
  | { [key: string]: Dictionary };
*/
