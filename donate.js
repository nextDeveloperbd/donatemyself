
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
   if(typeof donateNoaInputEl !== 'number'){
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
      
};

// Donate feni btn
function donateFeni(){
    let sum = 0;
    const donateFeni = document.getElementById('donateFeni')
    const donateFeniEl = parseFloat(donateFeni.innerText);
    const donateFeniInputEl = parseFloat(document.getElementById('donateFeniInput').value);
   if(typeof donateFeniInputEl !== 'number'){
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
   donateFeni.innerText = sum
   
    
};

// Donate quota andolon
function donateQuota(){
    let sum = 0;
    const donateQuota = document.getElementById('donateQtota')
    const donateQuotaEl = parseFloat(donateQuota.innerText);
    const donateQuotaInputEl = parseFloat(document.getElementById('donateQuotaInput').value);
   if(typeof donateQuotaInputEl !== 'number'){
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
   
    
}
