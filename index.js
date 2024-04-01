var cancelButtons = document.querySelectorAll('.cancel-btn');
var redirectAddBookBtn = document.querySelector('.redirect-add-book');
var redirectLibaryBtn = document.querySelector('.redirect-libary');
var redirectSearchBtn = document.querySelector('.redirect-search');
var addBookForm = document.querySelector('.add-book-form');
var libaryContainer = document.querySelector('.libary-container');
var searchContainer = document.querySelector('.search-container');
var mainMenu = document.querySelector('.main-menu');
function redirect(redirectButton, elementToShow) {
    redirectButton === null || redirectButton === void 0 ? void 0 : redirectButton.addEventListener('click', function (e) {
        var _a;
        e.preventDefault();
        (_a = redirectButton === null || redirectButton === void 0 ? void 0 : redirectButton.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        elementToShow === null || elementToShow === void 0 ? void 0 : elementToShow.classList.remove('hidden');
    });
}
redirect(redirectAddBookBtn, addBookForm);
redirect(redirectLibaryBtn, libaryContainer);
redirect(redirectSearchBtn, searchContainer);
cancelButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var _a;
        e.preventDefault();
        (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        mainMenu === null || mainMenu === void 0 ? void 0 : mainMenu.classList.remove('hidden');
    });
});
