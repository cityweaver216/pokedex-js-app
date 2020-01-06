var repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    type: ["Grass", "Poison"],
    attackPhysical: "Body Slam",
    attackSpecial: "Giga Drain"
  },
  {
    name: "Pikachu",
    height: 0.4,
    type: "Electric",
    attackPhysical: "Quick Attack",
    attackSpecial: "Thunder"
  },
  {
    name: "Clefable",
    height: 1.3,
    type: "Fairy",
    attackPhysical: "Substitute",
    attackSpecial: "Metronome"
  },
  {
    name: "Gengar",
    height: 1.5,
    type: ["Ghost", "Poison"],
    attackPhysical: "Lick",
    attackSpecial: "Shadow Punch"
  },
  {
    name: "Houndoom",
    height: 1.4,
    type: ["Dark", "Fire"],
    attackPhysical: "Bite",
    attackSpecial: "Flamethrower"
  },
  {
    name: "Mewtwo",
    height: 2,
    type: "Psychic",
    attackPhysical: "Swift",
    attackSpecial: "Psychic"
  }
];

document.write("<h1>Pokedex</h1>");

for (var i = 0; i < repository.length; i++) {
  document.write(
    repository[i].name + " height: " + repository[i].height + "<br />"
  );
}

if (respository[i].height >= 2) {
  document.write("Wow, that's big!");
}
