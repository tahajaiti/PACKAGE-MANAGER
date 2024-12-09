"use strict";
const viewAuthorsBtn = document.getElementById('viewAuthors');
const viewPackBtn = document.getElementById('viewPackages');
const authorsDisplay = document.getElementById('authorsDisplay');
const packagesDisplay = document.getElementById('packagesDisplay');
let authorsOpen = false;
let packagesOpen = false;
viewAuthorsBtn.addEventListener('click', () => {
    if (authorsDisplay && !authorsOpen) {
        if (packagesOpen) {
            packagesOpen = false;
            packagesDisplay.classList.add('hidden');
        }
        authorsDisplay.classList.remove('hidden');
        authorsOpen = true;
    }
    else if (authorsDisplay && authorsOpen) {
        authorsOpen = false;
        authorsDisplay.classList.add('hidden');
    }
});
viewPackBtn.addEventListener('click', () => {
    if (packagesDisplay && !packagesOpen) {
        if (authorsOpen) {
            authorsOpen = false;
            authorsDisplay.classList.add('hidden');
        }
        packagesDisplay.classList.remove('hidden');
        packagesOpen = true;
    }
    else if (packagesDisplay && packagesOpen) {
        packagesOpen = false;
        packagesDisplay.classList.add('hidden');
    }
});