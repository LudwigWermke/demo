# node-version
14.17.5
# ng cli
 12.2.2

# Notes
* All three views are placed in a specific directory: defaultView, scannerView, and medicationPlanView
* There are two services: one for extracting the xml (rc/app/mediation-plan-parser.service.ts) and one for sharing data (src/app/med-plan-service.service.ts) 
* I used the ngx-scanner, which seemed to be the most trustworthy, open-source tool to do the job of scanning and parsing together
