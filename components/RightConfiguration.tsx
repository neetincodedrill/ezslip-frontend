
import React, { FC, useState, useEffect } from "react";
import styles from "../styles/rightconfiguration.module.css";
import Image from "next/image";
import Link from 'next/link';
const cookie = require('cookie-cutter')



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
    <div className={styles.main}>

        <div className={styles.parent}>

     
              <div className={styles.firstRow}>

                  {/* {formdataget.organizationImage} */}

                  <div className={styles.profileimagediv}>
          

                     
                  <Image
                    src = "/assets/images/banner-img.png"
                    width="120px"
                    height="120px"
                    alt="hello"
                    className={styles.image}
                  /> 
                  

                  {/* something */}
                  </div>

        
                  <Link href="/editprofile">
                        <div className={styles.editbutton}>
                
                          <button type="button"> Edit <Image 
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
                    <div className={styles.heading}>Organization Legal Name</div>: <div  className={styles.fetchdata}>{formdataget.organizationLegalName}</div> 
                  </div>

                  <div className={styles.oneline}>
                   <div className={styles.heading}>Organistaion Type</div> : <div className={styles.fetchdata}> {formdataget.organizationType}</div>
                  </div>

                  <div className={styles.oneline}>
                   <div className={styles.heading}>Address</div>: <div className={styles.fetchdata}>{formdataget.address}</div> 
                  </div>
                  

                  <div className={styles.oneline}>
                    <div className={styles.heading}>Basic salary</div> : <div className={styles.fetchdata}>{formdataget.basicSalary}</div> 
                  </div>

                  <div className={styles.oneline}>
                    <div className={styles.heading}>HRA</div> : <div className={styles.fetchdata}>{formdataget.HRA}</div>
                  </div>


                  <div className={styles.oneline}>
                    <div className={styles.heading}>EPF </div>: <div className={styles.fetchdata}>{formdataget.EPF}</div>
                    </div>

                  <div className={styles.oneline}>
                    <div className={styles.heading}>CIN </div>: <div className={styles.fetchdata}>{formdataget.CIN}</div>
                  </div>
                  

                  <div className={styles.oneline}>
                  <div className={styles.heading}>ESI</div>: <div className={styles.fetchdata}>{formdataget.ESI}</div> 
                  </div>

              </div>
        </div>
     
    </div>
  );
};

export default RightConfiguration;
