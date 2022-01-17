<script>
  // import { onDestroy, onMount } from "svelte";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";

  // export let polls = [];
  // const unsub = PollStore.subscribe((data) => (polls = data));

  // onMount(() => {
  //   // get data from a db
  //   console.log("component mounted");
  // });

  // onDestroy(() => {
  //   // unsub from store (to avoid memory leaks)
  //   console.log("component destroyed");
  //   unsub();
  // });
</script>

<div class="poll-list">
  <!-- {#each polls as poll (poll.id)} -->
  <!-- <div><PollDetails {poll} on:vote /></div> -->
  <!-- <div transition:fade> -->
  <!-- <div in:fade out:slide> -->
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {:else}
    <p>No polls found. Add New Poll!</p>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .poll-list {
      grid-template-columns: 1fr;
    }
  }
</style>
