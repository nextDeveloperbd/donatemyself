function getBtnColor(id){
    const value = document.getElementById(id);
    value.classList.add('bg-[#b4f461]');
    return value;
}
function removeBtnColor(id){
    const value = document.getElementById(id);
    value.classList.remove('bg-[#b4f461]');
    return value;
}
// history btn
function historyBtn(){
    getBtnColor('btnHistory')
    removeBtnColor('btnDonation')
    const donateContainerEl = document.getElementById('donateContainer');
    donateContainerEl.classList.add('hidden');
    const donateHistoryDetailsEl = document.getElementById('donateHistoryDetails');
    donateHistoryDetailsEl.classList.remove('hidden')
};
// Donation button 
    function donationBtn(){
    removeBtnColor('btnHistory')
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
   /*  const donateNoa = document.getElementById('donateNoa')
    const donateNoaEl = parseFloat(donateNoa.innerText); */
    const donateNoaEl = getValueById('donateNoa');
    const inputField = document.getElementById('donateNoaInput')
    const donateNoaInputEl = parseFloat(inputField.value);
   if(typeof donateNoaInputEl !== 'number' ||donateNoaInputEl <= 0 || inputField.value.trim() === ''){
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
                <h1 class="text-xl font-semibold"><span class="text-green-600">${donateNoaInputEl}</span> BDT is ${noaTitleText}</h1>
                
                <h3 class="bg-slate-100 p-2">Date : ${new Date().toLocaleString()}</h3>
            </div>

`
    alert(`successfully ${donateNoaInputEl} taka donate sent`)  
};

// Donate feni btn
function donateFeni(){
    let sum = 0;
    const donateFeni = document.getElementById('donateFeni')
    const donateFeniEl = parseFloat(donateFeni.innerText);
    const inputField = document.getElementById('donateFeniInput')
    const donateFeniInputEl = parseFloat(inputField.value);
   if(typeof donateFeniInputEl !== 'number' ||donateFeniInputEl <= 0 || inputField.value.trim() === ''){
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
                <h1 class="text-xl font-semibold"><span class="text-green-600">${donateFeniInputEl}</span> BDT is ${feniTitleText}</h1>
                
                <h3 class="bg-slate-100 p-2">Date : ${new Date().toLocaleString()}</h3>
            </div>

`
alert(`successfully ${donateFeniInputEl} taka donate sent`)
    
};

// Donate quota andolon
function donateQuota(){
    let sum = 0;
    const donateQuota = document.getElementById('donateQtota')
    const donateQuotaEl = parseFloat(donateQuota.innerText);
    const inputField = document.getElementById('donateQuotaInput')
    const donateQuotaInputEl = parseFloat(inputField.value);
   if(typeof donateQuotaInputEl !== 'number'|| donateQuotaInputEl <= 0 || inputField.value.trim() === ''){
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
                <h1 class="text-xl font-semibold"><span class="text-green-600">${donateQuotaInputEl}</span> BDT is Donated ${quotaTitleText}</h1>
                <h3 class="bg-slate-100 p-2">Date : ${new Date().toLocaleString()}</h3>
            </div>

`
alert(`successfully ${donateQuotaInputEl} taka donate sent `)
}
// Redirect
function blogClick(){
    location.replace("blog.html")
}
function homeClick(){
    location.replace("index.html")
}

// Common function
function getValueById(id){
    const value = document.getElementById(id);
    const valueEl = parseFloat(value.innerText);
    return valueEl
    
}

