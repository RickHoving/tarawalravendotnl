function show(category) {
  var images = document.querySelectorAll(".picture");
  images.forEach(image => {
    var dataAttribute = image.getAttribute('data-cat');
    if(category === undefined || dataAttribute === category) {
      image.style.opacity = '1';
      image.style.display = 'block';
    } else {
      image.style.opacity = '0';
      image.style.display = 'none';
    }
  });
}