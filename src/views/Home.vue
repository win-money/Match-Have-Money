<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">MUCH HAVE MONEY COMPANY LIMITED</span>
          <h1>ความเชี่ยวชาญทางการเงิน<br /><span class="accent">ความไว้วางใจมาก่อน</span></h1>
          <p class="hero-sub">ความเชี่ยวชาญทางการเงิน</p>
          <div class="hero-actions">
            <router-link to="/categories" class="btn btn-primary">หน้าต่อไป →</router-link>
            <router-link to="/contact" class="btn btn-ghost">ติดต่อเรา</router-link>
          </div>
          <div class="hero-stats">
            <div><strong>15+</strong><span>ปีประสบการณ์</span></div>
            <div><strong>2,000+</strong><span>ลูกค้าที่ไว้วางใจ</span></div>
            <div><strong>98%</strong><span>ความพึงพอใจ</span></div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <div class="hero-card-head">
              <span>พอร์ตการลงทุน</span>
              <span class="up">▲ 12.4%</span>
            </div>
            <div class="bars">
              <span style="height: 40%"></span>
              <span style="height: 62%"></span>
              <span style="height: 48%"></span>
              <span style="height: 78%"></span>
              <span style="height: 66%"></span>
              <span style="height: 92%"></span>
            </div>
            <div class="hero-card-foot">
              <div><small>สินทรัพย์รวม</small><strong>฿ 1.84B</strong></div>
              <div><small>ผลตอบแทน</small><strong class="up">+18.2%</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INSIGHTS -->
    <section class="section insights">
      <div class="container">
        <div class="section-head center">
          <span class="tag">ข้อมูลเชิงลึกทางการเงิน</span>
          <h2>ให้การวิเคราะห์และคำแนะนำทางการเงินเชิงลึก</h2>
        </div>
        <div class="value-grid">
          <div class="value-card" v-for="v in values" :key="v.title">
            <div class="value-icon">{{ v.icon }}</div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPLORE -->
    <section class="section explore">
      <div class="container">
        <div class="section-head">
          <span class="tag">MUCH HAVE MONEY COMPANY LIMITED</span>
          <h2>สำรวจธุรกิจของเรา</h2>
          <p>เลือกเราเพื่อเริ่มต้นการเดินทางอย่างมืออาชีพเพื่อการเติบโตของความมั่งคั่งและการควบคุมความเสี่ยง</p>
        </div>
        <div class="explore-grid">
          <article class="explore-card" v-for="(s, i) in explore" :key="s.title">
            <span class="explore-num">0{{ i + 1 }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <router-link to="/categories" class="explore-link">เรียนรู้เพิ่มเติม →</router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- TEAM PREVIEW -->
    <section class="section team-preview">
      <div class="container">
        <div class="section-head center">
          <span class="tag">ทำความรู้จักกับเรา</span>
          <h2>ทีมผู้เชี่ยวชาญของเรา</h2>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="m in team" :key="m.name">
            <div class="team-photo" :style="{ background: m.bg }">{{ m.initials }}</div>
            <h3>{{ m.name }}</h3>
            <p>{{ m.role }}</p>
          </div>
        </div>
        <div class="center">
          <router-link to="/destination" class="btn btn-primary">มารู้จักทีมงาน →</router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-band">
      <div class="container cta-inner">
        <div>
          <h2>ต้องการความช่วยเหลือ?</h2>
          <p>เริ่มต้นการเดินทางทางการเงินของคุณกับผู้เชี่ยวชาญของเราวันนี้</p>
        </div>
        <router-link to="/contact" class="btn btn-light">สนับสนุน →</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  { icon: '🎯', title: 'สายตายาว', text: 'มุ่งมั่นที่จะเป็นผู้นำในอุตสาหกรรม' },
  { icon: '🤝', title: 'บนพื้นฐานของความไว้วางใจ', text: 'โดยยึดความไว้วางใจจากลูกค้าเป็นค่านิยมหลัก' },
  { icon: '🏛️', title: 'ประวัติบริษัท', text: 'มุ่งเน้นนวัตกรรมและความเป็นเลิศในการให้บริการทางการเงิน' }
]

const explore = [
  { title: 'ให้คำปรึกษาผลิตภัณฑ์ทางการเงิน', text: 'ให้การวิเคราะห์ผลิตภัณฑ์ทางการเงินอย่างมืออาชีพเพื่อช่วยให้ลูกค้าเลือกโซลูชั่นการลงทุนและการเงินที่เหมาะสม' },
  { title: 'บริการบริหารจัดการสินทรัพย์', text: 'มีความเชี่ยวชาญในการจัดสรรสินทรัพย์ ให้บริการโซลูชั่นการแข็งค่าของสินทรัพย์และการจัดการความเสี่ยงสำหรับบุคคลและธุรกิจ' },
  { title: 'บริการประเมินสินเชื่อ', text: 'ใช้เครื่องมือวิเคราะห์ขั้นสูงเพื่อให้ลูกค้าได้รับการประเมินเครดิตและคำแนะนำการจัดการเครดิตที่แม่นยำ' },
  { title: 'รายงานการวิเคราะห์ตลาด', text: 'เผยแพร่รายงานแนวโน้มอุตสาหกรรมและการวิเคราะห์ตลาดเป็นประจำเพื่อสนับสนุนลูกค้าในการตัดสินใจลงทุนอย่างมีข้อมูล' }
]

