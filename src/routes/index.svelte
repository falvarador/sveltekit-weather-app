<script>
    import { getWeather } from "./services/weather";
    const weatherPromise = getWeather();
</script>

{#await weatherPromise then weather}
    <h1>{weather.conditionText}</h1>
{/await}
