function uploadPhoto() {
    const photoInput = document.getElementById("photoInput");
    const uploadedPhoto = document.getElementById("uploadedPhoto");

    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedPhoto.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select a photo to upload.");
    }
}

function enterCode() {
    const uniqueCode = document.getElementById("uniqueCode").value;

    // Handle the unique code logic here (e.g., check if it's valid).

    alert("Entered Unique Code: " + uniqueCode);
}