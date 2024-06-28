/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // server side generation of "WORD" here
  return { word: "SVELTE" };
}
