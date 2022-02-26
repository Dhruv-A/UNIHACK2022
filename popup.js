var curr_selection = null;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("social_button").addEventListener("click", function() {
    const social_tool = document.getElementById("social");
    handler(curr_selection, social_tool);
    
  });
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

function handler(curr_selection, tool_select) {
  console.log("click")
  if (curr_selection === tool_select) {
    tool_select.style.display = 'none';
    curr_selection = null;
    console.log("ping")
  } else {
    console.log("pong")
    curr_selection = tool_select;
    const tools = Array.from(
      document.getElementsByClassName('tool')
    );
    tools.forEach(tool => {
      if (tool === curr_selection) {
        tool.style.display = 'block';
      } else {
        tool.style.display = 'none';
      };
    });
  }
  
  
  
}

// The handler also must go in a .js file
// function social_handler(selected) {
//   selected = getElementById("social")
//   if (document.getElementById("social").style.display !== 'none') {
//     document.getElementById("social").style.display = 'none';
//   }
//   else {
//     document.getElementById("social").style.display = 'block';
//     document.getElementById("health").style.display = 'none';
//     document.getElementById("notes").style.display = 'none';
//     document.getElementById("focus").style.display = 'none';
//   }
// }

// function health_handler() {
//   if (document.getElementById("health").style.display !== 'none') {
//     document.getElementById("health").style.display = 'none';
//   }
//   else {
//     document.getElementById("social").style.display = 'none';
//     document.getElementById("health").style.display = 'block';
//     document.getElementById("notes").style.display = 'none';
//     document.getElementById("focus").style.display = 'none';  }
// }
// function notes_handler() {
//   if (document.getElementById("notes").style.display !== 'none') {
//     document.getElementById("notes").style.display = 'none';
//   }
//   else {
//     document.getElementById("social").style.display = 'none';
//     document.getElementById("health").style.display = 'none';
//     document.getElementById("notes").style.display = 'block';
//     document.getElementById("focus").style.display = 'none';  }
// }
// function focus_handler() {
//   if (document.getElementById("focus").style.display !== 'none') {
//     document.getElementById("focus").style.display = 'none';
//   }
//   else {
//     document.getElementById("social").style.display = 'none';
//     document.getElementById("health").style.display = 'none';
//     document.getElementById("notes").style.display = 'none';
//     document.getElementById("focus").style.display = 'block';  }
// }