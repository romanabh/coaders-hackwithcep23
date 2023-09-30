document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const address = document.getElementById("address").value;
        const bloodgroup = document.getElementById("bloodgroup").value;
        const phonenumber = document.getElementById("phonenumber").value;

        // Do something with the form data, e.g., send it to a server or display it
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Address:", address);
        console.log("Blood Group:", bloodgroup);
        console.log("Phone Number:", phonenumber);

        // You can add code here to send the data to a server or perform further actions.
    });
});
