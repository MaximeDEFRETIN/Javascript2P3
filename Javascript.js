function imgover() {
  document.getElementById('img').src="img/image1_2.jpg";
  document.getElementById('img').style.borderColor='red';
  document.getElementById('img').style.borderWidth='3px';
  document.getElementById('img').style.borderStyle='solid';
}
function imgout() {
  document.getElementById('img').src="img/image1.jpg";
  document.getElementById('img').style.borderColor='none';
  document.getElementById('img').style.borderWidth='none';
  document.getElementById('img').style.borderStyle='none';
}
