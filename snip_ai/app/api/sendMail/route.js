import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  const message = {
    from: `Snip Ai Team < ${process.env.EMAIL_FROM} >`,
    to: body.email,
    subject: "Successfull Payment",
    html: `
         <p style="font-size: 18px; margin-bottom: 16px;">
            Hello ${body.name},
        </p>
        <p style="background-color: #d4edda; color: #155724; padding: 15px; border-radius: 6px; border: 1px solid #c3e6cb; font-weight: 500;">
            ${body.credits} credits has been added to your account Successfully. 
        </p>
        <p style="margin-top: 24px;">Thank you for using our service. If you have any questions, feel free to reach out to our support team.</p>
        <p style="margin-top: 30px; color: #777777; font-size: 14px;"> -Team Snip Ai</p>
        `,
    headers : {
        "X-Entity-Ref-ID " : "newmail"
    }
  };
  var transporter  = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_FROM,
        pass:process.env.EMAIL_PASS,
    },
    tls:{
        //do not fail on invalid certs
        rejectUnauthorized : false
    }
  });
  console.log(JSON.stringify(body));

  try{
    await transporter.sendMail(message);
    return NextResponse.json({message:"Email sent successfully"}, {status : 200});
  }catch(err){
    return NextResponse.json({error : err.message},{status:500});
  }
  
}
