<template>
	<div>
		<van-nav-bar  right-text="切换城市">
			<van-icon @click='closeCityMaskFn' size=".4rem" name="cross" slot="left" />
		</van-nav-bar>

		<div class='citySwitch'>
			<van-area 
				:area-list="areaList" 
				:visible-item-count=8
				value='210000'
				@cancel="closeCityMaskFn"
				@change="changeItemFn"
				@confirm="selectAreaBtn"
				:title="title_name" />
		</div>
	</div>
</template>

<script>
import area from '../assets/area'

export default{
	name:'selectArea',
	data(){
		return{
			msg:'选择城区组件',
			areaList:area,
			title_name:'请选择',
			only_name:''
		}
	},
	created(){},
	methods:{
		closeCityMaskFn(){
			// console.log(this.only_name)
			// 如果没有改变城市，就把之前选择的城市，回传
			this.$emit( 'closeCityMaskFn', this.only_name );
		},
		// 改变选项时触发
		changeItemFn(d){
			// console.log(d.getValues())
			let _data = d.getValues();
			this.title_name = _data[0].name+'-'+_data[1].name+'-'+_data[2].name;
			// 将城市名，单独保存。在不改变城市名时，回传
			this.only_name = _data[1].name;
		},
		selectAreaBtn(d){
			this.$emit( 'closeCityMaskFn', d[1].name);
		}
	}
}
</script>

<style scoped>

</style>