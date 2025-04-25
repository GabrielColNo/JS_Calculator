document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let expression = '';
  let resultJustDisplayed = false;

  document.querySelectorAll('.buttons button').forEach(button => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    button.addEventListener('click', () => {
      if (value) {
        if (resultJustDisplayed) {
          expression = '';
          display.textContent = '';
          resultJustDisplayed = false;
        }
        expression += value;
        display.textContent = expression;
      } 
      
      else if (action === 'calculate') {
        try {
          expression = eval(expression).toString();
          display.textContent = expression;
          resultJustDisplayed = true;
        } catch {
          display.textContent = 'Error';
          resultJustDisplayed = true;
        }
      } 
      
      else if (action === 'clear') {
        expression = '';
        display.textContent = '';
        resultJustDisplayed = false;
      } 
      
      else if (action === 'erase') {
        if (!resultJustDisplayed) {
          expression = expression.slice(0, -1);
          display.textContent = expression;
        }
      }
    });
  });
});


