import * as React from 'react'
import Employee from './employeeCards'
import {employeeHolder} from './employee.module.css'


let employees= [{id:1 ,title:"Jeff McMillion - Founding Attorney",bio:"McMillion Law was started by Jeff McMillion. Jeff was born and raised in Northern Ohio. He now resides in North Carolina with his beautiful wife Amy and their son Kai. Jeff graduated from the prestigious Campbell University for both his undergraduate degree and Juris Doctorate. After graduating with a bachelors degree in criminal justice, Jeff worked as a police officer specializing in investigations for over five years. Jeff then left law enforcement for law school. During law school Jeff externed with the Honorable J. Bryan Boyd at the N.C. Clerk of the Supreme Court and worked under well respected attorney, J. Michael McGuinness. Jeff is a licensed attorney in North Carolina that focuses his practice on professional license defense, law enforcement liability, criminal defense, and personal injury."},{title:"Taylor Dant - Litigation Associate",bio:"Taylor Dant is one of McMillion Law’s litigation associates. Taylor’s family is originally from Goldsboro, N.C., but comes from from a military background. Taylor moved across the U.S., and she ultimately decided to call Graham and Alamance County her home. Taylor attended Samford law school in Birmingham, Alabama, with the primary focus on learning how to become a fantastic trial attorney and honed her skills on a top 3 ranked trial team. Taylor’s also spent time in law school working as a constitutional law research associate, Vice President of the Carolina Bar Association, Student Bar Representative, and Vice President of Air and Space Law. Taylor has professional working experience in the public defender’s office, private criminal defense, custody and family law, civil litigation in both plaintiff’s work as well as civil defense. Taylor believes that no matter what case or crime you have, she will never forget that everyone is human. Everyone makes mistakes. Most importantly, everyone is entitled to a fierce and protective counselor. Our litigation attorney is that counselor."},{title:"Andrew Denoff - Litigation Associate",bio:"Andrew Denoff is an attorney from the Greensboro area who handles criminal defense and family law litigation. Andrew is a graduate of Guilford College in 2018 with a BA in history and a minor in criminal justice. He then went on to graduate from Elon University School of Law and is now licensed attorney in the state of North Carolina. Andrew has previous experience at the Rockingham County District Attorney's office and the Greensboro Public Defender's office giving him a unique edge in criminal cases by understanding how both sides of the table operate."},{title:"Demetrius Edwards - Office Manager",bio:"Demetrius ‘DJ’ Edwards is the front line face anybody will deal with at McMillion Law. DJ handles all of the administrative tasks as the office manager of McMillion Law. These include onboarding new clients, answering phones, and relaying information to clients. DJ is originally from Charlotte North Carolina. He received his Bachelor's at the University of North Carolina at Pembroke in 2016. His experience in the legal field ranges from internships at District Attorneys Office, and Legal Aid along with working as paralegal and Office Manager in the Raleigh area. He is happily married to his wife and has two beautiful small girls."}]
employees = employees.map(employee=><Employee key= {employee.id} title={employee.title} bio={employee.bio} />)

const Employees=()=>{

    return(
        <div className={employeeHolder}>
            {employees}
        </div>
    )

}

export default Employees
