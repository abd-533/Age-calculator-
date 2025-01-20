document.getElementById('calculate-btn').addEventListener('click', calculateAge);

function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdate) {
        resultDiv.textContent = "Please select a birthdate.";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if the current month and day are before the birth month and day
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    resultDiv.textContent = `Your age is ${age} years old.`;
}
