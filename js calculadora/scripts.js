const display = document.getElementById('display');
function num(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}
function operator(operator) {
  const lastChar = display.value[display.value.length - 1];
  if ('+-*/'.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}
function clearDisplay() {
  display.value = '';
}
function calculator() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
