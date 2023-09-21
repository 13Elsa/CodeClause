// Get the bold button element
const boldButton = document.getElementById("boldButton");

// Add a listener for the "click" event on the bold button
boldButton.addEventListener("click", function() {
  // Get the current selection in the text editor
  const selection = editor.getSelection();

  // Bold the selected text
  selection.execCommand("bold");
});
