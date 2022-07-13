import Image from 'next/image'
import React,{FC} from 'react'
import styles from './LeftDashboardComponent.module.css'
import Link from 'next/link';

interface menuprops {
[index: string]: string;
}

const Menu:FC<menuprops> = ({imgsrc, imgalt, text, href }) => {
return(
  <Link href={href}>
    <div className={styles.menu}>
        
        <Image src={imgsrc} alt={imgalt} height="30" width="30"/>    
                  
        <h2>{text}</h2>
        
    </div>
    </Link>
)    
}

interface profiledivProps  {
[index:string]:string;
}

const Profilediv:FC<profiledivProps> = ({imgsrc, name, designation }) => {
return (
<div className={styles.profilediv}>

    <Image src={imgsrc}
    height="80"
    width="80" 
    alt="profile_pic"
    />

    <div className={styles.content}>
        <h3>{name}</h3>
        <h5>{designation}</h5>
    </div>
</div>
)
}

const LeftDashboardComponent:FC = () => {
return (
<div className={styles.leftdashboardcomponent}>
    <div className={styles.mainarea}>

    <Profilediv imgsrc="/assets/images/profile.png" name="Dora Explorer" designation="Executive (DeskmateAI)"/>

    <hr className={styles.hruler}/>

    <Menu imgsrc="/assets/images/add.png" altimg="add.png" text="New" href="/new" />
    <Menu imgsrc="/assets/images/history.png" altimg="history.png" text="History" href="/history" />
    <Menu imgsrc="/assets/images/employees.png" altimg="employees.png" text="Employees" href="/employeesPage"/>
    <Menu imgsrc="/assets/images/configuration.png" altimg="configuration.png" text="Configuration" href="/configuration" />

    </div>
</div>
)
}

export default LeftDashboardComponent