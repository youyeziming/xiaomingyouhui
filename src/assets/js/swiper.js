/**
 * @author YYZiMig
 * @description swiper component 
 * @param el {Element}
 * @param offset {Number}
 * @param cbl {Function}
 * @param cbr {Function}  
 */

class swiper
{
	constructor(el,offset,cbl,cbr)
	{
		this.cbl = cbl;
		this.cbr = cbr;
		this.offset = offset;
		this.el = el;
		
		this.startHandle = (e)=>{
			this.beforeX = e.changedTouches[0].clientX;
			this.time = Date.now();
		}
		this.endHandle = (e) =>{
			this.afterX = e.changedTouches[0].clientX;
			if(Date.now() - this.time > 150 ){
				return ;
			}
			this.listener(this.offset,this.cbl,this.cbr)
		}
		this.el.addEventListener("touchstart",this.startHandle)
		this.el.addEventListener("touchend",this.endHandle)
	}
	Distroy()
	{
		this.el.removeEventListener("touchstart",this.startHandle);
		this.el.removeEventListener("touchend",this.endHandle);
	}

	
	listener(offset,cbl,cbr)
	{
		if(this.beforeX - this.afterX > offset){
			cbr();
		}else if(this.beforeX - this.afterX < -offset){
			cbl();
		}
	}
	
}

export default swiper;