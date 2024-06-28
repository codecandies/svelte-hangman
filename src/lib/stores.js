import { writable } from "svelte/store";

export const question = writable([]);
export const answer = writable([]);
export const tries = writable(10);
