import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import fs from "fs";
import  sgMail from '@sendgrid/mail';
import path from 'path';

const user_email : string = (process.env.user_email as string);
const sendgrid_key : any = (process.env['SENDGRID_API_KEY'] as any);

const employeeSlipEmail = async(email : string) => {
  
    // sgMail.setApiKey(sendgrid_key);
   
    const pathToAttachment = './public/uploads/employeeSlip.pdf';
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");

    // const msg = {
    // to: email,
    // from: user_email,
    // subject: 'Sending with SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    // attachments: [
    //     {
    //     content: attachment,
    //     filename: "employeeSlip.pdf",
    //     type: "application/pdf",
    //     disposition: "attachment"
    //     }
    // ]
    // };

    // sgMail.send(msg).catch((err: any) => {
    // console.log(err);
    // });
      //step 1
      const transporter = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: sendgrid_key
        })
    );

    //step 2
    var mailOptions={
        from:"neetinnegi.codedrill@gmail.com",
        to:email,
        subject:'Employee Slip',
        text: 'and easy to do anywhere, even with Node.js',
        attachments: [
            {
                filename: 'employeeSlip.pdf',
                path: pathToAttachment,
                contentType: 'application/pdf'
            }
        ]
    };

    //step 3  
    const emailSend =  await transporter.sendMail(mailOptions)
    if(!emailSend){
        return {
            message : 'Technical Issue!, Please click on resend for verify your Email'
        }
    }
    else{
        return { 
            message : 'Email Send to admin'
        }
    }
    }

export default employeeSlipEmail
