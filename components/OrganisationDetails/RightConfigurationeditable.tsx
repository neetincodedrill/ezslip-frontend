import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import styles from "./rightconfiguration.module.css";
import { getCookie } from 'cookies-next';
import { useQuery,useMutation } from '@apollo/client'
import ORGANIZATION_DETAILS from "@graphql/ORGANIZATION_DETAILS.graphql";
import UPDATE_ORGANIZATION from '@graphql/UPDATE_ORGANIZATION.graphql';
import { blob } from "stream/consumers";

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

var token: any; 
    token = getCookie('ezslipToken')

  const [filesrc, setFilesrc] = useState("");

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

const { data, loading, error } = useQuery(ORGANIZATION_DETAILS);
const [updateOrganizationDetails] = useMutation(UPDATE_ORGANIZATION)


const [formdata, setFormdata] = useState({
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



  useEffect(() => {
    setFormdataget(loading?loading:data.getOrganizationDetails);
  }, [loading]);

const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
  // console.log("changed");
  setFormdata({
    ...formdata,
    [e.target.name]: (e.target.value)
  })
}

const handlefileinput = (e:any) => {

    if (e.target.files && e.target.files[0]) {
      setFilesrc(URL.createObjectURL(e.target.files[0]));
    }
    
}


const handleSubmit = (e : any) => {
  e.preventDefault();
  updateOrganizationDetails({
   variables: {
     input:  {
      "organizationLegalName":formdata.organizationLegalName,
      "organizationType":formdata.organizationType,
      "address": formdata.address,
      "basicSalary":formdata.basicSalary,
      "HRA":formdata.HRA,
      "CIN":formdata.CIN,
      "EPF": formdata.EPF,
      "ESI": formdata.EPF,
     }
   }
  })
}

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

{console.log(filesrc)}
  return (
    <div className={styles.rightconfiguration}>
      <form onSubmit={handleSubmit}>
        <div className={styles.top}>    
            <div className={styles.cameraparentdiv}>

                <div className={styles.cameradiv}>
                
                  { filesrc ? 
                  ( <img
                    src = {filesrc}
                    alt="selected"
                    className={styles.image}
                 
                    /> ) :
                     ( 
                    <img
                    src = "/assets/images/profile-picture.png"
                    alt="hello"
                    className={styles.image}
                    /> 
                     )
                  }

                </div>

                <div className={styles.inputfilediv}>
                    
                    <label htmlFor="upload-photo" className={styles.labelphoto} >
                      <Image src="/assets/images/addphoto.png" alt="sda" className={styles.image} style={{"width":"100%"}} layout="fill"/>
                    </label>

                    <input type="file" name="photo" id="upload-photo" style={{"display":"none"}} onChange={ handlefileinput }/>
                </div>
          </div> 

          {/* 
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
          /> */}
                
          
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

        <input type="text" id="" placeholder="address" name="address" className={styles.leftinput} style={{"width":"772px"}} onChange={handle} value={formdataget.address}/>

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