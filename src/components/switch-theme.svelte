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

<details role="list" dir="rtl">
    <summary aria-haspopup="listbox" role="link">Theme</summary>
    <ul role="listbox">
        <li>
            <a
                for="auto"
                href="."
                style:active={theme === "auto"}
                on:click={setAutoTheme}
            >
                Auto</a
            >
        </li>
        <li>
            <a
                for="light"
                href="."
                style:active={theme === "light"}
                on:click={setLightTheme}
            >
                Light</a
            >
        </li>
        <li>
            <a
                for="dark"
                href="."
                class:active{theme == "dark"}
                on:click={setDarkTheme}
            >
                Dark</a
            >
        </li>
    </ul>
</details>

<style>
    .active {
        background-color: var(--dropdown-hover-background-color);
    }
</style>
