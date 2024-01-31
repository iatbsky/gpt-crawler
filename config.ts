import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.mcsmanager.com/#/zh-cn/apis/readme",
  match: "https://docs.mcsmanager.com/#/zh-cn/apis/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
