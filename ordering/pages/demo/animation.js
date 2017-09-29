Page({
	data: {
		animationData: {},
		start:{
			x: 0,
			y: 0
		}
		
	},
	onShow: function () {
		
	},
	rotateAndScale: function () {
		// 旋转同时放大
		this.animation.rotate(45).scale(2, 2).step()
		this.setData({
			animationData: this.animation.export()
		})
	},
	rotateThenScale: function () {
		// 先旋转后放大
		this.animation.rotate(45).step()
		this.animation.scale(2, 2).step()
		this.setData({
			animationData: this.animation.export()
		})
	},
	rotateAndScaleThenTranslate: function () {
		// 先旋转同时放大，然后平移
		this.animation.rotate(45).scale(2, 2).step()
		this.animation.translate(100, 100).step({ duration: 1000 })
		this.setData({
			animationData: this.animation.export()
		})
	},
	doAnimation(e){
		let self=this;
		console.log(e);
		this.setData({start:{
			x:e.detail.x,
			y:e.detail.y
		}})
		var animation = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease',
		})

		this.animation = animation

		// animation.scale(0, 0).step()

		// this.setData({
		// 	animationData: animation.export()
		// })
		var x, y, a, t;
		x = 0.2;
		y = -0.2;
		a = 0.0098;
		t = 10;
		var Vx = parseFloat(x),
			Vy = parseFloat(y),
			g = a,
			t = parseInt(t),
			h = 0, l = 0, Sx = e.detail.x, Sy = e.detail.y;
		let i=setInterval(function () {
			// animation.step()
			Sx += Vx * t;
			// console.log('--'+t);
			l = Sx;
			Vy += g * t;
			h += Vy * t;
			// f.style.left = l + 'px';
			// f.style.top = h + 'px';
			self.setData({
				start:{
					x:l,
					y:h
				}
			})
			console.log(l,h);
			if (h > 500 || l > 900) clearInterval(i);
			// this.setData({
			// 	animationData: animation.export()
			// })
		}.bind(this), 10)
	}
})