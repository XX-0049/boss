<template>
	<div>
		<!-- 下拉 刷新 -->
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class='jobsWrap'>
			<div class='jobItems' v-for="(n, inx) in itemObj" :key=inx>
				<h1> {{n.title}} </h1>
				<p> {{n.h2_txt}} </p>
				<ul class='areaUl'>
					<li v-for="(n, inx) in n.area"> {{n}} </li>
				</ul>
				 <label> {{ n.hr.hr_txt }} </label>
				<span> {{n.salary}} </span> 
			</div>
		</div>
		</van-pull-refresh>
	</div>
</template>

<script>
	export default{
		name:'job_item',
		data(){
			return{
				msg:'具体某项职位',
				isLoading: false
			}
		},
		props:['itemObj'],
		created(){},
		methods:{
			onRefresh() {
				setTimeout(() => {
					this.$toast('刷新成功');
					this.isLoading = false;
				}, 500);
			}
		}
	}
</script>

<style scoped>
.jobItems{
	padding: .3rem 0;border-bottom: .1rem solid #eaeaea;position: relative;
}
ul.areaUl{height: .3rem;margin: 0 0 .2rem .2rem;}
ul.areaUl li{float: left;margin-right: .1rem;
background: #f2f3f5;padding:.02rem .07rem;color: #666;}

.jobItems h1{font-size: .25rem;font-weight: bold;margin:0 0 .1rem .2rem;}
.jobItems p{font-size: .2rem;color: #666;margin:0 0 .1rem .2rem;}
.jobItems label{font-size: .2rem;color: #666;margin:0 0 .1rem .2rem;}
.jobItems span{font-size: .25rem;color: #14c1bb;position: absolute;top: .3rem;right: .3rem;}
</style>