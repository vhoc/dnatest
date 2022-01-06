# INSTRUCTIONS

Validate "DNA Sequence" Endpoint:  
[POST] http://victorolvera.net:3000/mutation/  
  
User can validate a "DNA sequence" for "mutations" by sending a POST request with the following format:  
```json
{
    "dna" : ["ATGCGA","GAGTGC","AGCTGT","AGTAGG","CTGCTA","TCCGTC"]
}
```
  
Statistics Endpoint:  
[GET] http://victorolvera.net:3000/stats/

The following statistics can be requested by sending a GET request to this endpoint.  
- Mutations count
- Non mutations count
- Ratio of mutations within the records.

Records Endpoint:  
[GET] http://victorolvera.net:3000/dna/  
  
All records can be accessed through this endpoint. It was a debug tool that I decided to just leave there.
