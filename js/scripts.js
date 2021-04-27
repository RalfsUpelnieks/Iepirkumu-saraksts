const PANELIS = document.getElementById('panelis');
const SARAKSTS = document.getElementById('saraksts');

document.getElementById('pievienotPreci').addEventListener('click', () => {
    PANELIS.style.display = 'block';

});

document.getElementById('nodzestSarakstu').addEventListener('click', () => {
   SARAKSTS.innerHTML = '';
});

document.getElementById('iziesanasPoga').addEventListener('click', () => {
    PANELIS.style.display = 'none';

});

document.getElementById('pievienotPreciSarakstam').addEventListener('click', () => {

    let prece =`
    <div class='prece'>
        <h3 id='precesVards'>Preces nosaukums: ${precesNosaukums.value}</h3>
        <h4>daudzums: ${daudzums.value}</h4>
        <button class='dzest'>X</button>
    </div>`;

    SARAKSTS.innerHTML += prece;
    PANELIS.style.display = 'none';

    precesNosaukums.value = '';
    daudzums.value = '';
});

const saraksts = document.querySelector('#saraksts');

saraksts.addEventListener('click', function(e){
    if(e.target.className == 'dzest'){
        const vecaks = e.target.parentElement;
            SARAKSTS.removeChild(vecaks);
    }
});