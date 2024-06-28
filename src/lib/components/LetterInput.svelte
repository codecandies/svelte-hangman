<script>
  import { createEventDispatcher } from 'svelte';

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ'.split('');
  const dispatch = createEventDispatcher();

  function registerAnswer( event ) {
    event.target.disabled = true;
    dispatch('notify', event.target.name);
  }

</script>

<form>
  {#each letters as name }
    <button type="button" {name} on:click={registerAnswer}>{name}</button>
  {/each}
</form>

<style>
  form {
    display: flex;
    gap: 4px;
    padding: 0 20px 20px;
    max-width: 400px;
    flex-wrap: wrap;
  }
  button {
    cursor: pointer;
    height: 4ch;
    width: 4ch;
  }
</style>
