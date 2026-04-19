function submitFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Fill all fields");
        return;
    }

    db.ref("feedbacks").push({
        name: name,
        email: email,
        message: message
    });

    alert("Feedback Submitted Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
