function submitFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Fill all fields");
        return;
    }

    // Get existing data
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    // Add new feedback
    feedbacks.push({
        name: name,
        email: email,
        message: message
    });

    // Save back to localStorage
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    alert("Feedback Submitted Successfully!");

    // Clear fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}