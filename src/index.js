function displayCity(response) {
  new Typewriter("#city", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateTravelDestination(event) {
  event.preventDefault();

  let apiKey = "5b303bcbffcb9458t34a63o545f3d664";
  let instructions = document.querySelector("#user-instructions");
  let prompt = `User instructions: Generate a travel destination based on ${instructions.value}`;
  let context =
    "You're a travel expert and know every city in the World. Your mission is to generate a city destinations in basic HTML. Make sure to follow the user instructions. ONLY provide the name of the city. Do NOT include travel destination";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let cityElement = document.querySelector("#city");
  cityElement.classList.remove("hidden");
  cityElement.innerHTML = `<div class="generating">⏳ Generating a travel destination with the following characteristic ${instructions.value}</div>`;

  axios.get(apiUrl).then(displayCity);
}

let formElement = document.querySelector("#destination-generator-form");

formElement.addEventListener("submit", generateTravelDestination);
