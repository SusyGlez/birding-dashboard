document.addEventListener("DOMContentLoaded", () => {
  const birds = [
    {
      name: "Snow Bunting",
      phonetic: "snoh bun-ting",
      video: "videos/snow-bunting.mp4",
      colors: ["#ffffff", "#d8c9a3"], // Pure white to golden cream
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
      colors: ["#ffe4d6", "#ff9e80"], // Soft peach to warm coral
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
      colors: ["#f5f5f5", "#a69f92"], // Bright white to medium warm gray
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
      colors: ["#ffe6e6", "#ffb3b3"], // Light pink to medium rose
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
      colors: ["#e6f2ff", "#99cdff"], // Pale blue to medium sky blue
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
      colors: ["#f2efe6", "#cfc0a3"], // Light beige to medium warm taupe
      description:
        "The Great Horned Owl is a large, powerful owl known for its tufted 'horns' and striking yellow eyes. It is a versatile predator found in a variety of habitats, including forests, deserts, and urban areas.",
      wingspan: "91-145 cm",
      habitat: "Forests, deserts, urban areas",
      diet: "Mammals, birds, reptiles",
    },
    // Add the great crested grebe
    {
      name: "Great Crested Grebe",
      phonetic: "greyt kres-tid greyb",
      video: "videos/great-crested-grebe.mp4",
      colors: ["#f0f8ff", "#dcdcdc"], // Light blue to light gray
      description:
        "The Great Crested Grebe is a striking water bird known for its elaborate courtship displays and distinctive black double crest. It has a slender body and long neck, often seen gliding gracefully on lakes and large ponds. During the breeding season, it develops a striking black and white plumage with a distinctive crest, making it one of the most recognizable water birds.",
      wingspan: "90-100 cm",
      habitat: "Lakes, large ponds, coastal waters",
      diet: "Fish, aquatic invertebrates",
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

  // Update bird information
  birdPhoneticElement.textContent = selectedBird.phonetic;
  birdDescriptionElement.textContent = selectedBird.description;
  birdHabitatElement.textContent = selectedBird.habitat;
  birdDietElement.textContent = selectedBird.diet;
  videoElement.src = selectedBird.video;
  videoElement.parentElement.load();

  // Set the background gradient
  document.body.style.background = `linear-gradient(135deg, ${selectedBird.colors[0]}, ${selectedBird.colors[1]})`;
});
