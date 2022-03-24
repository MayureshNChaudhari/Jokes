const GetdadJoke = async () => {
  let btnnn = document.querySelector("#btnn");
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  btn();
  btnnn.innerHTML = res.data.joke;
};
var executed = false;
function btn() {
  if (!executed) {
    executed = true;
    document.getElementById("not").style.visibility = "visible";
    const n = document.getElementById("not");
    document.getElementById("haha").style.visibility = "visible";
    const h = document.getElementById("haha");
    n.addEventListener("click",function(){alert("Just Wait I Will make You Laugh")})
    h.addEventListener("click",function(){alert("I Know Its Funny")})
  }
}

