window.onload = () => {
  showLegalOverlayIfNeeded();
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

  document.getElementById("openLegalLink").onclick = (e) => {
    e.preventDefault();
    document.getElementById("legalOverlay").style.display = "flex";
  }; 

  document.getElementById("resetButton").addEventListener("click", () => {
    resetNotes();
    loadStoredData();
    renderCourses();
  });
  
};

function showLegalOverlayIfNeeded() {
  const accepted = localStorage.getItem("legalAccepted");
  const overlay = document.getElementById("legalOverlay");
  const button = document.getElementById("acceptLegalBtn");

  // Handler wird immer gesetzt, auch wenn overlay später geöffnet wird
  button.onclick = () => {
    localStorage.setItem("legalAccepted", "true");
    overlay.style.display = "none";
  };

  if (!accepted) {
    overlay.style.display = "flex";
  }
}

function showDataOverlay() {
  const overlay = document.getElementById("legalOverlay");
  const button = document.getElementById("acceptLegalBtn");

  // Handler wird immer gesetzt, auch wenn overlay später geöffnet wird
  button.onclick = () => {
    localStorage.setItem("legalAccepted", "true");
    overlay.style.display = "none";
  };

  if (!accepted) {
    overlay.style.display = "flex";
  }
}