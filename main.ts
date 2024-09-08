// import jsPDF from 'jspdf';
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    const welcomeScreen = document.getElementById('welcome-screen') as HTMLDivElement;
    const form = document.getElementById('form') as HTMLFormElement;
    const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
    const editBtn = document.getElementById('edit-btn') as HTMLButtonElement;

    // Show the form when "Create Your Resume" button is clicked
    if (startBtn && welcomeScreen && resumeForm) {
    startBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        resumeForm.classList.remove('hidden');
    });
}

    // Handle form submission and generate resume content
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect user input
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const institution = (document.getElementById('institution') as HTMLInputElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const role = (document.getElementById('role') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Update resume content
        resumeContent.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <h3>Education</h3>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Graduation Year:</strong> ${gradYear}</p>
            
            <h3>Work Experience</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Description:</strong> ${experience}</p>
            
            <h3>Skills</h3>
            <p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
        `;

        // Show resume and hide form
        resumeForm.classList.add('hidden');
        resumeOutput.classList.remove('hidden');
    });

    // Allow editing of the resume
    editBtn.addEventListener('click', () => {
        resumeOutput.classList.add('hidden');
        resumeForm.classList.remove('hidden');
    });
});
  