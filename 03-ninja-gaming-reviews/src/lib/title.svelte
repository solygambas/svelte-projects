<script>
  export let title = "Ninja Gaming";
</script>

<div>
  <a href="/" class="title"
    ><img src="/controller.svg" alt="Ninja Gaming logo" />
    <h1>{title}</h1></a
  >
</div>

<style>
  .title {
    display: flex;
    text-decoration: none;
  }
  .title img {
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg)
      brightness(100%) contrast(90%);
  }
  .title h1 {
    margin-left: 10px;
  }
</style>
