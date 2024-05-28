function openCloseAccordion() {
  const questions = document.querySelectorAll(".questions__item");
  const questionsAnswers = document.querySelectorAll(".questions__answer");

  questions.forEach((question) => {
    question.addEventListener("click", function (e) {
      questionsAnswers.forEach((questionsAnswer) => {
        questionsAnswer.classList.remove("qeustions__answer--show");
      });
      this.querySelector(".questions__answer").classList.toggle(
        "qeustions__answer--show"
      );
      document.addEventListener("click", clickOutside);
    });
  });

  function clickOutside(e) {
    console.log("click-outside");
    if (!e.target.closest(".qeustions__list")) {
      questionsAnswers.forEach((questionsAnswer) => {
        questionsAnswer.classList.remove("qeustions__answer--show");
      });
      document.removeEventListener("click", clickOutside);
    }
  }
}

export { openCloseAccordion };
