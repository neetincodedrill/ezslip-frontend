import React from "react";
import styles from "./RightHistoryComponent.module.css";
import { useQuery } from "@apollo/client/react/hooks";
import EMPLOYEE_HISTORY from "@graphql/EMPLOYEE_HISTORY.graphql";

const RightHistoryComponent: React.FC = () => {
  const { data, loading, error } = useQuery(EMPLOYEE_HISTORY);
  if(data) console.log(data);
  if(error) console.log(error);
  var historyList: any;
  historyList = data?.employeeHistory?.employees;
  return (
    <div className={styles.historycomponent}>
      <h1>History</h1>
      <div className={styles.tablediv}>
        <table style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr className={styles.tablehead}>
              <th className={styles.sno}>S. No.</th>
              <th className={styles.name}>Name</th>
              <th className={styles.code}>Code</th>
              <th className={styles.lastedition}>Last Edition</th>
              <th className={styles.slipshared}> SlipShared</th>
              {/* <th className={styles.hamburger}></th> */}
            </tr>
            <tr>
              <th colSpan={6}>
                {" "}
                <hr className={styles.hruler} />{" "}
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {historyList ? (
                historyList.map((employee: any, index: any) => {
                  function convertDate(dateString: any) {
                    var p = dateString.split(/\D/g);
                    return [p[2], p[1], p[0]].join("-");
                  }
                  var updateDate = convertDate(employee.updatedAt);
                  var shareddate: any;
                  if (employee.slipShared) {
                    shareddate = convertDate(employee.slipShared);
                  } else {
                    shareddate = "-";
                  }
                  return (
                    <>
                    <tr key={employee.employeeCode}>
                      <td className={styles.sametd}>{index + 1}</td>
                      <td className={styles.sametd}>
                        {employee.firstName + " " + employee.lastName}
                      </td>
                      <td className={styles.sametd}>{employee.employeeCode}</td>
                      <td className={styles.sametd}>{updateDate}</td>
                      <td className={styles.sametd}>{shareddate}</td>
                    </tr>
                    <tr>
                      <td colSpan={6}> <hr className={styles.hrulergrey}/> </td>
                    </tr>
                    </>
                    
                  );
                })
              ) : (
                <p>No user available.</p>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default RightHistoryComponent;