<template>
  <div>
    <!-- header -->
    <van-sticky>
      <van-nav-bar class="bar_sty" left-text="web前端">
        <van-icon @click="jobStateOpen" name="plus" slot="right" />
        <van-icon name="search" slot="right" />
      </van-nav-bar>

      <div class="title_menu">
        <van-button @click="notifyFnBtn" class="miniBtn" size="mini">推荐</van-button>
        <van-button @click="notifyFnBtn" class="miniBtn" size="mini">最新</van-button>

        <van-button @click="openFilterMaskFn" class="filterBtn" size="mini">筛选</van-button>

        <van-button @click="openMaskFn" class="filterBtn" size="mini">{{defaultCity}}</van-button>
      </div>

      <!-- notify提示组件 -->
      <notify v-show="notifyShow"></notify>
    </van-sticky>

	<!-- 管理求职意向 -->
		<div v-show='is_jobState'
			:class='jobStateClassName'
			@touchmove.prevent
			@mousewheel.prevent>
				<jobState @closeJobStateFn='jobStateClose'></jobState>
		</div>

    <!-- 职位列表 -->
    <job_item :itemObj="jobsData"></job_item>

    <!-- 城市操作 wrap -->
    <!-- @touchmove.prevent、@mousewheel.prevent，阻止mask拖动、滚动 -->
    <div v-show="is_cityMaskObj" :class="maskClassName" @touchmove.prevent @mousewheel.prevent>
      <selectArea @closeCityMaskFn="hideMaskFn($event)"></selectArea>
    </div>

    <!-- 筛选功能 -->
    <div v-show="is_filter" :class="filterClassName" @touchmove.prevent @mousewheel.prevent>
      <filterWrapObj @closeFilterWrap="closeFilterMask"></filterWrapObj>
    </div>

    <!-- footer_bar -->
    <footer_bar></footer_bar>
  </div>
</template>

<script>
import job_item from "./job_item";
import footer_bar from "./footer_bar";
import notify from "./notify";
import filterWrapObj from "./filterWrapObj";
import selectArea from "./selectArea";
import jobState from './jobState'

