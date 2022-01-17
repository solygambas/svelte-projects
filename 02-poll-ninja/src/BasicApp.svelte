<!-- https://svelte.dev/tutorial/basics 
https://svelte.dev/docs
https://svelte.dev/examples/hello-world
-->
<script>
  import Modal from "./components/Modal.svelte";
  import AddPersonForm from "./components/AddPersonForm.svelte";

  // export let name;

  // REACTIVE VALUES
  //   let firstName = "Jimi";
  //   let lastName = "Hendrix";
  //   let beltColour = "black";
  //   $: fullName = `${firstName} ${lastName}`;
  //   $: {
  //     console.log(beltColour);
  //     console.log(fullName);
  //   }

  // LOOPS
  let people = [
    { name: "yoshi", beltColour: "black", age: 25, id: 1 },
    { name: "mario", beltColour: "orange", age: 45, id: 2 },
    { name: "luigi", beltColour: "brown", age: 35, id: 3 },
  ];

  // EVENTS
  const handleClick = (id) => {
    people = people.filter((person) => person.id !== id);
  };

  // CONDITIONALS
  let num = 3;
  let showModal = false;

  // EVENT FORWARDING
  const toggleModal = () => (showModal = !showModal);

  // CUSTOM EVENTS
  const addPerson = (e) => {
    const person = e.detail;
    people = [person, ...people];
    showModal = false;
  };
</script>

<!-- COMPONENTS & PROPS -->
<!-- <Modal message="Hey, I am a prop value" isPromo={true} /> -->
<!-- <Modal message="Hey there again" {showModal} on:click={toggleModal} /> -->
<Modal {showModal} on:click={toggleModal}>
  <!-- <h3>Add a new person</h3> -->
  <AddPersonForm on:addPerson={addPerson} />
  <!-- <div slot="title">
    <h3>Add a new person</h3>
  </div> -->
</Modal>

<main>
  <!-- REACTIVE VALUES -->
  <!-- <p>{fullName} - {beltColour} belt</p>
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColour} /> -->

  <!-- LOOPS & EVENTS -->
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      {#if person.beltColour === "black"}
        <p><strong>MASTER NINJA</strong></p>
      {/if}
      <p>{person.age} years old, {person.beltColour} belt</p>
      <button on:click={() => handleClick(person.id)}>delete</button>
    </div>
  {:else}
    <p>There are no people to show...</p>
  {/each}

  <!-- CONDITIONALS -->
  {#if num > 20}
    <p>Greater than 20</p>
  {:else if num > 5}
    <p>Greater than 5</p>
  {:else}
    <p>Not greater than 5</p>
  {/if}

  <!-- EVENT FORWARDING & EVENT MODIFIERS -->
  <button on:click|once={toggleModal}>Open Modal</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
