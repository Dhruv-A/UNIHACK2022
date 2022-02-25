document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("social_button").addEventListener("click", social_handler);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("health_button").addEventListener("click", health_handler);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("notes_button").addEventListener("click", notes_handler);
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("focus_button").addEventListener("click", focus_handler);
});

// The handler also must go in a .js file
function social_handler() {
  if (document.getElementById("social").style.display !== 'none') {
    document.getElementById("social").style.display = 'none';
  }
  else {
      document.getElementById("social").style.display = 'block';
  }
}

function health_handler() {
  if (document.getElementById("health").style.display !== 'none') {
    document.getElementById("health").style.display = 'none';
  }
  else {
      document.getElementById("health").style.display = 'block';
  }
}
function notes_handler() {
  if (document.getElementById("notes").style.display !== 'none') {
    document.getElementById("notes").style.display = 'none';
  }
  else {
      document.getElementById("notes").style.display = 'block';
  }
}
function focus_handler() {
  if (document.getElementById("focus").style.display !== 'none') {
    document.getElementById("focus").style.display = 'none';
  }
  else {
      document.getElementById("focus").style.display = 'block';
  }
}