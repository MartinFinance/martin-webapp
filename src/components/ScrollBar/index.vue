<template>
  <el-scrollbar
    ref="scrollBar"
    class="custom-scroll-bar"
    :class="[`overscroll-behavior-${overscrollBehavior}`,{
      'flex-layout': flexLayout
    }]"
    :wrap-style="wrapStyle"
    :view-style="viewStyle"
    :wrap-class="wrapClass"
    :view-class="viewClass"
  >
    <slot />
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export type ScrollBehavior = 'auto' | 'contain' | 'none';

@Component({})
export default class ScrollBar extends Vue {
  @Prop({ type: String, default: '' })
  private wrapStyle?: string;

  @Prop({ type: String, default: '' })
  private wrapClass?: string;

  @Prop({ type: String, default: '' })
  private viewClass?: string;

  @Prop({ type: String, default: '' })
  private viewStyle?: string;

  @Prop({ type: Boolean, default: false })
  private flexLayout?: boolean;

  @Prop({ type: String, default: 'auto' })
  private overscrollBehavior?: ScrollBehavior;

  mounted() {
    const scrollEl = (this.$refs.scrollBar as any).wrap;
    scrollEl.onscroll = () => {
      this.$emit('scroll', scrollEl.scrollTop);
    };
  }

  getScrollEl() {
    return (this.$refs.scrollBar as any).wrap;
  }
}
</script>

<style lang="scss" scoped>

.custom-scroll-bar {
  &.flex-layout {
    display: flex;
    flex-direction: column;

    /deep/ .el-scrollbar__wrap {
      flex: 1;
    }
  }
  // el-scrollbar__wrap--hidden-default 无法使用，强制默认隐藏滚动条.
  /deep/ .el-scrollbar__wrap {
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    overflow: auto;

    @include hideScrollBar();
  }
}

.overscroll-behavior-contain {
  /deep/ .el-scrollbar__wrap {
    overscroll-behavior: contain;
    -ms-scroll-chaining: none;
  }
}

.overscroll-behavior-none {
  /deep/ .el-scrollbar__wrap {
    overscroll-behavior: none;
    -ms-scroll-chaining: none;
  }
}
</style>
