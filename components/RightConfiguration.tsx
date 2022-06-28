
import React, { FC, useState, useEffect } from "react";
import styles from "../styles/rightconfiguration.module.css";
import Image from "next/image";
import Link from 'next/link';
const cookie = require('cookie-cutter')

function getcookie(key: string) {
  const value = document.cookie;
  key = key + "=";
  var tokencookie = "";
  const parts = value.split("; ");

  console.log(parts);
  parts.forEach((val) => {
    if (val.indexOf(key) === 0) {
      tokencookie = val.substring(key.length);
      console.log(typeof tokencookie);
    }
  });
  return tokencookie;
}

interface leftinputprops {
  // [index: string] : string,
  placeholder: string;
  name: string;
  type: string;
  value: string;
  // onchange: React.ChangeEventHandler<HTMLInputElement>
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

interface selectProps {
  // [index: string] : string,

  name: string;
  value: string;
  // onchange: React.ChangeEventHandler<HTMLInputElement>
  onchange: React.ChangeEventHandler<HTMLSelectElement>;
}

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
      readOnly
      required
    />
  );
};

const RightInput: FC<leftinputprops> = ({
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
      className={styles.rightinput}
      name={name}
      onChange={onchange}
      value={value}
      readOnly
      required
    />
  );
};

// import { url } from "inspector";
// import image from "../../ezslip-backend/server/public/images/Frame.png";

const RightConfiguration = () => {
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

  return (
    <div>
      <div className="firstRow">
      {/* {formdataget.organizationImage} */}
        {/* <img src={formdataget.organizationImage} alt="sadsa" /> */}
        
        {/* {formdataget.organizationImage} */}

        <div className={styles.profileImageDiv}>
          
          {/* <Image

            src =  {formdataget.organizationImage}
            width="131px"
            height="131px"
            alt="hello"

          /> */}

        </div>
      </div>
    </div>
  );
};

export default RightConfiguration;
