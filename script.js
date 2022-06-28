function Contar() {
    let inicio1 = document.getElementById("início");
    let fim1 = document.getElementById("Fim");
    let intervalo1 = document.getElementById("intervalo");
    let res = document.getElementById("res");
  
    if (inicio1 == 0 || fim1 == 0 || intervalo1 == 0) {
      alert("Faltam dados");
    } else {
      res.innerHTML = "Fazendo contagem: ";
      let i = Number(inicio1.value);
      let f = Number(fim1.value);
      let p = Number(intervalo1.value);
  
      for (let c = i; c <= f; c += p) res.innerHTML += ` ${c} `;
    }
  }
  