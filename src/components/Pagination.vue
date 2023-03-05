<template>
  <div class="pagination">
    <ul>
      <li class="left-btn" @click="onPrev">&lt;</li>
      <li
        v-for="item in total"
         :key="item"
         :class="{
          active: item === page
         }"
         @click="onChange(item)"
        >{{ item }}</li>
      <li class="right-btn" @click="onNext">&gt;</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({

  props: {
    page: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 10,
    },
  },

  setup(props, context) {
    const onPrev = () => {
      if (props.page > 1) {
        context.emit('change', props.page - 1);
      }
    };

    const onNext = () => {
      if (props.page < props.total) {
        context.emit('change', props.page + 1);
      }
    };

    const onChange = (val) => {
      context.emit('change', val);
    };

    return {
      onPrev,
      onNext,
      onChange,
      // page: props.page,
      // total: props.total,
    };
  },
});
</script>

<style lang="scss" scoped>

.pagination {
  margin-top: 24px;
  justify-content: end;
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    padding: 0;
    // float: right;
    & .left-btn,
    & .right-btn {
      width: 32px;
      height: 32px;
      border-radius: 3px;
      border: 1px solid #CCCCCC;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    & li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: 12px;
      margin-right: 12px;
      width: 24px;
      height: 24px;
      border-radius: 3px;
      cursor: pointer;
      &.active {
        background: #FFB600;
        font-weight: bold;
      }
    }
  }
}
</style>
