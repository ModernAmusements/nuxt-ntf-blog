<template>
  <div class="fixed toggle bottom-0 m-3 z-5000">
    <component :is="`icon-${color}`" @click="changeColorMode" @keypress.enter="changeColorMode"
      title="Toggle background color" tabindex="0" />
  </div>
</template>

<script>
import { COLOR_MODE_FALLBACK } from '~/utils/globals.js'
import IconSystem from '~/components/icons/system.svg?inline'
import IconLight from '~/components/icons/light.svg?inline'
import IconDark from '~/components/icons/dark.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark
  },
  data() {
    return {
      color: COLOR_MODE_FALLBACK
    }
  },
  watch: {
    '$colorMode.value': {
      immediate: true,
      handler(val) {
        if (!this.$colorMode.unknown) {
          this.color =
            this.$colorMode && this.$colorMode.preference != null && this.$colorMode.preference !== 'null'
              ? this.$colorMode.preference
              : COLOR_MODE_FALLBACK
        } else {
          this.color = COLOR_MODE_FALLBACK
        }
      }
    }
  },
  methods: {
    changeColorMode() {
      if (this.$colorMode.unknown) return (this.$colorMode.preference = COLOR_MODE_FALLBACK)

      switch (this.$colorMode.preference) {
        case 'light':
          return (this.$colorMode.preference = 'dark')
        case 'dark':
          return (this.$colorMode.preference = 'light')
        case 'system':
          return (this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark')

        default:
          return (this.$colorMode.preference = COLOR_MODE_FALLBACK)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.toggle {
  right: 4px;
}

.icon {
  width: 30px;
  height: 30px;
  background-color: var(--bg-secondary);
  border-color: var(--border-color);
  @apply relative m-0 p-1 top-0 cursor-pointer rounded border transition-all duration-200 ease-in-out;

  &:hover {
    transform: translateY(-1px);
    border-color: var(--border-color-secondary);
    @apply text-white;
  }

  &.selected {
    color: var(--color-primary);
  }
}

.z-5000 {
  z-index: 5000;
}

.light {
  & .icon {
    background-color: var(--bg-header);
    border-color: var(--border-color-secondary);
    color: var(--text);

    &:hover {
      border-color: var(--border-color);
      @apply text-primary-900 bg-primary-200;
    }
  }
}
</style>
