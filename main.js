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

/***/ "./src/knightTravailsBFS.js":
/*!**********************************!*\
  !*** ./src/knightTravailsBFS.js ***!
  \**********************************/
/***/ (() => {

eval("function isValidPosition(pos) {\n  return (\n    Array.isArray(pos) && \n    pos.length === 2 &&\n    Number.isInteger(pos[0]) && \n    Number.isInteger(pos[1]) &&\n    pos[0] >= 0 && pos[0] <= 7 &&\n    pos[1] >= 0 && pos[1] <= 7\n  );\n}\n\n\nfunction knightMoves(startingNode, endNode) {\n  if (!isValidPosition(startingNode)) {\n    throw new Error(\"Invalid starting position. Must be an array [x,y] with integers between 0 and 7\");\n  }\n  if (!isValidPosition(endNode)) {\n    throw new Error(\"Invalid end position. Must be an array [x,y] with integers between 0 and 7\");\n  }\n  let storePathTraversed = [[startingNode]];\n  let storeNodesTraversed = [startingNode.toString()];\n  let queueForBFS = [startingNode];\n\n  let incrementMatrix = [[2,1],[2,-1],[1,2],[1,-2],[-2,-1],[-2,1],[-1,2],[-1,-2]];\n\n  for(;queueForBFS.length>0;){\n    let arr1 = queueForBFS.shift();\n    let previousPath = storePathTraversed.shift();\n    for(let i=0; i<8;i++){\n      let newX = arr1[0] + incrementMatrix[i][0];\n      let newY = arr1[1] + incrementMatrix[i][1];\n      let newPos = [newX, newY];\n\n      if(!storeNodesTraversed.includes(newPos.toString()) && newX <= 7\n      && newX >= 0 && newY >= 0 && newY <= 7)\n      {\n      let nextPath = Array.from(previousPath);\n      nextPath.push(newPos);\n      storePathTraversed.push(nextPath);\n      storeNodesTraversed.push(newPos.toString());\n      queueForBFS.push(newPos);\n      if (newX === endNode[0] && newY === endNode[1]) {\n        console.log(storePathTraversed[storePathTraversed.length - 1]);\n        console.log(storeNodesTraversed);\n        return nextPath;\n      }\n    }\n  }\n\n\n  }\n}\n\nknightMoves([2, 3], [3, 4]);\n\n\n//# sourceURL=webpack://knightstravails/./src/knightTravailsBFS.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/knightTravailsBFS.js"]();
/******/ 	
/******/ })()
;