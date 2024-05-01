<script lang="ts">
	import { onMount } from "svelte";
	import VerticalList from "./VerticalList.svelte";
    import Chart from 'chart.js/auto';

    export let data: any[];
    export let parameters: any[];

    console.log(data)

    console.log("My data: ",data)
    let ranking = data.map((ele, idx) => {
        return { id: ele.id, name: ele.label}
    })

    console.log("My ranking",parameters)

    let ctx: HTMLCanvasElement;



    const dataset = {
      labels: parameters.flatMap(ele => ele.name),
      datasets: data
    };

    onMount(()=>{        
        const chart = new Chart(ctx, {
                type: 'radar',
                data: dataset,
                options: {
                    elements: {
                      line: {
                          borderWidth: 3
                      }
                    }
                },
            })
    })
    
</script>


<!-- <div class="border w-96"> -->
<div class="w-full max-w-[450px] sm:min-w-[420px] my-7">
    <div class="px-2">
        <canvas bind:this={ctx}></canvas>
    </div>
    <div>
        <h2 class="text-xl font-semibold my-2 px-2">Suggested Sequence</h2>
        <VerticalList dragDisabled={true} listName='ranking_results' items={ranking}/>
    </div>
</div>