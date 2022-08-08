const question = document.querySelectorAll('.question')
const questionTitle = document.querySelectorAll('.question-title')
const questionsContainer = document.querySelector(".questions-container")
const plusIcon = document.querySelectorAll('.plus')
const minusIcon = document.querySelectorAll('.minus')

questionTitle.forEach(function(qtn) {
  qtn.addEventListener("click", function(){
    const answer = qtn.nextElementSibling
    const plusIcon = qtn.firstElementChild.nextElementSibling
    const minusIcon = qtn.firstElementChild.nextElementSibling.nextElementSibling
    
    //if answer was hidden, show answer
    if (!answer.classList.contains("show-ans")) {
      answer.classList.remove('hide-ans')
      answer.classList.add('show-ans')
      plusIcon.style.display = "none"
      minusIcon.style.display = "flex"

      //if answer was shown, hide
    } else {
      answer.classList.remove('show-ans')
      answer.classList.add('hide-ans')
      plusIcon.style.display = "flex"
      minusIcon.style.display = "none"
    }

    //close previously open answers
    const item = questionsContainer.querySelectorAll('.question')

    item.forEach(function(e) {
      if (e.firstElementChild !== qtn) {
        e.firstElementChild.nextElementSibling.classList.remove('show-ans')
        e.firstElementChild.firstElementChild.nextElementSibling.style.display = "flex"
        e.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.display = "none"
      }
    })
  })
})