const PANELIS = document.getElementById('panelis');
let preces = [];
var precesNummurs = 0;

document.getElementById('pievienotPreci').addEventListener('click', () => {
    PANELIS.style.display = 'block';

})

document.getElementById('nodzestSarakstu').addEventListener('click', () => {
    preces = [];
    render();
})

document.getElementById('iziesanasPoga').addEventListener('click', () => {
    PANELIS.style.display = 'none';

})

document.getElementById('pievienotPreciSarakstam').addEventListener('click', () => {

    let prece =`
    <div class="prece">
        <h3>Preces nosaukums: ${precesNosaukums.value}</h3>
        <h4>daudzums: ${daudzums.value}</h4>
        <button class='dzest'></button>
    </div>`;

    saraksts.innerHTML += prece;
    PANELIS.style.display = 'none';

    precesNosaukums.value = "";
    daudzums.value = "";
})

const saraksts = document.querySelector('#saraksts');

saraksts.addEventListener('click', function(e){
    if(e.target.className == 'dzest'){
        var precesNummurs = e.target.id.substring(5);
        console.log(precesNummurs);
        console.log(preces);
        preces.splice(precesNummurs, precesNummurs);
        render();
    }
})