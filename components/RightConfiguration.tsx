import React, { FC, useState, useEffect } from "react";
import styles from "../styles/rightconfiguration.module.css";
import Image from "next/image";
import Link from 'next/link';
const cookie = require('cookie-cutter')
import { getCookie } from 'cookies-next';

interface leftinputprops {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

interface selectProps {
  name: string;
  value: string;
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



const RightConfiguration = () => {
  var token: any;
    token = getCookie('ezslipToken');

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

  const handle = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <div className="firstRow">
      {/* {formdataget.organizationImage} */}
        {/* <img src={formdataget.organizationImage} alt="sadsa" /> */}
        
        {/* {formdataget.organizationImage} */}

        <div className={styles.profileImageDiv}>
              formdataget.organizationImage?(
              {/* <Image 
               src = {formdataget.organizationImage}
              //  width="48px"
              //  height="43.75px"
               alt={formdataget.organizationImage}
               layout="fill"

               />) */}
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
