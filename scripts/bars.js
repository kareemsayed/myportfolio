function navbar() {
    let navbarHTML = `
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand homepage-link">
        <a href="index.html" target="_blank" class="navbar-icons mb-0 h1" id="my-name"> 
            <img src="icons/Beyond.png" class="Beyond-logo" alt="Homepage">
            Karim Sayed 
        </a>
        </span>
        <div class="navbar-icons-div">
        
            <div class="dropdown navbar-icons">
                <img src="icons/resume.png" class="navbar-icons dropdown-toggle" alt="Resume" data-bs-toggle="dropdown" aria-expanded="false">
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="resumes/KarimSayedResumeGraphics.pdf" target="_blank">Graphics Programmer Resume</a></li>
                    <li><a class="dropdown-item" href="resumes/KarimSayedResumeCPP.pdf" target="_blank">C++ Programmer Resume</a></li>
                </ul>
            </div>

        
            <a href="mailto:karimsayedre@gmail.com" target="_blank">
                <img src="icons/email.png" class="navbar-icons" alt="Email Address">
            </a>
            <a href="https://www.linkedin.com/in/karimsayedre/" target="_blank">
                <img src="icons/linkedin.png" class="navbar-icons" alt="LinkedIn Account">
            </a>
            <a href="https://github.com/karimsayedre" target="_blank">
                <img src="icons/github.png" class="navbar-icons" alt="Github Account">
            </a>

            <a href="https://discord.com/users/karimsayedib" target="_blank">
                <img src="icons/discord.png" class="navbar-icons" alt="Discord Account">
            </a>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('beforeend', navbarHTML);
}

function footer() {
    let footerHTML = `
    <footer>
        <div class="footer-icons text-center">
            
            <div class="dropdown footer-icons">
                <img src="icons/resume.png" class="navbar-icons dropdown-toggle" alt="Resume" data-bs-toggle="dropdown" aria-expanded="false">
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="resumes/KarimSayedResumeGraphics.pdf" target="_blank">Graphics Programmer Resume</a></li>
                    <li><a class="dropdown-item" href="resumes/KarimSayedResumeCPP.pdf" target="_blank">C++ Programmer Resume</a></li>
                </ul>
            </div>

            <a href="mailto:karimsayedre@gmail.com" target="_blank">
                <img src="icons/email.png" class="navbar-icons" alt="Email Address">
            </a>
            <a href="https://www.linkedin.com/in/karimsayedre/" target="_blank">
                <img src="icons/linkedin.png" class="navbar-icons" alt="LinkedIn Account">
            </a>
            <a href="https://github.com/karimsayedre" target="_blank">
                <img src="icons/github.png" class="navbar-icons" alt="Github Account">
            </a>
            <a href="https://discord.com/users/karimsayedib" target="_blank">
                <img src="icons/discord.png" class="navbar-icons" alt="Discord Account">
            </a>
        </div>
        <p class="text-center">© 2025 Karim Sayed. All rights reserved.</p>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}