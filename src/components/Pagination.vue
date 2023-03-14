<template>
  <div class="pagination">
    <ul>
      <li class="left-btn" @click="onPrev">&lt;</li>
      <li
        v-for="item in pageList"
         :key="item"
         :class="{
          active: item === page
         }"
         @click="() => {
          if (item !== '...') {
            onChange(item)
          }
         }"
        >{{ item }}</li>
      <li class="right-btn" @click="onNext">&gt;</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import generatePagination from '@/common/generatePagination';

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
      if (props.page < Math.ceil(props.total / props.pageSize)) {
        context.emit('change', props.page + 1);
      }
    };

    const onChange = (val) => {
      context.emit('change', val);
    };

    // console.log(props.total, props.pageSize)
    // console.log({
    //   showPageCount: 10,
    //   currentPage: props.page,
    //   pageCount: Math.ceil(props.total / props.pageSize),
    // });
    const pageList = generatePagination({
      showPageCount: 10,
      currentPage: props.page,
      pageCount: Math.ceil(props.total / props.pageSize) || 1,
    });

    return {
      onPrev,
      onNext,
      onChange,
      pageList,
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
