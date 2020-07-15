<template>
	<div id="Platform" ref="root" style="background-image: url(https://img.ejiayou.com/uploadPic/Image/2019/07/1562731414953.jpg);">
		<div class="float_plane" ref="float">
			<div class="place">
				<div class="place-img">
				
					<img width="40" height="40" src="https://img.ejiayou.com/uploadPic/Image/2019/07/1562731414953.jpg" alt="">
				</div>
				
				<div>
					<div class="tit">加德士惠州平山加油站</div>
					<div style="font-size: 12px;">惠东县惠东大道936号</div>
				</div>
			</div>	
			
			<div class="contents">
				<div class="ct">
					<div class="im">大家评论</div>
					<div>n人评论</div>
				</div>
				
				<div class="cm_col" v-for="v in 20" :key="v" >
					<div class="commit">
						<img width="30" height="30" src="http://img.ejiayou.com/activity/pages/platform/soulList/img/header_default.png?v=1" alt="">
						<div class="com_con">
							<div class="com_date">
								2020-4-20
							</div>
							<div class="com_data">
								油非常不错
							</div>
							
							<div class="reply">
								<img  src="http://img.ejiayou.com/activity/pages/platform/soulList/img/evaluate_bg_icon.png" alt="">
								<div class="reply_con">
									<span>小易回复:</span>
									<span>谢谢您的支持，欢迎您继续使用易加油哦。祝一切顺利～</span>
								</div>
							</div>
							
							<div class="hr"></div>
						</div>
					</div>
				</div>
				
				<div class="cm_more">
					查看更改评论
				</div>
				
			</div>
		</div>
		
		
		<div class="sm">
			<img src="https://fx.hongtaimingsheng.com/Public/Xmzc/img/oneoil.gif">
		</div>
	</div>
</template>

<script>
	export default {
		name:"Platform",
		data(){
			return {
				
			}
		},
		mounted(){
			let pos =  {};
			this.$refs.root.ontouchstart = function(e){
				pos.beforeY = e.changedTouches[0].clientY;
			}
			
			this.$refs.root.ontouchmove = function(e){
				pos.afterY = e.changedTouches[0].clientY;
				let abs = pos.afterY - pos.beforeY;
				if(abs>0&&this.scrollTop == 0){
					
				}
				
			}
			this.$refs.root.ontouchend = function(){
				
			}
		}	
	}
</script>

<style scoped="scoped">
	.cm_more{
		height: 38px;
		background-color: #fff;
		text-align: center;
		line-height: 38px;
		margin-bottom: 70px;
	}
	.reply_con{
		background-color: #F5F5F5;
		color:#666666;
		padding: 10px;
	}
	.reply{
		position: relative;
	}
	.reply>img{
		top:-6px;
		position: absolute;
		left: 8px;
	}
	.commit{
		display: flex;
		justify-content: space-evenly;
	}
	.commit>img{
		margin: 0 10px 0 0;
	}
	.com_con{
		width: 290px;
	}
	.cm_col{
		padding: 10px;
	}
	.com_date{
		margin-bottom: 8px;
	}
	.com_data{
		margin-bottom: 14px;
	}
	.hr{
		height: 1px;
		background-color: rgb(239, 239, 239);
		margin-bottom: 12px;
	}
	
	
	#Platform{
		height: 100vh;
		width: 100vw;
		position: absolute;
		background: #efefef;
		overflow: scroll;
		z-index: 999999;
		background-repeat: no-repeat;
		background-size: 100% 120px;
		
	}
	.float_plane{
		margin: 20px auto;
		width: 100vw;	
	}
	
	.contents{
		background: #fff;
		margin-top: 10px;
	}
	.ct{
		padding: 8px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #efefef;
		margin: 0 0 10px 0;
	}
	
	.im{
		font-size: 16px;
		font-weight: bolder;
		color: #000000;
	}
	
	.place{
		width: 90%;
		background-color: #fff;
		margin: 0 auto;
		border-radius: 10px;
		padding: 15px 10px 5px 10px;
		display: flex;
		height: 75px;
	}
	.sm{
		
	}
	.sm>img{
		width: 100%;
		bottom: 0;
		position: fixed;
	}
	.place-img{
		overflow: hidden;
		width: 40px;
		height: 40px;
		border-radius: 5px;
		margin: 0 5px 0 5px;
	}
	.tit{
		color: rgb(51, 51, 51);
		font-size: 16px;
		font-weight: bold;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-family: "黑体";
		margin-bottom: 10px;
	}
</style>
