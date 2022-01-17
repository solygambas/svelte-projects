<script context="module">
  // will run server-side and client-side
  export async function load({ fetch, params }) {
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const guide = await res.json();
    // console.log(guides[0]);
    // console.log(window) //server-side error
    if (res.ok) {
      return {
        props: {
          guide,
        },
      };
    }
    return {
      status: 301,
      //   error: new Error("Could not fetch the guide"),
      redirect: "/guides",
    };
  }
</script>

<script>
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>
