import { text } from '@sveltejs/kit';

const motds: string[] = ['100% bespoke human commentary'];

export const GET = async () => {
  const rand = Math.floor(Math.random() * motds.length);
  return text(motds[rand]);
};
