# API Conventions

<ins>**GET Request**</ins>

## Structure

`protocol://baseUrl/env/<version>/endPoint/<pathParameter><filters><sort><count><start>`

 eg:
 - https://api.mytrips.com/dev/v1/trips?filter=type~vacation&sortAsc=startDate&count=100&start=200

 - https://api.mytrips.com/dev/v2/trips/5


## Versioning
- Version is optional (if not added will point to the default version)
- version is added in between the env and endpoint

## Path Parameters
- Added at the end after Actual endpoint.
- No specific indication is provided
- Will heve specific identifier mapped to the path parameter if present.

## Query String Parameters

Starting with commonly used parameters below, will update the list once we start using additional ones. 

### Filter/s
- optional
- using `filter=parameter~value` pattern.
- can have multiple filters in an API `filter=parameter1~value1&filter=parameter2~value2`
- filters will be applied in the priority they are added in the URL.
### Sorting/s
- optional
- `sortAsc` or `sortDesc` can be used as needed.
- using `sortAsc=parameter` pattern.
- can have multiple filters in an API and can have both types `sortAsc=parameter1&sortAsc=parameter2&sortDesc=parameter3`
- sorting will be applied in the priority they are added in the URL.

### Count
- optional
- To specify the page size of the multi page results

### Start
- optional
- To specify the offset for multi page results 

<ins>**Response**</ins>

   TBD
