var curr_selection = null;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("social_button").addEventListener("click", function() {
    curr_selection = handler(curr_selection, document.getElementById("social"));
  });

  document.getElementById("health_button").addEventListener("click", function() {
    curr_selection = handler(curr_selection, document.getElementById("health"));
  });

  document.getElementById("notes_button").addEventListener("click", function() {
    curr_selection = handler(curr_selection, document.getElementById("notes"));
  });

  document.getElementById("focus_button").addEventListener("click", function() {
    curr_selection = handler(curr_selection, document.getElementById("focus"));
  });
});


function handler(curr_selection, tool_select) {
  if (curr_selection === tool_select) {
    tool_select.style.display = 'none';
    return null;
  }

  const tools = Array.from(document.getElementsByClassName('tool'));
  tools.forEach(tool => {
    tool.style.display = ((tool !== tool_select) ? 'none' : 'block');
  });

  // const tool_icons = Array.from(document.getElementsByClassName('home-btn'));
  // tool_icons.forEach(icon => {
  //   icon.style.color = ((icon.id !== tool_select) ? 'red' : 'pink');
  // });

  return tool_select
}