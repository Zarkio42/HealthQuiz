const input = document.getElementById('inputCpf');

input.addEventListener("input", pontuar);

function pontuar() {
  let value = input.value.replace(/\D/g, '');
  let formattedValue = '';

  for (let i = 0; i < value.length; i++) {
    if (i === 3 || i === 6) {
      formattedValue += '.';
    } else if (i === 9) {
      formattedValue += '-';
    }
    formattedValue += value[i];
  }

  input.value = formattedValue;
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
    
    alert("Login realizado com sucesso!")
    console.log(profile[0]);
    window.location.href = "http://127.0.0.1:5500/HealthQuiz/AdminLTE-3.2.0/questionario.html";
  }