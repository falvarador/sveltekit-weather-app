import { browser } from "$app/env";
import { writable } from "svelte/store";

export const theme = writable(
    browser && (localStorage.getItem("theme") || "auto"));

theme.subscribe(value => {
    browser && localStorage.setItem("theme", value);
})

// document.documentElement.setAttribute("data-theme", "dark");