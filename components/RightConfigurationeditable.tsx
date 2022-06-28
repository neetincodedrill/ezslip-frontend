import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import styles from "../styles/rightconfiguration.module.css";
import Link from 'next/link';
const cookie = require('cookie-cutter')

// interface for leftinput which is a input type component  
interface leftinputprops {
  placeholder: string;
  name: string;
  type: string;
  value: string;

  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

// LeftInput component definition 

const LeftInput: FC<leftinputprops> = ({
  type,
  placeholder,
  name,
  value,
  onchange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.leftinput}
      name={name}
      onChange={onchange}
      value={value}
      required

    />
  );
};

  



 const RightConfigurationeditable = () => {
// const [select, setSelect ] = useState();
var token: any; 
token = cookie.get('ezslipToken')

const [formdataget, setFormdataget] = useState({
  CIN: "",
  EPF: "",
  ESI: "",
  HRA: "",
  basicSalary: "",

  address: "",
  organizationImage: "",
  organizationLegalName: "",
  organizationType: "",
} as any);

const [formdata, setFormdata] = useState({
    // CIN: "",
    // EPF: "",
    // ESI: "",
    // HRA: "",
    // basicSalary: "",

    // address: "",
    // organizationImage: "",
    // organizationLegalName: "",
    // organizationType: "",
  } as any);

  useEffect(() => {
    fetch("http://localhost:5000/get", {
      method: "get",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFormdataget({
          CIN: data.organization_Details.CIN,
          EPF: data.organization_Details.EPF,
          ESI: data.organization_Details.ESI,
          HRA: data.organization_Details.HRA,
          basicSalary: data.organization_Details.basicSalary,

          address: data.user_Details.address,
          organizationImage: data.user_Details.organizationImage,
          organizationLegalName: data.user_Details.organizationLegalName,
          organizationType: data.user_Details.organizationType,
        });
      });
  }, []);

const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
  // console.log("changed");
  setFormdata({
    ...formdata,
    [e.target.name]: (e.target.value)
  })
}


const handleSubmit = () => {
  console.log(formdata);
}

  return (
    <div className={styles.rightconfiguration}>
      <form onSubmit={handleSubmit}>

        <div className={styles.top}>

        
        <div className={styles.cameradiv}>

          <label htmlFor="profileimage">
            <div className={styles.cameradivchild}>
      
            </div>
          </label>
          <input
            type="file"
            name="file"
            id="profileimage"
            style={{ display: "none" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // setFile((e.target as HTMLInputElement).files[0]);
              //   setFile((e.target as HTMLInputElement).files[0]);
            }}
            accept=".jpg, .jpeg"
            required
          />

       
        </div>

      
        </div>
       

        <div className="flex">
          <LeftInput
            placeholder="Organisation Legal Name"
            type="text"
            name="organizationLegalName"
            value= {formdataget.organizationLegalName}
            onchange={handle}
          />
       
       <div className={styles.margin_left}>
        <select name="" id="" className={styles.leftinput} >
          <option value="Infotech">Infotech</option>
          <option value="Infotech2">Infotech2</option>
          <option value="Infotech3">Infotech3</option>
          <option value="Infotech3">Infotech3</option>
        </select>
        </div>


        </div>

        <input type="text" id="" placeholder="address" name="address" className={styles.leftinput} style={{"width":"68%"}} onChange={handle} value={formdataget.address}/>

        <div className="flex">
          <LeftInput
            placeholder="Basic Salary "
            type="number"
            name="basicSalary"
            onchange={handle}
            value= {formdataget.basicSalary}

          />

          <div className={styles.margin_left}>
          <LeftInput
            placeholder="HRA %"
            type="number"
            name="HRA"
            onchange={handle}
            value= {formdataget.HRA}
          />
          </div>
        </div>

        <div className="flex">

          <LeftInput
            placeholder="CIN"
            type="number"
            name="CIN"
            onchange={handle}
            value= {formdataget.CIN}
       
          />

          <div className={styles.margin_left}>
          <LeftInput
            placeholder="EPF"
            type="number"
            name="EPF"
            onchange={handle}
            value= {formdataget.EPF}
       

          />
          </div>
        </div>

        <div className="flex">
          <LeftInput
            placeholder="ESI"
            type="number"
            name="ESI"
            onchange={handle}
            value= {formdataget.ESI}
          />
        </div>

        <button
          type="submit"
          className={styles.leftinput}
          style={{
            backgroundColor: "#47A296",
            color: "white",
            fontWeight: "bold",
            fontSize: "19px",
          }}
          name="submitButton">
          Save
        </button>

      </form>
    </div>
  );
};

export default RightConfigurationeditable;
