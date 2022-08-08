<script>
    import Aside from "../components/aside.svelte";
    import Search from "../components/search.svelte";
    import WeatherBottom from "../components/weather-bottom.svelte";
    import WeatherTop from "../components/weather-top.svelte";

    import { getWeather } from "../services/weather";

    const weatherPromise = getWeather();
</script>

<Search />

{#await weatherPromise then { locationName, country, icon, temperature, conditionText, localtime, feelsLike, humidity, windSpeed }}
    <article>
        <WeatherTop {locationName} {country} {icon} />
        <WeatherBottom {temperature} {conditionText} {localtime} />
        <Aside feelslike={feelsLike} {humidity} windspeed={windSpeed} />
    </article>
{/await}

<style>
    article {
        margin: 0;
    }
</style>
