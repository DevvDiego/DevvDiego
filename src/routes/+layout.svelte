<script>
    import "../app.css";
    import menu from "$lib/menu.svg";
    export const prerender = true;
</script>

<nav class="
    z-[10] fixed
    w-full min-h-[60px] h-20 px-8 py-5
    flex flex-row flex-nowrap justify-between items-center"
>
    <span class="text-2xl font-bold text-white bg-clip-text text-transparent">DV</span>

    <span>
        <img src="{menu}" class="h-max w-auto" alt="menu">
    </span>

</nav>

<slot />

<style>
</style>