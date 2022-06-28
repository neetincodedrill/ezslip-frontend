
import React, { FC, useState, useEffect } from "react";
import styles from "../styles/rightconfiguration.module.css";
import Image from "next/image";
import Link from "next/link";

// import { url } from "inspector";
// import image from "../../ezslip-backend/server/public/images/Frame.png";

var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJhNjRhOGVlZDcwMTdjZmIwYzNjZCIsImlhdCI6MTY1NjM5MzQ0MywiZXhwIjoxNjU2NDc5ODQzfQ.kMeQPtlZJOT1_PkPzAr8Uu3t0xAvH86Rxi_I48Xy_Ks";

const RightConfiguration = () => {
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
        console.log(data);
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
