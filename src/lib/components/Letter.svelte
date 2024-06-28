<script>
  export let letter;
</script>

<span class:answered={letter}>
  { letter }
</span>

<style>
  span {
    min-width: 30px;
    border-bottom: 2px solid red;
    min-height: 1lh;
    text-align: center;
    vertical-align: middle;
  }
  span.answered {
    border-bottom: 2px solid black;
  }
</style>
