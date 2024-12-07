
// history btn
function historyBtn(){
    const historyBtnEl = document.getElementById('btnHistory')
    historyBtnEl.classList.add('bg-[#b4f461]');
    const donationBtnEl = document.getElementById('btnDonation');
    donationBtnEl.classList.remove('bg-[#b4f461]');
    const donateContainerEl = document.getElementById('donateContainer');
    donateContainerEl.classList.add('hidden');
    const donateHistoryDetailsEl = document.getElementById('donateHistoryDetails');
    donateHistoryDetailsEl.classList.remove('hidden')
};
// Donation button 
function donationBtn(){
    const historyBtnEl = document.getElementById('btnHistory')
    historyBtnEl.classList.remove('bg-[#b4f461]');
    const donationBtnEl = document.getElementById('btnDonation');
    donationBtnEl.classList.add('bg-[#b4f461]')
    const donateContainerEl = document.getElementById('donateContainer');
    donateContainerEl.classList.remove('hidden');
    const donateHistoryDetailsEl = document.getElementById('donateHistoryDetails');
    donateHistoryDetailsEl.classList.add('hidden')
    
}

// Donate btn Noakhali
function donateNoaBtn(){
    let sum = 0;
    const donateNoa = document.getElementById('donateNoa')
    const donateNoaEl = parseFloat(donateNoa.innerText);
    const donateNoaInputEl = parseFloat(document.getElementById('donateNoaInput').value);
   if(typeof donateNoaInputEl !== 'number' ||donateNoaInputEl <= 0 ){
    return alert('Please provide valid number')
   };
   const totalNoaDonate = donateNoaEl + donateNoaInputEl;
   const mainTakaEl = document.getElementById('mainTaka');
   const mainTaka = parseFloat(mainTakaEl.innerText);
   const restTaka = mainTaka - donateNoaInputEl;
   if(restTaka === 0 || !donateNoaInputEl > restTaka){
       return alert('Not enough balance')
    }
    mainTakaEl.innerText = restTaka
   console.log(restTaka);
   sum += totalNoaDonate
   donateNoa.innerText = sum
//    Donate history
const donateHistoryContainer = document.getElementById('donateHistoryDetails')
const noaTitleText = document.getElementById('NoaTitle').innerText
donateHistoryContainer.innerHTML+= `
<div class="border border-1 rounded-md mb-2 space-y-1 p-4">
                <h1 class="text-xl font-semibold">${donateNoaInputEl} BDT is ${noaTitleText}</h1>
                <h1 class=" font-semibold">Taka <span class='text-green-600'>${donateNoaInputEl} BDT</span></h1>
                <h3 class="bg-slate-100 p-2">Date : ${new Date().toLocaleString()}</h3>
            </div>

`
      
};

// Donate feni btn
function donateFeni(){
    let sum = 0;
    const donateFeni = document.getElementById('donateFeni')
    const donateFeniEl = parseFloat(donateFeni.innerText);
    const donateFeniInputEl = parseFloat(document.getElementById('donateFeniInput').value);
   if(typeof donateFeniInputEl !== 'number' ||donateFeniInputEl <= 0){
    return alert('Please provide valid number')
   };
   const totalFeniDonate = donateFeniEl + donateFeniInputEl;
   const mainTakaEl = document.getElementById('mainTaka');
   const mainTaka = parseFloat(mainTakaEl.innerText);
   const restTaka = mainTaka - donateFeniInputEl;
   if(restTaka === 0 || !donateFeniInputEl > restTaka){
       return alert('Not enough balance')
    }
    mainTakaEl.innerText = restTaka
   console.log(restTaka);
   sum += totalFeniDonate
   donateFeni.innerText = sum;
   //    Donate history
const donateHistoryContainer = document.getElementById('donateHistoryDetails')
const feniTitleText = document.getElementById('feniTitle').innerText
donateHistoryContainer.innerHTML+= `
<div class="border border-1 rounded-md mb-2 space-y-1 p-4">
                <h1 class="text-xl font-semibold">${donateFeniInputEl} BDT is ${feniTitleText}</h1>
                <h1 class=" font-semibold">Taka <span class='text-green-600'>${donateFeniInputEl} BDT</span></h1>
                <h3 class="bg-slate-100 p-2">Date : ${new Date().toLocaleString()}</h3>
            </div>

`
   
    
};

// Donate quota andolon
function donateQuota(){
    let sum = 0;
    const donateQuota = document.getElementById('donateQtota')
    const donateQuotaEl = parseFloat(donateQuota.innerText);
    const donateQuotaInputEl = parseFloat(document.getElementById('donateQuotaInput').value);
   if(typeof donateQuotaInputEl !== 'number'|| donateQuotaInputEl <= 0){
    return alert('Please provide valid number')
   };
   const totalQuotaDoate = donateQuotaEl + donateQuotaInputEl;
   const mainTakaEl = document.getElementById('mainTaka');
   const mainTaka = parseFloat(mainTakaEl.innerText);
   const restTaka = mainTaka - donateQuotaInputEl;
   if(restTaka === 0 || !donateQuotaInputEl > restTaka){
       return alert('Not enough balance')
    }
    mainTakaEl.innerText = restTaka
   console.log(restTaka);
   sum += totalQuotaDoate
   donateQuota.innerText = sum
      //    Donate history
const donateHistoryContainer = document.getElementById('donateHistoryDetails')
const quotaTitleText = document.getElementById('quotaTitle').innerText
donateHistoryContainer.innerHTML+= `
<div class="border border-1 rounded-md mb-2 space-y-1 p-4">
                <h1 class="text-xl font-semibold">${donateQuotaInputEl} BDT is Donated ${quotaTitleText}</h1>
                <h1 class=" font-semibold">Taka <span class='text-green-600'>${donateQuotaInputEl} BDT</span></h1>
                <h3 class="bg-slate-100 p-2">Date : ${new Date().toLocaleString()}</h3>
            </div>

`
    
}


