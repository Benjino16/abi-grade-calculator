window.onload = () => {
  document.getElementById("viewToggle").checked = true;
  loadStoredData();
  renderCourses();

  document.getElementById("viewToggle").addEventListener("change", () => {
    isAdvancedView = document.getElementById("viewToggle").checked;
    renderCourses();
  });
  
};
