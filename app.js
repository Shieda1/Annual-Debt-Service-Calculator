// https://calculator.swiftutors.com/annual-debt-service-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const annualDebtServiceRadio = document.getElementById('annualDebtServiceRadio');
const annualNetOperatingIncomeRadio = document.getElementById('annualNetOperatingIncomeRadio');
const debtCoverageRatioRadio = document.getElementById('debtCoverageRatioRadio');

let annualDebtService;
let annualNetOperatingIncome = v1;
let debtCoverageRatio = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

annualDebtServiceRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Net Operating Income (ANOI)';
  variable2.textContent = 'Debt Coverage Ratio (DCR)';
  annualNetOperatingIncome = v1;
  debtCoverageRatio = v2;
  result.textContent = '';
});

annualNetOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Debt Service (ADS)';
  variable2.textContent = 'Debt Coverage Ratio (DCR)';
  annualDebtService = v1;
  debtCoverageRatio = v2;
  result.textContent = '';
});

debtCoverageRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Annual Debt Service (ADS)';
  variable2.textContent = 'Annual Net Operating Income (ANOI)';
  annualDebtService = v1;
  annualNetOperatingIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(annualDebtServiceRadio.checked)
    result.textContent = `Annual Debt Service = ${computeAnnualDebtService().toFixed(2)}`;

  else if(annualNetOperatingIncomeRadio.checked)
    result.textContent = `Annual Net Operating Income = ${computeAnnualNetOperatingIncome().toFixed(2)}`;

  else if(debtCoverageRatioRadio.checked)
    result.textContent = `Debt Coverage Ratio = ${computeDebtCoverageRatio().toFixed(2)}`;
})

// calculation

function computeAnnualDebtService() {
  return Number(annualNetOperatingIncome.value) / Number(debtCoverageRatio.value);
}

function computeAnnualNetOperatingIncome() {
  return Number(annualDebtService.value) * Number(debtCoverageRatio.value);
}

function computeDebtCoverageRatio() {
  return Number(annualNetOperatingIncome.value) / Number(annualDebtService.value);
}