export default {
  name: "index_jobList",
  data() {
    return {
      msg: "职位列表",
      jobsData: [
        {
          title: "web前端",
          h2_txt: "什么祥 未融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "5-6K",
        },
        {
          title: "软件开发工程师",
          h2_txt: "牛万科技 未融资",
          area: ["沈阳 沈河区", "1-3年", "学历不限"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "3-8K",
        },
        {
          title: "前端工程师",
          h2_txt: "成林健康科技 未融资",
          area: ["沈阳 皇姑区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "马xx-从事招聘专员",
          },
          salary: "5-6K",
        },
        {
          title: "前端开发工程师",
          h2_txt: "师福教育 未融资",
          area: ["沈阳 沈河区", "3-5年", "学历不限"],
          hr: {
            img_avatar: "",
            hr_txt: "杨女士 - 人事",
          },
          salary: "5-8K",
        },
        {
          title: "前端工程师",
          h2_txt: "成林健康科技 未融资",
          area: ["沈阳 皇姑区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "马xx-从事招聘专员",
          },
          salary: "5-6K",
        },
        {
          title: "前端技术经理",
          h2_txt: "星擎科技 未融资",
          area: ["沈阳 铁西区", "5-10年", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "潘舒-CEO",
          },
          salary: "6-11K",
        },
        {
          title: "web前端",
          h2_txt: "什么祥 未融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "5-6K",
        },
      ],
      notifyShow: false,
      is_cityMaskObj: false,
      is_filter: false,
      // 用来查找选择城市的class
      maskClassName: "mask_city",
      // 用来查找筛选功能的class
      filterClassName: "mask_filter",
      defaultCity: "南通",
      // 求职状态
      is_jobState: false,
      // 查找求职意向的class
      jobStateClassName: "mask_animation",
    };
  },
  components:{footer_bar, job_item, notify, filterWrapObj, selectArea, jobState},
  
  methods: {
    // 打开求职意向
    jobStateOpen() {
      this.is_jobState = true;
      this.jobStateClassName = "mask_animation animation_open";

      let _rect = document.querySelector(".mask_animation");
      // console.log(_rect)
      _rect.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.is_jobState = true;
        },
        false
      );
    },
    // 关闭求职意向
    jobStateClose() {
      // this.is_jobState = false;
      this.jobStateClassName = "mask_animation animation_close";

      let _rect = document.querySelector(".mask_animation");
      // console.log(_rect)
      _rect.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.is_jobState = false;
        },
        false
      );
    },
    // 刷新提示
    notifyFnBtn() {
      this.notifyShow = true;
      //获取文档中class=notify的元素：
      let _rect = document.querySelector(".notify");
      // console.log('你好')
      console.log(_rect);
      //监听事件webkitAnimationEnd动画结束事件
      _rect.addEventListener("webkitAnimationEnd", () => {
        this.notifyShow = false;
      });
    },
    // 打开筛选
    openFilterMaskFn() {
      this.is_filter = true;
      this.filterClassName = "mask_filter filter_open";

      let _mask = document.querySelector(".mask_filter");
      _mask.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.is_filter = true;
        },
      );
    },

    // 关闭筛选
    closeFilterMask() {
      this.filterClassName = "mask_filter filter_close";
      // css3动画运行结束之后，
      let _mask = document.querySelector(".mask_filter");
      // console.log(_rect)
      _mask.addEventListener(
        "webkitAnimationEnd",
        () => {
          this.is_filter = false;
        },
      );
    },
    // // 城市切换打开，先切为true，再等css3动画结束之后重置为true
    // // 否则，将响应 hideMaskFn 函数的css3事件监听
    openMaskFn() {
      this.is_cityMaskObj = true;
      this.maskClassName = "mask_city cityEditWrapObj_open";

      // css3动画运行结束之后，
      // console.log(_rect)
      let _a = document.querySelector(".mask_city");
      _a.addEventListener("webkitAnimationEnd", () => {
        this.is_cityMaskObj = true;
      });
    },
    // 关闭城市切换mask
    hideMaskFn(_cityName) {
      this.defaultCity = _cityName;
      this.maskClassName = "mask_city cityEditWrapObj_close";

      // css3动画运行结束之后，再隐藏城市选择面板
      let _rect = document.querySelector(".mask_city");
      // console.log(_rect)
      _rect.addEventListener("webkitAnimationEnd", () => {
        this.is_cityMaskObj = false;
      });
    },
  },
};
</script>

<style scoped>
.bar_sty {
  background: #14c1bb;
}
.van-icon-plus:before {
  color: #fff;
  font-size: 0.4rem;
  margin-right: 0.1rem;
  border-right: 1px solid #c1c1c1;
  padding-right: 0.1rem;
}
.van-icon-search:before {
  color: #fff;
  font-size: 0.4rem;
}
.van-nav-bar__text {
  font-size: 0.35rem;
  color: #fff;
}
.miniBtn {
  border: 0;
  margin: 0.1rem 0 0 0;
}
.filterBtn {
  float: right;
  border: 0;
  margin: 0.1rem 0.1rem 0 0;
  background-color: #f2f3f5;
  background-image: url("../assets/button_icon.png");
  background-repeat: no-repeat;
  background-position: 44px 15px;
  background-size: 4px;
}
.title_menu {
  background: #fff;
}

.cityEditWrapObj_open {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: openWrapObjAnimation_open 0.7s;
}
.cityEditWrapObj_close {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: closeWrapObjAnimation_close 0.7s;
}

.filter_open {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: openWrapObjAnimation_open 0.7s;
}
.filter_close {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
  animation: closeWrapObjAnimation_close 0.7s;
}
@keyframes openWrapObjAnimation_open {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}
@keyframes closeWrapObjAnimation_close {
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
}

.mask_animation {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3333;
}
.animation_open {
  animation: open_Animation 0.7s;
}
.animation_close {
  animation: close_Animation 0.7s;
}

@keyframes open_Animation {
  from {
    width: 0;
    left: 100%;
  }
  to {
    width: 100%;
    left: 0;
  }
}
@keyframes close_Animation {
  from {
    width: 100%;
    left: 0;
  }
  to {
    width: 0;
    left: 100%;
  }
}
</style>