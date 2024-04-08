document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMeButton');
    const newFeature = document.getElementById('newFeature');
    const newSection = document.getElementById('newSection');

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

    // Add functionality for new section
    newSection.addEventListener('click', function() {
        alert('You clicked the new section!');
    });
});
