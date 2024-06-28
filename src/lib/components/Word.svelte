<script>
  import Letter from './Letter.svelte';

  export let answer;
</script>

<div>
{#each $answer as letter }
  <Letter {letter}></Letter>
{/each}
</div>

<style>
  div {
    display: flex;
    gap: 4px;
    padding: 20px;
    width: max-content;
  }
</style>
