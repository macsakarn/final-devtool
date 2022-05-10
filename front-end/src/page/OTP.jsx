import {React, useState} from "react";
import axios from 'axios'

export default function OTP() {
  const [form,setForm] = useState(false)
  const [phone,setPhone] = useState("")
  const [otp,setOtp] = useState("")

  var OtpForm = () => {
    return(
      <div>
      <h4>ระบุรหัส OTP ที่ได้รับทาง SMS</h4>
        <p>รหัสผ่านมีอายุการใช้งาน ตลอดไป</p>
        <div style={{ display: "flex", gap: 20 }}>
          <input
            type="text"
            placeholder="XXXX"
            style={{ width: "40%" }}
            value={otp}
            onChange={(val)=>{setOtp(val.target.value)}}
          />
          <div style={{ backgroundColor: "#b1d334", padding: "15px 45px" }} onClick={()=>sendOtp()}>
            เข้าสู่ระบบ
          </div>
        </div>
      </div>
    )
  }
  var getOtp = () =>{
    var phoneno = /^\d{10}$/
    if(!phoneno.test(phone)){
      alert("หมายเลขโทรศัพท์ไม่ถูกต้อง (0XX-XXX-XXXX)")
      setForm(false)
    }else{
      axios.post('http://localhost:4000/otp', {
        phone
      })
      .then(function (response) {
        setOtp(response.data.otp);
      })
      .catch(function (error) {
        console.log(error);
      });
      setForm(true)
    }
  }

  var sendOtp = () =>{
    var phoneno = /^\d{4}$/
    if(!phoneno.test(otp)){
      alert("* รหัส OTP ไม่ถูกต้องกรุณาลองใหม่")
    }else{
      axios.post('http://localhost:4000/chackotp', {
        phone,
        otp
      })
      .then(function (response) {
        alert(response.data.text);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  
  return (
    <div
      style={{
        width: "100%",
        paddingRight: "0px",
        paddingLeft: "0px",
        marginRight: "auto",
        marginLeft: "auto",
        overflow: "hidden",
        maxWidth: "960px",
      }}
    >
      <div className="image">
        <img
          src="https://vaccineforthais.ais.th/Images/MicrosoftTeams-image.png"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div
        style={{
          marginTop: "3rem",
          paddingRight: "100px",
          paddingLeft: "100px",
        }}
      >
        <h4>บริการลงทะเบียนรับวัคซีนโควิด-19 โดย เอไอเอส</h4>
        <p>จัดสรรโดย กรมการแพทย์ กระทรวงสาธารณสุข และกระทรวงคมนาคม</p>
        <h4>ระบุหมายเลขโทรศัพท์</h4>
        <p>เพื่อล็อกอินลงทะเบียนรับวัคซีน</p>
        <div className="form" style={{ display: "flex", gap: 20 }}>
          <input
            type="text"
            placeholder="0XX-XXXXXXX"
            style={{ width: "40%" }}
            value={phone}
            onChange={(val)=>{setPhone(val.target.value)}}
          />
          <div style={{ backgroundColor: "#b1d334", padding: "15px 45px" }} onClick={()=>getOtp()}>
            รับรหัส OTP ทาง SMS
          </div>
        </div>
        {
          form?<OtpForm/>:<></>
        }
        
        <h4 style={{ color: "#b1d334" }}>ข้อควรรู้ก่อนลงทะเบียนรับวัคซีน</h4>
        <ul>
          <li>กลุ่มอายุ 12-17 ปี</li>
          <ul>
            <li>รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 120 วัน</li>
          </ul>
        </ul>
        <ul>
          <li>กลุ่มอายุ 18 ปี ขึ้นไป</li>
          <ul>
            <li>รับวัคซีนเข็ม 3: ฉีด 2 เข็ม ครบ 90 วัน</li>
            <li>รับวัคซีนเข็ม 4: ฉีด 3 เข็ม ครบ 120 วัน</li>
          </ul>
        </ul>
        <ul>
          <li>สถานที่: สถานีกลางบางซื่อ</li>
        </ul>
        <ul>
          <li>รอรับ SMS แจ้งผลลงทะเบียนภายใน 2 ชม.</li>
        </ul>
        <ul>
          <li>1 หมายเลข (ค่ายใดก็ได้) / 5 บัตรประชาชน บัตรชมพู หรือพาสปอร์ต</li>
        </ul>
      </div>
    </div>
  );
}
