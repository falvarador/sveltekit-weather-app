<script>
    import { browser } from "$app/env";
    import { theme } from "../stores/theme-store";

    const setAutoTheme = () => {
        theme.set("auto");
        browser && document.documentElement.removeAttribute("data-theme");
    };

    const setDarkTheme = () => {
        theme.set("dark");
        browser && document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLightTheme = () => {
        theme.set("light");
        browser && document.documentElement.setAttribute("data-theme", "light");
    };

    $: {
        $theme === "auto"
            ? setAutoTheme()
            : $theme === "dark"
            ? setDarkTheme()
            : setLightTheme();
    }
</script>

<details role="list">
    <summary aria-haspopup="listbox">Theme</summary>
    <ul role="listbox">
        <li>
            <label for="auto">
                <input
                    type="radio"
                    id="auto"
                    name="size"
                    value="auto"
                    checked={$theme === "auto"}
                    on:click={setAutoTheme}
                />
                Auto
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle-half"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                    />
                </svg>
            </label>
        </li>
        <li>
            <label for="light">
                <input
                    type="radio"
                    id="light"
                    name="size"
                    value="light"
                    checked={$theme === "light"}
                    on:click={setLightTheme}
                />
                Light
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                </svg>
            </label>
        </li>
        <li>
            <label for="dark">
                <input
                    type="radio"
                    id="dark"
                    name="size"
                    value="dark"
                    checked={$theme === "dark"}
                    on:click={setDarkTheme}
                />
                Dark
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                >
                    <circle cx="8" cy="8" r="8" />
                </svg>
            </label>
        </li>
    </ul>
</details>

<style>
    details {
        margin: 0;
        min-width: 7.6rem;
    }

    svg {
        margin-left: 0.25rem;
    }
</style>
