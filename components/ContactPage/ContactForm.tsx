import React,{FC,useState} from 'react'
import styles from "./ContactForm.module.css";
import { Leftfooter, Middlefooter, Middlefooter2 } from '../Footer';
import Link from 'next/link'
import Copyright from '../Copyright';
import { useMutation } from '@apollo/client';
import CONTACT from '@graphql/CONTACT.graphql';

function FooterRight() {
return (
    <div className={styles.customStyle}>
  <li>
    <Link href="/signin" ><span className={styles.link} >Sign In</span></Link>
  </li>
  <span className={styles.spanbutton}>
    <Link href="/signup" className={styles.link}>
      <button className={styles.buttonStyle}>Sign Up</button>
    </Link>
  </span>
</div>
)
}

const ContactForm:FC = () => {
const [name, setName] = useState<string>("");
const [organizationName, setOrgnizationName] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [contact, setContact] = useState<string>("");
const [details, setDetails] = useState<string>("");
const [contactDetails, { data, loading, error}] = useMutation(CONTACT)
const clearState = () => {
setName('')
setOrgnizationName('')
setEmail('')
setContact('')
setDetails('')
}

const handleSubmit = (e : any) => {
e.preventDefault();
  contactDetails({
    variables: {
      input:  {
        "name": name,
        "organizationName": organizationName,
        "email": email,
        "contactNumber": contact,
        "details": details
      }
    }
  })
  if(data){
    clearState()
  }    
} 

return (
<> 
<div className={styles.main}>
  
<h1 className={styles.heading1}>Get in Touch</h1>
<hr className={styles.hruler}/>

<div className={styles.formDiv}>

<form onSubmit={handleSubmit}>
    <input 
    type="text" 
    name="" 
    id="name" 
    placeholder="Your name"
    value={name}  
    onChange={(e) => setName(e.target.value)}
    className={styles.inputs}/ >
    <br/>
    <input 
    type="text" 
    name="" 
    id="Organisation" 
    placeholder="Organsation Name"
    value={organizationName}  
    onChange={(e) => setOrgnizationName(e.target.value)}
    className={styles.inputs}/>
    <br/>
    <input 
    type="email" 
    name="" 
    id="email" 
    placeholder="Email"
    value={email}  
    onChange={(e) => setEmail(e.target.value)}
    className={styles.inputs}/>
    <br/>
    <input 
    type="number" 
    name="" 
    id="contact" 
    placeholder="Contact Number"
    value={contact} 
    onChange={(e) => setContact(e.target.value)}
    className={styles.inputs}/>
    <br/>
    <textarea 
    name="" 
    id="details" 
    cols={30} 
    rows={10} 
    placeholder="Some details"
    value={details} 
    onChange={(e) => setDetails(e.target.value)}
    className={styles.inputs}></textarea>
    <br/>
    <button type="submit"  className={styles.inputs} id={styles.submitbutton}>Get a quote</button>
</form>

</div>


</div>

<MainCommonFooter />
  </>

)
}

const MainCommonFooter:FC = () => {
return (
<div>
  <div className={`${styles.footershadow} flex align_item_center`}>
<div className="footer flex margin-auto">

  <Leftfooter />
  <Middlefooter />
  <FooterRight />
</div>
</div>
<Copyright /></div>
)
}

export {MainCommonFooter}

export default ContactForm