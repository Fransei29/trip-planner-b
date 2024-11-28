"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Trip.js":
/*!********************************!*\
  !*** ./src/components/Trip.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Trip = ()=>{\n    _s();\n    // Estado para almacenar el nombre del nuevo viaje y la lista de viajes\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [trips, setTrips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para manejar el estado de carga\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // Estado para manejar los errores\n    // Función para crear un nuevo viaje\n    const createTrip = async ()=>{\n        try {\n            setLoading(true); // Iniciar el estado de carga\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/trips', {\n                name\n            }); // Enviar una solicitud POST al servidor para crear un nuevo viaje\n            fetchTrips(); // Volver a obtener la lista de viajes después de crear uno nuevo\n            setName(''); // Limpiar el campo de entrada\n            setError(''); // Limpiar cualquier error anterior\n        } catch (error) {\n            setError('Error creando el viaje: ' + (error.response?.data?.message || error.message)); // Mostrar el error\n            console.error('Error creando el viaje:', error);\n        } finally{\n            setLoading(false); // Finalizar el estado de carga\n        }\n    };\n    // Función para obtener la lista de viajes\n    const fetchTrips = async ()=>{\n        try {\n            setLoading(true); // Iniciar el estado de carga\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('https://trip-planner-b.vercel.app/api/trips'); // Enviar una solicitud GET al servidor para obtener todos los viajes\n            setTrips(response.data.trips); // Actualizar el estado con la lista de viajes obtenida\n            setError(''); // Limpiar cualquier error anterior\n        } catch (error) {\n            setError('Error obteniendo los viajes: ' + (error.response?.data?.message || error.message)); // Mostrar el error\n            console.error('Error obteniendo los viajes:', error);\n        } finally{\n            setLoading(false); // Finalizar el estado de carga\n        }\n    };\n    // useEffect se ejecuta después de que el componente se monta, para obtener la lista de viajes al inicio\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Trip.useEffect\": ()=>{\n            fetchTrips();\n        }\n    }[\"Trip.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Trip\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                onChange: (e)=>setName(e.target.value),\n                placeholder: \"Enter trip name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createTrip,\n                disabled: loading,\n                children: loading ? 'Creating...' : 'Create New Trip'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: 'red'\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: trips?.map((trip)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: trip.name\n                    }, trip._id, false, {\n                        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trip, \"itg/aw2o6k3cehHqoJwCh855kI4=\");\n_c = Trip;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);\nvar _c;\n$RefreshReg$(_c, \"Trip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLE1BQU1JLE9BQU87O0lBQ1gsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsUUFBUyx5Q0FBeUM7SUFDekYsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUssa0NBQWtDO0lBRTFFLG9DQUFvQztJQUNwQyxNQUFNWSxhQUFhO1FBQ2pCLElBQUk7WUFDRkgsV0FBVyxPQUFRLDZCQUE2QjtZQUNoRCxNQUFNUCxrREFBVSxDQUFDLGNBQWM7Z0JBQUVFO1lBQUssSUFBSSxrRUFBa0U7WUFDNUdVLGNBQWMsaUVBQWlFO1lBQy9FVCxRQUFRLEtBQU0sOEJBQThCO1lBQzVDTSxTQUFTLEtBQU0sbUNBQW1DO1FBQ3BELEVBQUUsT0FBT0QsT0FBTztZQUNkQyxTQUFTLDZCQUE4QkQsQ0FBQUEsTUFBTUssUUFBUSxFQUFFQyxNQUFNQyxXQUFXUCxNQUFNTyxPQUFPLElBQUksbUJBQW1CO1lBQzVHQyxRQUFRUixLQUFLLENBQUMsMkJBQTJCQTtRQUMzQyxTQUFVO1lBQ1JELFdBQVcsUUFBUywrQkFBK0I7UUFDckQ7SUFDRjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNSyxhQUFhO1FBQ2pCLElBQUk7WUFDRkwsV0FBVyxPQUFRLDZCQUE2QjtZQUNoRCxNQUFNTSxXQUFXLE1BQU1iLGlEQUFTLENBQUMsZ0RBQWlELHFFQUFxRTtZQUN2SkssU0FBU1EsU0FBU0MsSUFBSSxDQUFDVixLQUFLLEdBQUksdURBQXVEO1lBQ3ZGSyxTQUFTLEtBQU0sbUNBQW1DO1FBQ3BELEVBQUUsT0FBT0QsT0FBTztZQUNkQyxTQUFTLGtDQUFtQ0QsQ0FBQUEsTUFBTUssUUFBUSxFQUFFQyxNQUFNQyxXQUFXUCxNQUFNTyxPQUFPLElBQUssbUJBQW1CO1lBQ2xIQyxRQUFRUixLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRCxTQUFVO1lBQ1JELFdBQVcsUUFBUywrQkFBK0I7UUFDckQ7SUFDRjtJQUVBLHdHQUF3RztJQUN4R1IsZ0RBQVNBOzBCQUFDO1lBQ1JhO1FBQ0Y7eUJBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9yQjtnQkFDUHNCLFVBQVUsQ0FBQ0MsSUFBTXRCLFFBQVFzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQ3ZDSSxhQUFZOzs7Ozs7MEJBRWQsOERBQUNDO2dCQUFPQyxTQUFTbkI7Z0JBQVlvQixVQUFVeEI7MEJBQ3BDQSxVQUFVLGdCQUFnQjs7Ozs7O1lBSTVCRSx1QkFBUyw4REFBQ3VCO2dCQUFFQyxPQUFPO29CQUFFQyxPQUFPO2dCQUFNOzBCQUFJekI7Ozs7OzswQkFHdkMsOERBQUMwQjswQkFDRTlCLE9BQU8rQixJQUFJLENBQUNDLHFCQUNYLDhEQUFDQztrQ0FBbUJELEtBQUtsQyxJQUFJO3VCQUFwQmtDLEtBQUtFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0FwRU1yQztLQUFBQTtBQXNFTixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzZWlsZVxcRGVza3RvcFxcV09SS1xcQVBJU1xcdHJpcC1wbGFubmVyLWJcXHNyY1xcY29tcG9uZW50c1xcVHJpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFRyaXAgPSAoKSA9PiB7XHJcbiAgLy8gRXN0YWRvIHBhcmEgYWxtYWNlbmFyIGVsIG5vbWJyZSBkZWwgbnVldm8gdmlhamUgeSBsYSBsaXN0YSBkZSB2aWFqZXNcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RyaXBzLCBzZXRUcmlwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAgLy8gRXN0YWRvIHBhcmEgbWFuZWphciBlbCBlc3RhZG8gZGUgY2FyZ2FcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTsgLy8gRXN0YWRvIHBhcmEgbWFuZWphciBsb3MgZXJyb3Jlc1xyXG5cclxuICAvLyBGdW5jacOzbiBwYXJhIGNyZWFyIHVuIG51ZXZvIHZpYWplXHJcbiAgY29uc3QgY3JlYXRlVHJpcCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7ICAvLyBJbmljaWFyIGVsIGVzdGFkbyBkZSBjYXJnYVxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3RyaXBzJywgeyBuYW1lIH0pOyAvLyBFbnZpYXIgdW5hIHNvbGljaXR1ZCBQT1NUIGFsIHNlcnZpZG9yIHBhcmEgY3JlYXIgdW4gbnVldm8gdmlhamVcclxuICAgICAgZmV0Y2hUcmlwcygpOyAvLyBWb2x2ZXIgYSBvYnRlbmVyIGxhIGxpc3RhIGRlIHZpYWplcyBkZXNwdcOpcyBkZSBjcmVhciB1bm8gbnVldm9cclxuICAgICAgc2V0TmFtZSgnJyk7ICAvLyBMaW1waWFyIGVsIGNhbXBvIGRlIGVudHJhZGFcclxuICAgICAgc2V0RXJyb3IoJycpOyAgLy8gTGltcGlhciBjdWFscXVpZXIgZXJyb3IgYW50ZXJpb3JcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKCdFcnJvciBjcmVhbmRvIGVsIHZpYWplOiAnICsgKGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UpKTsgLy8gTW9zdHJhciBlbCBlcnJvclxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhbmRvIGVsIHZpYWplOicsIGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAgLy8gRmluYWxpemFyIGVsIGVzdGFkbyBkZSBjYXJnYVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgb2J0ZW5lciBsYSBsaXN0YSBkZSB2aWFqZXNcclxuICBjb25zdCBmZXRjaFRyaXBzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTsgIC8vIEluaWNpYXIgZWwgZXN0YWRvIGRlIGNhcmdhXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3RyaXAtcGxhbm5lci1iLnZlcmNlbC5hcHAvYXBpL3RyaXBzJyk7ICAvLyBFbnZpYXIgdW5hIHNvbGljaXR1ZCBHRVQgYWwgc2Vydmlkb3IgcGFyYSBvYnRlbmVyIHRvZG9zIGxvcyB2aWFqZXNcclxuICAgICAgc2V0VHJpcHMocmVzcG9uc2UuZGF0YS50cmlwcyk7ICAvLyBBY3R1YWxpemFyIGVsIGVzdGFkbyBjb24gbGEgbGlzdGEgZGUgdmlhamVzIG9idGVuaWRhXHJcbiAgICAgIHNldEVycm9yKCcnKTsgIC8vIExpbXBpYXIgY3VhbHF1aWVyIGVycm9yIGFudGVyaW9yXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcignRXJyb3Igb2J0ZW5pZW5kbyBsb3MgdmlhamVzOiAnICsgKGVycm9yLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGVycm9yLm1lc3NhZ2UpKTsgIC8vIE1vc3RyYXIgZWwgZXJyb3JcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2J0ZW5pZW5kbyBsb3MgdmlhamVzOicsIGVycm9yKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAgLy8gRmluYWxpemFyIGVsIGVzdGFkbyBkZSBjYXJnYVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHVzZUVmZmVjdCBzZSBlamVjdXRhIGRlc3B1w6lzIGRlIHF1ZSBlbCBjb21wb25lbnRlIHNlIG1vbnRhLCBwYXJhIG9idGVuZXIgbGEgbGlzdGEgZGUgdmlhamVzIGFsIGluaWNpb1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRyaXBzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgPGgyPlRyaXA8L2gyPlxyXG4gICAgICB7LyogRm9ybXVsYXJpbyBwYXJhIGNyZWFyIHVuIG51ZXZvIHZpYWplICovfVxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0cmlwIG5hbWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVRyaXB9IGRpc2FibGVkPXtsb2FkaW5nfT5cclxuICAgICAgICB7bG9hZGluZyA/ICdDcmVhdGluZy4uLicgOiAnQ3JlYXRlIE5ldyBUcmlwJ31cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7LyogTW9zdHJhciBlcnJvcmVzIHNpIGhheSAqL31cclxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgIHsvKiBMaXN0YSBkZSB2aWFqZXMgKi99XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dHJpcHM/Lm1hcCgodHJpcCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dHJpcC5faWR9Pnt0cmlwLm5hbWV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmlwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVHJpcCIsIm5hbWUiLCJzZXROYW1lIiwidHJpcHMiLCJzZXRUcmlwcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNyZWF0ZVRyaXAiLCJwb3N0IiwiZmV0Y2hUcmlwcyIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwicCIsInN0eWxlIiwiY29sb3IiLCJ1bCIsIm1hcCIsInRyaXAiLCJsaSIsIl9pZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Trip.js\n"));

/***/ })

});