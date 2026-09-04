// https://date-fns.org/v4.4.0/docs/format

let myDate = dateFns.format(new Date(), "E d LLL h:mm a");

// console.log(myDate);

let myDate2 = dateFns.formatDistanceToNow(
  "Wed Sep 02 2026 18:15:02 GMT+0500 (Pakistan Standard Time)",
  {
    addSuffix: true,
  },
);

