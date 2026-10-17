var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#",
];

console.log(programmingLanguages);

for (var languages of programmingLanguages) {
  console.log(`I want to learn ${languages}!`);
}

programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}`);
});

var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

console.log(updatedLanguages);