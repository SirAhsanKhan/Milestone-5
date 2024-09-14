// Get input elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

// Get display elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayExperience = document.getElementById('display-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;

// Add event listeners for real-time updates
nameInput.addEventListener('input', () => {
    displayName.textContent = nameInput.value || 'Your Name';
});

emailInput.addEventListener('input', () => {
    displayEmail.textContent = emailInput.value || 'Your Email';
});

experienceInput.addEventListener('input', () => {
    displayExperience.textContent = experienceInput.value || 'Your experience goes here.';
});

skillsInput.addEventListener('input', () => {
    displaySkills.textContent = skillsInput.value || 'Your skills go here.';
});

// Function to save resume and get a shareable URL
async function saveResume() {
    const response = await fetch('/api/saveResume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            experience: experienceInput.value,
            skills: skillsInput.value,
        }),
    });

    const data = await response.json();
    if (response.ok) {
        const shareableURL = window.location.origin + data.url;
        alert(`Resume saved! Shareable URL: ${shareableURL}`);
    } else {
        alert(`Error: ${data.message}`);
    }
}

// Function to download resume as PDF
async function downloadPDF() {
    const resumeElement = document.querySelector('#resume-preview') as HTMLElement;

    const options = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeElement).set(options).save();
}

// Add event listeners to buttons
document.getElementById('save-url')?.addEventListener('click', saveResume);
document.getElementById('download-pdf')?.addEventListener('click', downloadPDF);
