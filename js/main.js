// //Sortable Masonary with Filters
// function enableMasonry() {
//     if ($('.widget_categories').length) {

//         var winDow = $(window);
//         // Needed variables
//         var $container = $('.widget_categories .items-container');
//         var $filter = $('.filter-btns');

//         $container.isotope({
//             filter: '*',
//             masonry: {
//                 columnWidth: '.masonry-item.small-column'
//             },
//             animationOptions: {
//                 duration: 500,
//                 easing: 'linear'
//             }
//         });


//         // Isotope Filter 
//         $filter.find('li').on('click', function () {
//             var selector = $(this).attr('data-filter');

//             try {
//                 $container.isotope({
//                     filter: selector,
//                     animationOptions: {
//                         duration: 500,
//                         easing: 'linear',
//                         queue: false
//                     }
//                 });
//             } catch (err) {

//             }
//             return false;
//         });


//         winDow.on('resize', function () {
//             var selector = $filter.find('li.current-menu-item').attr('data-filter');

//             $container.isotope({
//                 filter: selector,
//                 animationOptions: {
//                     duration: 500,
//                     easing: 'linear',
//                     queue: false
//                 }
//             });
//         });


//         var filterItemA = $('.filter-btns li');

//         filterItemA.on('click', function () {
//             var $this = $(this);
//             if (!$this.hasClass('current-menu-item')) {
//                 filterItemA.removeClass('current-menu-item');
//                 $this.addClass('current-menu-item');
//             }
//         });
//     }
// }

// enableMasonry();
