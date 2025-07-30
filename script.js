//https://script.google.com/macros/s/AKfycbzhk5ByfrO04UxXyPs5DJekQ__zR8UN0JlFHCGDvJFNGkW0bGC1cno3_7IFKBp2jfCA0w/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbzpqCwvREMc7K1sOvW5XutbLI4uKQoAx5670TNFU8vgD2oprCrHeQxHQ2LTDLNYQnFY/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});





// Optional: update date on the page
const updatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const lastUpdated = document.getElementById('last-updated');
if (lastUpdated) {
    lastUpdated.textContent = updatedDate;
}

