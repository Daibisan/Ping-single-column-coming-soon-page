const emailForm = document.querySelector('.form')
const emailInput = document.querySelector('.email')
const submitBtn = document.querySelector('.submit-btn')
const emailError = document.querySelector('.error-msg')

function showError(msg) {
  emailError.classList.add('show')
  emailError.querySelector('p').innerText = msg
  emailInput.classList.add('show2')
}

function hideError() {
  emailError.classList.remove('show')
  emailInput.classList.remove('show2')
}

emailForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  if (!emailInput.value.match(/^[A-Za-z._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/) && emailInput.value !== '') {
    showError('Please provide a valid email address')

  } else if (emailInput.value === '') {
    showError('Whoops! It looks like you forgot to add your email')

  } else {
    hideError()
    emailInput.value = ''
  }
  
  emailInput.addEventListener('input', () => {
    hideError()
  })
})