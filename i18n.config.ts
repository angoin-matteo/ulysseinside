type Config = {
  defaultLocale: string,
  locales: string[],
  localeDetection?: boolean,
};

const config: Config = {
  defaultLocale: "fr",
  locales: ["en", "fr"],
};

export default config;
