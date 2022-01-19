export async function get() {
  // connect to db & get data
  // data is coming from https://www.metacritic.com/
  const guides = [
    {
      id: 1,
      title: "FINAL FANTASY XIV: ENDWALKER",
      body: "Endwalker is the fourth expansion pack for FINAL FANTASY XIV Online. Experience the climax of the Hydaelyn and Zodiark story, and encounter an even greater calamity than ever before as you travel to the far reaches of Hydaelyn and even to the moon.",
    },
    {
      id: 2,
      title: "GOD OF WAR",
      body: "The God of War has changed... and this is not the Kratos you know. A difficult and unfamiliar road awaits as you explore a stunning retelling of a classic story. Join Kratos as he adventures through a deep and reflective journey of growth, violence and the desire to become a better man for the sake of his son. In a world of monsters, dragons and gods, the weight of responsibility rests heavy on your shoulders -- and when your life is filled with blood and chaos, how can you prevent the mistakes of the past in order to protect your future?",
    },
    {
      id: 3,
      title: "FORZA HORIZON 5",
      body: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
    },
    {
      id: 4,
      title: "DEAD CELLS: THE QUEEN & THE SEA",
      body: "The Queen & The Sea DLC takes place within two brand new Biomes: The Infested Shipwreck and The Lighthouse. Parallel to the High Peak Castle and Throne Room levels, the new Biomes introduce players to a rotten shipwreck where you will be hunted by eldritch horrors (of course) through the bowels of this spooky and haunted old vessel. The second Biome, The Lighthouse, introduces vertical exploration of a soaring tower in which players will scramble upward as fast as they can to outrun rising flames while simultaneously fending off highly skilled warriors who want nothing more than to end your run. This final Biome is as epic and refreshing as it is challenging.",
    },
    {
      id: 5,
      title: "CHICORY: A COLORFUL TALE",
      body: "Something terrible happened. Chicory, superstar artist and wielder of the Brush, is missing, and all the color in the land vanished with her. It's up to you, Chicory's number one fan, to pick up the Brush and fill in for her. It's a big job but you're ready for it! Probably!",
    },
    {
      id: 6,
      title: "DEATH'S DOOR",
      body: "Reaping souls of the dead and punching a clock might get monotonous but it's honest work for a Crow. The job gets lively when your assigned soul is stolen and you must track down a desperate thief to a realm untouched by death - where creatures grow far past their expiry and overflow with greed and power.",
    },
    {
      id: 7,
      title: "DUSK",
      body: "A retro FPS that looks and feels like the 90s. Inspired by Quake, Heretic, Hexen, Half-Life and Redneck Rampage.",
    },
    {
      id: 8,
      title: "DODONPACHI RESURRECTION",
      body: 'Who said you could have a "blissful death"? Experience the explosive shooter action of DoDonPachi Resurrection!',
    },
  ];
  return {
    status: 200,
    body: { guides },
  };
}
