README
======

About
----------------------

These functions allow one to make requests to the Crunchbase API from a Google Spreadsheet.

Included functions
---------------------------

```javascript
cbsearch(company, field)
```
Performs a request for information from the specified field to the  http://api.crunchbase.com/v/1/company/company.js URL
   
```javascript
cbcity(company)
```
Returns the "headquarter city" of the specified company. (Cities follow a different structure than other fields.)
    	
```javascript
cbmilestones(company)
```
Returns the headline of the most recent Techcrunch article in which the company is tagged.
