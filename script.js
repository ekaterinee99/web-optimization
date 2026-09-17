const image = document.getElementById('galleryImage');
const toggleButton = document.getElementById('toggleButton');
const changeButton = document.getElementById('changeButton');
const imageUrl = document.getElementById('imageUrl');
const message = document.getElementById('message');

function toggleImage() {
  if (image.style.display === 'none') {
    image.style.display = 'block';
    toggleButton.textContent = 'დამალვა';
  } else {
    image.style.display = 'none';
    toggleButton.textContent = 'ჩვენება';
  }
}

function changeImage() {
  const url = imageUrl.value.trim();
  if (url) {
    image.src = url;
    image.style.display = 'block';
    message.textContent = 'სურათი შეიცვალა!';
  } else {
    message.textContent = 'გთხოვ, ჩასვი სურათის URL.';
  }
}

toggleButton.addEventListener('click', toggleImage);
changeButton.addEventListener('click', changeImage);
