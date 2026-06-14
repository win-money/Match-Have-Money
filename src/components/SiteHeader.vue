<template>
  <header class="site-header" :class="{ scrolled: scrolled }">
    <div class="container header-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <img :src="logo" class="brand-mark" alt="MUCH HAVE MONEY logo" />
        <span class="brand-text">
          <strong>MUCH HAVE MONEY</strong>
          <small>บริษัท มัช แฮฟ มันนี่ จำกัด</small>
        </span>
      </router-link>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link to="/" @click="closeMenu">บริษัท</router-link>
        <router-link to="/destination" @click="closeMenu">ทีม</router-link>
        <router-link to="/categories" @click="closeMenu">ให้บริการ</router-link>
        <router-link to="/contact" @click="closeMenu">ติดต่อเรา</router-link>
        <router-link to="/conditions" @click="closeMenu">ข้อกำหนดและเงื่อนไข</router-link>
        <router-link to="/contact" class="nav-cta" @click="closeMenu">เริ่มต้นเลย →</router-link>
      </nav>

      <button class="menu-toggle" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/imgs/thai_logo.png'

const menuOpen = ref(false)
const scrolled = ref(false)

const closeMenu = () => { menuOpen.value = false }
const onScroll = () => { scrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(37, 43, 66, 0.07);
  transition: box-shadow 0.25s ease;
}
.site-header.scrolled {
  box-shadow: 0 6px 24px rgba(0, 56, 122, 0.08);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  object-fit: contain;
}
.brand-text { display: flex; flex-direction: column; line-height: 1.15; }
.brand-text strong { color: #012b5f; font-size: 17px; letter-spacing: 0.3px; }
.brand-text small { color: #737373; font-size: 11px; }

.nav { display: flex; align-items: center; gap: 28px; }
.nav a {
  color: #252b42;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s ease;
}
.nav a:hover, .nav a.router-link-exact-active { color: #f26621; }
.nav-cta {
  background: #00387a;
  color: #fff !important;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
}
.nav-cta:hover { background: #012b5f; }

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 6px;
}
.menu-toggle span {
  width: 24px; height: 2px; background: #012b5f; transition: 0.3s;
}
.menu-toggle.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 960px) {
  .menu-toggle { display: flex; }
  .nav {
    position: absolute;
    top: 76px; left: 0; right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: #fff;
    padding: 8px 24px 20px;
    box-shadow: 0 16px 30px rgba(0, 56, 122, 0.12);
    transform: translateY(-130%);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease;
  }
  .nav.open { transform: translateY(0); opacity: 1; pointer-events: auto; }
  .nav a { width: 100%; padding: 14px 0; border-bottom: 1px solid #f0f0f0; }
  .nav-cta { margin-top: 12px; text-align: center; }
}
</style>
