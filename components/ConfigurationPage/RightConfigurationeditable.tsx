import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import styles from "./rightconfiguration.module.css";
import { useQuery,useMutation } from '@apollo/client'
import ORGANIZATION_DETAILS from "@graphql/ORGANIZATION_DETAILS.graphql";
import UPDATE_ORGANIZATION from '@graphql/UPDATE_ORGANIZATION.graphql';
import { getCookie } from "cookies-next";
import { format } from "path";

var token: any;
token = getCookie("ezslipToken");

const RightConfigurationeditable = () => {
  const [formdata, setFormdata] = useState({
    CIN: "",
    EPF: "",
    ESI: "",
    HRA: "",
    basicSalary: "",
    address: "",
    organizationImage: "",
    organizationLegalName: "",
    organizationType: "Infotech",
    } as any);

const [filesrc, setFilesrc] = useState("");
const [image,setImage] = useState();
const { data, loading, error } = useQuery(ORGANIZATION_DETAILS);
const [updateOrganizationDetails] = useMutation(UPDATE_ORGANIZATION,{
  refetchQueries: 
   [{ query: ORGANIZATION_DETAILS }],
    awaitRefetchQueries: true,
})

useEffect(() => {
  setFormdata(loading?loading:data?.getOrganizationDetails);
  }, [loading]);


const handle = (e: any) => {
    setFormdata({
    ...formdata,
    [e.target.name]: (e.target.value)
    })
}

const handlefileinput = (e:any) => {
  if (e.target.files && e.target.files[0]) {
    const i = e.target.files[0]
    setImage(i)
    setFilesrc(URL.createObjectURL(i));
  }
}

const handleSubmit = async(e : any) => {
  e.preventDefault();
  const body:any = new FormData();
  body.append("file", image);
  var data : string;
  if(image){
    const res = await fetch(`http://localhost:5000/update`, {
    method: "PUT",
    body,
    headers: {
      Authorization: token
    },
  });
    data = await res.json();
  }
  else{
    data  = formdata.organizationImage
  }
  console.log("fileurl : " , data) 
    if(data){
      updateOrganizationDetails({
        variables: {
          input:  {
            "organizationImage": data,
            "organizationLegalName":formdata?.organizationLegalName,
            "organizationType":formdata?.organizationType,
            "address": formdata?.address,
            "basicSalary":formdata?.basicSalary,
            "HRA":formdata?.HRA,
            "CIN":formdata?.CIN,
            "EPF": formdata?.EPF,
            "ESI": formdata?.EPF,
          }
        }
      })
    } 
    console.log("formdata:",formdata)
  }

return (
<div className={styles.rightconfiguration}>
  <form onSubmit={handleSubmit}>
    <div className={styles.top}>    
        <div className={styles.cameraparentdiv}>
            <div className={styles.cameradiv}>
              { formdata?.organizationImage && filesrc === "" ? 
              (<img
                src = {formdata.organizationImage}
                alt="selected"
                className={styles.image}
                />)  :
                filesrc ? 
                (<img
                src = {filesrc}
                alt="hello"
                className={styles.image}
                />) :
                (<img
                src = "/assets/images/profile-picture.png"
                alt="hello"
                className={styles.image}
                />) 
              }
            </div>
            <div className={styles.inputfilediv}>
                <label htmlFor="upload-photo" className={styles.labelphoto} >
                  <Image src="/assets/images/addphoto.png" alt="sda" className={styles.image} style={{"width":"100%"}} layout="fill"/>
                </label>
                <input 
                  type="file" 
                  name="photo" 
                  id="upload-photo" 
                  style={{"display":"none"}} 
                  onChange={ handlefileinput }
                />
            </div>
      </div>  

    </div>
    <div className="flex">

    <input
    type="text"
    placeholder="Organisation Legal Name"
    className={styles.leftinput}
    name="organizationLegalName"
    onChange={handle}
    value={formdata?.organizationLegalName}
  />

    <div className={styles.margin_left}>
    <select 
      name="organizationType" 
      className={styles.leftinput}
      value = {formdata?.organizationType}  
      onChange={handle} 
    >
      <option value="Infotech">Infotech</option>
      <option value="Infotech2">Infotech2</option>
      <option value="Infotech3">Infotech3</option>
      <option value="Infotech4">Infotech4</option>
    </select>
    </div>
    </div>

    <input 
      type="text" id="" 
      placeholder="address" 
      name="address" 
      className={styles.leftinput} 
      style={{"width":"772px"}} 
      onChange={handle} 
      value={formdata?.address}
    />

    <div className="flex">

      <input
        placeholder="Basic Salary "
        type="number"
        name="basicSalary"
        onChange={handle}
        value= {formdata?.basicSalary}
        className={styles.leftinput}
      /> 

      <div className={styles.margin_left}>
      
      <input
        placeholder="HRA %"
        type="number"
        name="HRA"
        onChange={handle}
        value= {formdata?.HRA}
        className={styles.leftinput}
      />
      </div>
    </div>

    <div className="flex">

      <input
        placeholder="CIN"
        type="number"
        name="CIN"
        onChange={handle}
        value= {formdata?.CIN}  
        className={styles.leftinput}
      /> 

      <div className={styles.margin_left}>
     <input
        placeholder="EPF"
        type="number"
        name="EPF"
        onChange={handle}
        value= {formdata?.EPF}
        className={styles.leftinput}
      /> 
      </div>
    </div>

    <div className="flex">
      <input
        placeholder="ESI"
        type="number"
        name="ESI"
        onChange={handle}
        value= {formdata?.ESI}
        className={styles.leftinput}
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