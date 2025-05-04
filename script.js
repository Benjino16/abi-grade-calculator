const courses = [
    { name: "Leistungskurs 1", factor: 13 },
    { name: "Leistungskurs 2", factor: 13 },
    { name: "Grundkurs 1", factor: 9 },
    { name: "Grundkurs 2", factor: 9 },
    { name: "Mündlicher GK 1", factor: 4 },
    { name: "Mündlicher GK 2", factor: 4 },
    { name: "Anrechnungskurs 1", factor: 4 },
    { name: "Anrechnungskurs 2", factor: 4 }
  ];
  
  const state = Array(courses.length).fill(null);
  const container = document.getElementById("courses");
  const totalSpan = document.getElementById("total");
  const gradeSpan = document.getElementById("grade");
  
  function renderCourses() {
    courses.forEach((course, index) => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course";
  
      const title = document.createElement("div");
      title.className = "course-title";
      title.textContent = course.name + ` (Faktor ${course.factor})`;
  
      const btnContainer = document.createElement("div");
      btnContainer.className = "note-options";
  
      for (let i = 0; i <= 15; i++) {
        const btn = document.createElement("button");
        btn.className = "note-btn";
        btn.textContent = i;
        btn.onclick = () => selectNote(index, i, btn);
        btnContainer.appendChild(btn);
      }
  
      courseDiv.appendChild(title);
      courseDiv.appendChild(btnContainer);
      container.appendChild(courseDiv);
    });
  }
  
  function selectNote(courseIndex, note, btn) {
    // Speichern der Note in localStorage
    localStorage.setItem(`course-${courseIndex}`, note);
  
    state[courseIndex] = note;
  
    // Reset der Styles
    const buttons = btn.parentNode.querySelectorAll(".note-btn");
    buttons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  
    calculateTotal();
  }
  
  function calculateTotal() {
    let total = 0;
    courses.forEach((course, index) => {
      const note = state[index];
      if (note !== null) {
        total += note * course.factor;
      }
    });

    let grade = (17 / 3) - (total / 180);
    let gradeRounded = Math.floor(grade * 10) / 10;

    totalSpan.textContent = total;
    gradeSpan.textContent = gradeRounded;
  }

  function loadStoredData() {
    courses.forEach((course, index) => {
      const storedNote = localStorage.getItem(`course-${index}`);
      if (storedNote !== null) {
        state[index] = parseInt(storedNote); // Speichern im State-Array
        const buttons = document.querySelectorAll(`.course:nth-child(${index + 1}) .note-btn`);
        buttons.forEach(button => {
          if (parseInt(button.textContent) === state[index]) {
            button.classList.add('selected');
          }
        });
      }
    });
  }  
  
  window.onload = () => {
    renderCourses();  // Kurse rendern
    loadStoredData(); // Eingaben laden
    calculateTotal();
  };
  