document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMeButton');

    button.addEventListener('click', function() {
        alert('You clicked the button!');
    });

     // Add functionality for new feature
     newFeature.addEventListener('mouseover', function() {
        newFeature.style.backgroundColor = 'yellow';
    });

    newFeature.addEventListener('mouseout', function() {
        newFeature.style.backgroundColor = '';
    });
});
