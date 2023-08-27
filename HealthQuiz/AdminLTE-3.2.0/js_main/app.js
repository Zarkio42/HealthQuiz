const btnNext = document.querySelectorAll(".btnNext");
const btnPrev = document.querySelectorAll(".btnPrev");
const btnSend = document.querySelectorAll("#btnSend");

function nextCard() {
  const carousel = document.getElementById("carouselExample");
  const activeItem = carousel.querySelector(".card.carousel-item.active");
  const nextItem = activeItem.nextElementSibling;

  if (nextItem) {
    activeItem.classList.remove("active");
    nextItem.classList.add("active");
  }
}

function prevCard() {
  const carousel = document.getElementById("carouselExample");
  const activeItem = carousel.querySelector(".card.carousel-item.active");
  const prevItem = activeItem.previousElementSibling;

  activeItem.classList.remove("active");
  prevItem.classList.add("active");
}

function sendInfo() {
  const profile = [
    {
      nome: document.getElementById("inputName").value,
      cpf: document.getElementById("inputCpf").value,
      date: document.getElementById("inputDate").value,
      estado: document.getElementById("inputState").value,
      sexo: document.getElementById("inputGender").value,
    },
    {

    }

  ]

  console.log(profile[0]);
}


