<script>
    import MediaQuery from "./media-query.svelte";

    import SwitchTheme from "./switch-theme.svelte";
</script>

<MediaQuery query="(max-width:576px)" let:matches>
    <footer class:mobile={matches}>
        <small
            >Built with <a href="https://kit.svelte.dev/">Sveltekit</a> and love
            ❤️</small
        >
        <SwitchTheme />
    </footer>
</MediaQuery>

<style>
    footer {
        border-top: 1px solid var(--muted-border-color);
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin-top: 1rem;
    }

    small {
        margin-bottom: 1rem;
    }

    .mobile {
        align-items: center;
        flex-direction: column;
    }
</style>
