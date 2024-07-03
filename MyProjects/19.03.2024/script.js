$(document).ready(function () {
  let questions = []; // Array to hold questions from server
  let score = 0;

  // Fetch questions from server
  $.ajax({
    url: "db.json", // Replace with your server endpoint
    dataType: "json",
    success: function (data) {
      questions = data.questions;
      displayQuestion(0); // Start displaying questions from the first one
    },
    error: function (xhr, status, error) {
      console.error("Error fetching questions:", status, error);
    },
  });

  function displayQuestion(index) {
    const testContainer = $("#test-container");
    testContainer.empty(); // Clear previous question

    if (index < questions.length) {
      const question = questions[index];
      let questionHtml =
        '<div class="question">' +
        "<h3>" +
        question.questionText +
        "</h3>" +
        "<ul>";

      // Loop through options
      question.options.forEach(function (option, optionIndex) {
        questionHtml +=
          '<li><input type="radio" name="q' +
          index +
          '" value="' +
          option.value +
          '">' +
          option.text +
          "</li>";
      });

      questionHtml += "</ul></div>";
      testContainer.append(questionHtml);

      // Handling submission
      $("#submit-btn")
        .unbind("click")
        .click(function () {
          const selectedOption = $(
            'input[name="q' + index + '"]:checked'
          ).val();
          if (selectedOption === "correct") {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }

          // Move to the next question
          displayQuestion(index + 1);
        });
    } else {
      // No more questions, display final message
      showTestResult();
    }
  }

  function showTestResult() {
    score = calculateScore();
    const userName = prompt("Please enter your name:");

    // Display result in dialog
    alert(
      "Congratulations, " + userName + "! Test passed with Score: " + score
    );
  }

  function calculateScore() {
    let score = 0; // Reset score to ensure correct calculation
    questions.forEach(function (question, questionIndex) {
      const selectedOption = $(
        'input[name="q' + questionIndex + '"]:checked'
      ).val();
      if (selectedOption === "correct") {
        score++;
      }
    });
    return score;
  }
});
