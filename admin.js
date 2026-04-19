let table = document.getElementById("tableData");

// Load from Firebase
db.ref("feedbacks").on("value", snapshot => {
    table.innerHTML = "";

    snapshot.forEach(child => {
        let fb = child.val();

        let row = `<tr>
            <td>${fb.name}</td>
            <td>${fb.email}</td>
            <td>${fb.message}</td>
        </tr>`;

        table.innerHTML += row;
    });
});

// Excel Download
function downloadExcel() {
    let csv = "Name,Email,Message\n";

    db.ref("feedbacks").once("value", snapshot => {
        snapshot.forEach(child => {
            let fb = child.val();
            csv += `${fb.name},${fb.email},${fb.message}\n`;
        });

        let blob = new Blob([csv], { type: "text/csv" });
        let a = document.createElement("a");

        a.href = URL.createObjectURL(blob);
        a.download = "feedback.csv";
        a.click();
    });
}
