function calculateTotal() {
    let total = 0;
    courses.forEach((course, index) => {
      total += state[index] * course.factor;
    });
  
    const grade = (17 / 3) - (total / 180);
    const rounded = Math.floor(grade * 10) / 10;
  
    document.getElementById("total").textContent = total;
    document.getElementById("grade").textContent = rounded;
    document.getElementById("emoji").textContent = getEmojiFromGrade(rounded);
  }
  
  function getEmojiFromGrade(grade) {
    const emojiGrade = [
      { grade: 1, emoji: "(sorry du medizin student:in 😒)" },
      { grade: 1.9, emoji: "🤓" },
      { grade: 2.9, emoji: "😎" },
      { grade: 3.9, emoji: "🤌" },
      { grade: 4, emoji: "👀" },
      { grade: 6, emoji: "❌" }
    ];
    const match = emojiGrade.find(e => grade <= e.grade);
    return match ? match.emoji : "-";
  }
  