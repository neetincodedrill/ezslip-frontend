import React, { FC, useState } from "react";
import styles from "./Slip.module.css";
import Image from "next/image";
import { Input } from "./Signinpage/SignInForm";
import { useEffect } from "react";
import { off } from "process";

interface Islips {
  datacode?: any;
}

const Slip: FC<Islips> = ({ datacode }) => {
  const monthnames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June", 
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  let month: string = monthnames[date.getMonth()];
  let year: number = Number(date.getFullYear());
  var days: number = 31;

  if (
    month === "January" ||
    "March" ||
    "May" ||
    "July" ||
    "August" ||
    "October" ||
    "December"
  ) {
    days = 31;
  }

  if (month === "April" || "June" || "September" || "November") {
    days = 30;
  }

  if (month === "February") {
    if (year % 4 == 0) {
      days = 29;
    } else days = 28;
  }

  interface Islipvalues {
    epf: Number;
    esi: Number;
    hra: Number;
    fullname: string;
    salary: Number;
    designation: string;
    doj: string;
    employeeCode: string;
    panNumber: string;
    month: string;
    days: Number;
    daysWorked: Number;
    leavesNumber: Number;
    leaveAmount: Number;
    conveyanceAllowance: Number;
    vehicleAllowance: Number;
  }

  const [slipvalues, setSlipvalues] = useState<Islipvalues>({
    epf: Number(
      (datacode?.epf *
        datacode?.salary) /
        100
    ),
    esi: Number(
      (datacode?.esi *
        (datacode?.salary + datacode?.hra) /
        100)
    ),
    hra: Number(
      (datacode?.hra *
        datacode?.salary) /
        100
    ),
    fullname:
      datacode?.firstName +
      " " +
      datacode?.lastName,
    salary: Number(datacode?.salary),
    designation: datacode?.designation,
    doj: datacode?.doj,
    employeeCode: datacode?.employeeCode,
    panNumber: datacode?.panNumber,
    month: month,
    days: days,
    daysWorked: 1,
    leavesNumber: 0,
    leaveAmount: 0,
    conveyanceAllowance: 0,
    vehicleAllowance: 0,
  });

  const [finalvalues, setFinalvalues] = useState<{
    total: number;
    totalDeductions: number;
  }>({
    total:
      Number(slipvalues.salary) +
      Number(slipvalues.hra) +
      Number(slipvalues.conveyanceAllowance) +
      Number(slipvalues.vehicleAllowance),
    totalDeductions:
      Number(slipvalues.epf) +
      Number(slipvalues.esi) +
      Number(slipvalues.leaveAmount),
  });
  
  useEffect(() => {
    setSlipvalues({
      epf: Number(
        (datacode?.epf *
          datacode?.salary) /
          100
      ),
      esi: 
        Number( Number(datacode?.esi) * Number(finalvalues?.total)  /
          100)
      ,
      hra: Number(
        (datacode?.hra *
          datacode?.salary) /
          100
      ),
      fullname:
        datacode?.firstName +
        " " +
        datacode?.lastName,
      salary: Number(datacode?.salary),
      designation: datacode?.designation,
      doj: datacode?.doj,
      employeeCode: datacode?.employeeCode,
      panNumber: datacode?.panNumber,
      month: month,
      days: days,
      daysWorked: 1,
      leavesNumber: 0,
      leaveAmount: 0,
      conveyanceAllowance: 0,
      vehicleAllowance: 0,
    });

  }, [datacode]);

  useEffect(() => {
    setFinalvalues({
      total:
        Number(slipvalues.salary) +
        Number(slipvalues.hra) +
        Number(slipvalues.conveyanceAllowance) +
        Number(slipvalues.vehicleAllowance),
      totalDeductions:
        Number(slipvalues.epf) +
        Number(slipvalues.esi) +
        Number(slipvalues.leaveAmount),
    });
  }, [slipvalues]);

  const handleChange = (e: any) => {
    setSlipvalues({
      ...slipvalues,
      [e.target.name]: e.target.value,
    });
  };
console.log()
console.log(slipvalues);
console.log(datacode);
  return (
    <div className={styles.slip}>
      <div className={styles.main}>
        <div className={styles.firstline}>
          <div className={styles.logoDiv}>
            <Image
              src="/assets/images/codedrill_logo.png"
              width="164px"
              height="43px"
            />
          </div>

          <div className={styles.firstlinerightdiv}>
            <div className={styles.firstrightdiv}>
              <div className={styles.upperdiv}>
                <div className="">
                  <Image src="/assets/images/User.png" width="18" height="18" />
                </div>

                <p className={styles.para}>+91 8326897122, 101 92198</p>
              </div>

              <div className={styles.lowerdiv}>
                <div className="">
                  <Image src="/assets/images/Mail.png" width="18" height="18" />
                </div>

                <p className={styles.para}>mail@codedrillinfotech.com</p>
              </div>
            </div>

            <div className={styles.secondrightdiv}>
              <div className={styles.image}>
                <Image src="/assets/images/mappin.png" width="18" height="18" />
              </div>

              <div className={styles.addressdiv}>
                <p>E-202,Ind Area,</p>
                <p> Phase-8B </p>
                <p>Mohali, Punjab, INDIA</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.payslipdiv}>
          <p>Payslip</p>
        </div>

        <div className={styles.employeeinformation}>
          <p>Employee Information</p>

          <div className={styles.infodiv}>
            <div className={styles.leftinfodiv}>
              <div className={styles.labelsdiv}>
                <div className={styles.label}>Name of the Employee</div>
                <div className={styles.label}>Employee Code</div>
                <div className={styles.label}>Date of Joining</div>
                <div className={styles.label}>Designation</div>
              </div>

              <div className={styles.inputs}>
                
                <input
                  type="text"
                  placeholder="Loid Forger"
                  className={styles.input}
                  value={slipvalues.fullname}
                  onChange={handleChange}
                  name="fullname"
                />

                <input
                  type="text"
                  placeholder="8484HJBH3"
                  className={styles.input}
                  value={slipvalues.employeeCode}
                  onChange={handleChange}
                  name="employeeCode"
                />
                
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className={styles.input}
                  value={slipvalues.doj}
                  onChange={handleChange}
                  name="doj"
                />
                <input
                  type="text"
                  placeholder="Designation"
                  className={styles.input}
                  value={slipvalues.designation}
                  onChange={handleChange}
                  name="designation"
                />

              </div>
            </div>

            <div className={styles.rightinfodiv}>
              <div className={styles.labelsdiv}>
                <div className={styles.label}>Month</div>
                <div className={styles.label}>Days In Month</div>
                <div className={styles.label}>Days Worked</div>
                <div className={styles.label}>Leaves Taken</div>
              </div>

              <div className={styles.inputs}>
                <input
                  type="text"
                  placeholder="December"
                  className={styles.input}
                  name="month"
                  value={slipvalues.month}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="31"
                  className={styles.input}
                  name="days"
                  value={slipvalues.days}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="31"
                  className={styles.input}
                  name="daysWorked"
                  value={slipvalues.daysWorked}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="none"
                  className={styles.input}
                  name="leaves"
                  value={slipvalues.leavesNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.secondinfodiv}>
            <div className={`${styles.infooneline} ${styles.custom}`}>
              <div className={`${styles.label1} ${styles.slipheading}`}>
                Particulars
              </div>
              <div className={` ${styles.gross} ${styles.slipheading}`}>
                Amount
              </div>
              <div className={styles.paid}>

              </div>
            </div>
           

            <div className={styles.infooneline}>
              <div className={styles.label1}></div>
              <div className={styles.gross}>Gross</div>
              <div className={styles.paid}>Paid</div>
            </div>

            <div className={styles.infooneline}>
              <div className={styles.label1}>Basic Salary </div>
                <input
                  type="text"
                  className={styles.gross}
                  value={slipvalues.salary}
                  name="salary"
                  onKeyUp={handleChange}
                  autoComplete="off"
                />
                <input
                  type="text"
                  className={styles.paid}
                  value={slipvalues.salary}
                  name="salary"
                  onChange={handleChange}
                  autoComplete="off"
                />

            </div>

            <div className={styles.infooneline}>
              <div className={styles.label1}> HRA</div>
                <input
                  type="text"
                  id=""
                  className={styles.gross}
                  value={slipvalues.hra}
                  name="hra"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <input
                  type="text"
                  id=""
                  className={styles.paid}
                  value={slipvalues.hra}
                  name="hra"
                  onChange={handleChange}
                  autoComplete="off"
                />
              
            </div>

            <div className={styles.infooneline}>
         
                <input
                  type="text"
                  placeholder="Conveyance allowance"
                  className={styles.label1}
                  autoComplete="off"
                />
        
                <input
                  type="text"
                  placeholder="-"
                  className={styles.gross}
                  name="conveyanceAllowance"
                  value={slipvalues.conveyanceAllowance}
                  onChange={handleChange}
                  autoComplete="off"
                />

                <input
                  type="text"
                  placeholder="-"
                  className={styles.paid}
                  name="conveyanceAllowance"
                  value={slipvalues.conveyanceAllowance}
                  onChange={handleChange}
                  autoComplete="off"
                />
         
            </div>

            <div className={styles.infooneline}>
 
                <input
                  type="text"
                  placeholder="Vehicle allowance"
                  className={styles.label1}
                  autoComplete="off"
                />

                <input
                  type="text"
                  placeholder="-"
                  className={styles.gross}
                  name="vehicleAllowance"
                  value={slipvalues.vehicleAllowance}
                  onChange={handleChange}
                   autoComplete="off"
                />
                <input
                  type="text"
                  placeholder="-"
                  className={styles.paid}
                  name="vehicleAllowance"
                  value={slipvalues.vehicleAllowance}
                  onChange={handleChange}
                  autoComplete="off"
                />
            </div>

            <div className={`${styles.infooneline} ${styles.custom}`}>
              <div className={styles.label1}></div>
              <div className={` ${styles.gross} ${styles.slipheading}`}>
                Total
              </div>
           
                <input
                  type="text"
                  placeholder="40000"
                  className={styles.paid}
                  value={finalvalues.total}
                  name="total"
                  autoComplete="off"
                />
         
            </div>
          </div>

          {/* this is the deductions div */}

          <div className={styles.deductions}>
            <div className={`${styles.infooneline} ${styles.custom}`}>
              <div className={`${styles.label1} ${styles.slipheading}`}>
                Deductions
              </div>
              <div className={styles.gross}></div>
              <div className={`${styles.paid} ${styles.slipheading}`}>
                Amount
              </div>
            </div>

            <div className={styles.infooneline}>
              <div className={styles.label1}>Short leaves </div>

                <input
                  type="text"
                  placeholder="-"
                  className={styles.gross}
                  value={slipvalues.leavesNumber}
                  name="leavesNumber"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <input
                  type="text"
                  placeholder="-"
                  className={styles.paid}
                  name="leaveAmount"
                  value={slipvalues.leaveAmount}
                  onChange={handleChange}
                  autoComplete="off"
                />

            </div>

            <div className={styles.infooneline}>
              <div className={styles.label1}>EPF </div>


                <input
                  type="text"
                  id=""
                  placeholder="-"
                  className={styles.gross}
                  value={slipvalues.epf}
                  name="epf"
                  onChange={handleChange}
                  autoComplete="off"
                />

                <input
                  type="text"
                  id=""
                  placeholder="-"
                  className={styles.paid}
                  value={slipvalues.epf}
                  name="epf"
                  onChange={handleChange}
                  autoComplete="off"
                />

            </div>

            <div className={styles.infooneline}>
              <div className={styles.label1}>ESI </div>

                <input
                  type="text"
                  id=""
                  placeholder="-"
                  className={styles.gross}
                  value={slipvalues.esi}
                  name="esi"
                  onChange={handleChange}
                  autoComplete="off"
                />
      
                <input
                  type="text"
                  id=""
                  placeholder="-"
                  className={styles.paid}
                  value={slipvalues.esi}
                  name="esi"
                  onChange={handleChange}
                  autoComplete="off"
                />

            </div>

            <div className={`${styles.infooneline} ${styles.custom}`}>
              <div className={`${styles.label1}`}></div>

              <input type="text" 
              className={`${styles.gross} ${styles.custom} ${styles.totaldeductions}`}
              readOnly
              value="Total Deductions"
              />
        
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="-"
                  className={styles.paid}
                  value={finalvalues.totalDeductions}
                  autoComplete="off"
                />
             
            </div>
          </div>

          <div className={styles.netpaydiv}>
            <div className={`${styles.infooneline}`}>

      
            <div className={`${styles.label1}`}></div>

            <input type="text" 
              className={`${styles.gross} ${styles.netpay} `}
              readOnly
              value="Net Pay"
              />
        
              <input
                type="text"
                name=""
                id=""
                placeholder="-"
                className={`${styles.paid} ${styles.finalslipvalue}`}
                value={finalvalues.total - finalvalues.totalDeductions}
                autoComplete="off"
              />
            

            </div>
          </div>

          <div className={styles.logodiv}>
            <div className={styles.logo}>
              <Image
                src="/assets/images/ezSlips.png"
                width="102px"
                height="35px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slip;
