import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var imageTbody = document.getElementById("feo");
var btnfilterByName = document.getElementById("button-filterByName");
var filterByName = document.getElementById("1");
renderSeriesInTable(dataSeries);
getTotalCredits(dataSeries);
btnfilterByName.onclick = function () { return applyFilterByName(); };
filterByName.onclick = function () { return applyFilterByName(); };
function renderSeriesInTable(Series) {
    console.log('Desplegando series');
    Series.forEach(function (Series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<tdid= \"".concat(Series.id, "\" >").concat(Series.id, "</td>\n                            <td >").concat(Series.name, "</td>\n                           <td >").concat(Series.company, "</td>\n                           <td>").concat(Series.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function unamas(Series) {
    console.log('Desplegando series');
    Series.forEach(function (Series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n                            <h5 class=\"card-title\">".concat(Series.name, "</h5>\n                            <div class=\"card-body\">\n                            <img src=\"").concat(Series.picture, "\" class=\"card-img-top\" alt=\"...\">\n                              <p class=\"card-text\">").concat(Series.Topic, "</p>\n                              <a href=\"").concat(Series.link, "\" class=\"btn btn-primary\">").concat(Series.link, "</a>\n                            </div>\n                          </div>");
        imageTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var coursesFiltered = searchCourseByName("Orange Is the New Black", dataSeries);
    unamas(coursesFiltered);
}
function searchCourseByName(nameKey, Series) {
    return nameKey === '' ? dataSeries : Series.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function clearCoursesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
function getTotalCredits(Series) {
    var numero = 0;
    var valor = 0;
    Series.forEach(function (Serie) { return numero = numero + Serie.seasons; });
    Series.forEach(function (Serie) { return valor = valor + 1; });
    numero = numero / valor;
    var trElement = document.createElement("tr");
    trElement.innerHTML = " <th></th>\n                             <th>Season </th>\n                            <th>average</th>\n                           <th>".concat(numero, "</th> ");
    seriesTbody.appendChild(trElement);
}
