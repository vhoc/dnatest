# INSTRUCTIONS

Validate "DNA Sequence" Endpoint:  
http://victorolvera.net:3000/mutation/  
  
User can validate a "DNA sequence" for "mutations" by sending a POST request with the following format:  
```json
{
    "dna" : ["ATGCGA","GAGTGC","AGCTGT","AGTAGG","CTGCTA","TCCGTC"]
}
```
  
Statistics Endpoint:
http://victorolvera.net:3000/stats/

Mutations statistics can be queried by sending a GET request to this endpoint.  
- Mutations count
- Non mutations count
- Ratio of mutations within the records.

