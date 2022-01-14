<script>
  import FeedbackList from "./components/FeedbackList.svelte";

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus dolorem excepturi possimus minima error atque cumque suscipit.",
    },
    {
      id: 2,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus dolorem excepturi possimus minima error atque cumque suscipit.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus dolorem excepturi possimus minima error atque cumque suscipit.",
    },
  ];
</script>

<main class="container">
  <FeedbackList {feedback} />
</main>
