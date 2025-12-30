function colorChange() {
  const button = document.getElementById("button");
  const colorText = document.getElementsByClassName("colorText");
  const colors = document.getElementById("colors");
  button.addEventListener("click", () => {
    button.innerText = "cliked";
    button.disabled = true;
  });

  const color = ["yellow", "red", "blue"];

  for (let i = 0; i < color.length; i++) {
    //   colorText[i].style.color = colorText[i].getAttribute("color");
    const c = document.createElement("button");
    c.style.backgroundColor = color[i];
    c.style.height = "30px";
    c.style.width = "30px";
    c.setAttribute("color",color[i])
    colors.appendChild(c)
  }
}

colorChange();
