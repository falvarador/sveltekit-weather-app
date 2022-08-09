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
            <a class:active={$theme === "auto"} href="." on:click={setAutoTheme}
                >Auto<svg
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
                </svg></a
            >
        </li>
        <li>
            <a
                class:active={$theme === "light"}
                href="."
                on:click={setLightTheme}
                >Light<svg
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
                </svg></a
            >
        </li>
        <li>
            <a class:active={$theme === "dark"} href="." on:click={setDarkTheme}
                >Dark<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                >
                    <circle cx="8" cy="8" r="8" />
                </svg></a
            >
        </li>
    </ul>
</details>

<style>
    svg {
        margin-left: 0.5rem;
    }

    .active {
        background-color: var(--dropdown-hover-background-color);
    }
</style>
