document.addEventListener("DOMContentLoaded", () => {
  const birds = [
    {
      name: "Snow Bunting",
      phonetic: "snoh bun-ting",
      video: "videos/snow-bunting.mp4",
      description:
        "The Snow Bunting is a small, migratory bird known for its striking white plumage in winter. It breeds in the Arctic and migrates south during the colder months, often forming large flocks. Snow Buntings are known for their cheerful song and can be found in open fields and coastal areas during migration.",
      wingspan: "30-35 cm",
      habitat: "Arctic tundra, coastal areas",
      diet: "Seeds, insects",
    },
    {
      name: "American Robin",
      phonetic: "uh-mer-i-kuhn roh-bin",
      video: "videos/american-robin.mp4",
      description:
        "The American Robin is a migratory songbird known for its bright orange-red breast and melodious song. It is commonly found in gardens, parks, and forests across North America. Robins are often seen hopping on the ground searching for worms and berries.",
      wingspan: "30-41 cm",
      habitat: "Gardens, parks, forests",
      diet: "Worms, fruits, insects",
    },
    {
      name: "Bald Eagle",
      phonetic: "bawld ee-guhl",
      video: "videos/bald-eagle.mp4",
      description:
        "The Bald Eagle is a large bird of prey known for its white head and tail, contrasting with its dark brown body. It is the national bird of the United States and is often found near large bodies of open water where it can hunt for fish.",
      wingspan: "180-230 cm",
      habitat: "Near large bodies of water",
      diet: "Fish, small mammals, carrion",
    },
    {
      name: "Northern Cardinal",
      phonetic: "nawr-thuhrn kahr-duh-nuhl",
      video: "videos/northern-cardinal.mp4",
      description:
        "The Northern Cardinal is a vibrant red songbird known for its distinctive crest and black mask around the beak. It is a popular backyard bird in North America, often seen at feeders.",
      wingspan: "25-31 cm",
      habitat: "Woodlands, gardens, shrubby areas",
      diet: "Seeds, fruits, insects",
    },
    {
      name: "Blue Jay",
      phonetic: "bloo jay",
      video: "videos/blue-jay.mp4",
      description:
        "The Blue Jay is a striking blue and white bird known for its intelligence and complex social behavior. It is often seen in forests, parks, and residential areas, where it feeds on nuts, seeds, and insects.",
      wingspan: "34-43 cm",
      habitat: "Forests, parks, residential areas",
      diet: "Nuts, seeds, insects",
    },
    {
      name: "Great Horned Owl",
      phonetic: "greyt hawrnd owl",
      video: "videos/great-horned-owl.mp4",
      description:
        "The Great Horned Owl is a large, powerful owl known for its tufted 'horns' and striking yellow eyes. It is a versatile predator found in a variety of habitats, including forests, deserts, and urban areas.",
      wingspan: "91-145 cm",
      habitat: "Forests, deserts, urban areas",
      diet: "Mammals, birds, reptiles",
    },
  ];

  const birdPhoneticElement = document.getElementById("phonetic");
  const birdDescriptionElement = document.getElementById("description");
  const birdHabitatElement = document.getElementById("habitat");
  const birdDietElement = document.getElementById("diet");
  const videoElement = document.querySelector("video source");

  function getRandomBird() {
    const randomIndex = Math.floor(Math.random() * birds.length);
    return birds[randomIndex];
  }

  const selectedBird = getRandomBird();

  birdPhoneticElement.textContent = selectedBird.phonetic;
  birdDescriptionElement.textContent = selectedBird.description;
  birdHabitatElement.textContent = `Habitat: ${selectedBird.habitat}`;
  birdDietElement.textContent = `Diet: ${selectedBird.diet}`;
  videoElement.src = selectedBird.video;
  videoElement.parentElement.load();
});
