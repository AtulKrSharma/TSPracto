//Optional chaining

const customerSettlementPage = {
  btnAccounting: 10,
  btnCustomerSettlement: {
    primary: 'Missi',
    secondary: 'Brampton',
  },
};

console.log(customerSettlementPage.btnAccounting);
console.log(customerSettlementPage?.btnAccounting?.secondary);
