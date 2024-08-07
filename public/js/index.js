document.addEventListener("DOMContentLoaded", function() {

    var today = new Date();
    
    var thisYear = today.getFullYear();
    
    var footer = document.querySelector('footer');
    
    var copyright = document.createElement('p');
    
    copyright.innerHTML = `©Valeriia ${thisYear}`;
    
    footer.appendChild(copyright);

    var footerContentDiv = document.createElement('div');
    footerContentDiv.className = 'footer-content';

    var socialMediaList = document.createElement('ul');
    socialMediaList.className = 'social-media';

    var linkedinItem = document.createElement('li');
    var linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/cherrymood';
    linkedinLink.innerHTML = `
      <svg class="social-icons" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9.02h3.56v11.43zM5.34 7.58c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05zm15.1 12.87h-3.55v-5.8c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.05v5.91H9.22V9.02h3.41v1.56h.05c.47-.9 1.61-1.85 3.31-1.85 3.54 0 4.19 2.33 4.19 5.37v6.35z"/>
      </svg>
    `;
    linkedinItem.appendChild(linkedinLink);

    var githubItem = document.createElement('li');
    var githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/Cherrymood';
    githubLink.innerHTML = `
      <svg class="social-icons" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.45.55.38A8.003 8.003 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    `;
    githubItem.appendChild(githubLink);

    socialMediaList.appendChild(linkedinItem);
    socialMediaList.appendChild(githubItem);

    footerContentDiv.appendChild(socialMediaList);
    footer.appendChild(footerContentDiv);

    function handleFileSelect(event) {
        var file = event.target.files[0];
        var fileInfo = document.getElementById('fileInfo');
        
        if (file) {
            fileInfo.textContent = `File Name: ${file.name}, File Size: ${file.size} bytes, File Type: ${file.type}`;
        } else {
            fileInfo.textContent = 'No file selected.';
        }
    }

    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', handleFileSelect);
});
