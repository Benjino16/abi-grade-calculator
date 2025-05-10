let isAdvancedView = false;
const container = document.getElementById("courses");

function toggleViewMode() {
  isAdvancedView = !isAdvancedView;
  document.getElementById("toggleView").textContent = 
    isAdvancedView ? "Zur einfachen Ansicht wechseln" : "Zur fortgeschrittenen Ansicht wechseln";
  renderCourses();
}

function renderCourses() {
  container.innerHTML = "";
  isAdvancedView ? renderAdvancedView() : renderSimpleView();
  calculateTotal();
}

function renderAdvancedView() {
  courses.forEach((course, index) => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";

    const title = document.createElement("div");
    title.className = "course-title";
    title.textContent = `${course.name} (Faktor ${course.factor})`;

    const btnContainer = document.createElement("div");
    btnContainer.className = "note-options";

    for (let i = 0; i <= 15; i++) {
      const btn = document.createElement("button");
      btn.className = "note-btn";
      btn.textContent = i;
      btn.onclick = () => updateNote(index, i);
      if (state[index] === i) btn.classList.add("selected");
      btnContainer.appendChild(btn);
    }

    courseDiv.appendChild(title);
    courseDiv.appendChild(btnContainer);
    container.appendChild(courseDiv);
  });
}

function renderSimpleView() {
    const table = document.createElement("div");
    table.className = "simple-table";
  
    courses.forEach((course, index) => {
      const row = document.createElement("div");
      row.className = "simple-row";
  
      const label = document.createElement("div");
      label.className = "simple-cell label";
      label.textContent = course.short;
  
      const value = document.createElement("div");
      value.className = "simple-cell value";
      value.textContent = `${state[index]} / 15`;
      value.id = `simple-points-${index}`;
  
      const buttons = document.createElement("div");
      buttons.className = "simple-cell buttons";
  
      const minus = document.createElement("button");
      minus.className = "icon-btn";
      minus.textContent = "−";
      minus.onclick = () => {
        if (state[index] > 0) {
          updateNote(index, state[index] - 1);
          document.getElementById(`simple-points-${index}`).textContent = `${state[index]} / 15`;
        }
      };
  
      const plus = document.createElement("button");
      plus.className = "icon-btn";
      plus.textContent = "+";
      plus.onclick = () => {
        if (state[index] < 15) {
          updateNote(index, state[index] + 1);
          document.getElementById(`simple-points-${index}`).textContent = `${state[index]} / 15`;
        }
      };
  
      buttons.append(minus, plus);
      row.append(label, value, buttons);
      table.appendChild(row);
    });
  
    container.appendChild(table);
  }
  

function updateNote(index, note) {
  state[index] = note;
  saveNote(index, note);
  renderCourses();
}
