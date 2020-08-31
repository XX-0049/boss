<template>
  <div style="height:100%;">
    <van-nav-bar :title="title_name">
      <van-icon @click="closeFilterWrap" size=".4rem" name="cross" slot="left" />
    </van-nav-bar>

    <div class="gridTitle">学历要求</div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="全部" />
      <van-grid-item @click="itemBtnClick($event)" text="初中" />
      <van-grid-item @click="itemBtnClick($event)" text="高中" />
      <van-grid-item @click="itemBtnClick($event)" text="大学" />
    </van-grid>

    <div class="gridTitle">
      薪资待遇
      <label>(单选)</label>
    </div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="8K" />
      <van-grid-item @click="itemBtnClick($event)" text="10K" />
      <van-grid-item @click="itemBtnClick($event)" text="15K" />
      <van-grid-item @click="itemBtnClick($event)" text="20K" />
      <van-grid-item @click="itemBtnClick($event)" text="20K+" />
    </van-grid>

    <div class="gridTitle">经验要求</div>
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item @click="itemBtnClick($event)" text="应届" />
      <van-grid-item @click="itemBtnClick($event)" text="三年" />
      <van-grid-item @click="itemBtnClick($event)" text="五年" />
    </van-grid>

    <div class="filter_footer">
      <van-button @click="resetOptionBtn" class="clearBtn" color="#eee" type="default">清除</van-button>
      <van-button @click="confirmBtnFn" style="width:3rem;" color="#14c1bb">确定</van-button>
    </div>
  </div>
</template>

<script>
// 重置一些 vant 的样式
import "../assets/reset_vant.css";

export default {
  name: "filterWrapObj",
  data() {
    return {
      title_name: "筛选组件",
      isBtn_touchClass: false,
      switchClass: "",
      optionArr: [],
      filter_result: [],
    };
  },
  created() {},
  methods: {
    closeFilterWrap() {
      this.$emit("closeFilterWrap");
    },
    // 按钮状态切换
    itemBtnClick($e) {
      // 切换 class
      // console.log( $e.target.innerText)
      let _txt = $e.target.innerText;
      let _cls = $e.target.getAttribute("class");
      let _clsArr = _cls.split(" "); // 字符串转数组
      let _is = false; //没有添加class

      // console.log( _clsArr )

      //判断当前 按钮有没有“选中的css样式”
      for (let i = 0; i < _clsArr.length; i++) {
        //找到了选中状态的css就把它删除，切换为未选中
        if (_clsArr[i] == "van_grid_item_focus") {
          //.splice(index,howmany)
          //index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
          // howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目
          _clsArr.splice(i, 1);
          _is = true;
          break;
        }
        _is = false;
      }

      // if( !_is ) {
      // 		// 没找着，就要添加class：van_grid_item_focus，定义在reset_vant.css里
      // 		_clsArr.push('van_grid_item_focus');
      // 	}

      // 没找着就要添加class：van_grid_item_focus，定义在reset_vant.css里
      if (_is) {
        for (let i = 0; i < this.filter_result.length; i++) {
          if (this.filter_result[i] == _txt) {
            this.this.filter_result.splice(i, 1);
          }
        }
      } else {
        // 没找着就要添加class：van_grid_item_focus，定义在reset_vant.css里
        _clsArr.push("van_grid_item_focus");
        //把筛选条件保存到数组
        this.filter_result.push(_txt);
      }

      // console.log( _clsArr )
      // 再把_clsArr转换为String class名写回class属性里
      let _cls_txt = _clsArr.join(" ");
      $e.target.setAttribute("class", _cls_txt);
    },

    // 确认按钮
    confirmBtnFn() {

      //筛选的结果，要向后端提交
      console.log(this.filter_result)
    },
    // 清除按钮
    resetOptionBtn() {
      this.optionArr = [];
      let _grid = document.querySelectorAll(".van-grid");
      for (let i = 0; i < _grid.length; i++) {
        for (let j = 0; j < _grid[i].children.length; j++) {
          let _cls = _grid[i].children[j].children[0].getAttribute("class");
          if (_cls.indexOf("van_grid_item_focus") !== -1) {
            // 这里获得、删除、写回class的js操作太复杂，咱们就直接把class属性写回就可以了
            _grid[i].children[j].children[0].setAttribute(
              "class",
              "van-grid-item__content van-grid-item__content--center van-grid-item__content--surround van-hairline"
            );
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.gridTitle {
  padding: 0.2rem 0.2rem;
  clear: both;
  font-size: 0.3rem;
  font-weight: bold;
}
.gridTitle label {
  font-weight: normal;
  font-size: 0.2rem;
  padding: 0 10px;
}
.filter_footer {
  text-align: center;
  margin-top: 1rem;
  width: 100%;
}
</style>