<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand">
            <img :src="logo" class="brand-mark" alt="MUCH HAVE MONEY logo" />
            <span class="brand-text">
              <strong>MUCH HAVE MONEY CO., LTD.</strong>
              <small>บริษัท มัช แฮฟ มันนี่ จำกัด</small>
            </span>
          </div>
          <p class="footer-desc">
            มุ่งเน้นนวัตกรรมและความเป็นเลิศในการให้บริการทางการเงิน
            โดยยึดความไว้วางใจจากลูกค้าเป็นค่านิยมหลัก
          </p>
          <div class="newsletter">
            <input type="email" placeholder="กรอกอีเมลของคุณ" />
            <button type="button">สมัครสมาชิก</button>
          </div>
          <small class="newsletter-note">การสมัครแสดงว่าคุณยอมรับนโยบายความเป็นส่วนตัวของเรา</small>
        </div>

        <div class="footer-col">
          <h4>เมนู</h4>
          <router-link to="/">บริษัท</router-link>
          <router-link to="/destination">ทีม</router-link>
          <router-link to="/categories">ให้บริการ</router-link>
          <router-link to="/contact">ติดต่อเรา</router-link>
          <router-link to="/conditions">ข้อกำหนดและเงื่อนไข</router-link>
          <router-link to="/privacy">นโยบายความเป็นส่วนตัว</router-link>
        </div>

        <div class="footer-col">
          <h4>ติดต่อเรา</h4>
          <p class="contact-line"><span>ที่อยู่:</span> 69/303 หมู่ที่ 10 ตำบลบางเลน อำเภอบางใหญ่ จ.นนทบุรี 11140</p>
          <p class="contact-line"><span>โทรศัพท์:</span> 08 9553 3299</p>
          <p class="contact-line"><span>จดหมาย:</span> ads@wimutfamily.com</p>
        </div>

        <div class="footer-col">
          <h4>ฝ่ายสนับสนุน</h4>
          <p class="support-label">Support Hotline</p>
          <p class="support-value">08 9553 3299</p>
          <p class="support-label">Support Email</p>
          <p class="support-value">support@wimutfamily.com</p>
          <div class="socials">
            <a href="#" aria-label="facebook">f</a>
            <a href="#" aria-label="line">L</a>
            <a href="#" aria-label="x">𝕏</a>
            <a href="#" aria-label="in">in</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2024 MUCH HAVE MONEY COMPANY LIMITED. All rights reserved.</span>
        <div class="footer-bottom-links">
          <router-link to="/privacy">นโยบายความเป็นส่วนตัว</router-link>
          <router-link to="/conditions">ข้อกำหนดและเงื่อนไข</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from '../assets/imgs/thai_logo.png'
</script>

<style scoped>
.site-footer {
  background: #0b1f3a;
  color: #cdd7e6;
  padding: 64px 0 28px;
  margin-top: 80px;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr 1.2fr;
  gap: 40px;
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  width: 42px; height: 42px; border-radius: 10px;
  object-fit: contain; background: #fff;
}
.brand-text { display: flex; flex-direction: column; line-height: 1.2; }
.brand-text strong { color: #fff; font-size: 16px; }
.brand-text small { color: #8aa0bd; font-size: 11px; }
.footer-desc { margin: 18px 0; font-size: 14px; line-height: 1.7; color: #9fb1ca; max-width: 320px; }

.newsletter { display: flex; gap: 8px; margin-bottom: 8px; }
.newsletter input {
  flex: 1; padding: 11px 14px; border-radius: 8px; border: 1px solid #25395a;
  background: #102a4c; color: #fff; font-size: 14px;
}
.newsletter input::placeholder { color: #6f86a6; }
.newsletter button {
  padding: 11px 18px; border: 0; border-radius: 8px; background: #f26621;
  color: #fff; font-weight: 600; cursor: pointer; white-space: nowrap;
}
.newsletter button:hover { background: #d8551a; }
.newsletter-note { font-size: 12px; color: #6f86a6; }

.footer-col h4 { color: #fff; font-size: 15px; margin-bottom: 18px; }
.footer-col a {
  display: block; color: #9fb1ca; text-decoration: none; font-size: 14px;
  margin-bottom: 12px; transition: color 0.2s;
}
.footer-col a:hover { color: #f26621; }
.contact-line { font-size: 14px; line-height: 1.7; margin-bottom: 12px; color: #9fb1ca; }
.contact-line span { color: #fff; font-weight: 600; }
.support-label { font-size: 12px; color: #6f86a6; margin-bottom: 2px; }
.support-value { font-size: 15px; color: #fff; font-weight: 600; margin-bottom: 14px; }

.socials { display: flex; gap: 10px; margin-top: 6px; }
.socials a {
  width: 36px; height: 36px; border-radius: 50%; background: #102a4c;
  display: grid; place-items: center; color: #cdd7e6; text-decoration: none; font-size: 14px;
  transition: 0.2s;
}
.socials a:hover { background: #f26621; color: #fff; }

.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid #1c3358; margin-top: 48px; padding-top: 22px;
  font-size: 13px; color: #7d92b0;
}
.footer-bottom-links { display: flex; gap: 24px; }
.footer-bottom-links a { color: #7d92b0; text-decoration: none; }
.footer-bottom-links a:hover { color: #fff; }

@media (max-width: 960px) {
  .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
}
@media (max-width: 600px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 14px; text-align: center; }
}
</style>
