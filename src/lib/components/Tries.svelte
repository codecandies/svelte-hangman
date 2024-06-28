<script>
  import {tries} from '$lib/stores';
</script>

<div>
  Noch <span class:low={$tries < 6} class:extreme={$tries < 4}>{$tries}</span> Fehlversuche. <span class:hidden={$tries > 0}>Verloren!</span>
</div>

<style>
  div {
    font-size: 1.6rem;
  }
  span {
    color: black;
    font-size: 160%;
    transition: opacity 1s ease-out;
  }
  span.hidden {
    opacity: 0;
  }
  span.low {
    color: orange;
  }
  span.low.extreme {
    color: red;
  }
</style>
