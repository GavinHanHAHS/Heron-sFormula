document.getElementById("butt").addEventListener("click", getInput);

function getInput() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  document.getElementById("output").innerHTML = heronsFormula(a, b, c);
}
function heronsFormula(a, b, c) {
  let s = ((a + b + c) / 2);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}