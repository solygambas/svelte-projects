<script>
  // import { onMount, onDestroy } from "svelte";
  import { fade, scale } from "svelte/transition";

  import { FeedbackStore } from "../stores";
  import FeedbackItem from "./FeedbackItem.svelte";

  // export let feedback = [];
  // let feedback = [];

  // const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

  // onMount(() => console.log("mounted")); // can be used for fetch requests

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<!-- {#each feedback as fb (fb.id)} -->
{#each $FeedbackStore as fb (fb.id)}
  <!-- <div transition:fade> -->
  <div in:scale out:fade={{ duration: 500 }}>
    <!-- <FeedbackItem item={fb} on:delete-feedback /> -->
    <FeedbackItem item={fb} />
  </div>
{/each}
