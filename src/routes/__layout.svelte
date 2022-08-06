<script>
    import Footer from "../components/footer.svelte";
    import SwitchTheme from "../components/switch-theme.svelte";
</script>

<header />

<main class="container">
    <article>
        <slot />
        <SwitchTheme />
    </article>
</main>

<Footer />
