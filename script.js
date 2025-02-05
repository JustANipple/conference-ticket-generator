document.getElementById("uploadAvatar").addEventListener("change", handleFileUpload);
document.querySelector("#ticketForm").addEventListener("submit", handleFormSubmit);

function handleFileUpload(event) {
  const file = event.target.files[0];
  const uploadError = document.getElementById("uploadError");
  const uploadInfo = document.getElementById("uploadInfo");
  const uploadText = document.getElementById("uploadText");
  const uploadActions = document.getElementById("uploadActions");

  if (file && file.type.startsWith("image/png")) {
    if (file.size >= 500000) {
      toggleVisibility(uploadError, true);
      toggleVisibility(uploadInfo, false);
    } else {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("preview").src = e.target.result;
      };
      reader.readAsDataURL(file);
      toggleVisibility(uploadText, false);
      toggleVisibility(uploadActions, true);
    }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  let isValid = true;

  const file = document.getElementById("uploadAvatar").files[0];
  const uploadError = document.getElementById("uploadError");
  const uploadInfo = document.getElementById("uploadInfo");

  if (!file || file.size >= 500000) {
    toggleVisibility(uploadError, true);
    toggleVisibility(uploadInfo, false);
    isValid = false;
  }

  const fullName = document.getElementById("fullName");
  const fullNameError = document.getElementById("fullNameError");
  if (fullName.textLength <= 0) {
    toggleVisibility(fullNameError, true);
    fullName.classList.add("border-e_peach");
    isValid = false;
  }

  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (email.textLength <= 0 || !email.checkValidity()) {
    toggleVisibility(emailError, true);
    email.classList.add("border-e_peach");
    isValid = false;
  }

  const githubUsername = document.getElementById("githubUsername");
  const githubUsernameError = document.getElementById("gitHubUsernameError");
  if (githubUsername.textLength <= 0) {
    toggleVisibility(githubUsernameError, true);
    githubUsername.classList.add("border-e_peach");
    isValid = false;
  }

  if (isValid) {
    // Submit the form
  }
}

function removeImage() {
  document.getElementById("preview").src = "assets/images/icon-upload.svg";
}

function changeImage() {
  document.getElementById("uploadAvatar").click();
}

function toggleVisibility(element, isVisible) {
  if (isVisible) {
    element.classList.remove("hidden");
    element.classList.add("flex");
  } else {
    element.classList.add("hidden");
    element.classList.remove("flex");
  }
}