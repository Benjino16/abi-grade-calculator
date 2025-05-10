function loadStoredData() {
    courses.forEach((_, index) => {
      const storedNote = localStorage.getItem(`course-${index}`);
      if (storedNote !== null) {
        state[index] = parseInt(storedNote);
      }
    });
  }
  
  function saveNote(index, note) {
    localStorage.setItem(`course-${index}`, note);
  }
  