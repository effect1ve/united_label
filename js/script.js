document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll('.product-box');
    var resetSearchButton = document.getElementById('reset-search');
    var searchForm = document.getElementById('search-form');
    var categoryLinks = document.querySelectorAll('.category-link');
    var pagination = document.querySelector('.page-pagination');
    var pageSize = 6;
    var currentPage = 1;

    showPage(currentPage);

    function showPage(page) {
        var startIndex = (page - 1) * pageSize;
        var endIndex = startIndex + pageSize;

        items.forEach(function(item, index) {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        var pageNumbers = document.querySelectorAll('.page-numbers');
        pageNumbers.forEach(function(pageNumber) {
            pageNumber.classList.remove('current');
        });
        pageNumbers[page - 1].classList.add('current');

        currentPage = page;
    }

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var searchInput = searchForm.querySelector('.search-field');
        var searchTerm = searchInput.value.toLowerCase().trim();

        var itemsContainer = document.querySelector('.items-container');
    var matchedItems = [];

    items.forEach(function(item) {
        var itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            matchedItems.push(item);
        } else {
            item.style.display = 'none';
        }
    });

    matchedItems.forEach(function(item) {
        item.style.display = 'block'; 
        item.classList.add('col-md-4');
        itemsContainer.prepend(item);
    });
    
        resetSearchButton.style.display = 'block';
        pagination.style.display = 'none';
    });

var originalOrder = Array.from(items);

resetSearchButton.addEventListener('click', function() {

    searchForm.querySelector('.search-field').value = '';
    location.reload(true);

    originalOrder.forEach(function(item) {
        item.style.display = 'block';
    });

    resetSearchButton.style.display = 'none';

    currentPage = 1;
    showPage(currentPage);

    pagination.style.display = 'flex';
});

categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        items.forEach(function(item) {
            item.style.display = 'none';
        });

        var category = this.dataset.category;

        originalOrder.forEach(function(item) {
            if (category === 'all' || item.dataset.category.includes(category)) {
                item.style.display = 'block';
            }
        });

        currentPage = 1;
        showPage(currentPage);
    });
});

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            categoryLinks.forEach(function(link) {
                link.parentElement.classList.remove('current-menu-item');
            });

            this.parentElement.classList.add('current-menu-item');

            var category = this.dataset.category;

            items.forEach(function(item) {
                if (category === 'all' || item.dataset.category.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            if (category === 'all') {
                pagination.style.display = 'flex';
                currentPage = 1;
                showPage(currentPage);
            } else {
                pagination.style.display = 'none';
            }
        });
    });

    document.querySelector('.prev').addEventListener('click', function() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
            scrollToPage();
        }
    });

    document.querySelector('.next').addEventListener('click', function() {
        var totalItems = items.length;
        var totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
            scrollToPage();
        }
    });

    document.querySelectorAll('.page-numbers').forEach(function(pageNumber) {
        pageNumber.addEventListener('click', function() {
            var page = parseInt(this.dataset.page);
            showPage(page);
            scrollToPage();
        });
    });

    function scrollToPage() {
        var targetPage = document.querySelector('.current');
        targetPage.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
});

