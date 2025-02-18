<script>
    let { class: className = "", src, alt, ...rest} = $props();
</script>


<div>

    <div>
        <img {src} {alt}>
    </div>

</div>