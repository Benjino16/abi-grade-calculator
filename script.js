window.onload = () => {
  document.getElementById("viewToggle").checked = false;
  loadStoredData();
  renderCourses();

  document.getElementById("viewToggle").addEventListener("change", () => {
    isAdvancedView = document.getElementById("viewToggle").checked;
    renderCourses();
  });

  const showCriteriaCheckbox = document.getElementById("showCriteria");
  const resultList = document.getElementById("criteriaResults");

  showCriteriaCheckbox.addEventListener("change", () => {
    updateCriteriaResults();
  }); 
  
};
