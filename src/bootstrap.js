import moment from 'moment';

const birthday = moment('1990-02-05', 'YYYY-MM-DD');
const rightNow = moment();

console.log(birthday.format('dddd'));
console.log(birthday.format('MMM Do YYYY'));
console.log(birthday.fromNow());

const twoWeeksFromNow = moment().add(14, 'days');
console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, 'months');
console.log(sixMonthsAgo.toString());