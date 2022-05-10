### ขั้นตอนการใช้งาน
1. Clone Project ```git clone https://github.com/macsakarn/final-devtool.git```
2. type `docker compose -f docker-compose-build.yml build`
3. type `docker compose -f docker-compose-deploy.yml up -d`
4. เปิด http://localhost:3001/

### ข้อตอนการทดสอบ OTP
1. เปิด http://localhost:3001/
2. กด "ลงทะเบียนจองคิว"
3. กรอก เบอร์โทรศัฟ
4. กรอก OTP
### User Flow การจองคิววัคซีน

1. ผู้ใช้เข้าหน้า Website
2. กดปุ่มจอง
3. ใส่เบอร์มือถือ
    - เบอร์มือถือ 10 หลัก (081-xxxxxxx)
4. กดรับรหัส OTP
5. กรอกรหัส OTP
    - OTP 4 หลัก (xxxx)
6. กรอกข้อมูลผู้ลงทะเบียนรับวัคซีน
    - คำนำหน้า
    - ชื่อ
    - นามสกุล
    - เพศ
    - วัน-เดือน-ปี เกิด
    - บัตรประจำตัว
    - หมายเลขบัตรประจำตัว
7. กรอกข้อมูลการติดต่อ
    - หมายเลขโทรศัพท์ของผู้รับวัคซีน
    - Line ID
    - อีเมล
8. กรอกที่อยู่ที่ติดต่อได้
    - บ้านเลขที่
    - หมู่
    - หมู่บ้าน
    - อาคาร / ชั้น / ห้อง
    - ถนน
    - ซอย
9. เลือกสถานที่ และเข็มที่ต้องการฉีด
10. วัน-เวลารับวัคซีน
    - วัน (00-00-00)
    - เวลา (xx.xx) 24 ซม.

### UI Flow การจองคิววัคซีน
1. หน้าจองคิว
2. หน้า OTP
3. กรอกข้อมูลผู้ใช้งาน

### Task เบื้องต้นในการทำ Project
Link management too : https://berry-sombrero-44e.notion.site/Task-devtool-final-0f349b15520242ec9b347f0f3c49702f

![management too](/assets/management%20too.png)

### Acceptance test

| Case No. | Case Name | Case description | Input | Expected result | Test result |
| :--: | :----: | :-------:  | :---: | :-----: | :--: |
| 1 | กรอกเบอร์มือถือ | เบอร์ที่ผู้ใช้ลงทะเบียนกับระบบ  | 0911033133 | แสดง form OTP บันทึกเบอร์ลง Database |  |
| 2 | กรอกเบอร์มือถือ | เบอร์ที่ผู้ใช้ลงทะเบียนกับระบบ  | 111 | แสดง หมายเลขโทรศัพท์ไม่ถูกต้อง (0XX-XXX-XXXX) |  |
