import Image from "next/image";
import React, { FC } from "react";
import styles from "./RightHistoryComponent.module.css";
import styles2 from "./RightEmployeesComponent.module.css";
import { useState } from "react";
import EmployeeModalWrapper from "./AddemployeePage/EmployeeModalWrapper";
import { useQuery } from "@apollo/client";
import EMPLOYEE_LIST from "@graphql/EMPLOYEE_LIST.graphql";
import { getCookie } from "cookies-next";
import { stringify } from "querystring";
import EmployeeList from "../../ezslip-backend/server/gateway/employee/types/EmployeeListDetails";
console.log(getCookie("ezslipToken"));

const RightEmployeesComponent:React.FC = () => {
    const { data, loading,error } = useQuery(EMPLOYEE_LIST,
        {fetchPolicy: 'network-only'});

  const [isAddEmployeebuttonclicked, setIsAddEmployeebuttonclicked] =
    useState(false);
  const [isEditEmployeebuttonclicked, setIsEditEmployeebuttonclicked] =
    useState(false);
  const [isDeleteEmployeebuttonclicked, setIsDeleteEmployeebuttonclicked] =
    useState(false);
  const [id, setId] = useState("");

  console.log(data, "datya");

  //   client.resetStore();

  const [empdata, setEmpData] = useState<any>("");

  if (loading) {
    console.log("loading");
  }

  React.useEffect(() => {
    setEmpData(data ? data : "");
    console.log(data, "data");
  }, [loading]);

  return (
    <div className={styles.historycomponent}>
      <div className={styles2.firstLine}>
        <h1>Employees List</h1>
        <div>
          <button
            className={styles2.buttonAddemployee}
            onClick={() => {
              console.log("clicked");
              setIsAddEmployeebuttonclicked(!isAddEmployeebuttonclicked);
            }}
          >
            Add Employee
            <Image
              src="/assets/images/User add.svg"
              height="24"
              width="24"
              alt="UserAdd"
            />
          </button>
        </div>
      </div>

      <table className={styles2.table1}>
        <thead>
          <tr className={styles.tablehead}>
            <th className={styles2.sno}>S. No.</th>
            <th className={styles2.name}>Name</th>
            <th className={styles2.code}>Code</th>
            <th className={styles2.designation}>Designation</th>
            <th className={styles2.salary}>Salary</th>
            <th className={styles2.edit}></th>
            <th className={styles2.delete}> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={7}>
              {" "}
              <hr className={styles.hruler} />{" "}
            </th>
          </tr>
        </tbody>
      </table>
      <div className={styles2.table2parentdiv}>
        <div className={styles2.table2childdiv}>
          <div className={styles2.table2child2div}>
            <table className={styles2.table1}>
              {empdata?.employeeList?.employees.map(
                (employee: any, index: any) => (
                  <tbody key={index}>
                    <tr key={index}>
                      <td className={styles2.snotd}>{index + 1}</td>
                      <td className={styles2.nametd}>
                        {employee.firstName + " " + employee.lastName}
                      </td>
                      <td className={styles2.codetd}>
                        {employee.employeeCode}
                      </td>
                      <td className={styles2.designationtd}>
                        {employee.designation}
                      </td>
                      <td className={styles2.salarytd}>{employee.salary}</td>
                      <td className={styles2.edittd}>
                        <Image
                          src="/assets/images/create.png"
                          alt="hamburger"
                          height="18"
                          width="18"
                          onClick={() => {
                            setIsEditEmployeebuttonclicked(
                              !isEditEmployeebuttonclicked
                            );
                            setId(employee.id);
                          }}
                        />
                      </td>

                      <td className={styles2.deletetd}>
                        <Image
                          src="/assets/images/delete.png"
                          alt="hamburger"
                          height="18"
                          width="18"
                          onClick={() => {
                            setIsDeleteEmployeebuttonclicked(
                              !isDeleteEmployeebuttonclicked
                            );
                            setId(employee.id);
                          }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={7}>
                        {" "}
                        <hr className={styles.hrulergrey} />{" "}
                      </td>
                    </tr>

                    {isAddEmployeebuttonclicked && (
                      <EmployeeModalWrapper
                        flagDisplayFunc={setIsAddEmployeebuttonclicked}
                        flagemployee={isAddEmployeebuttonclicked}
                        targetModal="add"
                      />
                    )}
                    {isEditEmployeebuttonclicked && (
                      <EmployeeModalWrapper
                        flagDisplayFunc={setIsEditEmployeebuttonclicked}
                        flagemployee={isEditEmployeebuttonclicked}
                        targetModal="edit"
                        id={id}
                      />
                    )}
                    {isDeleteEmployeebuttonclicked && (
                      <EmployeeModalWrapper
                        flagDisplayFunc={setIsDeleteEmployeebuttonclicked}
                        flagemployee={isDeleteEmployeebuttonclicked}
                        targetModal="delete"
                        id={id}
                      />
                    )}
                  </tbody>
                )
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightEmployeesComponent;
