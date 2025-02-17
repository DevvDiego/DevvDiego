<script>
    import { onMount } from "svelte";

    let { class: className = "", text = "???", ...rest } = $props();

    /** @type {HTMLElement} */
    let texttag; 

    let observer;

    function handleIntersect(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                //element in screen
                texttag.classList.remove("-bottom-80");
                texttag.classList.add("bottom-0");

                observer.disconnect();
            }
        });
    }

    onMount(()=>{

        observer = new IntersectionObserver(handleIntersect);
        observer.observe(texttag);

    });

</script>

<h1 bind:this={texttag} class=" {className}
    w-full
    text-5xl sm:text-8xl font-black opacity-50
    text-center tracking-widest
    absolute -bottom-80 left-0
    
    transition-all duration-500 ease-in-out

">
    {text}
</h1>
