export const inputFileDirective = ($parse)=> {
  return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.bind('change', function () {
                $parse(attributes.fileInput)
                .assign(scope,element[0].files)   
                scope.$apply()
            });
        }
    };
};
//directive used in create book for input file img