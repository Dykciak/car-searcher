var inputSearch,allLi,main=function(){prepareDOMElements(),prepareDOMEvents()},prepareDOMElements=function(){inputSearch=document.querySelector(".search"),allLi=document.querySelectorAll("li")},prepareDOMEvents=function(){inputSearch.addEventListener("keyup",searchCar)},searchCar=function(e){var n;""!==inputSearch.value?(n=e.target.value.toLowerCase(),console.log(n),allLi.forEach(function(e){-1!==e.textContent.toLowerCase().indexOf(n)?e.style.display="block":e.style.display="none"})):console.log("musisz coś wpisać")};document.addEventListener("DOMContentLoaded",main);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5wdXRTZWFyY2giLCJhbGxMaSIsInByZXBhcmVET01FbGVtZW50cyIsIm1haW4iLCJwcmVwYXJlRE9NRXZlbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWFyY2hDYXIiLCJ0YXJnZXQiLCJjb25zb2xlIiwidGV4dCIsImZvckVhY2giLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiZWwiLCJ0ZXh0Q29udGVudCIsImRpc3BsYXkiLCJpbmRleE9mIiwic3R5bGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFlBQ0FDLE1BQUFBLEtBQUssV0FFVEMsbUJBQU1DLEVBRUxDLGlCQURBRixDQUVELEVBRU1BLG1CQUFxQixXQUMxQkYsWUFBV0ssU0FBV0MsY0FBYyxTQUFDLEVBQ3JDTCxNQUFLSSxTQUFXRSxpQkFBaUIsSUFBQyxDQUNuQyxFQUdDUCxpQkFBWVEsV0FDWlIsWUFBQVEsaUJBQUEsUUFBQUMsU0FBQSxDQUVELEVBRUVBLFVBQWVDLFNBQUFBLEdBRGhCLElBR0NULEVBRGlCLEtBQWpCVSxZQUFZQyxPQUNaWCxFQUFNWSxFQUFPSCxPQUFDSSxNQUFHQyxZQUFLLEVBRHRCSixRQUVLSyxJQUFHQyxDQUFBQSxFQURSaEIsTUFFRWUsUUFBUSxTQUFDRSxHQUNILENBQUEsSUFBTkYsRUFBQUMsWUFBTUYsWUFBQSxFQUFBSSxRQUFBUCxDQUFBLEVBRE5JLEVBQUdJLE1BRUFBLFFBQU1GLFFBRVhGLEVBQUVJLE1BQUFGLFFBQUEsTUFBRixDQUFDLEdBSUZQLFFBQUFVLElBQUEsbUJBQUEsQ0FBRCxFQUVBaEIsU0FBU0csaUJBQWlCLG1CQUFvQkwsSUFBSSIsImZpbGUiOiJtYWluX21pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBpbnB1dFNlYXJjaDtcbmxldCBhbGxMaTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcblx0cHJlcGFyZURPTUVsZW1lbnRzKCk7XG5cdHByZXBhcmVET01FdmVudHMoKTtcbn07XG5cbmNvbnN0IHByZXBhcmVET01FbGVtZW50cyA9ICgpID0+IHtcblx0aW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblx0YWxsTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG59O1xuXG5jb25zdCBwcmVwYXJlRE9NRXZlbnRzID0gKCkgPT4ge1xuXHRpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgc2VhcmNoQ2FyKTtcbn07XG5cbmNvbnN0IHNlYXJjaENhciA9IChlKSA9PiB7XG5cdGlmIChpbnB1dFNlYXJjaC52YWx1ZSAhPT0gXCJcIikge1xuXHRcdGNvbnN0IHRleHQgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnNvbGUubG9nKHRleHQpO1xuXHRcdGFsbExpLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRpZiAoZWwudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSkge1xuXHRcdFx0XHRlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKFwibXVzaXN6IGNvxZsgd3Bpc2HEh1wiKTtcblx0fVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbWFpbik7XG4iXX0=
