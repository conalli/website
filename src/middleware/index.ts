import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname !== "/under-construction") {
    return context.redirect("/under-construction");
  }
  return next();
});
