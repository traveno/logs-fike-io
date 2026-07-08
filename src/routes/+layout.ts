import { browser } from '$app/environment';

export const prerender = true;

let motdPromise: Promise<string> | undefined;

export const load = async ({ url, fetch }) => {
  if (!browser) {
    return {
      url: url.pathname,
      motd: await (await fetch('/api/motd')).text(),
    };
  }

  if (!motdPromise) {
    motdPromise = fetch('/api/motd').then(res => res.text());
  }

  return {
    url: url.pathname,
    motd: await motdPromise,
  };
};
