<template>
	<div class='notify'>
		{{msg}}
		<van-loading color="#14c1bb" />
	</div>
</template>

<script>
	export default{
		name:'notify',
		data(){
			return{
				title:'notify提示组件',
				msg:'推荐职位已经更新'
			}
		},
		created(){}
	}
</script>

<style scoped>
.notify{
	width: 100%;height: .5rem;background: #14c1bb;text-align: center;line-height: .5rem;
	color: #fff;font-size: .21rem;
	animation:notify_show .5s;
	animation-delay:1.5s;
	animation-fill-mode:forwards;
}

@keyframes notify_show{
	from {height: .5rem;}
	to {height: 0;}
}
</style>