document.addEventListener('DOMContentLoaded', function() {

  // Toolbar
  document.getElementById("social_button").addEventListener("click", social_handler);
  document.getElementById("health_button").addEventListener("click", health_handler);
  document.getElementById("notes_button").addEventListener("click", notes_handler);
  document.getElementById("focus_button").addEventListener("click", focus_handler);
  document.getElementById("meetings_button").addEventListener("click", meetings_handler);

  // submit email
  const submitemailform = document.querySelector('#email-form');
  submitemailform.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = submitemailform['email'].value;
    fetch('https://gracefulbrownparameters.dhruvagrawal.repl.co/social/create/group/' + email)
    .then(response => {
      console.log(response.json())
      const social = document.querySelector('#social');
      const html = `
        <h1>POAOTOTA</h1>
      `;
      social.innerHTML = html;

    });
  });
});



 
// The handler also must go in a .js file
function social_handler() {
  if (document.getElementById("social").style.display !== 'none') {
    document.getElementById("social").style.display = 'none';
  }
  else {
      document.getElementById("social").style.display = 'block';
      document.getElementById("health").style.display = 'none';
      document.getElementById("notes").style.display = 'none';
      document.getElementById("focus").style.display = 'none';
      document.getElementById("meetings").style.display = 'none';  
  }
}

function health_handler() {
  if (document.getElementById("health").style.display !== 'none') {
    document.getElementById("health").style.display = 'none';
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'block';
    document.getElementById("notes").style.display = 'none';
    document.getElementById("focus").style.display = 'none';  
    document.getElementById("meetings").style.display = 'none';  
  }
}
function notes_handler() {
  if (document.getElementById("notes").style.display !== 'none') {
    document.getElementById("notes").style.display = 'none';
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'none';
    document.getElementById("notes").style.display = 'block';
    document.getElementById("focus").style.display = 'none';
    document.getElementById("meetings").style.display = 'none';  
  }
}
function focus_handler() {
  if (document.getElementById("focus").style.display !== 'none') {
    document.getElementById("focus").style.display = 'none';
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'none';
    document.getElementById("notes").style.display = 'none';
    document.getElementById("focus").style.display = 'block';
    document.getElementById("meetings").style.display = 'none';  
  }
}

function meetings_handler() {
  if (document.getElementById("meetings").style.display !== 'none') {
    document.getElementById("meetings").style.display = 'none';
  }
  else {
    document.getElementById("social").style.display = 'none';
      document.getElementById("health").style.display = 'none';
      document.getElementById("notes").style.display = 'none';
      document.getElementById("focus").style.display = 'none';
      document.getElementById("meetings").style.display = 'block';
  }
}