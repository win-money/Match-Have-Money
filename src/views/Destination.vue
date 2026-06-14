<template>
  <div class="page">
    <section class="page-hero">
      <div class="container">
        <span class="tag light">มารู้จักทีมงาน</span>
        <h1>รวมตัวกันและร่วมมือกันเพื่อสร้างอนาคตที่ดีกว่า</h1>
        <p>ทีมงานของเรามุ่งมั่นในการสร้างสรรค์นวัตกรรมและมุ่งมั่นที่จะนำเสนอโซลูชั่นที่ดีที่สุดให้กับลูกค้าของเรา</p>
        <router-link to="/contact" class="btn btn-light">หน้าต่อไป →</router-link>
      </div>
    </section>

    <!-- VALUES -->
    <section class="section">
      <div class="container">
        <div class="section-head center">
          <span class="tag">มืออาชีพ · ความร่วมมือ · นวัตกรรม</span>
          <h2>ค่านิยมหลักของเรา</h2>
        </div>
        <div class="pillars">
          <div class="pillar" v-for="p in pillars" :key="p.title">
            <div class="pillar-icon">{{ p.icon }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="section team-block">
      <div class="container">
        <div class="section-head center">
          <span class="tag">ทีมผู้เชี่ยวชาญ</span>
          <h2>ทำความรู้จักกับเรา</h2>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="m in team" :key="m.name">
            <div class="team-photo" :style="{ background: m.bg }">{{ m.initials }}</div>
            <h3>{{ m.name }}</h3>
            <p>{{ m.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEW -->
    <section class="section review">
      <div class="container">
        <div class="section-head center">
          <span class="tag">รีวิวลูกค้า</span>
          <h2>เสียงจากลูกค้าของเรา</h2>
        </div>
        <blockquote class="review-card">
          <div class="stars">★★★★★</div>
          <p>"บริษัท มัช แฮฟ มันนี่ จำกัด ให้บริการโซลูชั่นทางการเงินที่ออกแบบโดยเฉพาะแก่ฉัน และฉันรู้สึกประทับใจในบริการระดับมืออาชีพและจิตวิญญาณแห่งนวัตกรรมของพวกเขา"</p>
          <footer>
            <div class="reviewer-avatar">S</div>
            <div>
              <strong>Somchai Srisawat</strong>
              <small>Product Manager, Qnet</small>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>

    <!-- NEWS -->
    <section class="section news">
      <div class="container">
        <div class="section-head">
          <span class="tag">ข่าว</span>
          <h2>ข่าวสารและความเคลื่อนไหว</h2>
        </div>
        <div class="news-grid">
          <article class="news-card" v-for="n in news" :key="n.title">
            <div class="news-thumb" :style="{ background: n.bg }"></div>
            <div class="news-body">
              <span class="news-date">{{ n.date }}</span>
              <h3>{{ n.title }}</h3>
              <a href="#" class="news-link">อ่านต่อ →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const pillars = [
  { icon: '💡', title: 'นวัตกรรม', text: 'มุ่งมั่นสร้างสรรค์โซลูชั่นทางการเงินใหม่ ๆ ที่ตอบโจทย์อนาคต' },
  { icon: '🤝', title: 'ความสามัคคี', text: 'ทำงานร่วมกันเป็นทีมเพื่อเป้าหมายเดียวกันคือความสำเร็จของลูกค้า' },
  { icon: '⚡', title: 'ประสิทธิภาพ', text: 'ส่งมอบบริการที่รวดเร็ว แม่นยำ และมีมูลค่าสูงอย่างต่อเนื่อง' }
]

const team = [
  { name: 'Elara Penrose', role: 'หัวหน้านักวิเคราะห์การเงินระหว่างประเทศ', initials: 'EP', bg: 'linear-gradient(135deg,#00387a,#2b6cb0)' },
  { name: 'Seraphina Voss', role: 'นักวิชาการการเงินดีเด่นแห่งเอเชีย', initials: 'SV', bg: 'linear-gradient(135deg,#012b5f,#1a4a8a)' },
  { name: 'Thorne Radcliffe', role: 'ผู้เชี่ยวชาญด้านการแยกหุ้นและการเงินของประเทศไทย', initials: 'TR', bg: 'linear-gradient(135deg,#f26621,#c9450f)' }
]

const news = [
  { date: '2024', title: 'MUCH HAVE MONEY ส่งเสริมเทคโนโลยีทางการเงิน', bg: 'linear-gradient(135deg,#00387a,#2b6cb0)' },
  { date: '2024', title: 'บรรลุความร่วมมือเชิงกลยุทธ์ใหม่แล้ว', bg: 'linear-gradient(135deg,#1a4a8a,#012b5f)' },
  { date: '2024', title: 'ผลตอบแทนที่ประสบความสำเร็จจากโครงการลงทุน', bg: 'linear-gradient(135deg,#f58a4d,#f26621)' }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #00387a, #012b5f);
  color: #fff; padding: 90px 0 80px; text-align: center;
}
.page-hero h1 { font-size: 40px; font-weight: 800; margin: 16px 0; max-width: 820px; margin-left: auto; margin-right: auto; line-height: 1.25; }
.page-hero p { max-width: 680px; margin: 0 auto 28px; color: #c3d4ea; font-size: 16px; line-height: 1.8; }
.tag.light { color: #f3a06e; }

.pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.pillar { text-align: center; padding: 36px 28px; border-radius: 16px; background: #f8fbff; border: 1px solid #eef2f7; transition: 0.25s; }
.pillar:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0, 56, 122, 0.10); }
.pillar-icon { width: 64px; height: 64px; margin: 0 auto 20px; border-radius: 16px; background: #fff; display: grid; place-items: center; font-size: 28px; box-shadow: 0 6px 16px rgba(0,56,122,0.08); }
.pillar h3 { color: #012b5f; font-size: 20px; margin-bottom: 10px; }
.pillar p { color: #5b6b80; font-size: 14px; line-height: 1.7; }

.team-block { background: #f8fbff; }
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.team-card { text-align: center; background: #fff; border: 1px solid #eef2f7; border-radius: 16px; padding: 36px 24px; transition: 0.25s; }
.team-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0, 56, 122, 0.12); }
.team-photo { width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 20px; display: grid; place-items: center; color: #fff; font-size: 32px; font-weight: 800; }
.team-card h3 { color: #012b5f; font-size: 19px; margin-bottom: 8px; }
.team-card p { color: #5b6b80; font-size: 14px; line-height: 1.6; }

.review-card {
  max-width: 760px; margin: 0 auto; background: #fff; border: 1px solid #eef2f7;
  border-radius: 20px; padding: 44px; text-align: center; box-shadow: 0 14px 40px rgba(0, 56, 122, 0.08);
}
.stars { color: #f5a623; font-size: 22px; letter-spacing: 3px; margin-bottom: 20px; }
.review-card p { font-size: 20px; line-height: 1.7; color: #2d3a4d; margin-bottom: 28px; font-weight: 500; }
.review-card footer { display: flex; align-items: center; justify-content: center; gap: 14px; }
.reviewer-avatar { width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg,#00387a,#2b6cb0); color: #fff; display: grid; place-items: center; font-weight: 800; font-size: 20px; }
.review-card footer strong { display: block; color: #012b5f; }
.review-card footer small { color: #737373; }

.news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.news-card { background: #fff; border: 1px solid #eef2f7; border-radius: 16px; overflow: hidden; transition: 0.25s; }
.news-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0, 56, 122, 0.12); }
.news-thumb { height: 170px; }
.news-body { padding: 24px; }
.news-date { font-size: 13px; color: #f26621; font-weight: 600; }
.news-body h3 { color: #012b5f; font-size: 18px; margin: 10px 0 16px; line-height: 1.5; }
.news-link { color: #00387a; font-weight: 600; text-decoration: none; font-size: 14px; }
.news-link:hover { text-decoration: underline; }

@media (max-width: 960px) {
  .pillars, .team-grid, .news-grid { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 30px; }
  .review-card { padding: 30px 22px; }
  .review-card p { font-size: 17px; }
}
</style>
