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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Trip = ()=>{\n    _s();\n    // Estado para almacenar el nombre del nuevo viaje y la lista de viajes\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [trips, setTrips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para manejar el estado de carga\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // Estado para manejar los errores\n    // Función para crear un nuevo viaje\n    const createTrip = async ()=>{\n        try {\n            setLoading(true); // Iniciar el estado de carga\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/trips', {\n                name\n            }); // Enviar una solicitud POST al servidor para crear un nuevo viaje\n            fetchTrips(); // Volver a obtener la lista de viajes después de crear uno nuevo\n            setName(''); // Limpiar el campo de entrada\n            setError(''); // Limpiar cualquier error anterior\n        } catch (error) {\n            setError('Error creando el viaje: ' + (error.response?.data?.message || error.message)); // Mostrar el error\n            console.error('Error creando el viaje:', error);\n        } finally{\n            setLoading(false); // Finalizar el estado de carga\n        }\n    };\n    // Función para obtener la lista de viajes\n    const fetchTrips = async ()=>{\n        try {\n            setLoading(true); // Iniciar el estado de carga\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/api/trips'); // Enviar una solicitud GET al servidor para obtener todos los viajes\n            setTrips(response.data.trips); // Actualizar el estado con la lista de viajes obtenida\n            setError(''); // Limpiar cualquier error anterior\n        } catch (error) {\n            setError('Error obteniendo los viajes: ' + (error.response?.data?.message || error.message)); // Mostrar el error\n            console.error('Error obteniendo los viajes:', error);\n        } finally{\n            setLoading(false); // Finalizar el estado de carga\n        }\n    };\n    // useEffect se ejecuta después de que el componente se monta, para obtener la lista de viajes al inicio\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Trip.useEffect\": ()=>{\n            fetchTrips();\n        }\n    }[\"Trip.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"trip-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Trip\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        placeholder: \"Enter trip name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: createTrip,\n                        disabled: loading,\n                        children: loading ? 'Creating...' : 'Create New Trip'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: 'red'\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Your Trips\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        trips?.map((trip)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: trip.name\n                            }, trip._id, false, {\n                                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trip, \"itg/aw2o6k3cehHqoJwCh855kI4=\");\n_c = Trip;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);\nvar _c;\n$RefreshReg$(_c, \"Trip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLE1BQU1JLE9BQU87O0lBQ1gsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsUUFBUyx5Q0FBeUM7SUFDekYsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUssa0NBQWtDO0lBRTFFLG9DQUFvQztJQUNwQyxNQUFNWSxhQUFhO1FBQ2pCLElBQUk7WUFDRkgsV0FBVyxPQUFRLDZCQUE2QjtZQUNoRCxNQUFNUCxrREFBVSxDQUFDLGNBQWM7Z0JBQUVFO1lBQUssSUFBSSxrRUFBa0U7WUFDNUdVLGNBQWMsaUVBQWlFO1lBQy9FVCxRQUFRLEtBQU0sOEJBQThCO1lBQzVDTSxTQUFTLEtBQU0sbUNBQW1DO1FBQ3BELEVBQUUsT0FBT0QsT0FBTztZQUNkQyxTQUFTLDZCQUE4QkQsQ0FBQUEsTUFBTUssUUFBUSxFQUFFQyxNQUFNQyxXQUFXUCxNQUFNTyxPQUFPLElBQUksbUJBQW1CO1lBQzVHQyxRQUFRUixLQUFLLENBQUMsMkJBQTJCQTtRQUMzQyxTQUFVO1lBQ1JELFdBQVcsUUFBUywrQkFBK0I7UUFDckQ7SUFDRjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNSyxhQUFhO1FBQ2pCLElBQUk7WUFDRkwsV0FBVyxPQUFRLDZCQUE2QjtZQUNoRCxNQUFNTSxXQUFXLE1BQU1iLGlEQUFTLENBQUMsZUFBZ0IscUVBQXFFO1lBQ3RISyxTQUFTUSxTQUFTQyxJQUFJLENBQUNWLEtBQUssR0FBSSx1REFBdUQ7WUFDdkZLLFNBQVMsS0FBTSxtQ0FBbUM7UUFDcEQsRUFBRSxPQUFPRCxPQUFPO1lBQ2RDLFNBQVMsa0NBQW1DRCxDQUFBQSxNQUFNSyxRQUFRLEVBQUVDLE1BQU1DLFdBQVdQLE1BQU1PLE9BQU8sSUFBSyxtQkFBbUI7WUFDbEhDLFFBQVFSLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hELFNBQVU7WUFDUkQsV0FBVyxRQUFTLCtCQUErQjtRQUNyRDtJQUNGO0lBRUEsd0dBQXdHO0lBQ3hHUixnREFBU0E7MEJBQUM7WUFDUmE7UUFDRjt5QkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDs7a0NBQ0csOERBQUNFO2tDQUFHOzs7Ozs7a0NBRUosOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPckI7d0JBQ1BzQixVQUFVLENBQUNDLElBQU10QixRQUFRc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUN2Q0ksYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFBT0MsU0FBU25CO3dCQUFZb0IsVUFBVXhCO2tDQUNwQ0EsVUFBVSxnQkFBZ0I7Ozs7OztvQkFJNUJFLHVCQUFTLDhEQUFDdUI7d0JBQUVDLE9BQU87NEJBQUVDLE9BQU87d0JBQU07a0NBQUl6Qjs7Ozs7Ozs7Ozs7OzBCQUUzQyw4REFBQ1U7MEJBRUcsNEVBQUNnQjs7c0NBQ0MsOERBQUNkO3NDQUFHOzs7Ozs7d0JBQ0hoQixPQUFPK0IsSUFBSSxDQUFDQyxxQkFDWCw4REFBQ0M7MENBQW1CRCxLQUFLbEMsSUFBSTsrQkFBcEJrQyxLQUFLRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9CO0dBeEVNckM7S0FBQUE7QUEwRU4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2VpbGVcXERlc2t0b3BcXFdPUktcXEFQSVNcXHRyaXAtcGxhbm5lci1iXFxzcmNcXGNvbXBvbmVudHNcXFRyaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBUcmlwID0gKCkgPT4ge1xyXG4gIC8vIEVzdGFkbyBwYXJhIGFsbWFjZW5hciBlbCBub21icmUgZGVsIG51ZXZvIHZpYWplIHkgbGEgbGlzdGEgZGUgdmlhamVzXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0cmlwcywgc2V0VHJpcHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgIC8vIEVzdGFkbyBwYXJhIG1hbmVqYXIgZWwgZXN0YWRvIGRlIGNhcmdhXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7IC8vIEVzdGFkbyBwYXJhIG1hbmVqYXIgbG9zIGVycm9yZXNcclxuXHJcbiAgLy8gRnVuY2nDs24gcGFyYSBjcmVhciB1biBudWV2byB2aWFqZVxyXG4gIGNvbnN0IGNyZWF0ZVRyaXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpOyAgLy8gSW5pY2lhciBlbCBlc3RhZG8gZGUgY2FyZ2FcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS90cmlwcycsIHsgbmFtZSB9KTsgLy8gRW52aWFyIHVuYSBzb2xpY2l0dWQgUE9TVCBhbCBzZXJ2aWRvciBwYXJhIGNyZWFyIHVuIG51ZXZvIHZpYWplXHJcbiAgICAgIGZldGNoVHJpcHMoKTsgLy8gVm9sdmVyIGEgb2J0ZW5lciBsYSBsaXN0YSBkZSB2aWFqZXMgZGVzcHXDqXMgZGUgY3JlYXIgdW5vIG51ZXZvXHJcbiAgICAgIHNldE5hbWUoJycpOyAgLy8gTGltcGlhciBlbCBjYW1wbyBkZSBlbnRyYWRhXHJcbiAgICAgIHNldEVycm9yKCcnKTsgIC8vIExpbXBpYXIgY3VhbHF1aWVyIGVycm9yIGFudGVyaW9yXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcignRXJyb3IgY3JlYW5kbyBlbCB2aWFqZTogJyArIChlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlKSk7IC8vIE1vc3RyYXIgZWwgZXJyb3JcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYW5kbyBlbCB2aWFqZTonLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgIC8vIEZpbmFsaXphciBlbCBlc3RhZG8gZGUgY2FyZ2FcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jacOzbiBwYXJhIG9idGVuZXIgbGEgbGlzdGEgZGUgdmlhamVzXHJcbiAgY29uc3QgZmV0Y2hUcmlwcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7ICAvLyBJbmljaWFyIGVsIGVzdGFkbyBkZSBjYXJnYVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90cmlwcycpOyAgLy8gRW52aWFyIHVuYSBzb2xpY2l0dWQgR0VUIGFsIHNlcnZpZG9yIHBhcmEgb2J0ZW5lciB0b2RvcyBsb3MgdmlhamVzXHJcbiAgICAgIHNldFRyaXBzKHJlc3BvbnNlLmRhdGEudHJpcHMpOyAgLy8gQWN0dWFsaXphciBlbCBlc3RhZG8gY29uIGxhIGxpc3RhIGRlIHZpYWplcyBvYnRlbmlkYVxyXG4gICAgICBzZXRFcnJvcignJyk7ICAvLyBMaW1waWFyIGN1YWxxdWllciBlcnJvciBhbnRlcmlvclxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoJ0Vycm9yIG9idGVuaWVuZG8gbG9zIHZpYWplczogJyArIChlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlKSk7ICAvLyBNb3N0cmFyIGVsIGVycm9yXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9idGVuaWVuZG8gbG9zIHZpYWplczonLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgIC8vIEZpbmFsaXphciBlbCBlc3RhZG8gZGUgY2FyZ2FcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3Qgc2UgZWplY3V0YSBkZXNwdcOpcyBkZSBxdWUgZWwgY29tcG9uZW50ZSBzZSBtb250YSwgcGFyYSBvYnRlbmVyIGxhIGxpc3RhIGRlIHZpYWplcyBhbCBpbmljaW9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUcmlwcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcC1jb250YWluZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5UcmlwPC9oMj5cclxuICAgICAgICAgIHsvKiBGb3JtdWxhcmlvIHBhcmEgY3JlYXIgdW4gbnVldm8gdmlhamUgKi99XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdHJpcCBuYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVRyaXB9IGRpc2FibGVkPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAnQ3JlYXRpbmcuLi4nIDogJ0NyZWF0ZSBOZXcgVHJpcCd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICB7LyogTW9zdHJhciBlcnJvcmVzIHNpIGhheSAqL31cclxuICAgICAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yfTwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIExpc3RhIGRlIHZpYWplcyAqL31cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGgyPllvdXIgVHJpcHM8L2gyPlxyXG4gICAgICAgICAgICB7dHJpcHM/Lm1hcCgodHJpcCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RyaXAuX2lkfT57dHJpcC5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlRyaXAiLCJuYW1lIiwic2V0TmFtZSIsInRyaXBzIiwic2V0VHJpcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjcmVhdGVUcmlwIiwicG9zdCIsImZldGNoVHJpcHMiLCJyZXNwb25zZSIsImRhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiLCJzdHlsZSIsImNvbG9yIiwidWwiLCJtYXAiLCJ0cmlwIiwibGkiLCJfaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Trip.js\n"));

/***/ })

});