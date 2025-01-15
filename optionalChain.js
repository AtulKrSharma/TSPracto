//Optional chaining

const customerSettlementPage = {
  btnAccounting: 10,
  btnCustomerSettlement: {
    primary: 'Mississauga',
    secondary: 'Brampton',
  },
};

console.log(customerSettlementPage.btnAccounting);
console.log(customerSettlementPage?.btnAccounting?.secondary);
