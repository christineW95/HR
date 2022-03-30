// {
 
//     "Id": 3,
//     "Title": "ESS0001",
//     "ComplianceAssetId": null,
//     "SalaryCertificate": true,
//     "EmploymentCertificate": true,
//     "IDCards": false,
//     "HealthCards": false,
//     "language": "English",
//     "To": "Test",
//     "Remarks": null,
//     "Purpose": null,
//     "EmpID": null,
//     "Saved": false,
//     "Opened": true,
//     "Finished": true,
//     "Deleted": false,
//     "Action": "Approved By HR",
//     "Employee": 5,
//     "TestCol": "2222",
//     "ID": 3,
    
//     "GUID": "1db14029-95c1-49d1-9c1f-4bb8e490597d"
// }
export function EmployeeServices({title,certificate,language,to,remarks,purpose,saved,opened,finished})
{
    this.title=title
    this.certificate=certificate
    this.language=language
    this.to=to
    this.remarks=remarks
    this.purpose=purpose
}