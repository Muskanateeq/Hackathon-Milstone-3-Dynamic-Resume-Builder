var generateResumeHTML = function (data) {
    return "\n    <div class=\"resume\">\n      <h1 class=\"name\">".concat(data.name, "</h1>\n      <div class=\"education\">\n        <h2>Education</h2>\n        <p>").concat(data.education, "</p>\n      </div>\n      <div class=\"experience\">\n        <h2>Experience</h2>\n        <p>").concat(data.experience, "</p>\n      </div>\n      <div class=\"skills\">\n        <h2>Skills</h2>\n        <p>").concat(data.skills, "</p>\n      </div>\n    </div>\n  ");
};
// Sample resume data
var resumeDatas = {
    name: "John Doe",
    education: "Bachelor of Science in Computer Science",
    experience: "Software Engineer at XYZ Corp",
    skills: "JavaScript, TypeScript, CSS, HTML",
};
// chtgpt 3
// Generate resume and add to document
var resumeHTML = generateResumeHTML(resumeDatas);
document.getElementById('resume-container').innerHTML = resumeHTML;
// Insert resume into document
document.getElementById('resume-container').innerHTML = resumeHTML;
// import jsPDF from 'jspdf';
document.addEventListener('DOMContentLoaded', function () {
    var startBtn = document.getElementById('start-btn');
    var resumeForm = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var welcomeScreen = document.getElementById('welcome-screen');
    var form = document.getElementById('form');
    var resumeContent = document.getElementById('resume-content');
    var editBtn = document.getElementById('edit-btn');
    // Show the form when "Create Your Resume" button is clicked
    if (startBtn && welcomeScreen && resumeForm) {
        startBtn.addEventListener('click', function () {
            welcomeScreen.classList.add('hidden');
            resumeForm.classList.remove('hidden');
        });
    }
    // Handle form submission and generate resume content
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Collect user input
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var institution = document.getElementById('institution').value;
        var degree = document.getElementById('degree').value;
        var gradYear = document.getElementById('grad-year').value;
        var company = document.getElementById('company').value;
        var role = document.getElementById('role').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Update resume content
        resumeContent.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            \n            <h3>Education</h3>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(gradYear, "</p>\n            \n            <h3>Work Experience</h3>\n            <p><strong>Company:</strong> ").concat(company, "</p>\n            <p><strong>Role:</strong> ").concat(role, "</p>\n            <p><strong>Description:</strong> ").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n        ");
        // Show resume and hide form
        resumeForm.classList.add('hidden');
        resumeOutput.classList.remove('hidden');
    });
    // Allow editing of the resume
    editBtn.addEventListener('click', function () {
        resumeOutput.classList.add('hidden');
        resumeForm.classList.remove('hidden');
    });
});
// chat gpt
// JavaScript/TypeScript code to add CSS dynamically
var addCSS = function (css) {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
};
// Sample CSS
var css = "\n    .resume {\n      font-family: Arial, sans-serif;\n      color: #333;\n    }\n    .name {\n      font-size: 24px;\n      font-weight: bold;\n    }\n    .education {\n      font-size: 18px;\n    }\n  ";
addCSS(css);
//   // Sample resume data
//   const resumeData = {
//     name: "John Doe",
//     education: "Bachelor of Science in Computer Science",
//     // Other data
//   };
//   // Generate resume and add to document
//   const resumeHTML = generateResumeHTML(resumeData);
//   document.getElementById('resume-container')!.innerHTML = resumeHTML;
// milestone 1
document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(function (slider) {
        // Type assertion to HTMLInputElement
        var inputSlider = slider;
        inputSlider.addEventListener('input', function () {
            console.log("".concat(inputSlider.id, " value: ").concat(inputSlider.value));
        });
    });
});
