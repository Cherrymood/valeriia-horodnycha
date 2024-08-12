document.addEventListener("DOMContentLoaded", function() {
  let today = new Date();
  let thisYear = today.getFullYear();
  let footer = document.querySelector('footer');

  let footerContentDiv = document.createElement('div');
  footerContentDiv.className = 'footer-content';

  let copyright = document.createElement('p');
  copyright.className = 'copyright';
  copyright.innerHTML = `©${thisYear}`;

  let socialMediaList = document.createElement('ul');
  socialMediaList.className = 'social-media';

  let linkedinItem = document.createElement('li');
  linkedinItem.innerHTML = `<a href="https://www.linkedin.com/in/cherrymood">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
    </svg>
  </a>`;
  
  let githubItem = document.createElement('li');
  githubItem.innerHTML = `<a href="https://github.com/Cherrymood">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
      <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
    </svg>
  </a>`;

  socialMediaList.appendChild(linkedinItem);
  socialMediaList.appendChild(githubItem);

  footerContentDiv.appendChild(copyright);
  footerContentDiv.appendChild(socialMediaList);
  footer.appendChild(footerContentDiv);
});

/*-----------Skills---------*/

// Array of skills with categories and technologies
var skills = [
  { category: "Programming Languages", technologies: ["C#", "Python", "JavaScript"] },
  { category: "Database", technologies: ["MySQL", "PostgreSQL"] },
  { category: "Frameworks", technologies: ["Angular", ".NET Core", ".Net", "ReactJS", "Bootstrap"] },
  { category: "Web Technologies", technologies: ["HTML/HTML5", "CSS3", "jQuery", "EJS", "Node.js", "JSON"] }
];

// Select the container where skills will be injected
var skillsContainer = document.querySelector('.skills-container');

// Iterate over the skills array and create elements for each category and technology
skills.forEach(function(skill) {
  var categoryDiv = document.createElement('div');
  categoryDiv.className = 'skill-category';

  var categoryHeading = document.createElement('h3');
  categoryHeading.innerText = skill.category;
  categoryDiv.appendChild(categoryHeading);

  var techList = document.createElement('ul');
  skill.technologies.forEach(function(technology) {
    var techItem = document.createElement('li');
    techItem.className = 'skills-item';
    techItem.innerText = technology;
    techList.appendChild(techItem);
  });

  categoryDiv.appendChild(techList);
  skillsContainer.appendChild(categoryDiv);
});


/*-----------Nav Mobile------------------------*/
function myFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*------------Projects----------------*/
document.addEventListener('DOMContentLoaded', function() {
  const username = 'Cherrymood'; // Replace with your GitHub username
  const projectsContainer = document.querySelector('.projects-container');

  // Define a list of repository names to skip
  const skipRepos = ['chatbot', 'tiktaktoe', 'leetcode-Python', 'count-letter-frequency-', 'leetcode-']; // Add the names of the repositories you want to skip

  fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
          repos.forEach(repo => {
              // Check if the repository name is in the skip list
              if (skipRepos.includes(repo.name)) {
                  return; // Skip this repository
              }
              if(repo.name === 'cafe_game')
              {
                repo.name = 'Game "Cafe';
              }
              if(repo.name === 'valeriia-horodnycha')
              {
                repo.name = 'CTD IO project';
              }

              const repoCard = document.createElement('div');
              repoCard.className = 'repo-card';

              // Create repository link
              const repoName = document.createElement('a');
              repoName.href = repo.html_url;
              repoName.target = '_blank';
              repoName.textContent = repo.name;
              repoName.className = 'repo-name';

              // Create description paragraph
              const repoDescription = document.createElement('p');
              repoDescription.textContent = repo.description || 'No description available';
              repoDescription.className = 'repo-description';

              // Create created date
              const repoDate = document.createElement('p');
              repoDate.textContent = new Date(repo.created_at).toLocaleDateString();
              repoDate.className = 'repo-date';

              // Append elements to the card
              repoCard.appendChild(repoName);
              repoCard.appendChild(repoDescription);
              repoCard.appendChild(repoDate);

              // Append the card to the container
              projectsContainer.appendChild(repoCard);
          });
      })
      .catch(error => console.error('Error fetching repositories:', error));
});

/*-----------certifications---------*/
// Array of certifications
let certifications = [
  { category: "SOLID Principles", url: "https://www.udemy.com/certificate/UC-0afe839c-6c7d-4bed-8119-187c6a19b930/", school: "Udemy", year: 2023 },
  { category: "Foundational C# with Microsoft", url: "https://www.freecodecamp.org/certification/fcc41c73cb0-750b-4780-b261-f9274b26acde/foundational-c-sharp-with-microsoft", school: "freeCodeCamp", year: 2023 },
  { category: "C# Advanced Topics", url: "https://www.udemy.com/certificate/UC-0de7762a-22e0-4430-b8b0-efdd50543e82/", school: "Udemy", year: 2023 },
  { category: "C# Intermediate: Classes, Interfaces and OOP", url: "https://www.udemy.com/certificate/UC-ba843340-a407-4037-80a2-c7c7fab28671/", school: "Udemy", year: 2023 },
  { category: "C# Basics for Beginners", url: "https://www.udemy.com/certificate/UC-3b4ea91a-274f-4b6b-84b2-4b4c9831afcd/", school: "Udemy", year: 2023 },
  { category: "C# Basic", url: "https://www.hackerrank.com/certificates/55760e537b1c", school: "HackerRank", year: 2023 },
  { category: "Master the Data Structures + Algorithms", url: "https://www.udemy.com/certificate/UC-40304951-16a0-4b4a-b141-2cdec0fd4b8c/", school: "Udemy", year: 2023 },
  { category: "Recursion, Backtracking and Dynamic Programming", url: "https://www.udemy.com/certificate/UC-811c9c4e-c5da-4025-a851-18a20ab949ac/", school: "Udemy", year: 2024 },
  { category: "Python Bootcamp", url: "https://www.udemy.com/certificate/UC-ec7b80a9-7cd6-439f-a7f3-bfecb7cdd21f/", school: "Udemy", year: 2023 },
];

// Select the container where certifications will be injected
let certificationsContainer = document.querySelector('.certifications-container');

// Iterate over the certifications array and create elements for each certification
certifications.forEach(function(certification) {
  let certificationDiv = document.createElement('div');
  certificationDiv.className = 'certification-item';

  let certificationHeading = document.createElement('h3');
  let certificationLink = document.createElement('a');
  certificationLink.href = certification.url;
  certificationLink.target = '_blank';
  certificationLink.innerText = certification.category;
  certificationHeading.appendChild(certificationLink);

  let certificationDetails = document.createElement('p');
  certificationDetails.innerText = `${certification.school}, ${certification.year}`;

  certificationDiv.appendChild(certificationHeading);
  certificationDiv.appendChild(certificationDetails);
  certificationsContainer.appendChild(certificationDiv);
});

