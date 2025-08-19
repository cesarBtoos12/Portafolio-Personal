const buttons = document.querySelectorAll(".skills-tabs button");
const lists = document.querySelectorAll(".skills-list");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Desactivar botones
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Mostrar lista correspondiente
    const target = button.dataset.tab;
    lists.forEach(list => {
      list.id === target ? list.classList.remove("hidden") : list.classList.add("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  // Leer preferencia de tema guardada
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    themeSwitch.checked = true;
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    themeSwitch.checked = false;
  }

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      body.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
});


