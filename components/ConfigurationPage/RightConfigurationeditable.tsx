import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import styles from "./rightconfiguration.module.css";
import { getCookie } from "cookies-next";
import { useQuery, useMutation } from "@apollo/client";
import ORGANIZATION_DETAILS from "@graphql/ORGANIZATION_DETAILS.graphql";
import UPDATE_ORGANIZATION from "@graphql/UPDATE_ORGANIZATION.graphql";
import FormData from "form-data";

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
  token = getCookie("ezslipToken");

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
  const [updateOrganizationDetails] = useMutation(UPDATE_ORGANIZATION, {
    refetchQueries: [{ query: ORGANIZATION_DETAILS }],
  });
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

  const [filesrc, setFilesrc] = useState("");
  const [file, setFile] = useState();

  useEffect(() => {
    setFormdataget(loading ? loading : data.getOrganizationDetails);
  }, [loading]);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    console.log(formdataget)
  };

  const formData : any = new FormData();
  const handlefileinput = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setFile(i);
      setFilesrc(URL.createObjectURL(i));
    }
    setFile(e.target.files[0]);
    formData.append("file", e.target.files[0]);
  };

 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body:any = new FormData();
    body.append("file", file);
    const res = await fetch(`http://localhost:5000/update`, {
      method: "PUT",
      body,
      headers: {
        Authorization: token
      },
    });
    const data = await res.json();
    if(data){
        updateOrganizationDetails({
          variables: {
            input:  {
              "organizationImage":data,
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
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className={styles.rightconfiguration}>
      <form onSubmit={handleSubmit}>
        <div className={styles.top}>
          <div className={styles.cameraparentdiv}>
            <div className={styles.cameradiv}>
              {filesrc ? (
                <img src={formdata.organizationImage} alt="selected" className={styles.image} />
              ) : (
                <img
                  src="/assets/images/profile-picture.png"
                  alt="hello"
                  className={styles.image}
                />
              )}
            </div>

            <div className={styles.inputfilediv}>
              <label htmlFor="upload-photo" className={styles.labelphoto}>
                <Image
                  src="/assets/images/addphoto.png"
                  alt="sda"
                  className={styles.image}
                  style={{ width: "100%" }}
                  layout="fill"
                />
              </label>

              <input
                type="file"
                name="photo"
                id="upload-photo"
                style={{ display: "none" }}
                onChange={handlefileinput}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <LeftInput
            placeholder="Organisation Legal Name"
            type="text"
            name="organizationLegalName"
            value={formdataget.organizationLegalName}
            onchange={handle}
          />

          <div className={styles.margin_left}>
            <select name="" id="" className={styles.leftinput}>
              <option value="Infotech">Infotech</option>
              <option value="Infotech2">Infotech2</option>
              <option value="Infotech3">Infotech3</option>
              <option value="Infotech3">Infotech3</option>
            </select>
          </div>
        </div>

        <input
          type="text"
          id=""
          placeholder="address"
          name="address"
          className={styles.leftinput}
          style={{ width: "772px" }}
          onChange={handle}
          value={formdataget.address}
        />

        <div className="flex">
          <LeftInput
            placeholder="Basic Salary "
            type="number"
            name="basicSalary"
            onchange={handle}
            value={formdataget.basicSalary}
          />

          <div className={styles.margin_left}>
            <LeftInput
              placeholder="HRA %"
              type="number"
              name="HRA"
              onchange={handle}
              value={formdataget.HRA}
            />
          </div>
        </div>

        <div className="flex">
          <LeftInput
            placeholder="CIN"
            type="number"
            name="CIN"
            onchange={handle}
            value={formdataget.CIN}
          />

          <div className={styles.margin_left}>
            <LeftInput
              placeholder="EPF"
              type="number"
              name="EPF"
              onchange={handle}
              value={formdataget.EPF}
            />
          </div>
        </div>

        <div className="flex">
          <LeftInput
            placeholder="ESI"
            type="number"
            name="ESI"
            onchange={handle}
            value={formdataget.ESI}
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
          name="submitButton"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default RightConfigurationeditable;
