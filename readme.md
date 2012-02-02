README
======

About
----------------------

These functions allow one to make requests to the Crunchbase API from a Google Spreadsheet.

Included functions
---------------------------

  cbsearch(company, field)
    Performs a request for information from the specified field to the  http://api.crunchbase.com/v/1/company/company.js URL
      
	cbcity(company)
	  Returns the "headquarter city" of the specified company.
    (Cities follow a different structure than other fields.)