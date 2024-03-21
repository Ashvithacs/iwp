function toggleDropdown(select) {
    const dropdownMenu = select.nextElementSibling;
    dropdownMenu.classList.toggle('show');
}

function selectOption(option) {
    const selectedOption = option.trim();
    const select = document.querySelector('.dropdown .select span');
    select.innerHTML = ''; // Clear existing content

    // Create image element for selected mood
    const img = document.createElement('img');
    img.src = `${selectedOption.toLowerCase()}-face.png`; // Assuming images are named accordingly
    img.alt = selectedOption;
    select.appendChild(img);

    // Add text next to the image
    select.appendChild(document.createTextNode(selectedOption));

    // Logic for transitioning to the next question and updating dropdown options
    const currentQuestion = document.querySelector('.question:not(.hidden)');
    const nextQuestion = currentQuestion.nextElementSibling;
    const nextQuestionId = nextQuestion.id;

    currentQuestion.classList.add('hidden');

    if (nextQuestion) {
        nextQuestion.classList.remove('hidden');

        // Update dropdown options based on selected mood (in this example)
        const companionsDropdown = nextQuestion.querySelector('.select');
        const mood = selectedOption.toLowerCase();

        if (mood === 'happy') {
            companionsDropdown.innerHTML = `
                <option value="alone">Alone</option>
                <option value="friends">With Friends</option>
                <option value="family">With Family</option>
            `;
        } else if (mood === 'sad' || mood === 'neutral') {
            companionsDropdown.innerHTML = `
                <option value="alone">Alone</option>
                <option value="friends">With Friends</option>
            `;
        }
    } else {
        document.getElementById('get-recommendation-button').classList.remove('hidden');
    }
}

function showNextQuestion() {
    const currentQuestion = document.querySelector('.question:not(.hidden)');
    const nextQuestion = currentQuestion.nextElementSibling;

    currentQuestion.classList.add('hidden');

    if (nextQuestion) {
        nextQuestion.classList.remove('hidden');
    } else {
        document.getElementById('get-recommendation-button').classList.remove('hidden');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.select')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function recommendMovie() {
    // Get the selected options
    const mood = document.querySelector('#question1 .dropdown .select span').textContent.trim();
    const companions = document.querySelector('#question2 .dropdown .select span').textContent.trim();
    // Add more variables for other questions as needed

    // Implement your logic to recommend a movie based on user inputs
    let recommendation = "Based on your selections:\n";
    recommendation += "- Mood: " + mood + "\n";
    recommendation += "- Companions: " + companions + "\n";
    // Add recommendations based on other questions

    // Display the recommendation
    alert(recommendation);
}
