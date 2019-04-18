import { ComponentHooks } from "./types";

export function css({}: ComponentHooks, ...css: Array<undefined | null | false | string>) {
  console.log(this);
  return 
}
