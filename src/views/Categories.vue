<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="tag light">ให้บริการ</span>
        <h1>บริการเชิงกลยุทธ์</h1>
        <p>บริษัท มัช แฮฟ มันนี่ จำกัด ตอบสนองความต้องการด้านการลงทุน การวางแผน และการบริหารความมั่งคั่งของคุณอย่างมืออาชีพ ผ่านบริการทางการเงินแบบครบวงจร</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-grid">
          <article class="service-card" v-for="(s, i) in services" :key="s.title">
            <div class="service-icon">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <span class="service-index">0{{ i + 1 }}</span>
          </article>
        </div>
      </div>
    </section>

    <section class="help-band">
      <div class="container help-inner">
        <div>
          <span class="tag">ต้องการความช่วยเหลือ?</span>
          <h2>พร้อมให้คำปรึกษาแก่คุณเสมอ</h2>
        </div>
        <router-link to="/contact" class="btn btn-primary">สนับสนุน →</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { icon: '📊', title: 'การจัดสรรสินทรัพย์', text: 'ให้บริการลูกค้าด้วยกลยุทธ์การจัดสรรสินทรัพย์ที่ครอบคลุมเพื่อเพิ่มประสิทธิภาพพอร์ตการลงทุน' },
  { icon: '💼', title: 'แผนทางการเงิน', text: 'ปรับแต่งการวางแผนทางการเงินสำหรับบุคคลและธุรกิจเพื่อช่วยเพิ่มความมั่งคั่ง' },
  { icon: '📈', title: 'วิเคราะห์การตลาด', text: 'ให้ข้อมูลเชิงลึกเกี่ยวกับตลาดและการคาดการณ์แนวโน้มเพื่อเป็นแนวทางในการตัดสินใจลงทุน' },
  { icon: '🛡️', title: 'การบริหารความเสี่ยง', text: 'ใช้เครื่องมือขั้นสูงเพื่อประเมินและควบคุมความเสี่ยงในการลงทุนเพื่อความปลอดภัยของสินทรัพย์' },
  { icon: '🧭', title: 'ที่ปรึกษาการลงทุน', text: 'ให้คำปรึกษาด้านการลงทุนจากผู้เชี่ยวชาญเพื่อช่วยให้บรรลุเป้าหมายทางการเงิน' },
  { icon: '🌅', title: 'การวางแผนเกษียณอายุ', text: 'ให้บริการวางแผนการเกษียณอายุแบบครบวงจรแก่บุคคลและครอบครัวเพื่อให้มั่นใจถึงอิสรภาพทางการเงินในอนาคต' }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #00387a, #012b5f);
  color: #fff; padding: 86px 0 76px; text-align: center;
}
.page-hero h1 { font-size: 44px; font-weight: 800; margin: 16px 0; }
.page-hero p { max-width: 720px; margin: 0 auto; color: #c3d4ea; font-size: 16px; line-height: 1.8; }
.tag.light { color: #f3a06e; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.service-card {
  position: relative; overflow: hidden; background: #fff; border: 1px solid #eef2f7;
  border-radius: 16px; padding: 38px 32px; transition: 0.25s;
  box-shadow: 0 4px 14px rgba(0, 56, 122, 0.04);
}
.service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(0, 56, 122, 0.12); border-color: rgba(242, 102, 33, 0.4); }
.service-icon {
  width: 60px; height: 60px; border-radius: 14px; background: #f0f6ff;
  display: grid; place-items: center; font-size: 26px; margin-bottom: 22px;
}
.service-card h3 { color: #012b5f; font-size: 20px; margin-bottom: 12px; }
.service-card p { color: #5b6b80; font-size: 15px; line-height: 1.75; }
.service-index {
  position: absolute; top: 22px; right: 26px; font-size: 34px; font-weight: 800;
  color: rgba(0, 56, 122, 0.06);
}

.help-band { background: #f8fbff; }
.help-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding: 56px 0; gap: 24px; flex-wrap: wrap;
}
.help-band h2 { color: #012b5f; font-size: 30px; margin-top: 8px; }

@media (max-width: 960px) { .services-grid { grid-template-columns: 1fr; } .page-hero h1 { font-size: 34px; } }
</style>
