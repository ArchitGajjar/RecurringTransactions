const _ = require('lodash');

module.exports = (rawdata) => {
  const results = _.groupBy(rawdata, "name");
  let recurringRecords = {};
  Object.keys(results).forEach((record, i) => {
    if(results[record].length > 1){
      recurringRecords[results[record][0].name] = results[record].map(x => {
        return {
          date: x.date,
          amount: x.amount,
          trans_id: x.trans_id,
          user_id: x.user_id
        }
      })
      // console.log(i, 'JSON records : ', recurringRecords);
    }
  })

  let sortedRecurringOrder = {};
  Object.keys(recurringRecords).sort().forEach((index)=> {
    sortedRecurringOrder[index] = recurringRecords[index];
  })
  // console.log('FINAL RECURRING RECORDS ::: ', sortedRecurringOrder);
  return sortedRecurringOrder;
}