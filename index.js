console.log("The story begins !\n");
console.log(
  "Once upon a time, the land of Coders was suffering from the evil doing of two major bugs, which some thought to be invincible, to defeat the bugs and bring back peace to the land of coders, few coders decided to join arms against the bug.\n"
);
console.log(
  "Their first step was to create a party of those fighting against the bug.\n"
);

//create the party array
let party = Array.of(
  "Arya the archer",
  "Bravo the brave",
  "Swordingo the swordsMaster",
  "Debin the debugger",
  "Eren the executioner"
);

console.log(
  "Once the party was created, they needed to confirm if indeed the first step was achieved, so they decided to use isArray on party"
);

//check if isParty is an array
let isParty = Array.isArray(party);
console.log("Yes the party is", isParty);

console.log("\nIntroducing the members of the party using enteries:\n");

//display the enteries of an aray
for ([index, element] of party.entries()) {
  console.log(index, element);
}

console.log(
  "To locate the bug hiding in the land of coders, our party needed someone to guide the path to them"
);

console.log("Adding Garry the guide in the front position using unshift");

//adding Garry the guide to the party

party.unshift("Garry the guide");

console.log("new party:\n", party);

console.log(
  "The party guided by Garry the guide reached the land of unoptimised code, and were met by the underdogs of the bugs\n"
);
console.log(
  "we need Arya the archer to shoot the bugs from the long distance, so we need to find her position in the array using findIndex"
);

//finding index of Arya the archer
const archer = party.findIndex((member) => member === "Arya the archer");
console.log("Arya the archer is at position", archer, "\n");

console.log(
  "After defeating the underdog bugs, Arya the archer needed to heal before continuing her journey"
);
console.log(
  "Do we have a healer in our party? let us use find on our party array\n"
);

//find healer in party

const isHealer = party.find((member) => member === "healer");
console.log(
  "Our healer is",
  isHealer,
  "\n we need to get a new healer before proceeding further"
);

console.log(
  "Met Harry the healer in the land of unoptimised code, let us add him at the end of our party to provide support from the back using push\n"
);

//pushing Harry the healer in the party
party.push("Harry the healer");

console.log("our new party: ", party, "\n");

console.log(
  "Our team continued their journey and needed to cross a bridge of the brave,\n it is said that no party can cross this bridge with a coward within them \n"
);
console.log(
  "Let us check if even on of the party member is a coward using isSome"
);
const isCoward = party.some((member) => member === "coward");

console.log("The cowards in the team are:", isCoward);

console.log(
  "Someone needed to guard the bridge until the team finishes its mission,\n Bravo the brave volunteered to do it, we need to filter him out\n"
);

//filter the party and leave Bravo the brave behind
party = party.filter((member) => member !== "Bravo the brave");

console.log("new party is", party);

console.log(
  "The team decided to continue their journey and Bravo the brave decided to stay back guarding the place\n"
);

console.log(
  "After a long journey and defeating some more bugs, it was time for the Harry the healer to stay behind and heal the coders they had freed\n"
);
console.log("let us remove Harry the healer from the party using pop");

//pop Harry the healer
const removed_member = party.pop();

console.log("updated party member:", party);

console.log(
  "now the team had to divide into two smaller teams for the final debugging"
);

const teamA = party.splice(2);
console.log(
  "Team A would take the eastern route, and Team B the western route, both paths filled with traps of logic errors and exceptions.\n"
);
console.log("Team A:", teamA);
console.log("Team B (remaining in party):", party, "\n");

console.log(
  "To navigate the errors, Team A needed to prepare and transform themselves to adapt.\nLet us use map to enhance their titles to 'BugSlayer'."
);

// enhance teamA
let enhancedTeamA = teamA.map((member) => `${member} the BugSlayer`);
console.log("Enhanced Team A:", enhancedTeamA, "\n");

console.log(
  "Meanwhile, Team B faced a trial of purity – they could only proceed if none of them had a trace of 'evil bug' in their name.\n"
);
console.log(
  "Let us use every to ensure every member of Team B is clean of bugs."
);

const isTeamBClean = party.every((member) => !member.includes("bug"));
console.log("Is Team B clean?", isTeamBClean, "\n");

console.log("To confuse the bugs, Team B decided to reverse their formation.");
party.reverse();
console.log("Reversed Team B:", party, "\n");

console.log(
  "The members of Team B then called out their names together using join to signal to Team A."
);

const teamBChant = party.join(" || ");
console.log("Team B chant:", teamBChant, "\n");

console.log(
  "Team A and Team B finally reunited at the mouth of the Great Recursive Cave.\nThey must now unite forces once again to take on the final boss: the Infinite Loop."
);

let fullParty = [...party, ...enhancedTeamA];
console.log("Reunited Party:", fullParty, "\n");

console.log(
  "Before facing the Infinite Loop, the team needed to collect their combined name strength using reduce."
);

const nameStrength = fullParty.reduce((sum, member) => sum + member.length, 0);
console.log("Combined name strength:", nameStrength, "\n");

console.log(
  "They approached the final boss, whose name was encrypted in a string. To identify it, they used from to decode it.\n"
);

const finalBoss = Array.from("InfiniteLoop");
console.log("Final Boss revealed as:", finalBoss.join(""), "\n");

console.log(
  "A hidden message was discovered in the ruins nearby. They had to split it by words to understand the prophecy.\n"
);

const prophecy =
  "Only those who code together can conquer the loops forever".split(" ");
console.log("Prophecy words:", prophecy, "\n");

console.log(
  "With courage in their hearts and arrays in their minds, the party fought the Infinite Loop using all their logic and strength.\n"
);
console.log(
  "After a legendary battle of callbacks and closures, they emerged victorious.\n"
);

console.log(
  "The land of Coders was finally free. The bugs were defeated. The party, forever remembered as heroes, were immortalized in a constant array."
);

const heroes = Object.freeze([...fullParty]);
console.log("Legendary Heroes:", heroes);
