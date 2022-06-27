import Image from 'next/image'
import React,{FC, useState} from 'react'
import styles from '../styles/rightconfiguration.module.css'

function getcookie(key:string) {

    const value = document.cookie;
    key= key+"=";   
    var tokencookie;
    const parts = value.split('; ');
    
    console.log(parts)
    parts.forEach((val)=>{
    if(val.indexOf(key)===0){
      tokencookie = val.substring(key.length);
    }
  })
    return tokencookie;
  }
  

interface leftinputprops {
    // [index: string] : string,
    placeholder:string,
    name: string,
    type:string,
    value: string
    // onchange: React.ChangeEventHandler<HTMLInputElement>
    onchange: React.ChangeEventHandler<HTMLInputElement>
}

interface selectProps {
    // [index: string] : string,

    name: string,
    value: string
    // onchange: React.ChangeEventHandler<HTMLInputElement>
    onchange: React.ChangeEventHandler<HTMLSelectElement>
}

const LeftInput:FC<leftinputprops> = ({type, placeholder, name, value, onchange}) => {
    return ( 
        <input type={type} placeholder={placeholder} className={styles.leftinput}  name={name} onChange={onchange} value={value }required/>    
        )
}

const RightInput:FC<leftinputprops> = ({type, placeholder, name, value, onchange}) => {
    return ( 
        <input type={type} placeholder={placeholder} className={styles.rightinput} name={name} onChange={onchange} value={value} required/>
    )
}

const SelectInput:FC<selectProps> = ({ name, onchange, value}) => {
    return (
        <>
        
        <select id="" className={styles.selectinput} name={name} onChange={onchange} required>
            {/* <option value="">Type of organisation</option> */}
            <option value={value}>{value}</option>
            <option value="Infotech">Infotech</option>
            <option value="Pvt ltd.">Pvt ltd.</option>
            <option value="ltd.">ltd.</option>  
        </select>
        </>
    )
}

interface inputfullwidthProps {
    name: string,
    value: string
    onchange:  React.ChangeEventHandler<HTMLInputElement>
}

const InputfullWidth:FC<inputfullwidthProps> = ({name, onchange, value}) => {
    return (
        <input type="text" id="" className={styles.inputfullwidth} placeholder="Full address (with pincode)" name={name} onChange={onchange} value={value} required/>
    )
}

const RightConfiguration =   () => {

    console.log(getcookie("token"));
    const tokenrecieved = getcookie("token");
    console.log(tokenrecieved);
    
    const [formdataget, setFormdataget]= useState({
        "CIN": "",
        "EPF": "",
        "ESI": "",
        "HRA": "",
        "basicSalary": "",

        "address": "",
        "organizationImage" : "",
        "organizationLegalName": "",
        "organizationType": ""
    });

    const [formdata, setFormdata] = useState({});
    const [file, setFile] = useState();

    const myheaders = new Headers();
    myheaders.append( 'Content-Type', 'application/json' );
    myheaders.append('Authorization', tokenrecieved) 
        
    fetch('http://localhost:5000/get', { 
        method : 'get', 
        headers : myheaders 
    

      }).then(res=>{
        return res.json()
      }).then(data=>{
        console.log(data)
        setFormdataget({
        "CIN":data.organization_Details.CIN,
        "EPF":data.organization_Details.EPF,
        "ESI": data.organization_Details.ESI,
        "HRA": data.organization_Details.HRA,
        "basicSalary": data.organization_Details.basicSalary,

        "address": data.user_Details.address,
        "organizationImage" : data.user_Details.organizationImage,
        "organizationLegalName": data.user_Details.organizationLegalName,
        "organizationType": data.user_Details.organizationType
        })
      }) 

      console.log(formdataget);
      console.log(formdataget.CIN)




    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        console.log(e);
        console.log(formdata)
        console.log("file is---", file);

        setFormdata({
            ...formdata, 
            "file":file
        });

        console.log(formdata)


    }

    const handle=(e:any) => {
        setFormdata(
            {
            ...formdata, 
            [(e.target as HTMLInputElement).name]:(e.target as HTMLInputElement).value

        })
    }

  return (
    <div className={styles.rightconfiguration}>

        <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className={styles.cameradiv}>
                <label htmlFor="profileimage">
                    <div className={styles.cameradivchild}>

                    <Image 
                    src="/assets/images/camera.png"
                    width="48px"
                    height="43.75px"
                    alt="camera" 
                    />
                    </div>

                </label>
                <input type="file" name="file" id="profileimage" style={{"display":"none"}}
                onChange={(e)=>{
                    
                    setFile((e.target as HTMLInputElement).files[0]);

                }} 
                accept=".jpg, .jpeg" required
                 />
                
             
        </div>

        <div className="flex">
            <LeftInput placeholder='Organisation Legal Name' type="text"  name="organistionName" onchange={handle} value={formdataget.organizationLegalName}/>
            <SelectInput name="typeOforganistion" onchange={handle} value={formdataget.organizationType}/>
        </div>

        <InputfullWidth name="address" onchange={handle} value={formdataget.address}/>

        <div className="flex">
            <LeftInput placeholder='Basic Salary ' type="number"  name="basicsalary" onchange={handle} value={formdataget.basicSalary}/>
            <RightInput placeholder='HRA %' type="number" name="hra" onchange={handle} value={formdataget.HRA}/>
        </div>

        <div className="flex">
            <LeftInput placeholder='CIN' type="number" name="cin" onchange={handle} value={formdataget.CIN} />
            <RightInput placeholder='EPF' type="number" name="epf" onchange={handle} value={formdataget.EPF} />
        </div>

        <div className="flex">
            <LeftInput placeholder='ESI' type="number" name="esi" onchange={handle} value={formdataget.ESI} />
        </div>


        <button type="submit" className={styles.leftinput} style={{"backgroundColor":"#47A296",
         "color":"white",
         "fontWeight":"bold",
         "fontSize": "19px"

        }} name="submitButton">Save</button>

        </form>

    </div>
  )
}

export default RightConfiguration