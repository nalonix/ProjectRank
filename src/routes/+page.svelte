
<script lang="ts">
    import {page} from '$app/stores'
    //
	import type { ParameterItem, ProjectItem } from '../app';
    import VerticalList from './_components/VerticalList.svelte';
    import { v4 as uuid } from 'uuid'
    // Lib
    import { Ranking } from 'phosphor-svelte'
	import PickProject from './_components/PickProject.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { fade } from 'svelte/transition';

let parameters : ParameterItem = [
    {
        id: uuid(),
        name: 'Possibly Monetizeable'
    },
    {
        id: uuid(),
        name: 'Cost'
    }
    ,
    {
        id: uuid(),
        name: 'Dependence on external services'
    },
    {
        id: uuid(),
        name: 'Most Convenient for users'
    },
    {
        id: uuid(),
        name: 'Easier to implement'
    },
    {
        id: uuid(),
        name: 'Large Audience'
    },
    {
        id: uuid(),
        name: 'Twitter Clout'
    }
]; 

let projects : ProjectItem = [];

let preparedData : any[] = [];

const handleProjectInput = (e: KeyboardEvent) => {
    const inputElement = e.target as HTMLInputElement;
    const name = inputElement.value;
    if(e.key === 'Enter'){
        projects.push({
            id: uuid(),
            name
        })
        projects = projects
        inputElement.value = ''
    }
}

const handleParameterInput = (e: KeyboardEvent) => {
    const inputElement = e.target as HTMLInputElement;
    const name = inputElement.value;
    if(e.key === 'Enter'){
        parameters.push({
            id: uuid(),
            name
        })
        parameters = parameters
        inputElement.value = ''
    }
}

let unique = {}

</script>


<svelte:head>
    <meta name="description" content="">
    <meta />   

    <title>ProjectRank</title>
    <meta property="og:title" content="ProjectRank" />
    <meta property="og:site_name" content="ProjectRank"/>
    <meta property="og:description" content="Define your criteria, rank projects, and pick the next project to invest your time in." />
    <meta property="og:type" content="website" />
    
    <meta property="og:url" content={`${$page.url.href}`}/>
    <meta property="og:image" content={`${$page.url.href}assets/banner.png`} />

    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>


<section>
    <Hero />
    <section id="main" class="min-h-screen py-20">
        <section class="flex flex-col items-center md:flex-row md:justify-center md:items-start w-full">
            <div class="flex flex-col flex-grow max-w-[420px] w-full gap-2 px-2 py-3">
                <label class="form-control w-full">
                    <div class="label">
                    <span class="label-text font-semibold">Parameters:</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Add parameter" 
                        class="input input-bordered rounded-[4px] input-sm w-full "
                        on:keydown={handleParameterInput}
                    />
                </label>
                <span>
                    <p class="text-xs">Order parameters based on their significance.</p>
                </span>
                <VerticalList bind:items={parameters} listName='parameters'/>
            </div>
            
            <div class="flex flex-col flex-grow max-w-[420px] w-full gap-2 px-2 py-3">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text font-semibold">Projects:</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Add project name" 
                        class="input input-bordered rounded-[4px] input-sm w-full "
                        on:keydown={handleProjectInput}
                    />
                </label>
                <VerticalList bind:items={projects} listName='projects'/>
            </div>
        </section>

        <div class="flex items-center justify-center py-2 my-2">
            <button 
                class="btn btn-primary btn-sm btn-wide rounded-[4px]"
                disabled={parameters.length < 2 || projects.length < 2}
                on:click={() => {
                    preparedData = []
                    for(let x of parameters){
                        let obj = {
                            id: uuid(),
                            param: '',
                            rank: [
                                ''
                            ]
                        }
                        obj.param = x.name;
                        obj.rank = projects;
                        preparedData.push(obj)
                    }
                    preparedData = preparedData
                    unique = {}
                }}
            >
                Rank 
                <Ranking size={22} weight="bold" />
            </button>
        </div>
        {#if preparedData.length}
            <section class="flex-center">
                {#key unique}
                    <PickProject {preparedData} {parameters} {projects} />
                {/key} 
            </section>
        {/if}
    </section>

    <Footer />

</section>










<!-- page url -->