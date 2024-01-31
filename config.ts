import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.mcsmanager.com/#/zh-cn/apis/",
  match: "https://docs.mcsmanager.com/#/zh-cn/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
