document
  .getElementById("uploadAvatar")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/png")) {
      if (file.size >= 500000) {
        document.getElementById("uploadError").classList.remove("hidden");
        document.getElementById("uploadError").classList.add("flex");
        document.getElementById("uploadInfo").classList.add("hidden");
      } else {
        const reader = new FileReader();

        reader.onload = function (e) {
          const img = document.getElementById("preview");
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
        document.getElementById("uploadText").classList.add("hidden");
        document.getElementById("uploadActions").classList.remove("hidden");
      }
    }
  });

function removeImage() {
  const img = document.getElementById("preview");
  img.src = "assets/images/icon-upload.svg";
}

function changeImage() {
  document.getElementById("uploadAvatar").click();
}

const form = document.querySelector("#ticketForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  const uploadInfo = document.getElementById("uploadInfo");
  const uploadError = document.getElementById("uploadError");
  const file = document.getElementById("uploadAvatar").files[0];
  if (file == undefined || file.size >= 500000) {
    uploadError.classList.remove("hidden");
    uploadError.classList.add("flex");
    uploadInfo.classList.add("hidden");
    isValid = false;
    console.log("non valido");
  }

  const fullName = document.getElementById("fullName");
  const fullNameError = document.getElementById("fullNameError");
  if (fullName.textLength <= 0) {
    fullNameError.classList.remove("hidden");
    fullNameError.classList.add("flex");
    fullName.classList.add("border-e_peach");
    isValid = false;
    console.log("non valido");
  }

  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (email.textLength <= 0 || !email.checkValidity()) {
    emailError.classList.remove("hidden");
    emailError.classList.add("flex");
    email.classList.add("border-e_peach");
    isValid = false;
    console.log("non valido");
  }

  const gitHubUsername = document.getElementById("githubUsername");
  const gitHubUsernameError = document.getElementById("gitHubUsernameError");
  if (gitHubUsername.textLength <= 0) {
    gitHubUsernameError.classList.remove("hidden");
    gitHubUsernameError.classList.add("flex");
    gitHubUsername.classList.add("border-e_peach");
    isValid = false;
    console.log("non valido");
  }

  if (isValid) form.submit();
});
