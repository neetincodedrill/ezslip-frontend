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
      getEmployeeId: id,
    },
  });
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
    refetchQueries: [{ query: EMPLOYEE_LIST }, 
        { query: GET_EMPLOYEE, 
            variables: {
                getEmployeeId: id,
            }, 
        }],
        awaitRefetchQueries: true,
  });

  useEffect(() => {
    setFormdataget({
      id: id,
      firstName: data?.getEmployee?.firstName,
      lastName: data?.getEmployee?.lastName,
      employeeCode: data?.getEmployee?.employeeCode,
      designation: data?.getEmployee?.designation,
      panNumber: data?.getEmployee?.panNumber,
      salary: data?.getEmployee?.salary,
      dob: data?.getEmployee?.dob,
      doj: data?.getEmployee?.doj,
      epf: data?.getEmployee?.epf?.number,
      esi: data?.getEmployee?.esi?.number,
    });
    setEsiChecked(data?.getEmployee?.esi?.isEnabled);
    setEpfChecked(data?.getEmployee?.epf?.isEnabled);
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateEmployee({
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
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formdataget.lastName}
            onChange={handle}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Employee Code"
            name="employeeCode"
            value={formdataget.employeeCode}
            onChange={handle}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            value={formdataget.designation}
            onChange={handle}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Pan Number"
            name="panNumber"
            value={formdataget.panNumber}
            onChange={handle}
            className={styles.input}
          />
          <input
            type="number"
            placeholder="Salary"
            name="salary"
            value={formdataget.salary}
            onChange={handle}
            className={styles.input}
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
              setEditDetailsSavedModal(!editDetailsSavedModal);
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