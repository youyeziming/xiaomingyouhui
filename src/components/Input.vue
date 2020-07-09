<template>
	<div class="input">
		<span>{{label}}</span>
		<input :type="type" @change="change" :placeholder="description" ref="input" :value="mes">
	</div>
</template>

<script>
	export default {
		name:"Input",
		props:{
			label:{
				type:String,
				required:true
			},
			description:{
				type:String,
				default:""
			},
			mes:{
				type:String
			},
			type:{
				type:String,
				default:"text"
			}
		},
		model:{
			prop:"mes",
			event:"changed"
		},
		methods:{
			change(){
				this.$emit("changed",this.$refs.input.value);
			}
		}
	}
</script>

<style scoped="scoped">
	.input{
		padding: 15px 0;
		
	}
	.input>span{
		width: 25%;
		display: inline-block;
		text-align: center;
	}
	input{
		width: 75%;
		border:none;
		padding: 0;
	}
	input:focus{
		outline: none;
	}
</style>
