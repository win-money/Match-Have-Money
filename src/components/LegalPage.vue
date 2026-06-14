<template>
  <div class="page legal">
    <section class="page-hero">
      <div class="container">
        <span class="tag light">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p>อัปเดตล่าสุด: มกราคม 2024 · MUCH HAVE MONEY COMPANY LIMITED</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-body">
        <article>
          <section v-for="(s, i) in sections" :key="i" class="legal-section">
            <h2>{{ i + 1 }}. {{ s.heading }}</h2>
            <p v-for="(p, j) in s.paragraphs" :key="j">{{ p }}</p>
          </section>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: String,
  sections: { type: Array, default: () => [] }
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #00387a, #012b5f);
  color: #fff; padding: 80px 0 64px; text-align: center;
}
.page-hero h1 { font-size: 40px; font-weight: 800; margin: 16px 0 10px; }
.page-hero p { color: #b9cce4; font-size: 14px; }
.tag.light { color: #f3a06e; }

.legal-body { max-width: 860px; margin: 0 auto; }
.legal-section { margin-bottom: 38px; }
.legal-section h2 { color: #012b5f; font-size: 22px; margin-bottom: 14px; }
.legal-section p { color: #4a5568; font-size: 15px; line-height: 1.9; margin-bottom: 14px; }

@media (max-width: 600px) { .page-hero h1 { font-size: 30px; } }
</style>
