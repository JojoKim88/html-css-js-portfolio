function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById('surprise-button').addEventListener('click', function() {
    var image = document.getElementById('surprise-image');
    var button = document.getElementById('surprise-button');
    var stopButton = document.getElementById('stop-button');

    // Show the image and hide the button
    image.style.display = 'block';
    button.style.display = 'none';
    stopButton.style.display = 'inline-block';  // Show the stop button
  });

  document.getElementById('stop-button').addEventListener('click', function() {
    var image = document.getElementById('surprise-image');
    var stopButton = document.getElementById('stop-button');
    var surpriseButton = document.getElementById('surprise-button');
    
    // Remove the image and hide the stop button
    image.style.display = 'none';
    stopButton.style.display = 'none';
    
    // Show the original surprise button
    surpriseButton.style.display = 'inline-block';
  });