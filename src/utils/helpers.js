import moment from 'moment';

export const thirtyDaysAgo=()=>{
  var back30Days = moment().subtract(30, "days").format("YYYY-MM-DD");
  return back30Days;
}
