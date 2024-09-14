document.addEventListener('DOMContentLoaded', function () {
    var startBtn = document.getElementById('start-btn');
    var resumeForm = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var welcomeScreen = document.getElementById('welcome-screen');
    var form = document.getElementById('form');
    var resumeContent = document.getElementById('resume-content');
    var editBtn = document.getElementById('edit-btn');
    var uploadInput = document.getElementById('upload');
    var profilePicture = document.getElementById('profile-picture');
    var printBtn = document.getElementById('print-btn');
    var uploadedImageSrc = null;
    // Show the form when "Create Your Resume" button is clicked
    startBtn.addEventListener('click', function () {
        welcomeScreen.classList.add('hidden');
        resumeForm.classList.remove('hidden');
    });
    // Handle file upload for profile picture
    uploadInput.addEventListener('change', function () {
        var _a;
        var file = (_a = uploadInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                uploadedImageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                profilePicture.src = uploadedImageSrc;
                profilePicture.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
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
        var skills = document.getElementById('skills').value.split(',');
        // Generate resume content
        resumeContent.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(uploadedImageSrc || '', "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%; border: 2px solid #ddd;\" />\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Graduation Year:</strong> ").concat(gradYear, "</p>\n\n            <h3>Work Experience</h3>\n            <p><strong>Company:</strong> ").concat(company, "</p>\n            <p><strong>Role:</strong> ").concat(role, "</p>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills.map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n        ");
        // Show resume and hide form
        resumeForm.classList.add('hidden');
        resumeOutput.classList.remove('hidden');
    });
    // Allow editing of the resume
    editBtn.addEventListener('click', function () {
        resumeOutput.classList.add('hidden');
        resumeForm.classList.remove('hidden');
    });
    // Print resume functionality
    printBtn.addEventListener('click', function () {
        window.print(); // Opens the browser's print dialog
    });
});
