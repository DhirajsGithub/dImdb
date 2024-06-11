// backend/scripts/populateMovies.js
const Movie = require("../models/Movie");

const movies = [
  {
    title: "Inception",
    shortDescription:
      "A thief who steals corporate secrets through dream-sharing technology.",
    image:
      "https://m.media-amazon.com/images/I/71thFiIUSpL._AC_UF1000,1000_QL80_.jpg",
    longDescription:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime.",
  },
  {
    title: "The Dark Knight",
    shortDescription: "Batman faces the Joker, a criminal mastermind.",
    image: "https://m.media-amazon.com/images/I/81CLFQwU-WL.jpg",
    longDescription:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as The Joker. The Joker thrusts Batman into a psychological game that pushes the boundaries of his abilities, intelligence, and understanding of justice. As the Joker's diabolical plans become more twisted and catastrophic, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    title: "Interstellar",
    shortDescription: "A team of explorers travel through a wormhole in space.",
    image:
      "https://i.etsystatic.com/23402008/r/il/b658b2/2327469308/il_570xN.2327469308_492n.jpg",
    longDescription:
      "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home. Cooper and his crew face unimaginable obstacles as they explore the distant worlds, risking everything to find a place where humanity can survive. Meanwhile, on Earth, Cooper's daughter Murph faces her own challenges and discoveries.",
  },
  {
    title: "The Matrix",
    shortDescription: "A hacker learns about the true nature of his reality.",
    image:
      "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    longDescription:
      "Neo, a computer hacker, joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth. Led by the enigmatic Morpheus, Neo must confront agents and systems designed to maintain the illusion of the Matrix, a virtual reality created to enslave humanity. With the help of Trinity and the other rebels, Neo discovers shocking truths about his existence and his role in the future of humanity. The Matrix is a mind-bending action sci-fi film that explores themes of reality, control, and liberation in a dystopian future where the line between the digital and physical worlds blurs.",
  },
  {
    title: "The Shawshank Redemption",
    shortDescription: "Two imprisoned men bond over a number of years.",
    image:
      "https://m.media-amazon.com/images/I/71715eBi1sL._AC_UF894,1000_QL80_.jpg",
    longDescription:
      "Andy Dufresne, a banker wrongly convicted of murder, is sentenced to life imprisonment at Shawshank prison. Despite his initial harsh treatment, Andy forms a friendship with Red, a fellow inmate. Over the years, Andy displays remarkable resilience and ingenuity, transforming the prison environment and earning the trust of the warden and the guards. Through his secret efforts, he exposes a corrupt warden and escapes to freedom. Andy's journey highlights themes of hope, friendship, and the human spirit's ability to persevere even in the most challenging circumstances. The Shawshank Redemption is a testament to the enduring power of hope and the resilience of the human spirit.",
  },
  {
    title: "Forrest Gump",
    shortDescription:
      "The story of a man with a low IQ who achieves great things.",
    image:
      "https://images-cdn.ubuy.co.in/6341130b59f5d1339534ead5-forrest-gump-movie-poster-regular.jpg",
    longDescription:
      "Forrest Gump is a simple man with a low IQ but good intentions. He is a witness to, and sometimes a participant in, some of the most defining moments of the late 20th century. From his early childhood in Alabama, where he meets his one true love, Jenny, to his time in the Army during the Vietnam War, and his unintentional involvement in significant historical events, Forrest's life is a remarkable journey. Through his innocence and determination, Forrest accomplishes incredible feats and inspires those around him. The film explores themes of destiny, love, and the impact of one man's extraordinary life on the world.",
  },
  {
    title: "Gladiator",
    shortDescription:
      "A Roman general seeks revenge against a corrupt emperor.",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/l/o/b/medium-the-gladiator-poster-on-fine-art-paper-13x19-poster3293-original-imagbx2qheyvgbfm.jpeg?q=90&crop=false",
    longDescription:
      "Maximus Decimus Meridius, a Roman general loved by the people and the aging Emperor Marcus Aurelius, finds himself betrayed when the Emperor's ambitious son, Commodus, murders his father and seizes the throne. Reduced to slavery, Maximus rises through the ranks of the gladiatorial arena to avenge the murders of his family and his Emperor. His journey from a respected general to a vengeful gladiator is marked by intense battles, personal loss, and the quest for justice. Gladiator is a gripping tale of honor, revenge, and the enduring strength of the human spirit set against the backdrop of ancient Rome's brutal and spectacular gladiatorial games.",
  },
  {
    title: "The Godfather",
    shortDescription:
      "The aging patriarch of an organized crime dynasty transfers control to his son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    longDescription:
      "The Godfather follows the powerful Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael, reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. As Michael rises to power, he transforms from a reluctant family outsider to a ruthless mafia boss, threatening the integrity and unity of the family. The Godfather is a profound tale of tradition, power, and family loyalty, showcasing the complexities of organized crime and its effects on the Corleone family. It's a cinematic masterpiece that delves deep into the themes of power, loyalty, and the moral costs of corruption.",
  },
  {
    title: "Pulp Fiction",
    shortDescription:
      "The lives of two mob hitmen, a boxer, and others intertwine.",
    image:
      "https://images-cdn.ubuy.co.in/653f9763c9fb060a774b8193-pulp-fiction-movie-poster-regular.jpg",
    longDescription:
      "Pulp Fiction is a neo-noir crime film that intertwines multiple storylines of crime, violence, and redemption. The film follows the lives of two mob hitmen, Vincent Vega and Jules Winnfield, a boxer named Butch Coolidge, and a pair of small-time criminals, Pumpkin and Honey Bunny. Through a series of unexpected twists and darkly humorous moments, the characters' paths cross in ways that challenge their perspectives and alter their fates. The film is known for its eclectic dialogue, nonlinear narrative structure, and an ensemble cast that brings to life the seedy underbelly of Los Angeles. Pulp Fiction is a genre-defining work that explores the intricacies of morality and consequence.",
  },
  {
    title: "Fight Club",
    shortDescription:
      "An insomniac office worker forms an underground fight club.",
    image:
      "https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_570xN.2412674268_1sgm.jpg",
    longDescription:
      "Fight Club follows the story of an unnamed narrator, a disillusioned office worker suffering from chronic insomnia. He forms an underground fight club with the enigmatic Tyler Durden, a soap salesman with radical ideas. The club becomes an outlet for men to express their primal aggression, but it soon evolves into something much more dangerous and uncontrollable. As the narrator gets drawn deeper into Tyler's anarchistic vision, he must confront the disturbing truth about himself and the nature of his reality. Fight Club is a provocative exploration of identity, consumerism, and the human desire for self-destruction and rebellion.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    shortDescription:
      "A young hobbit and his companions set out to destroy a powerful ring.",
    image:
      "https://images-cdn.ubuy.co.in/634d1909d46781775673cd3d-lord-of-the-rings-fellowship-of-the-ring.jpg",
    longDescription:
      "The Lord of the Rings: The Fellowship of the Ring follows the journey of Frodo Baggins, a young hobbit who inherits a powerful ring from his uncle Bilbo. With the help of a diverse fellowship, including his friends Sam, Merry, and Pippin, the wizard Gandalf, the elf Legolas, the dwarf Gimli, and the humans Aragorn and Boromir, Frodo sets out to destroy the One Ring and defeat the Dark Lord Sauron. Their journey takes them across Middle-earth, facing numerous challenges and enemies. The fellowship's quest is a timeless tale of bravery, friendship, and the struggle between good and evil in a fantastical world.",
  },
  {
    title: "The Social Network",
    shortDescription:
      "The story of Facebook's founding and the subsequent lawsuits.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    longDescription:
      "The Social Network chronicles the meteoric rise of Facebook, from its inception in a Harvard dorm room to becoming one of the most influential social media platforms in the world. The film delves into the personal and legal battles faced by Facebook's founder, Mark Zuckerberg, as he navigates the complexities of entrepreneurship, innovation, and betrayal. Through flashbacks and courtroom testimonies, the story reveals the tensions and rivalries that shaped the company. The Social Network is a gripping drama that explores themes of ambition, loyalty, and the transformative power of technology in the digital age.",
  },
  {
    title: "The Silence of the Lambs",
    shortDescription:
      "A young FBI agent seeks the help of an imprisoned cannibal to catch a serial killer.",
    image:
      "https://m.media-amazon.com/images/I/510sBwiR7SL._AC_UF894,1000_QL80_.jpg",
    longDescription:
      "Clarice Starling, a young FBI trainee, is assigned to interview Dr. Hannibal Lecter, a brilliant psychiatrist and cannibalistic serial killer, in the hope that he can provide insights into the mind of another serial killer, Buffalo Bill, who is on the loose. As Lecter and Starling engage in a psychological cat-and-mouse game, Starling must confront her own fears and traumas. The Silence of the Lambs is a gripping psychological thriller that delves deep into the minds of its characters, exploring themes of fear, manipulation, and the search for identity. The film is a masterclass in suspense and character-driven storytelling.",
  },
  {
    title: "Schindler's List",
    shortDescription:
      "The story of Oskar Schindler, who saved over a thousand Jews during the Holocaust.",
    image:
      "https://images-cdn.ubuy.co.in/634f9a12ec3ec2031f564253-schindler-39-s-list-movie-art.jpg",
    longDescription:
      "Schindler's List tells the true story of Oskar Schindler, a German businessman who saved the lives of more than a thousand Jewish refugees during the Holocaust by employing them in his factories. Initially motivated by profit, Schindler's motivations change as he witnesses the atrocities committed by the Nazis. He uses his wealth and influence to protect his Jewish workers from deportation and death. The film is a powerful portrayal of the horrors of the Holocaust and the impact of one man's courage and humanity. Schindler's List is a poignant reminder of the capacity for good in the face of unimaginable evil.",
  },
  {
    title: "Titanic",
    shortDescription: "A love story unfolds on the ill-fated RMS Titanic.",
    image:
      "https://m.media-amazon.com/images/I/51F-lOi11dL._AC_UF1000,1000_QL80_.jpg",
    longDescription:
      "Titanic is an epic romance and disaster film that tells the story of Jack Dawson, a poor artist, and Rose DeWitt Bukater, a young woman trapped in a loveless engagement, who meet and fall in love aboard the ill-fated RMS Titanic. As their forbidden romance blossoms, the ship strikes an iceberg and sinks, leading to a tragic and heroic struggle for survival. The film explores themes of class division, love, and fate, set against the backdrop of one of the most infamous maritime disasters in history. Titanic is a timeless tale of love and loss that captures the human spirit's resilience in the face of catastrophe.",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    shortDescription: "A farm boy joins a rebellion against an evil empire.",
    image: "https://m.media-amazon.com/images/I/A1wnJQFI82L.jpg",
    longDescription:
      "Star Wars: Episode IV - A New Hope follows the journey of Luke Skywalker, a young farm boy who discovers his destiny as a Jedi Knight. With the help of Princess Leia, Han Solo, Chewbacca, and the wise Obi-Wan Kenobi, Luke joins the Rebel Alliance in their battle against the tyrannical Galactic Empire. As they strive to destroy the Empire's ultimate weapon, the Death Star, Luke learns the ways of the Force and faces the dark side represented by Darth Vader. The film is a timeless adventure of heroism, friendship, and the fight for freedom in a galaxy far, far away.",
  },
  {
    title: "Jurassic Park",
    shortDescription:
      "Dinosaurs are brought back to life in a theme park, but things go wrong.",
    image:
      "https://m.media-amazon.com/images/I/610fuvWAaqL._AC_UF894,1000_QL80_.jpg",
    longDescription:
      "Jurassic Park is a thrilling adventure film about a billionaire who creates a theme park featuring genetically-engineered dinosaurs. When a group of scientists and visitors are invited to preview the park, things go horribly wrong as the dinosaurs break free and wreak havoc. Dr. Alan Grant, Dr. Ellie Sattler, and Dr. Ian Malcolm must use their expertise and courage to survive and restore order. The film explores themes of scientific hubris, the unpredictability of nature, and the ethical implications of genetic engineering. Jurassic Park is a groundbreaking film that combines cutting-edge special effects with a gripping story.",
  },
  {
    title: "The Avengers",
    shortDescription:
      "Earth's mightiest heroes must come together to stop an alien invasion.",
    image: "https://img.fruugo.com/product/7/41/14532417_max.jpg",
    longDescription:
      "The Avengers is a superhero film that brings together Marvel's greatest heroes to defend Earth from an extraterrestrial threat. Nick Fury, the director of S.H.I.E.L.D., recruits Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye to form the Avengers. When Loki, Thor's adoptive brother, aligns with an alien race to conquer Earth, the Avengers must overcome their differences and work as a team to stop the invasion. The film is a spectacular blend of action, humor, and character-driven storytelling, showcasing the power of teamwork and the heroism required to protect the world from overwhelming danger.",
  },
  {
    title: "Avatar",
    shortDescription:
      "A paraplegic Marine is sent to the moon Pandora on a unique mission.",
    image:
      "https://m.media-amazon.com/images/I/91vwVHABnZL._AC_UF1000,1000_QL80_.jpg",
    longDescription:
      "Avatar is a science fiction epic that follows the story of Jake Sully, a paraplegic Marine who is sent to the moon Pandora on a mission. Using an avatar body, Jake immerses himself in the indigenous Na'vi culture and forms a deep connection with them. As he learns about the Na'vi's way of life and their spiritual connection to their environment, Jake faces a moral dilemma when he is ordered to help his own people destroy the Na'vi's home to extract valuable resources. The film explores themes of environmentalism, imperialism, and the importance of understanding and respecting different cultures. Avatar is a visually stunning and emotionally resonant story.",
  },
  {
    title: "Braveheart",
    shortDescription:
      "A Scottish warrior leads a revolt against English tyranny.",
    image:
      "https://i.etsystatic.com/18242346/r/il/fe72a9/2412683470/il_570xN.2412683470_oouu.jpg",
    longDescription:
      "Braveheart is a historical epic that tells the story of William Wallace, a Scottish warrior who leads his countrymen in a rebellion against English oppression in the late 13th century. After his wife is brutally executed by English soldiers, Wallace rallies the Scots to fight for their freedom. Through a series of battles and strategic alliances, Wallace becomes a symbol of defiance and inspires his fellow Scots to continue the struggle for independence. The film is a powerful portrayal of courage, sacrifice, and the enduring fight for liberty. Braveheart's themes of heroism and resistance against tyranny resonate deeply, making it a timeless tale of the quest for freedom.",
  },
];

const populateMovies = async () => {
  try {
    await Movie.deleteMany({});
    await Movie.insertMany(movies);
    console.log("Data Imported");
  } catch (err) {
    console.error(err);
  }
};

module.exports = populateMovies;