const team = [
  { name: 'Elara Penrose', role: 'หัวหน้านักวิเคราะห์การเงินระหว่างประเทศ', initials: 'EP', bg: 'linear-gradient(135deg,#00387a,#2b6cb0)' },
  { name: 'Seraphina Voss', role: 'นักวิชาการการเงินดีเด่นแห่งเอเชีย', initials: 'SV', bg: 'linear-gradient(135deg,#012b5f,#1a4a8a)' },
  { name: 'Thorne Radcliffe', role: 'ผู้เชี่ยวชาญด้านการแยกหุ้นและการเงินของประเทศไทย', initials: 'TR', bg: 'linear-gradient(135deg,#f26621,#c9450f)' }
]
</script>

<style scoped>
/* HERO */
.hero {
  background: radial-gradient(1200px 600px at 80% -10%, rgba(0, 56, 122, 0.10), transparent 60%),
              linear-gradient(180deg, #f8fbff, #ffffff);
  padding: 72px 0 90px;
  overflow: hidden;
}
.hero-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }
.eyebrow {
  display: inline-block; font-size: 13px; letter-spacing: 1.5px; font-weight: 600;
  color: #f26621; text-transform: uppercase; margin-bottom: 18px;
}
.hero h1 { font-size: 50px; line-height: 1.15; color: #012b5f; font-weight: 800; margin-bottom: 22px; }
.hero h1 .accent { color: #00387a; position: relative; }
.hero-sub { font-size: 16px; color: #5b6b80; margin-bottom: 32px; }
.hero-actions { display: flex; gap: 14px; margin-bottom: 44px; flex-wrap: wrap; }
.hero-stats { display: flex; gap: 40px; }
.hero-stats div { display: flex; flex-direction: column; }
.hero-stats strong { font-size: 30px; color: #012b5f; font-weight: 800; }
.hero-stats span { font-size: 13px; color: #737373; }

.hero-visual { display: flex; justify-content: center; }
.hero-card {
  width: 100%; max-width: 380px; background: #fff; border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0, 56, 122, 0.16); padding: 26px;
  border: 1px solid rgba(0, 56, 122, 0.06);
}
.hero-card-head { display: flex; justify-content: space-between; align-items: center; font-size: 14px; color: #737373; font-weight: 600; }
.hero-card-head .up, .up { color: #1aa260; font-weight: 700; }
.bars { display: flex; align-items: flex-end; gap: 12px; height: 150px; margin: 26px 0; }
.bars span { flex: 1; background: linear-gradient(180deg, #2b6cb0, #00387a); border-radius: 6px 6px 0 0; }
.bars span:last-child { background: linear-gradient(180deg, #f58a4d, #f26621); }
.hero-card-foot { display: flex; justify-content: space-between; border-top: 1px solid #eef2f7; padding-top: 18px; }
.hero-card-foot small { display: block; font-size: 12px; color: #999; margin-bottom: 4px; }
.hero-card-foot strong { font-size: 20px; color: #012b5f; }

/* INSIGHTS */
.value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.value-card {
  background: #fff; border: 1px solid #eef2f7; border-radius: 16px; padding: 36px 30px;
  text-align: center; transition: 0.25s; box-shadow: 0 4px 14px rgba(0, 56, 122, 0.04);
}
.value-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0, 56, 122, 0.12); border-color: rgba(0, 56, 122, 0.15); }
.value-icon {
  width: 64px; height: 64px; margin: 0 auto 20px; border-radius: 16px;
  background: #f0f6ff; display: grid; place-items: center; font-size: 28px;
}
.value-card h3 { color: #012b5f; font-size: 19px; margin-bottom: 10px; }
.value-card p { color: #5b6b80; font-size: 14px; line-height: 1.7; }

/* EXPLORE */
.explore { background: #f8fbff; }
.explore-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.explore-card {
  background: #fff; border-radius: 16px; padding: 38px 34px; border: 1px solid #eef2f7;
  position: relative; transition: 0.25s;
}
.explore-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(0, 56, 122, 0.10); }
.explore-num { font-size: 40px; font-weight: 800; color: rgba(0, 56, 122, 0.10); }
.explore-card h3 { color: #012b5f; font-size: 21px; margin: 8px 0 14px; }
.explore-card p { color: #5b6b80; font-size: 15px; line-height: 1.75; margin-bottom: 20px; }
.explore-link { color: #f26621; font-weight: 600; text-decoration: none; font-size: 15px; }
.explore-link:hover { text-decoration: underline; }

/* TEAM */
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-bottom: 44px; }
.team-card { text-align: center; background: #fff; border: 1px solid #eef2f7; border-radius: 16px; padding: 34px 24px; transition: 0.25s; }
.team-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0, 56, 122, 0.12); }
.team-photo {
  width: 96px; height: 96px; border-radius: 50%; margin: 0 auto 20px;
  display: grid; place-items: center; color: #fff; font-size: 30px; font-weight: 800;
}
.team-card h3 { color: #012b5f; font-size: 19px; margin-bottom: 8px; }
.team-card p { color: #5b6b80; font-size: 14px; line-height: 1.6; }

/* CTA */
.cta-band { background: linear-gradient(135deg, #00387a, #012b5f); margin-top: 80px; }
.cta-inner { display: flex; align-items: center; justify-content: space-between; padding: 56px 0; gap: 30px; flex-wrap: wrap; }
.cta-band h2 { color: #fff; font-size: 30px; margin-bottom: 8px; }
.cta-band p { color: #b9cce4; font-size: 16px; }

@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero h1 { font-size: 38px; }
  .value-grid, .team-grid { grid-template-columns: 1fr; }
  .explore-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .hero-stats { gap: 24px; }
  .hero-stats strong { font-size: 24px; }
}
</style>
