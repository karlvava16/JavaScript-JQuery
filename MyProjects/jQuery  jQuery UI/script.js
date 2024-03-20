$(document).ready(function() {
  // Apply jQuery UI effect on hover
  $('.imgG').hover(function() {
    $(this).addClass('ui-state-highlight'); // Add jQuery UI class for highlight effect
  }, function() {
    $(this).removeClass('ui-state-highlight'); // Remove highlight effect on mouseout
  });

  // Change large image on click
  $('.imgG').click(function() 
  {
    $(this).toggle('blind', { times: 1 }, 200); // Shake effect on image change
    $('.largeImage').toggle('blind', { times: 1 }, 400); // Shake effect on image change
    
    let largeImageSrc = $(this).data('.largeImage'); // Get the path of the large image
    let thumbnailSrc = $(this).attr('src'); // Get the path of the clicked thumbnail
    $('.largeImage').attr('src', largeImageSrc); // Replace the src of the large image
    $(this).attr('src', $('.largeImage').attr('src')); // Swap clicked thumbnail with large image
    $('.largeImage').attr('src', thumbnailSrc); // Set large image src to clicked thumbnail src

    
    
    $('.largeImage').toggle('blind', { times: 1 }, 400); // Shake effect on image change
    $(this).toggle('blind', { times: 1 }, 200); // Shake effect on image change

  });

  
});
