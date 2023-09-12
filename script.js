// JavaScript puro
document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
  
  // Con jQuery
  $('.menu-icon').click(function() {
    $('.menu').toggle();
  });
  