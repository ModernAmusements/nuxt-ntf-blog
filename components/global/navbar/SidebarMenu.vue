<template>
  <!-- SibebarMenuComp -->
  <!-- Check if SB is opened = has class open ->> add cssVars -->
  <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
    <!-- MA Logo inside Sidebar -->
    <div class="logo-details">
      <Logo class="menu-logo icon" />
      <!-- change menu icon if is opened -->
      <i class="bx" :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'" id="btn" @click="isOpened = !isOpened" />
    </div>
    <!-- Menu Content -->
    <div
      style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px); ">
      <div id="my-scroll">
        <!-- Menu Content -->
        <ul class="nav-list" style="overflow: visible;">
          <!-- Items -->
          <span v-for="(menuItem, index) in menuItems" :key="index">
            <li>
              <nuxt-link :to="menuItem.link">
                <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                <!-- Link Name -->
                <span class="links_name">{{ menuItem.name }}</span>
              </nuxt-link>
              <!-- tool -->
              <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
            </li>
          </span>
        </ul>
      </div>
    </div>
    <div class="info text-sm" :class="isOpened ? 'justify-end pl-5' : 'justify-center'">
      <p>Shady Tawfik 2022©</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    //! Menu settings
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
    // move body
    isPaddingLeft: {
      type: Boolean,
      default: false,
    },
    menuOpenedPaddingLeftBody: {
      type: String,
      default: '250px'
    },
    menuClosedPaddingLeftBody: {
      type: String,
      default: '50px'
    },
    //! Menu items
    menuItems: {
      type: Array,
      default: () => [
        {
          link: '/',
          name: 'Home',
          tooltip: 'Home',
          icon: 'bx-home',
        },
        {
          link: '/blog',
          name: 'Blog',
          tooltip: 'Blog',
          icon: 'bx-edit',
        },
        {
          link: '/projects',
          name: 'Projects',
          tooltip: 'Projects',
          icon: 'bx-code',
        },
        {
          link: '#',
          name: 'About',
          tooltip: 'Abput',
          icon: 'bx-user',
        },
        {
          link: '#',
          name: 'Component',
          tooltip: 'Files',
          icon: 'bxs-component',
        },
      ],
    },

  },
  data() {
    return {
      isOpened: false
    }
  },
  mounted() {
    this.isOpened = this.isMenuOpen
  },
  computed: {
    cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,
        '--icons-color': this.iconsColor,
        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,
        '--menu-footer-text-color': this.menuFooterTextColor,
      }
    },
  },
  watch: {
    isOpened() {
      window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
    }
  }
}
</script>

<style lang="postcss">
.menu-logo {
  width: 30px;
  margin: 0 10px 0 10px;
}

.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  min-height: min-content;
  /* overflow-y: auto; */
  width: 50px;
  background-color: var(--bg-transparent);
  backdrop-filter: blur(12px);
  /* padding: 6px 14px 0 14px; */
  z-index: 99;
  transition: all 0.5s ease;
  border-right: 1px solid var(--color-gray-400);
}

.sidebar.open {
  width: 235px;
}

.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}

.sidebar .logo-details .icon {
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar .logo-details .logo_name {
  color: var(--logo-title-color);
  font-size: 12px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}

.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.open .logo-details #btn {
  text-align: right;
}

.sidebar i {
  color: var(--icons-color);
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}

.sidebar .nav-list {
  margin-top: 20px;
  /* margin-bottom: 60px; */
  /* height: 100%; */
  /* min-height: min-content; */
}

.sidebar li {
  position: relative;
  list-style: none;
  margin: 8px 10px 0 10px;
}

.sidebar li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  color: var(--text);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 0.25rem;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}

.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}

.sidebar.open li .tooltip {
  display: none;
}



.sidebar li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}

.sidebar li a:hover {
  @apply border-primary-300 bg-primary-800 text-white;
  border-radius: 0.25rem;
}


.sidebar li a .links_name {
  color: var(--text);
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}

.sidebar.open li a .links_name {
  opacity: 1;
  pointer-events: auto;
}

.sidebar li a:hover .links_name,
.sidebar li a:hover i {
  transition: all 0.5s ease;
  color: var(--text);
}

.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 0.25rem;
  right: 10px;
  position: relative;
}

.my-scroll-active {
  overflow-y: auto;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  flex-grow: 1;
  padding-top: 1rem;
}

.sidebar.open~.info {
  align-items: flex-end;
}

#my-scroll {
  overflow-y: auto;
  height: calc(100% - 60px);
}

#my-scroll::-webkit-scrollbar {
  display: none;
}

@media (max-width: 420px) {
  .sidebar li .tooltip {
    display: none;
  }
}
</style>
