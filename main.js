"use scrict"

/*# carosello

1. mi creo  un array di immagini e le salvo in una costante.
2. utilizzo il ciclo for per ciclare le immagini.
3. mi seleziono la classe item e gli appendo l'immagine 1 che deve essere visibile.
4. gli aggiungo  la classe active.
5. mi prendo gli elementi freccia e le salvo in una variabile. 
6. utilizzo l'evento on click sulle frecce.
7. aggiungo e tolgo la classe active.

<div class="items">
<div class="item active">
  
</div>
<div class="prev"></div>
<div class="next"></div>
</div>*/
const  items = document.querySelector(".items");
const Immagini = [ "01.jpg", "02.jpg", "03.jpg","04.jpg","05.jpg"]
console.log(Immagini)
const item =document.createElement("div");
item.classList.add("item");
items.append(item);
const img = document.createElement("img");
item.append(img)
console.log(items)
const conteggio = 0


for(i = 0 ; i < Immagini.length; i++){
    console.log(i)
    if(conteggio === 0){
        item.classList.add("active")
    }
    img.src = img/[i]
}







