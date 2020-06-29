const btn = document.querySelector(".btn"),
  content = document.querySelector(".content");

// add some robot response

const greeting = [
  "I am better than you",
  "I am good what about you",
  "are you lonely enough to ask robot this question",
];

const name = [
  "why you want to know my name",
  "I do not have name yet but sure will be btter than alexa and siri",
  "do you want tot marry  me?",
];

const age = [
  "my age is 0 years 0 months 0 weeks 0 days 1 hour",
  "my age is 0 years 0 months 0 weeks 0 days 2 hours",
  "my age is 0 years 0 months 0 weeks 0 days 3 hours",
];

const bestPerson = ["sure it is the prophit mohamed"];

const bestTeam = [
  "sure zamalek",
  "are you crazy why you aske this crazy question sure it will not be the watches club it is Zamalek",
];

const love = [
  "sure I love you so much",
  "you are a beautiful person I must love you",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

recognition.onstart = function () {
  console.log("you are speaking now");
};

recognition.onresult = function (e) {
  const currentIndex = e.resultIndex;
  const transcript = e.results[currentIndex][0].transcript;

  content.textContent = transcript;

  computerSpeak(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function computerSpeak(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text =
    "I can not understand because mohamed sayed did not develop me to answer this question or your accent is shit";

  if (message.includes("how are you")) {
    speech.text = greeting[Math.floor(Math.random() * greeting.length)];
  }

  if (message.includes("your age") || message.includes("old are you")) {
    speech.text = age[Math.floor(Math.random() * age.length)];
  }

  if (message.includes("best person")) {
    speech.text = bestPerson[Math.floor(Math.random() * bestPerson.length)];
  }

  if (message.includes("best team")) {
    speech.text = bestTeam[Math.floor(Math.random() * bestTeam.length)];
  }

  if (message.includes("love me")) {
    speech.text = love[Math.floor(Math.random() * love.length)];
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
