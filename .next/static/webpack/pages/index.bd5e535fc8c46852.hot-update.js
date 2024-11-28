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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Trip = ()=>{\n    _s();\n    // Estado para almacenar el nombre del nuevo viaje y la lista de viajes\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [trips, setTrips] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para manejar el estado de carga\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // Estado para manejar los errores\n    // Función para crear un nuevo viaje\n    const createTrip = async ()=>{\n        try {\n            setLoading(true); // Iniciar el estado de carga\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/trips', {\n                name\n            }); // Enviar una solicitud POST al servidor para crear un nuevo viaje\n            fetchTrips(); // Volver a obtener la lista de viajes después de crear uno nuevo\n            setName(''); // Limpiar el campo de entrada\n            setError(''); // Limpiar cualquier error anterior\n        } catch (error) {\n            setError('Error creando el viaje: ' + (error.response?.data?.message || error.message)); // Mostrar el error\n            console.error('Error creando el viaje:', error);\n        } finally{\n            setLoading(false); // Finalizar el estado de carga\n        }\n    };\n    // Función para obtener la lista de viajes\n    const fetchTrips = async ()=>{\n        try {\n            setLoading(true); // Iniciar el estado de carga\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/api/trips'); // Enviar una solicitud GET al servidor para obtener todos los viajes\n            setTrips(response.data.trips); // Actualizar el estado con la lista de viajes obtenida\n            setError(''); // Limpiar cualquier error anterior\n        } catch (error) {\n            setError('Error obteniendo los viajes: ' + (error.response?.data?.message || error.message)); // Mostrar el error\n            console.error('Error obteniendo los viajes:', error);\n        } finally{\n            setLoading(false); // Finalizar el estado de carga\n        }\n    };\n    // useEffect se ejecuta después de que el componente se monta, para obtener la lista de viajes al inicio\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Trip.useEffect\": ()=>{\n            fetchTrips();\n        }\n    }[\"Trip.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Trip\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                onChange: (e)=>setName(e.target.value),\n                placeholder: \"Enter trip name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createTrip,\n                disabled: loading,\n                children: loading ? 'Creating...' : 'Create New Trip'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: 'red'\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: trips?.map((trip)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: trip.name\n                    }, trip._id, false, {\n                        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seile\\\\Desktop\\\\WORK\\\\APIS\\\\trip-planner-b\\\\src\\\\components\\\\Trip.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trip, \"itg/aw2o6k3cehHqoJwCh855kI4=\");\n_c = Trip;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trip);\nvar _c;\n$RefreshReg$(_c, \"Trip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLE1BQU1JLE9BQU87O0lBQ1gsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsUUFBUyx5Q0FBeUM7SUFDekYsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUssa0NBQWtDO0lBRTFFLG9DQUFvQztJQUNwQyxNQUFNWSxhQUFhO1FBQ2pCLElBQUk7WUFDRkgsV0FBVyxPQUFRLDZCQUE2QjtZQUNoRCxNQUFNUCxrREFBVSxDQUFDLGNBQWM7Z0JBQUVFO1lBQUssSUFBSSxrRUFBa0U7WUFDNUdVLGNBQWMsaUVBQWlFO1lBQy9FVCxRQUFRLEtBQU0sOEJBQThCO1lBQzVDTSxTQUFTLEtBQU0sbUNBQW1DO1FBQ3BELEVBQUUsT0FBT0QsT0FBTztZQUNkQyxTQUFTLDZCQUE4QkQsQ0FBQUEsTUFBTUssUUFBUSxFQUFFQyxNQUFNQyxXQUFXUCxNQUFNTyxPQUFPLElBQUksbUJBQW1CO1lBQzVHQyxRQUFRUixLQUFLLENBQUMsMkJBQTJCQTtRQUMzQyxTQUFVO1lBQ1JELFdBQVcsUUFBUywrQkFBK0I7UUFDckQ7SUFDRjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNSyxhQUFhO1FBQ2pCLElBQUk7WUFDRkwsV0FBVyxPQUFRLDZCQUE2QjtZQUNoRCxNQUFNTSxXQUFXLE1BQU1iLGlEQUFTLENBQUMsZUFBZ0IscUVBQXFFO1lBQ3RISyxTQUFTUSxTQUFTQyxJQUFJLENBQUNWLEtBQUssR0FBSSx1REFBdUQ7WUFDdkZLLFNBQVMsS0FBTSxtQ0FBbUM7UUFDcEQsRUFBRSxPQUFPRCxPQUFPO1lBQ2RDLFNBQVMsa0NBQW1DRCxDQUFBQSxNQUFNSyxRQUFRLEVBQUVDLE1BQU1DLFdBQVdQLE1BQU1PLE9BQU8sSUFBSyxtQkFBbUI7WUFDbEhDLFFBQVFSLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQ2hELFNBQVU7WUFDUkQsV0FBVyxRQUFTLCtCQUErQjtRQUNyRDtJQUNGO0lBRUEsd0dBQXdHO0lBQ3hHUixnREFBU0E7MEJBQUM7WUFDUmE7UUFDRjt5QkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUVKLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsT0FBT3JCO2dCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsUUFBUXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDdkNJLGFBQVk7Ozs7OzswQkFFZCw4REFBQ0M7Z0JBQU9DLFNBQVNuQjtnQkFBWW9CLFVBQVV4QjswQkFDcENBLFVBQVUsZ0JBQWdCOzs7Ozs7WUFJNUJFLHVCQUFTLDhEQUFDdUI7Z0JBQUVDLE9BQU87b0JBQUVDLE9BQU87Z0JBQU07MEJBQUl6Qjs7Ozs7OzBCQUd2Qyw4REFBQzBCOzBCQUNFOUIsT0FBTytCLElBQUksQ0FBQ0MscUJBQ1gsOERBQUNDO2tDQUFtQkQsS0FBS2xDLElBQUk7dUJBQXBCa0MsS0FBS0UsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQXBFTXJDO0tBQUFBO0FBc0VOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNlaWxlXFxEZXNrdG9wXFxXT1JLXFxBUElTXFx0cmlwLXBsYW5uZXItYlxcc3JjXFxjb21wb25lbnRzXFxUcmlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgVHJpcCA9ICgpID0+IHtcclxuICAvLyBFc3RhZG8gcGFyYSBhbG1hY2VuYXIgZWwgbm9tYnJlIGRlbCBudWV2byB2aWFqZSB5IGxhIGxpc3RhIGRlIHZpYWplc1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdHJpcHMsIHNldFRyaXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7ICAvLyBFc3RhZG8gcGFyYSBtYW5lamFyIGVsIGVzdGFkbyBkZSBjYXJnYVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpOyAvLyBFc3RhZG8gcGFyYSBtYW5lamFyIGxvcyBlcnJvcmVzXHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgY3JlYXIgdW4gbnVldm8gdmlhamVcclxuICBjb25zdCBjcmVhdGVUcmlwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTsgIC8vIEluaWNpYXIgZWwgZXN0YWRvIGRlIGNhcmdhXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdHJpcHMnLCB7IG5hbWUgfSk7IC8vIEVudmlhciB1bmEgc29saWNpdHVkIFBPU1QgYWwgc2Vydmlkb3IgcGFyYSBjcmVhciB1biBudWV2byB2aWFqZVxyXG4gICAgICBmZXRjaFRyaXBzKCk7IC8vIFZvbHZlciBhIG9idGVuZXIgbGEgbGlzdGEgZGUgdmlhamVzIGRlc3B1w6lzIGRlIGNyZWFyIHVubyBudWV2b1xyXG4gICAgICBzZXROYW1lKCcnKTsgIC8vIExpbXBpYXIgZWwgY2FtcG8gZGUgZW50cmFkYVxyXG4gICAgICBzZXRFcnJvcignJyk7ICAvLyBMaW1waWFyIGN1YWxxdWllciBlcnJvciBhbnRlcmlvclxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoJ0Vycm9yIGNyZWFuZG8gZWwgdmlhamU6ICcgKyAoZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgZXJyb3IubWVzc2FnZSkpOyAvLyBNb3N0cmFyIGVsIGVycm9yXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWFuZG8gZWwgdmlhamU6JywgZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7ICAvLyBGaW5hbGl6YXIgZWwgZXN0YWRvIGRlIGNhcmdhXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY2nDs24gcGFyYSBvYnRlbmVyIGxhIGxpc3RhIGRlIHZpYWplc1xyXG4gIGNvbnN0IGZldGNoVHJpcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpOyAgLy8gSW5pY2lhciBlbCBlc3RhZG8gZGUgY2FyZ2FcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdHJpcHMnKTsgIC8vIEVudmlhciB1bmEgc29saWNpdHVkIEdFVCBhbCBzZXJ2aWRvciBwYXJhIG9idGVuZXIgdG9kb3MgbG9zIHZpYWplc1xyXG4gICAgICBzZXRUcmlwcyhyZXNwb25zZS5kYXRhLnRyaXBzKTsgIC8vIEFjdHVhbGl6YXIgZWwgZXN0YWRvIGNvbiBsYSBsaXN0YSBkZSB2aWFqZXMgb2J0ZW5pZGFcclxuICAgICAgc2V0RXJyb3IoJycpOyAgLy8gTGltcGlhciBjdWFscXVpZXIgZXJyb3IgYW50ZXJpb3JcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKCdFcnJvciBvYnRlbmllbmRvIGxvcyB2aWFqZXM6ICcgKyAoZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgZXJyb3IubWVzc2FnZSkpOyAgLy8gTW9zdHJhciBlbCBlcnJvclxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvYnRlbmllbmRvIGxvcyB2aWFqZXM6JywgZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7ICAvLyBGaW5hbGl6YXIgZWwgZXN0YWRvIGRlIGNhcmdhXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0IHNlIGVqZWN1dGEgZGVzcHXDqXMgZGUgcXVlIGVsIGNvbXBvbmVudGUgc2UgbW9udGEsIHBhcmEgb2J0ZW5lciBsYSBsaXN0YSBkZSB2aWFqZXMgYWwgaW5pY2lvXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVHJpcHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICA8aDI+VHJpcDwvaDI+XHJcbiAgICAgIHsvKiBGb3JtdWxhcmlvIHBhcmEgY3JlYXIgdW4gbnVldm8gdmlhamUgKi99XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRyaXAgbmFtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlVHJpcH0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAgIHtsb2FkaW5nID8gJ0NyZWF0aW5nLi4uJyA6ICdDcmVhdGUgTmV3IFRyaXAnfVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBNb3N0cmFyIGVycm9yZXMgc2kgaGF5ICovfVxyXG4gICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgey8qIExpc3RhIGRlIHZpYWplcyAqL31cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt0cmlwcz8ubWFwKCh0cmlwKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt0cmlwLl9pZH0+e3RyaXAubmFtZX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJUcmlwIiwibmFtZSIsInNldE5hbWUiLCJ0cmlwcyIsInNldFRyaXBzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiY3JlYXRlVHJpcCIsInBvc3QiLCJmZXRjaFRyaXBzIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIiwic3R5bGUiLCJjb2xvciIsInVsIiwibWFwIiwidHJpcCIsImxpIiwiX2lkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Trip.js\n"));

/***/ })

});