'use strict';

/**
 * @ngdoc function
 * @name childListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the childListApp
 */
angular.module('AlphaFin').controller('MainCtrl', function () {
	function fillArrayToMinimumLenth(anArray, minLength, fillValue) {
		//Should test if is an array
		//Should test is minlength is a number
		if (!Array.isArray(anArray)) throw new TypeError('Invalid input type');

		if (typeof minLength !== 'number') throw new TypeError('Invalid input type');

		if (anArray.length < minLength) {
			var fillAmmount = minLength - anArray.length;
			for (var i = 0; i < fillAmmount; i++) {
				anArray.push(fillValue);
			}
		}
		return anArray;
	}

	function balanceListsLength(listA, listB) {
		if (!Array.isArray(listA) || !Array.isArray(listB)) throw new TypeError('Invalid input type');

		if (listA.length < listB.length) {
			fillArrayToMinimumLenth(listA, listB.length, '');
		}
		if (listB.length < listA.length) {
			fillArrayToMinimumLenth(listB, listA.length, '');
		}

		return {
			listA: listA,
			listB: listB
		};
	}

	var todolist = [
		'Finite State Machine',
		'News Item Factory',
		'WebApi that returns newsItems',
		'WebApi that returns newsItems from mongodb'
	];

	var done = [
		'Directive using bindToController',
		'Observer pattern',
		'Client repository using pattern',
		'Nested Directives',
		'Client',
		'client object/class factory'
	];

	var formattedLists = balanceListsLength(todolist, done);

	var vm = this;

	vm.newsBullets01 = ['implements <strong>decorator</strong> pattern in pure javascript pattern'];

	vm.newsBullets02 = [
		'Implements <a href="https://plnkr.co/edit/vBfWSBZERdMN0IlcZ5I2?p=info">observer pattern</a> in multiple places'
	];

	vm.newsBullets03 = [
		'This very News Item directive (and all the other new feature blocks) ...',
		'Implements <strong>bindToController</strong>',
		'Implements <strong>ngSanitize</strong> to pass html to the newsItem directive'
	];

	vm.toDo = formattedLists.listA;
	vm.done = formattedLists.listB;
});
