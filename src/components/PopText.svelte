<script>
    import { onMount } from "svelte";

    let { class: className = "", text = "???", ...rest } = $props();

    /** @type {HTMLElement} */
    let texttag; 

    let observer;

    function popText(){
        texttag.classList.remove("-bottom-80");
        texttag.classList.remove("opacity-0");
        
        texttag.classList.add("bottom-0");
        texttag.classList.add("opacity-50");
    }

    function handleIntersect(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                //element in screen
                popText();
                observer.disconnect();
            }
            // else{
                
            //     texttag.classList.remove("bottom-0");
            //     texttag.classList.remove("opacity-50");
            //     texttag.classList.add("-bottom-80");
            //     texttag.classList.add("opacity-0");
                
            // }

        });
    }

    onMount(()=>{

        observer = new IntersectionObserver(handleIntersect);
        observer.observe(texttag);

    });

</script>

<div class="relative w-full h-14">
    
    <h1 bind:this={texttag} class=" {className}
        w-full
        text-4xl sm:text-5xl font-black 
        text-center tracking-widest
        absolute -bottom-80 left-0
        opacity-0

        transition-all duration-700 ease-in-out

    ">
        {text}
    </h1>

</div>