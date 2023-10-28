function sendMail() {
  var params = {
    nompost: document.getElementById("nompost").value,
    prenompost: document.getElementById("prenompost").value,
    emailpost: document.getElementById("emailpost").value,
    numtelpost: document.getElementById("numtelpost").value,
    messagepost: document.getElementById("messagepost").value
  };
  const ServiceID = "service_v4mz93l";
  const templateID = "template_1s80a6d";

  emailjs
    .send(ServiceID, templateID, params)
    .then((res) => {
      document.getElementById("nompost").value = "";
      document.getElementById("prenompost").value = "";
      document.getElementById("emailpost").value = "";
      document.getElementById("numtelpost").value = "";
      document.getElementById("messagepost").value = "";
      console.log(res);
      alert("message envoyé");
    })
    .catch((err) => console.log(err));
}
