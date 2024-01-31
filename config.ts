import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://zh.minecraft.wiki/minecraft",
  match: "https://zh.minecraft.wiki/w/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
