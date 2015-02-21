/**
 * Created by Khalid Rizvi @ 01/10/2015
 */
Editors.controller('ModuleFormulasListController', ['$state', '$log', '$scope', '$stateParams', 'FormulasService', function ($state, $log, $scope, $stateParams, FormulasService) {

    $scope.formulas = [];
    $scope.pagination = {currentPage: 1, itemsPerPage: 10, maxSize: 10};
    $scope.module = {};

    FormulasService.getModuleById($stateParams.moduleId)
        .then(function (module) {
            FormulasService.setCurrentModule(module);
            $scope.module.name = module.name;

            FormulasService.loadCurrentFormulas()
                .then(function (formulas) {
                    FormulasService.setCurrentFormulas(formulas);
                    var data = FormulasService.fetchCurrentFormulas();
                    $log.debug($scope.module.id + ' has [' + data.length + '] formulas: ' + JSON.stringify(data));
                    $scope.pagination.totalItems = data.length;
                    $scope.formulas = data.slice(($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage, $scope.pagination.itemsPerPage);
                }, function error(reason) {
                    $log.error(reason);
                });
        });


    $scope.$watch('pagination.currentPage', function (newValue, oldValue) {
        if (oldValue != newValue) {
            var data = FormulasService.fetchCurrentFormulas();
            $scope.formulas = data.slice(($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage, (($scope.pagination.currentPage - 1) * $scope.pagination.itemsPerPage) + $scope.pagination.itemsPerPage);
        }
    });

    $scope.setPage = function (pageNo) {
        $scope.pagination.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.pagination.currentPage);
    };

    $scope.edit = function (formula) {
        $log.debug(JSON.stringify(formula) + ' is being edited');
        FormulasService.setCurrentFormula(formula);
        $state.go('modules.formulasEdit');
    };
    $scope.create = function () {
        $log.debug('Request for new formula to be created');
        FormulasService.setCurrentFormula({});
        $state.go('modules.formulasEdit');
    };
}]);