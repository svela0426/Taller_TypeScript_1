import { Serie } from "./Serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
const imageTbody: HTMLElement = document.getElementById("feo")!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const filterByName: HTMLElement = document.getElementById("1")!;







renderSeriesInTable(dataSeries);


getTotalCredits(dataSeries);


btnfilterByName.onclick = () => applyFilterByName();

filterByName.onclick = () => applyFilterByName();






function renderSeriesInTable(Series: Serie[]): void {

  console.log('Desplegando series');
  Series.forEach((Series) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<tdid= "${Series.id}" >${Series.id}</td>
                            <td >${Series.name}</td>
                           <td >${Series.company}</td>
                           <td>${Series.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}




function unamas(Series: Serie[]) { 

  console.log('Desplegando series');
  Series.forEach((Series) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<div class="card" style="width: 18rem;">
                            <h5 class="card-title">${Series.name}</h5>
                            <div class="card-body">
                            <img src="${Series.picture}" class="card-img-top" alt="...">
                              <p class="card-text">${Series.Topic}</p>
                              <a href="${Series.link}" class="btn btn-primary">${Series.link}</a>
                            </div>
                          </div>`;
                           

    imageTbody.appendChild(trElement);
  });
}

function applyFilterByName() { 
  let coursesFiltered: Serie[] = searchCourseByName("Orange Is the New Black", dataSeries);
  unamas(coursesFiltered);
}



function searchCourseByName(nameKey: string, Series: Serie[]) {
  return nameKey === '' ? dataSeries : Series.filter( c => 
    c.name.match(nameKey));
}






function clearCoursesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}










function getTotalCredits(Series: Serie[]): void {

    let numero: number = 0;
    let valor: number = 0;


    Series.forEach((Serie) => numero = numero + Serie.seasons);
    Series.forEach((Serie) => valor = valor + 1);


    numero=numero/valor

    let trElement = document.createElement("tr");
    trElement.innerHTML =  ` <th></th>
                             <th>Season </th>
                            <th>average</th>
                           <th>${numero}</th> `;


    seriesTbody.appendChild(trElement);


}













