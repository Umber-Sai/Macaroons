/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n\n$('#burger').click(() => {\n    $('#menu').addClass('open');\n})\n\n$('#close').click(() => {\n    $('#menu').removeClass('open');\n})\n\nconst menuItems = $('#menu a');\nfor (let i = 0; i < menuItems.length; i++) {\n    const element = menuItems.eq(i);\n    element.click(() => {\n        $('#menu').removeClass('open');\n    })\n}\n\n\n//  scrolls ------------------------------------------\n$('.cakes').click(() => {\n    $('#choose')[0].scrollIntoView({behavior : 'smooth'});\n});\n\n$('.toOrder').click(() => {\n    $('#order')[0].scrollIntoView({behavior : 'smooth'});\n});\n\n$('.aboutUs').click(() => {\n    $('#aboutUs')[0].scrollIntoView({behavior : 'smooth'});\n});\n\n\n\n\nconst choiceButtons = $('.choice__button');\nfor (let i = 0; i < choiceButtons.length; i++) {\n    const element = choiceButtons.eq(i);\n    element.click(() => {\n        const orderedProduct = element.parent().prev().prev().text();\n        $('#product').val(orderedProduct);\n        $('#order')[0].scrollIntoView({behavior : 'smooth'});\n    })     // изи пизи\n}\n\n\n// inputs --------------------------------------------\nconst allInputs = $('form input');\nfor (let i = 0; i < allInputs.length; i++) {\n    const element = allInputs.eq(i);\n    element.keydown(() => {\n        element.css('border-color', 'rgb(118, 12, 34)');\n        element.next().animate({fontSize : 0});\n    })\n}\n\nconst loader = $('#loader');\n$('form .order__button').click(() => {\n    let hasError = false;\n    for (let i = 0; i < allInputs.length; i++) {\n        const element = allInputs.eq(i);\n        if (!element.val() || (i === 2 && element.val().length < 14)) {\n            element.css('border-color', 'red');\n            element.next().animate({fontSize : 13});\n            hasError = true;\n        }\n    }\n\n    if(!hasError) {\n        loader.css('display', 'flex');\n\n        const url = \"https://testologia.ru/checkout\";\n        const data = { product: $('#product').val(), name: $('#name').val(), phone: $('#phone').val() }\n\n        console.log(data)\n\n        const response = fetch(url, {\n            method : \"POST\",\n            body : JSON.stringify(data)\n        }).then(response => response.json())\n        .then(result => loader.css('display', 'none'));\n    }\n});\n\nwindow.addEventListener(\"DOMContentLoaded\", function() {\n    [].forEach.call( document.querySelectorAll('#phone'), function(input) {\n      var keyCode;\n      function mask(event) {\n        event.keyCode && (keyCode = event.keyCode);\n        var pos = this.selectionStart;\n        if (pos < 3) event.preventDefault();\n        var matrix = \"+7 (___) ___ ____\",\n            i = 0,\n            def = matrix.replace(/\\D/g, \"\"),\n            val = this.value.replace(/\\D/g, \"\"),\n            new_value = matrix.replace(/[_\\d]/g, function(a) {\n                return i < val.length ? val.charAt(i++) : a\n            });\n        i = new_value.indexOf(\"_\");\n        if (i != -1) {\n            i < 5 && (i = 3);\n            new_value = new_value.slice(0, i)\n        }\n        var reg = matrix.substr(0, this.value.length).replace(/_+/g,\n            function(a) {\n                return \"\\\\d{1,\" + a.length + \"}\"\n            }).replace(/[+()]/g, \"\\\\$&\");\n        reg = new RegExp(\"^\" + reg + \"$\");\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n          this.value = new_value;\n        }\n        if (event.type == \"blur\" && this.value.length < 5) {\n          this.value = \"\";\n        }\n      }\n  \n      input.addEventListener(\"input\", mask, false);\n      input.addEventListener(\"focus\", mask, false);\n      input.addEventListener(\"blur\", mask, false);\n      input.addEventListener(\"keydown\", mask, false);\n  \n    });\n  \n  });\n\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/main.js"]();
/******/ 	
/******/ })()
;