export const dropdownDirective = ($parse) => {
    return {
        restrict: 'A',
        scope: {
            value: '='
        },
        link: function (scope, element) {
            // set the initial value
            var $el = $(element);
            scope.value = $el.find('li:first').text();

            // listen for changes
            $el.on('click', 'li', function () {
                scope.value = $(this).text();
                scope.$apply();
            });
        }
    };
};
//directive used in books for the filter
