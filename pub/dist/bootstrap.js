/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/wasm_client_bg.wasm": function() {
/******/ 			return {
/******/ 				"./wasm_client_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_alert_4ae9046a7b381592": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_alert_4ae9046a7b381592"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_confirm_32a42ee18f5f89fc": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_confirm_32a42ee18f5f89fc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_f401953a2cf86220": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_instanceof_Window_f401953a2cf86220"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_5100775d18896c16": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_document_5100775d18896c16"](p0i32);
/******/ 					},
/******/ 					"__wbg_location_2951b5ee34f19221": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_location_2951b5ee34f19221"](p0i32);
/******/ 					},
/******/ 					"__wbg_fetch_c4b6afebdb1f918e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_fetch_c4b6afebdb1f918e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createElement_8bae7856a4bb7411": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_createElement_8bae7856a4bb7411"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_c369ff43f0db99cf": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_getElementById_c369ff43f0db99cf"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_3c9f6c303b696daa": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_setAttribute_3c9f6c303b696daa"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlButtonElement_534f7aa847dae46f": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_instanceof_HtmlButtonElement_534f7aa847dae46f"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Response_849eb93e75734b6e": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_instanceof_Response_849eb93e75734b6e"](p0i32);
/******/ 					},
/******/ 					"__wbg_json_1d5f113e916d8675": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_json_1d5f113e916d8675"](p0i32);
/******/ 					},
/******/ 					"__wbg_headers_abb199c3be8d817c": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_headers_abb199c3be8d817c"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithstrandinit_3fd6fba4083ff2d0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_newwithstrandinit_3fd6fba4083ff2d0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_53b787075bd5e003": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_addEventListener_53b787075bd5e003"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_cb0e7a5c2dd66afd": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_set_cb0e7a5c2dd66afd"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_reload_e61411ac20446229": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_reload_e61411ac20446229"](p0i32);
/******/ 					},
/******/ 					"__wbg_settextContent_d271bab459cbb1ba": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_settextContent_d271bab459cbb1ba"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_580ccb11a660db68": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_appendChild_580ccb11a660db68"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_queueMicrotask_481971b0d87f3dd4": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_queueMicrotask_481971b0d87f3dd4"](p0i32);
/******/ 					},
/******/ 					"__wbg_queueMicrotask_3cbae2ec6b6cd3d6": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_queueMicrotask_3cbae2ec6b6cd3d6"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_e258087cd0daa0ea": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_newnoargs_e258087cd0daa0ea"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_27c0f87801dedf93": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_call_27c0f87801dedf93"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_72fb9a18b5ae2624": function() {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_new_72fb9a18b5ae2624"]();
/******/ 					},
/******/ 					"__wbg_self_ce0dbfc45cf2f5be": function() {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_self_ce0dbfc45cf2f5be"]();
/******/ 					},
/******/ 					"__wbg_window_c6fb939a7f436783": function() {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_window_c6fb939a7f436783"]();
/******/ 					},
/******/ 					"__wbg_globalThis_d1e6af4856ba331b": function() {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_globalThis_d1e6af4856ba331b"]();
/******/ 					},
/******/ 					"__wbg_global_207b558942527489": function() {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_global_207b558942527489"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_call_b3ca7c6051f9bec1": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_call_b3ca7c6051f9bec1"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_81740750da40724f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_new_81740750da40724f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_b0083a7967828ec8": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_resolve_b0083a7967828ec8"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_0c86a60e8fcfe9f6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_then_0c86a60e8fcfe9f6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_a73caa9a87991566": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_then_a73caa9a87991566"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_1f9b04f170055d33": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbg_set_1f9b04f170055d33"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper104": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_closure_wrapper104"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper449": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_client_bg.js"].exports["__wbindgen_closure_wrapper449"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/wasm_client_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/wasm_client_bg.wasm":"433e90658c632f2de964"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });