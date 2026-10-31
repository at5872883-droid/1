function chooseModel(modelName) {
  document.getElementById("model").value = modelName;
  document.getElementById("order").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phoneInput").value;
  const model = document.getElementById("model").value || "Индивидуальный проект";

  const message = `Здравствуйте! Меня зовут ${name}.
Интересует: ${model}.
Мой телефон: ${phone}`;

  const telegramUsername = "bakaykaa1";

  const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

  window.open(telegramLink, "_blank");
});