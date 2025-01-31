document
  .getElementById("uploadAvatar")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/png")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.getElementById("preview");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PNG file");
    }
  });
