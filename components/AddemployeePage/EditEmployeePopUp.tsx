import React, { FC, useEffect } from "react";
import styles from "./Wrapper.module.css";
import { useState } from "react";
import ModalChildWrapper from "./ModalChildWrapper";
import UPDATE_EMPLOYEE from "@graphql/UPDATE_EMPLOYEE.graphql";
import GET_EMPLOYEE from "@graphql/GET_EMPLOYEE.graphql";
import EMPLOYEE_LIST from "@graphql/EMPLOYEE_LIST.graphql";
import { useMutation, useQuery } from "@apollo/client";

interface wrapperProps2 {
  flagDisplayFunc: React.Dispatch<React.SetStateAction<boolean>>;
  flagemployee: boolean;
  id: any;
}

const EditEmployeePopUp: FC<wrapperProps2> = ({
  flagDisplayFunc,
  flagemployee,
  id,
}) => {
  const [editDetailsSavedModal, setEditDetailsSavedModal] = useState(false);
  const [formdataget, setFormdataget] = useState({
    id: "",
    firstName: "",
    lastName: "",
    employeeCode: "",
    designation: "",
    panNumber: "",
    salary: "",
    dob: "",
    doj: "",
    epf: "",
    esi: "",
  } as any);
  const [esiChecked, setEsiChecked] = useState<boolean>(false);
  const [epfChecked, setEpfChecked] = useState<boolean>(false);
  const { data, loading, error } = useQuery(GET_EMPLOYEE, {
    variables: {
      getEmployeeByIdId: id,
    },
  });
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
    refetchQueries: [{ query: EMPLOYEE_LIST }, 
        { query: GET_EMPLOYEE, 
            variables: {
              getEmployeeByIdId: id,
            }, 
        }],
        awaitRefetchQueries: true,
  });

  useEffect(() => {
    console.log(data? data : "")
    setFormdataget({
      id: id,
      firstName: data?.getEmployeeById?.firstName,
      lastName: data?.getEmployeeById?.lastName,
      employeeCode: data?.getEmployeeById?.employeeCode,
      designation: data?.getEmployeeById?.designation,
      panNumber: data?.getEmployeeById?.panNumber,
      salary: data?.getEmployeeById?.salary,
      dob: data?.getEmployeeById?.dob,
      doj: data?.getEmployeeById?.doj,
      epf: data?.getEmployeeById?.epf?.number,
      esi: data?.getEmployeeById?.esi?.number,
    });
    setEsiChecked(data?.getEmployeeById?.esi?.isEnabled);
    setEpfChecked(data?.getEmployeeById?.epf?.isEnabled);
  }, [loading]);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdataget({
      ...formdataget,
      [e.target.name]: e.target.value,
    });
  };

  const handleEpfChange = (event: any) => {
    setEpfChecked((current) => !current);
  };

  const handleEsiChange = (event: any) => {
    setEsiChecked((current) => !current);
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setEditDetailsSavedModal(!editDetailsSavedModal);
    let result = await updateEmployee({
      variables: {
        input: {
          id: formdataget.id,
          firstName: formdataget.firstName,
          lastName: formdataget.lastName,
          employeeCode: formdataget.employeeCode,
          designation: formdataget.designation,
          panNumber: formdataget.panNumber,
          salary: formdataget.salary,
          dob: formdataget.dob,
          doj: formdataget.doj,
          epf: {
            isEnabled: epfChecked,
            number: formdataget.epf,
          },
          esi: {
            isEnabled: esiChecked,
            number: formdataget.esi,
          },
        },
      },
    });
  //     if(result.data.addEmployee.message === "Employee with employeeCode already exits") {
  //     alert("An employee with this Employee Code already exists")
  // }

  };


  return (
    <div className={styles.modalAddEmployee}>
      <div className={styles.formdiv}>
        <form onSubmit={handleSubmit}>
          <p className={styles.heading}>Edit Details</p>

          <input
            type="text"
            id=""
            name="firstName"
            placeholder="First Name"
            value={formdataget.firstName}
            onChange={handle}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formdataget.lastName}
            onChange={handle}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Employee Code"
            name="employeeCode"
            value={formdataget.employeeCode}
            onChange={handle}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            value={formdataget.designation}
            onChange={handle}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Pan Number"
            name="panNumber"
            value={formdataget.panNumber}
            onChange={handle}
            className={styles.input}
            required
          />
          <input
            type="number"
            placeholder="Salary"
            name="salary"
            value={formdataget.salary}
            onChange={handle}
            className={styles.input}
            required
          />

          <div className={styles.input}>
            <label htmlFor="dateofbirth">Date Of Birth:</label>
            <input
              type="date"
              id="dateofbirth"
              name="dob"
              value={formdataget.dob}
              onChange={handle}
              className={styles.dateinput}
              required
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="dateofjoining">Date Of Joining:</label>
            <input
              type="date"
              id="dateofjoining"
              name="doj"
              value={formdataget.doj}
              onChange={handle}
              className={styles.dateinput}
              required
            />
          </div>

          <div className={styles.input}>
            <input
              type="number"
              placeholder="EPF"
              name="epf"
              value={formdataget.epf}
              onChange={handle}
              className={styles.input1}
              required
            />
            <input
              type="checkbox"
              checked={epfChecked}
              onChange={handleEpfChange}
              id="epfChecked"
              name="epfChecked"
            />
          </div>

          <div className={styles.input}>
            <input
              type="number"
              placeholder="ESI"
              name="esi"
              value={formdataget.esi}
              onChange={handle}
              className={styles.input1}
              required
            />
            <input
              type="checkbox"
              checked={esiChecked}
              onChange={handleEsiChange}
              id="esiChecked"
              name="esiChecked"
            />
          </div>
          <button
            type="submit"
            className={styles.submitbutton}
            onClick={() => {
              
            }}
          >
            Save
          </button>

          {editDetailsSavedModal && (
            <ModalChildWrapper
              flag={editDetailsSavedModal}
              functiondisplay={setEditDetailsSavedModal}
              targetChildModal="editDetailsSaved"
              flagDisplayFunc={flagDisplayFunc}
              flagemployee={flagemployee}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default EditEmployeePopUp;