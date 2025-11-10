// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Hire button -> scroll to contact form
document.getElementById('hireBtn').addEventListener('click', () => {
    const contact = document.getElementById('name');
    contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => contact.focus(), 400);
});

// Fake Send Message
document.getElementById('sendMsg').addEventListener('click', () => {
    const n = document.getElementById('name').value.trim();
    const e = document.getElementById('email').value.trim();
    const m = document.getElementById('message').value.trim();
    if (!n || !e || !m) {
        alert('Please fill name, email and message.');
        return;
    }
    alert('Thank you ' + n + "! Your message was sent (demo).\nCall: 7505039356");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Resume download generator
function generateResumeText() {
    const lines = [];
    lines.push('Sandy Sharma');
    lines.push('Web Developer & UI Designer');
    lines.push('Location: Patel Nagar, New Delhi');
    lines.push('Phone: +91 7505039356');
    lines.push('Email: youremail@example.com');
    lines.push('\nAbout:');
    lines.push('Passionate web developer and UI designer. Builds modern, responsive websites with a focus on clean UI and performance.');
    lines.push('\nSkills: HTML, CSS, JavaScript, UI/UX, Figma, Git');
    lines.push('\nExperience: Freelance Web Developer (2023 - Present)');
    lines.push('\nEducation: B.Com (New Delhi)');
    lines.push('\nCertifications: Web Development Certification');
    lines.push('\nAchievements: Active learner in stock market and web dev');
    return lines.join('\n');
}

document.getElementById('downloadResume').addEventListener('click', () => {
    const text = generateResumeText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sandy_Sharma_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
});
