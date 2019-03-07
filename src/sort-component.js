const popularityButton = document.getElementById('popularity');
const relevancyButton = document.getElementById('relevancy');

relevancyButton.addEventListener('change', () => {
    if(relevancyButton.checked) {
        console.log('relevant');
    }
    else {
        console.log('not relevant');
    }
});

popularityButton.addEventListener('change', () => {
    if(popularityButton.checked) {
        console.log('popular');
    }
    else {
        console.log('not popular');
    }
});