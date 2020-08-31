<template>
  <div class="jobState">
    <van-nav-bar @click-left="closeMaskFn" left-arrow />

    <h1 class="titleSty">管理求职意向</h1>

    <!-- 切换求职状态按钮 -->
    <van-nav-bar left-text="求职状态" :right-text="jobStateObj" @click-right="openJobStateFn" />
    <!-- 求职状态列表 -->
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" title="求职状态" />

    <van-divider />


    <div class="jobState_footer">
      <van-button @click="confirmJobStateBtnFn" style="width:3rem;" color="#14c1bb">添加期望</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "jobState",
  data() {
    return {
      msg: "管理求职意向",
      show: false,
      actions: [
        {
          name: "离职-随时到岗",
          is_state: 0,
        },
        {
          name: "在职-月内到岗",
          is_state: 1,
        },
        {
          name: "在职-考虑机会",
          is_state: 2,
        },
        {
          name: "在职-暂不考虑",
          is_state: 3,
        },
      ],
      jobStateObj: "请选择>>",
    };
  },
  created() {},
  methods: {
    closeMaskFn() {
      this.$emit("closeJobStateFn");
    },
    openJobStateFn() {
      this.show = true;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
	  console.log(item.name);
	  Toast('成功添加'+item.name);
      this.jobStateObj = item.name + ">>";
    },
    // 添加求职期望
    addJobStateFn() {
		Toast('成功添加'+item.name);
      console.log("添加求职期望xxx");
    },
    // 确认求职期望
    confirmJobStateBtnFn() {
      console.log("确认求职期望 xxx");
    },
  },
};
</script>

<style scoped>
.titleSty {
  font-size: 0.3rem;
  font-weight: bold;
  margin-left: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.div_p {
  font-size: 0.1rem;
  color: #969696;
  margin-left: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jobState {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jobState_footer {
  text-align: center;
  margin: 2rem 0;
}
</style>