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
                Auto 🌗
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
                Light 🌞
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
                Dark 🌚
            </label>
        </li>
    </ul>
</details>

<style>
    details {
        margin: 0;
        min-width: 7.6rem;
    }
</style>
