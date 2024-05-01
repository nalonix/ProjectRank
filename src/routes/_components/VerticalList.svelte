<script lang="ts">
	import { flip } from 'svelte/animate';
    // Libs
    import { Trash } from 'phosphor-svelte'
	import { dndzone } from 'svelte-dnd-action';
	import PatternBadge from './PatternBadge.svelte';
    // props
    export let listName = '';
    export let items : any[];
    export let dragDisabled: boolean = false;
    // config
    const flipDurationMs = 300;


    // methods
	function handleDndConsider(e: any) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: any) {
		items = e.detail.items;
	}

    function handleRemoveElement(id: string){
        items = items.filter((ele, idx: number) =>{
            if(ele.id !== id){
                return ele
            }
        })

    }
</script>

<section 
    use:dndzone={{items, flipDurationMs, type: listName, dragDisabled}} 
    on:consider={handleDndConsider} 
    on:finalize={handleDndFinalize}
    class="flex flex-col gap-1 w-full py-2 px-1 sm:py-3 sm:px-1 rounded-sm border select-none"
    >
	{#each items as item(item.id)}
        <div 
            animate:flip="{{duration: flipDurationMs}}"
            class="card card-bordered flex flex-row bg-base-100 shadow-md rounded-md overflow-hidden focus:outline-none focus:shadow-xl">
                <PatternBadge />
                <div class="flex flex-row flex-grow justify-between p-2">
                    <p>{item.name}</p>
                    {#if !listName.startsWith('ranking')}
                        <button 
                            class="flex items-center justify-center h-full px-1 cursor-pointer" on:click={()=>{handleRemoveElement(item.id)}}>
                            <Trash size={20} />
                        </button>
                    {/if}
                </div>
          </div>
	{/each}
</section>













