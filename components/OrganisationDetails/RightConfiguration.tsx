import React, { FC, useState, useEffect } from "react";
import styles from "./rightconfiguration.module.css";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useQuery } from "@apollo/client";
import ORGANIZATION_DETAILS from "@graphql/ORGANIZATION_DETAILS.graphql";

const RightConfiguration = () => {
  var token: any;
  token = getCookie("ezslipToken");

  const { data, loading, error } = useQuery(ORGANIZATION_DETAILS);
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
    setFormdataget(loading?loading:data.getOrganizationDetails);
  }, [loading]);
  console.log(formdataget.organizationImage);

  return (
    <div className={styles.main}>
      <div className={styles.parent}>
        <div className={styles.firstRow}>
          <div className={styles.profileimagediv}>
            <img
              src= {formdataget.organizationImage}
              width="120px"
              height="120px"
              alt="hello"
              className={styles.image}
            />
          </div>
          <Link href="/editprofile">
            <div className={styles.editbutton}>
              <button type="button">
                {" "}
                Edit{" "}
                <Image
                  src="/assets/images/ant-design_edit-twotone.png"
                  height="24px"
                  width="24px"
                  alt="edit"
                />
              </button>
            </div>
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.oneline}>
            <div className={styles.heading}>Organization Legal Name</div>:{" "}
            <div className={styles.fetchdata}>
              {formdataget.organizationLegalName}
            </div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>Organistaion Type</div> :{" "}
            <div className={styles.fetchdata}>
              {" "}
              {formdataget.organizationType}
            </div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>Address</div>:{" "}
            <div className={styles.fetchdata}>{formdataget.address}</div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>Basic salary</div> :{" "}
            <div className={styles.fetchdata}>{formdataget.basicSalary}</div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>HRA</div> :{" "}
            <div className={styles.fetchdata}>{formdataget.HRA}</div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>EPF </div>:{" "}
            <div className={styles.fetchdata}>{formdataget.EPF}</div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>CIN </div>:{" "}
            <div className={styles.fetchdata}>{formdataget.CIN}</div>
          </div>

          <div className={styles.oneline}>
            <div className={styles.heading}>ESI</div>:{" "}
            <div className={styles.fetchdata}>{formdataget.ESI}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightConfiguration;
