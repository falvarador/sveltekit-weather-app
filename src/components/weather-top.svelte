<script>
    export let locationName = "Not found",
        country = "Not found",
        icon = "";
</script>

<fieldset>
    <div>
        <h1>{locationName}</h1>
        <span>{country}</span>
    </div>
    <img src={icon} alt="weather icon" />
</fieldset>

<style>
    fieldset {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0;
    }

    h1 {
        font-weight: 300;
        margin: 0;
        text-transform: uppercase;
    }

    img {
        height: 5rem;
        width: 5rem;
    }
</style>
