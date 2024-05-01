<script>
    import { XLogo, GithubLogo } from 'phosphor-svelte'
</script>


<section class="h-80 bg-black md:px-12">
    <div class="flex flex-col h-full px-5 py-8">
        <h3 class="text-white text-3xl sm:text-4xl font-semibold">ProjectRank</h3>
        <div class="flex-grow py-2">
            <a href="https://twitter.com/doni_verse" target="_blank" class="w-fit flex flex-row items-center gap-2 text-white font-semibold my-2">
                <XLogo  color="#fcfcfc" size={20} />
                @doni_verse
            </a>
            <a href="https://github.com/doniverse/projectrank" class="w-fit flex flex-row items-center gap-2 text-white font-semibold">
                <GithubLogo color="#fcfcfc" size={20} />
                Repo
            </a>
        </div>
        <div class="font-semibold flex-center text-white gap-2">
            Powered by 
            <img src="/assets/image.png" alt="logo" width="20px"/> 
        </div>
    </div>
</section>