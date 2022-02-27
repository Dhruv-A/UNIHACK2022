document.addEventListener('DOMContentLoaded', function() {
  // Toolbar
  document.getElementById("social_button").addEventListener("click", social_handler);
  document.getElementById("health_button").addEventListener("click", health_handler);
  document.getElementById("focus_button").addEventListener("click", focus_handler);
  document.getElementById("notes_button").addEventListener("click", notes_handler);
  document.getElementById("meetings_button").addEventListener("click", meetings_handler);

  document.getElementById("social-btn").addEventListener("click", function() {
    leave_home()
    social_handler()
  });
  document.getElementById("health-btn").addEventListener("click", function() {
    leave_home()
    health_handler()
  });
  document.getElementById("focus-btn").addEventListener("click", function() {
    leave_home()
    focus_handler()
  });
  document.getElementById("notes-btn").addEventListener("click", function() {
    leave_home()
    notes_handler()
  });
  document.getElementById("meetings-btn").addEventListener("click", function() {
    leave_home()
    notes_handler()
  });

  // submit email
  const submitemailform = document.querySelector('#email-form');
  submitemailform.addEventListener('submit', (e) => {

    const social = document.querySelector('#social');
      const html = `
      <div class="matched">
        <p>You've been matched with Jim!</p>
        <p>Here is your zoom</p>
        <br>
        <a id="zoom" href="https://us05web.zoom.us/j/4255070821?pwd=K0o2ZGVGTWtHekNaaWlvMWtGTWxFdz09#success">Join zoom</a>
        <br>
        <br>
        <p>Alternatively, you can contact Jim via jim@company.com</p>
      </div>
        `;
      social.innerHTML = html;
  });
});

function leave_home() {
  document.getElementById("intro").style.display = 'none';
  document.getElementById("homebar").style.display = 'block';
}

// The handler also must go in a .js file
function social_handler() {
  if (document.getElementById("social").style.display !== 'none') {
    document.getElementById("social").style.display = 'none';
    document.getElementById("social_button").style.color = '#3B969C'
  }
  else {
      document.getElementById("social").style.display = 'block';
      document.getElementById("health").style.display = 'none';
      document.getElementById("notes").style.display = 'none';
      document.getElementById("focus").style.display = 'none';
      document.getElementById("meetings").style.display = 'none';

      document.getElementById("social_button").style.color = '#FF8A1E'
      document.getElementById("health_button").style.color = '#3B969C'  
      document.getElementById("notes_button").style.color = '#3B969C'  
      document.getElementById("focus_button").style.color = '#3B969C'  
      document.getElementById("meetings_button").style.color = '#3B969C'    
  }
}

function health_handler() {
  if (document.getElementById("health").style.display !== 'none') {
    document.getElementById("health").style.display = 'none';
    document.getElementById("health_button").style.color = '#3B969C'
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'block';
    document.getElementById("notes").style.display = 'none';
    document.getElementById("focus").style.display = 'none';  
    document.getElementById("meetings").style.display = 'none';

    document.getElementById("social_button").style.color = '#3B969C'
    document.getElementById("health_button").style.color = '#FF8A1E'  
    document.getElementById("notes_button").style.color = '#3B969C'  
    document.getElementById("focus_button").style.color = '#3B969C'  
    document.getElementById("meetings_button").style.color = '#3B969C'    
  }
}
function notes_handler() {
  if (document.getElementById("notes").style.display !== 'none') {
    document.getElementById("notes").style.display = 'none';
    document.getElementById("notes_button").style.color = '#3B969C'
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'none';
    document.getElementById("notes").style.display = 'block';
    document.getElementById("focus").style.display = 'none';
    document.getElementById("meetings").style.display = 'none'; 
    
    document.getElementById("social_button").style.color = '#3B969C'
    document.getElementById("health_button").style.color = '#3B969C'  
    document.getElementById("notes_button").style.color = '#FF8A1E'  
    document.getElementById("focus_button").style.color = '#3B969C'  
    document.getElementById("meetings_button").style.color = '#3B969C'
  }
}
function focus_handler() {
  if (document.getElementById("focus").style.display !== 'none') {
    document.getElementById("focus").style.display = 'none';
    document.getElementById("focus_button").style.color = '#3B969C'
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'none';
    document.getElementById("notes").style.display = 'none';
    document.getElementById("focus").style.display = 'block';
    document.getElementById("meetings").style.display = 'none';  

    document.getElementById("social_button").style.color = '#3B969C'
    document.getElementById("health_button").style.color = '#3B969C'  
    document.getElementById("notes_button").style.color = '#3B969C'  
    document.getElementById("focus_button").style.color = '#FF8A1E'  
    document.getElementById("meetings_button").style.color = '#3B969C'
  }
}

function meetings_handler() {
  if (document.getElementById("meetings").style.display !== 'none') {
    document.getElementById("meetings").style.display = 'none';
    document.getElementById("meeting_button").style.color = '#3B969C'
  }
  else {
    document.getElementById("social").style.display = 'none';
    document.getElementById("health").style.display = 'none';
    document.getElementById("notes").style.display = 'none';
    document.getElementById("focus").style.display = 'none';
    document.getElementById("meetings").style.display = 'block';

    document.getElementById("social_button").style.color = '#3B969C'
    document.getElementById("health_button").style.color = '#3B969C'  
    document.getElementById("notes_button").style.color = '#3B969C'  
    document.getElementById("focus_button").style.color = '#3B969C'  
    document.getElementById("meetings_button").style.color = '#FF8A1E'
  }
}