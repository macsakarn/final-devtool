import React from "react";

export default function OTP() {
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
          />
          <div style={{ backgroundColor: "#b1d334", padding: "15px 45px" }}>
            รับรหัส OTP ทาง SMS
          </div>
        </div>
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
