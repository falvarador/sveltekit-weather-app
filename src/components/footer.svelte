<script>
    import SwitchTheme from "./switch-theme.svelte";
</script>

<footer>
    <small
        >Built with <a href="https://kit.svelte.dev/">Sveltekit</a> and love ❤️</small
    >
    <SwitchTheme />
</footer>

<style>
    footer {
        border-top: 1px solid var(--muted-border-color);
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin-top: 1rem;
    }
</style>
