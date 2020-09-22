document.getElementById("butt").addEventListener("click", heronsFormula);

function heronsFormula() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;

  let s = ((a + b + c) / 2);

  document.getElementById("output").innerHTML = Math.sqrt(s * (s - a) * (s - b) * (s - c));
}