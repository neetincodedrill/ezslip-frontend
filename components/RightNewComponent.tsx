import React, { FC } from "react";
import styles from "./RightNewComponent.module.css";
import Image from "next/image";
import EMPLOYEE_NAMELIST from "@graphql/EMPLOYEE_NAMELIST.graphql";
import GET_EMPLOYEE_BY_CODE from "@graphql/GET_EMPLOYEE_BY_CODE.graphql";
import GET_EMPLOYEE_BY_NAME from "@graphql/GET_EMPLOYEE_BY_NAME.graphql";
import { useQuery } from "@apollo/client/react/hooks";
import { useEffect, useState } from "react";
import Slip from "./Slip";
import { CookieValueTypes, getCookie } from "cookies-next";
import { AiOutlineSearch } from "react-icons/ai";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
interface props {
  employeeCode: string;
}

const RightNewComponent: FC<props> = ({ employeeCode }) => {
  var fs = require("fs");
  const blobStream = require("blob-stream");
  const [isCalculateButtonClicked, setIsCalculateButtonClicked] =
    useState<boolean>(false);
  const [activebutton, setActiveButton] = useState("");
  const [empCode, setempCode] = useState("");
  const [name1, setName1] = useState("");

  const [slipdata, setSlipdata] = useState<any>();
  // here we will get the names of the employees of the particular company
  const {
    data: datanamelist,
    loading: loadingnamelist,
    error: errornamelist,
  } = useQuery(EMPLOYEE_NAMELIST, { fetchPolicy: "network-only" });

  // here we will get the details of a employee by code
  const {
    data: datacode,
    loading: loadingcode,
    error: errorcode,
    refetch,
  } = useQuery(GET_EMPLOYEE_BY_CODE, {
    variables: {
      employeeCode,
    },
    fetchPolicy: "network-only",
  });

  // here we will get the details of a employee by name
  const {
    data: dataname,
    loading: loadingname,
    error: errorname,
    refetch: refetchname,
  } = useQuery(GET_EMPLOYEE_BY_NAME, {
    variables: {
      name: name1,
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    console.log(dataname);
    setSlipdata({
      epf: dataname?.getEmployeeByName?.EPF,
      esi: dataname?.getEmployeeByName?.ESI,
      hra: dataname?.getEmployeeByName?.HRA,
      basicSalary: dataname?.getEmployeeByName?.basicSalary,
      designation: dataname?.getEmployeeByName?.designation,
      doj: dataname?.getEmployeeByName?.doj,
      employeeCode: dataname?.getEmployeeByName?.employeeCode,
      firstName: dataname?.getEmployeeByName?.firstName,
      lastName: dataname?.getEmployeeByName?.lastName,
      panNumber: dataname?.getEmployeeByName?.panNumber,
      salary: dataname?.getEmployeeByName?.salary,
    });
  }, [dataname]);

  useEffect(() => {
    setSlipdata({
      epf: datacode?.getEmployeeByEmpCode?.EPF,
      esi: datacode?.getEmployeeByEmpCode?.ESI,
      hra: datacode?.getEmployeeByEmpCode?.HRA,
      basicSalary: datacode?.getEmployeeByEmpCode?.basicSalary,
      designation: datacode?.getEmployeeByEmpCode?.designation,
      doj: datacode?.getEmployeeByEmpCode?.doj,
      employeeCode: datacode?.getEmployeeByEmpCode?.employeeCode,
      firstName: datacode?.getEmployeeByEmpCode?.firstName,
      lastName: datacode?.getEmployeeByEmpCode?.lastName,
      panNumber: datacode?.getEmployeeByEmpCode?.panNumber,
      salary: datacode?.getEmployeeByEmpCode?.salary,
    });
    console.log(slipdata);
  }, [datacode]);

  const runqueryGetEmpByCode = () => {
    refetch({
      employeeCode: empCode,
    });
  };

  const runqueryGetEmpByName = () => {
    refetchname({
      name: name1,
    });
  };

  const calculatefunction = (e: any) => {
    e.preventDefault();
    setIsCalculateButtonClicked(true);
  };

  // const downloadfunction = () => {
  //   const input = document.getElementById('pdf');

  //   html2canvas(input)
  // .then((canvas) => {
  //   const imgData = canvas.toDataURL('image/png');
  //   const pdf = new jsPDF();

  //   pdf.addImage(imgData, 'PNG', 0, 0, 200, 200);

  //   pdf.save("download.pdf");
  // });

  // }

  // const save = () => {
  //   const doc = new jsPDF("p","pt")
  //   doc.html(ReactDOMServer.renderToStaticMarkup(<Slip />), {
  //     callback: () => {
  //       doc.save("myDocument.pdf");
  //     }
  //   });
  // }
  const savePdf = () => {
    const input:any = document.getElementById("pdf");
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf:any = new jsPDF('p', 'mm', [300, 300]);
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })

    console.log(input, "input>>>.");
  };

  return (
    <div className={styles.main}>
      <div className={styles.formdiv}>
        <form onSubmit={calculatefunction}>
          <div className={styles.firstline}>
            <div className={styles.firstheadingdiv}>
              <div className={styles.headingName}>Employee’s Name</div>

              {slipdata && (
                <input
                  type="text"
                  name="pancard"
                  id="pancard"
                  placeholder="Employee name"
                  className={styles.name}
                  style={{ border: "none" }}
                  value={slipdata?.firstName + " " + slipdata?.lastName}
                />
              )}

              <div className={styles.parent2}>
                <div className={styles.parent1}>
                  <div className={styles.namesdiv}>
                    {datanamelist?.employeeNameList?.employees?.map(
                      (val: any, index: any) =>
                        datacode?.getEmployeeByEmpCode?.firstName +
                          " " +
                          datacode?.getEmployeeByEmpCode?.lastName ===
                        val.name ? (
                          <option
                            value={val.name}
                            className={styles.name}
                            style={{
                              backgroundColor:
                                activebutton === index
                                  ? "lightgray"
                                  : "lightgray",
                            }}
                            onClick={() => {
                              setActiveButton(index);
                              runqueryGetEmpByName();
                            }}
                          >
                            {val.name}
                          </option>
                        ) : (
                          <option
                            value={val.name}
                            className={styles.name}
                            style={{
                              backgroundColor:
                                activebutton === index ? "lightgray" : "",
                            }}
                            onClick={() => {
                              setActiveButton(index);
                              setName1(val.name);
                              runqueryGetEmpByName();
                            }}
                          >
                            {val.name}
                          </option>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.secondHeading}>
              <p>Employee Code</p>
              <div className={styles.searchdiv}>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="AFX89X6"
                  className={styles.searchinput}
                  value={slipdata?.employeeCode}
                  onChange={(e) => {
                    setempCode(e.target.value);
                  }}
                />
                <div className={styles.searchIcon}>
                  <AiOutlineSearch onClick={runqueryGetEmpByCode} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.secondline}>
            <div className={styles.designationDiv}>
              <input
                type="text"
                name="designation"
                id="designation"
                placeholder="Designation"
                className={styles.designationinput}
                value={slipdata?.designation}
              />
            </div>

            <div className={styles.pancardDiv}>
              <input
                type="text"
                name="pancard"
                id="pancard"
                placeholder="Pan Card number"
                className={styles.pancardInput}
                value={slipdata?.panNumber}
              />
            </div>
          </div>

          <div className={styles.thirdline}>
            <div className={styles.designationDiv}>
              <input
                type="text"
                name="dateofjoining"
                id="dateofjoining"
                placeholder="Date of Joining"
                className={styles.designationinput}
                value={slipdata?.doj}
              />
            </div>

            <div className={styles.pancardDiv}>
              <input
                type="text"
                name="salary"
                id="salary"
                placeholder="Salary"
                className={styles.pancardInput}
                value={slipdata?.panNumber}
              />
            </div>
          </div>

          <div className={styles.fourthline}>
            <div className={styles.calculatebuttondiv}>
              <button type="submit" className={styles.calculatebutton}>
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.slipdiv}>
        {isCalculateButtonClicked && (
          <div id="pdf" style={{ width: "686px", height: "fit-content" }}>
            <Slip datacode={slipdata} />
          </div>
        )}
      </div>

      {isCalculateButtonClicked && (
        <div className={styles.buttondiv}>
          <div className={styles.savebuttondiv}>
            <button className={styles.savebutton} onClick={savePdf}>
              Save
              {/* <Image src="/ezslip-frontend/public/assets/images/Bookmark.svg" /> */}
              <Image src="/assets/images/Bookmark.svg" height="24" width="24" />
            </button>
          </div>

          <div className={styles.downloadbuttondiv}>
            <button className={styles.downloadbutton}>
              Download
              {/* <Image src="/ezslip-frontend/public/assets/images/Download.svg" /> */}
              <Image src="/assets/images/Download.svg" height="24" width="24" />
            </button>
          </div>

          <div className={styles.sharebuttondiv}>
            <button className={styles.sharebutton}>
              Share
              {/* <Image src="/ezslip-frontend/public/assets/images/Arrow down.svg" /> */}
              <Image
                src="/assets/images/Arrow down.svg"
                height="24"
                width="24"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightNewComponent;
