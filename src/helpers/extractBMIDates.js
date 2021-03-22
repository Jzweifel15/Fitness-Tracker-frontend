export const extractBMIDates = (bmisArray) => {
  return bmisArray.map(bmiObj => {
    let day = bmiObj.created_at.slice(8, 10);
    let month;
    switch(bmiObj.created_at.slice(5, 7)) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "Mar";
        break;
      case "04":
        month = "Apr";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sept";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
        break;
      default:
        let today = new Date();
        month = today.toString().slice(4, 7);
    }
  
    return `${month} ${day}`
  });
}

