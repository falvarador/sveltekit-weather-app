<script>
    export let humidity = 0,
        windspeed = 0,
        feelslike = 0;
</script>

<hr />
<aside>
    <fieldset>
        <span>{humidity}%</span>
        <span>Humidity</span>
    </fieldset>
    <fieldset>
        <span>{windspeed} km/h</span>
        <span>Windspeed</span>
    </fieldset>
    <fieldset>
        <span>{feelslike}°</span>
        <span>Feels like</span>
    </fieldset>
</aside>

<style>
    aside {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0.75rem 2rem;
        text-align: center;
        width: 80%;
    }

    span {
        display: block;
    }
</style>
