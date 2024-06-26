function userBirthDate() {
    var input = document.getElementById('birthdate');
    var resultDiv = document.getElementById('result');
    var birthDate = new Date(input.value);
    var today = new Date();

    var diff = today.getTime() - birthDate.getTime();

    var seconds = (diff / 1000);
    var minutes = (diff / 1000 / 60);
    var hours = (diff / 1000 / 60 / 60);
    var days = (diff / 1000 / 60 / 60 / 24);
    var years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);

    resultDiv.innerHTML = `
        <p>Seconds: ${seconds.toFixed(0)}</p>
        <p>Minutes: ${minutes.toFixed(0)}</p>
        <p>Hours: ${hours.toFixed(0)}</p>
        <p>Days: ${days.toFixed(0)}</p>
        <p>Years: ${years}</p>
    `;
}
