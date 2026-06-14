<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="tag light">ติดต่อเรา</span>
        <h1>ติดต่อทีมงานของเรา</h1>
        <p>หากท่านสนใจร่วมมือหรือต้องการความช่วยเหลือด้านบริการ กรุณาติดต่อเรา</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <!-- FORM -->
        <form class="contact-form" @submit.prevent="onSubmit">
          <h2>ส่งข้อความถึงเรา</h2>
          <div class="form-row">
            <label>ชื่อ
              <input type="text" v-model="form.name" placeholder="ชื่อ-นามสกุล" required />
            </label>
            <label>อีเมล
              <input type="email" v-model="form.email" placeholder="you@email.com" required />
            </label>
          </div>
          <label>โทรศัพท์
            <input type="tel" v-model="form.phone" placeholder="08X XXX XXXX" />
          </label>
          <label>ข้อความ
            <textarea v-model="form.message" rows="5" placeholder="กรุณาระบุรายละเอียด..." required></textarea>
          </label>
          <label class="checkbox">
            <input type="checkbox" v-model="form.agree" required />
            <span>ฉันยอมรับว่าทีมงานสามารถติดต่อฉันได้ตามที่อยู่อีเมลหรือหมายเลขโทรศัพท์ด้านบน</span>
          </label>
          <button type="submit" class="btn btn-primary">ส่ง →</button>
          <p v-if="sent" class="sent-msg">✓ ขอบคุณ! เราได้รับข้อความของคุณแล้ว</p>
        </form>

        <!-- INFO -->
        <aside class="contact-info">
          <h2>เกี่ยวกับบริการของเรา</h2>
          <p class="info-lead">เรายังคงให้บริการที่มีมูลค่าสูงแก่คุณผ่านการปรับปรุงอย่างมืออาชีพอย่างต่อเนื่อง</p>
          <div class="info-card" v-for="c in infos" :key="c.title">
            <div class="info-icon">{{ c.icon }}</div>
            <div>
              <h3>{{ c.title }}</h3>
              <p>{{ c.text }}</p>
            </div>
          </div>

          <div class="contact-direct">
            <div><span>โทรศัพท์</span><strong>08 9553 3299</strong></div>
            <div><span>Support Hotline</span><strong>08 9553 3299</strong></div>
            <div><span>อีเมล</span><strong>ads@muchhavemoney.com</strong></div>
            <div><span>Support Email</span><strong>support@muchhavemoney.com</strong></div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', phone: '', message: '', agree: false })
const sent = ref(false)

const onSubmit = () => {
  sent.value = true
  setTimeout(() => { sent.value = false }, 4000)
  Object.assign(form, { name: '', email: '', phone: '', message: '', agree: false })
}

const infos = [
  { icon: '📊', title: 'ข้อมูลเชิงลึกของตลาด', text: 'ใช้เครื่องมือวิเคราะห์ขั้นสูงและประสบการณ์ในอุตสาหกรรมเชิงลึกเพื่อให้การวิเคราะห์ตลาดและคำแนะนำการลงทุนที่แม่นยำ' },
  { icon: '🎯', title: 'บริการที่กำหนดเอง', text: 'จัดเตรียมการวางแผนทางการเงินส่วนบุคคลและการจัดการสินทรัพย์ตามความต้องการของลูกค้า เพื่อให้แน่ใจว่าได้รับบริการที่เอาใจใส่และเป็นเอกสิทธิ์' },
  { icon: '🛡️', title: 'การบริหารความเสี่ยง', text: 'ใช้กลยุทธ์การควบคุมความเสี่ยงที่เข้มงวดเพื่อความปลอดภัยในการลงทุนและรักษาการเติบโตที่มั่นคงของสินทรัพย์ของลูกค้า' }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #00387a, #012b5f);
  color: #fff; padding: 86px 0 76px; text-align: center;
}
.page-hero h1 { font-size: 42px; font-weight: 800; margin: 16px 0; }
.page-hero p { max-width: 640px; margin: 0 auto; color: #c3d4ea; font-size: 16px; line-height: 1.8; }
.tag.light { color: #f3a06e; }

.contact-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: start; }

.contact-form {
  background: #fff; border: 1px solid #eef2f7; border-radius: 18px; padding: 38px;
  box-shadow: 0 14px 40px rgba(0, 56, 122, 0.07);
}
.contact-form h2 { color: #012b5f; font-size: 24px; margin-bottom: 24px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.contact-form label { display: block; font-size: 14px; color: #2d3a4d; font-weight: 600; margin-bottom: 16px; }
.contact-form input, .contact-form textarea {
  width: 100%; margin-top: 7px; padding: 12px 14px; border: 1px solid #dce5f0; border-radius: 10px;
  font-size: 15px; font-family: inherit; background: #fbfcfe; transition: 0.2s;
}
.contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: #00387a; background: #fff; box-shadow: 0 0 0 3px rgba(0,56,122,0.08); }
.checkbox { display: flex; gap: 10px; align-items: flex-start; font-weight: 400; color: #5b6b80; font-size: 13px; line-height: 1.6; }
.checkbox input { width: auto; margin-top: 3px; }
.sent-msg { color: #1aa260; font-weight: 600; margin-top: 16px; }

.contact-info h2 { color: #012b5f; font-size: 24px; margin-bottom: 12px; }
.info-lead { color: #5b6b80; font-size: 15px; line-height: 1.8; margin-bottom: 26px; }
.info-card { display: flex; gap: 16px; padding: 20px; border: 1px solid #eef2f7; border-radius: 14px; margin-bottom: 16px; background: #f8fbff; }
.info-icon { width: 48px; height: 48px; flex-shrink: 0; border-radius: 12px; background: #fff; display: grid; place-items: center; font-size: 22px; box-shadow: 0 4px 12px rgba(0,56,122,0.06); }
.info-card h3 { color: #012b5f; font-size: 16px; margin-bottom: 6px; }
.info-card p { color: #5b6b80; font-size: 13px; line-height: 1.7; }

.contact-direct { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 26px; padding: 24px; border-radius: 14px; background: linear-gradient(135deg, #00387a, #012b5f); }
.contact-direct span { display: block; font-size: 12px; color: #9fb8d8; margin-bottom: 4px; }
.contact-direct strong { color: #fff; font-size: 15px; }

@media (max-width: 960px) {
  .contact-grid { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 32px; }
}
@media (max-width: 520px) {
  .form-row, .contact-direct { grid-template-columns: 1fr; }
}
</style>
