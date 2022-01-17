<script context="module">
  // will run server-side and client-side
  export async function load({ fetch }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const guides = await res.json();
    // console.log(guides[0]);
    // console.log(window) //server-side error
    if (res.ok) {
      return {
        props: {
          guides,
        },
      };
    }
    return {
      status: res.status,
      error: new Error("Could not fetch the guides"),
    };
  }
</script>

<script>
  export let guides;
</script>

<div class="guides">
  <ul>
    {#each guides as guide (guide.id)}
      <li>
        <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .guides {
    margin-top: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
