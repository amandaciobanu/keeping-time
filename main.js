// declare variable `now` and set to the current time
const now = moment();
// declare variable `christmas` and set to December 25th
let christmas = moment("Dec 25", "MMM DD");
// create a conditional to check if `christmas` is before `now` by passing in `now` and `days` as parameters into the `isBefore()` method
if ( christmas.isBefore(now, 'days') ) {
    // if `christmas` is before the current date then add a year to the value of `christmas`
    christmas = christmas.add(1, 'year');
}
// declare variable `diff` and set it equal to the difference between `christmas` and `now`
let diff = christmas.diff(now, 'days');
// declare variable `counter` and use a DOM method to target the `h2` tag with id of `countdown`
let counter = document.getElementById('countdown');
// set the `counter` variable `.innerHTML` property to the value of `diff` to display days till Christmas
counter.innerHTML = diff;