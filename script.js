const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

function calculateArea(width, height) {
  return width * height;
}

calculateButton.addEventListener('click', () => {
  const width = Number(widthInput.value);
  const height = Number(heightInput.value);

  if (width <= 0 || height <= 0 || !widthInput.value || !heightInput.value) {
    result.textContent = 'Please enter valid positive numbers.';
    return;
  }

  const area = calculateArea(width, height);
  result.textContent = `Area: ${area} square units`;
});
