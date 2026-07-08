import { text } from '@sveltejs/kit';

export const prerender = true;

const motds: string[] = ['100% bespoke human commentary'];

export const GET = async () => {
  const rand = Math.floor(Math.random() * motds.length);
  return text(motds[rand]);
};
