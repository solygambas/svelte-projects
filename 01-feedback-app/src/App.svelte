<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
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

  $: count = feedback.length;
  $: average = feedback.reduce((a, { rating }) => a + rating, 0) / count;

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };

  const addFeedback = (e) => {
    const newFeedback = e.detail;
    feedback = [newFeedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
