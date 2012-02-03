function cbsearch(company, field) {
  var url = "http://api.crunchbase.com/v/1/company/" + String.toLowerCase(company) + ".js";
  
  try{
    var response = UrlFetchApp.fetch(url);
  
    var companyInfo = Utilities.jsonParse(response.getContentText());

    if (isGarbage(companyInfo) || isGarbage(companyInfo[field])) {
      return " ";
    }
  
    return companyInfo[field];
  }catch(error){
    //catch 404 errors when company is not found in Crunchbase
  }
}

function cbcity(company){
  var url = "http://api.crunchbase.com/v/1/company/" + String.toLowerCase(company) + ".js";
  
  try{
    var response = UrlFetchApp.fetch(url);

    var companyInfo = Utilities.jsonParse(response.getContentText());

    if (isGarbage(companyInfo) || isGarbage(companyInfo["offices"]) || isGarbage(companyInfo["offices"][0]) || isGarbage(companyInfo["offices"][0]["city"])){
      return "";
    } else {  
      return companyInfo["offices"][0]["city"];  
    }
  }catch(error){
    //catch 404 errors when company is not found in Crunchbase
  }
}

function cbmilestones(company){
  var url = "http://api.crunchbase.com/v/1/company/" + String.toLowerCase(company) + ".js";
  var response = UrlFetchApp.fetch(url);

  var companyInfo = Utilities.jsonParse(response.getContentText());
  
  if (isGarbage(companyInfo) || isGarbage(companyInfo["milestones"]) || isGarbage(companyInfo["milestones"][0]) || isGarbage(companyInfo["milestones"][0]["description"])){
    return " ";
  } else {  
    return companyInfo["milestones"][0]["description"];  
  } 
}

function isGarbage(output){
  if(output  == null || typeof output == null){
    return true;
  } else {
    return false;
  }
}

function monthword(month){
  switch (month){
    case 1:
      return "January";
    case 2: 
      return "February";
    case 3:
      return "March";
    case 4: 
      return "April";
    case 5:
      return "May";
    case 6: 
      return "June";
    case 7:
      return "July";
    case 8: 
      return "August";
    case 9:
      return "September";
    case 10: 
      return "October";
    case 11:
      return "November";
    case 12: 
      return "December";
  }
}