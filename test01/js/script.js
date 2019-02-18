$(function(){
	// console.log($('.header-right').children().children('li'));
	var headerRight = $('.header-right');
	var logoRightTitle = $('.logo-right-title'),
		logoRightContainer = $('.logo-right-container');




	// 顶部右侧事件
	headerRight.children().mouseover(function(){
		$(this).children('li').css({
			display: 'block'
		})
	})
	headerRight.children().mouseout(function(){
		$(this).children('li').css({
			display: 'none'
		})
	})

	// logo区右侧购物车事件
	logoRightTitle.mouseover(function(){
		logoRightContainer.css({
			display: 'block'
		})
		logoRightTitle.css({
			background: '#fff',
			color: 'red',
			border: '1px solid #bbb'
		}).children('span').eq(0).html('<img src="icon/25.png">')
	})
	logoRightTitle.mouseout(function(){
		logoRightContainer.css({
			display: 'none'
		})
		logoRightTitle.css({
			background: '#f22',
			color: '#fff',
			border: 'none'
		}).children('span').eq(0).html('<img src="icon/26.png">')
	})
	logoRightContainer.mouseover(function(){
		logoRightContainer.css({
			display: 'block'
		})
	})
	logoRightContainer.mouseout(function(){
		logoRightContainer.css({
			display: 'none'
		})
	})


	// 轮播图
	var index = 0,
		timer = null,
		banner = $('.banner'),
		pics = $('.slide'),
		len = pics.length,
		prev = $('.pre'),
		next = $('.next'),
		dots = $('.dots span');

	// console.log(pics.eq(1).addClass('slide-active').siblings().removeClass('slide-active'));
	// 相当于主函数，直接调用
	var slideImg = function(){
		// 鼠标停留在整个块时停止轮播
		banner.mouseover(function(){
			if(timer){
				clearInterval(timer);
			}
		})
		// 鼠标离开块时自动轮播
		banner.mouseout(function(){
			timer = setInterval(function(){
				index++;
				if(index >= len){
					index = 0;
				}
				changeImg();
			}, 2000)
		})

		banner.mouseout();
		//点击圆点按钮
		dots.click(function(){
			index = $(this).index();
			// console.log($(this).index());
			changeImg();
		})
		//点击后退按钮
		prev.click(function(){
			index--;
			if(index === -1){
				index = len-1;
			}
			changeImg();
		})
		//点击前进按钮
		next.click(function(){
			index++;
			if(index === len){
				index = 0;
			}
			changeImg();
		})
	}
	//图片切换的方法
	function changeImg(){
		pics.eq(index).addClass('slide-active').siblings().removeClass('slide-active');
		dots.eq(index).addClass('active').siblings().removeClass('active');
	}

	slideImg();

	// banner区左侧商品分类
	var menuIndex = 0,
		menuItem = $('.menu-item'),
		menuSub = $('.menu-sub').children('div');
	
	// 鼠标移入菜单
	menuItem.mouseover(function(){
		menuIndex = $(this).index();
		// console.log(menuItem.eq(menuIndex).attr('style'));
		menuItem.eq(menuIndex).css({
			background: '#fff'
		}).children('a').children('span').css({
			color: '#f00'
		})
		menuSub.eq(menuIndex).removeClass('menu-sub-container').siblings().addClass('menu-sub-container');
	})
	// 鼠标离开菜单
	menuItem.mouseout(function(){
		menuItem.css({
			background: '#f00'
		}).children('a').children('span').css({
			color: '#fff'
		})
		menuSub.addClass('menu-sub-container');
	})
	// 鼠标移入子菜单
	menuSub.mouseover(function(){
		menuItem.eq(menuIndex).css({
			background: '#fff'
		}).children('a').children('span').css({
			color: '#f00'
		})
		menuSub.eq(menuIndex).removeClass('menu-sub-container').siblings().addClass('menu-sub-container');
	})
	// 鼠标离开子菜单
	menuSub.mouseout(function(){
		menuItem.css({
			background: '#f00'
		}).children('a').children('span').css({
			color: '#fff'
		})
		menuSub.addClass('menu-sub-container');
	})


	// 楼层区事件
	var floorIndex1 = 0,
		floor1 = $('.floor-level1').children('.floor-title').children('.floor-navi').children('span'),
		floorArrow1 = $('.floor-level1').children('.floor-content').children('.floor-arrow'),
		floorContents1 = $('.floor-level1').children('.floor-content').children('.floor-contents');
	
	var floorIndex2 = 0,
		floor2 = $('.floor-level2').children('.floor-title').children('.floor-navi').children('span'),
		floorArrow2 = $('.floor-level2').children('.floor-content').children('.floor-arrow'),
		floorContents2 = $('.floor-level2').children('.floor-content').children('.floor-contents');
	// console.log(floorArrow2);

	floor1.mouseover(function(){
		floorIndex1 = $(this).index();
		floorChange();
	})
	floor2.mouseover(function(){
		floorIndex2 = $(this).index();
		// console.log(floorIndex2);
		floorChange();
	})
	// 楼层区导航切换时改变楼层内容
	function floorChange(){
		if(floorIndex1 === 0){
			floorArrow1.css({
				right: '133px'
			})
		}else if(floorIndex1 === 1){
			floorArrow1.css({
				right: '75px'
			})
		}else if(floorIndex1 === 2){
			floorArrow1.css({
				right: '18px'
			})
		}
		if(floorIndex2 === 0){
			floorArrow2.css({
				right: '197px'
			})
		}else if(floorIndex2 === 1){
			floorArrow2.css({
				right: '122px'
			})
		}else if(floorIndex2 === 2){
			floorArrow2.css({
				right: '33px'
			})
		}
		floorContents1.eq(floorIndex1).addClass('floor-content-active').siblings().removeClass('floor-content-active');
		floor1.eq(floorIndex1).addClass('red').siblings().removeClass('red');
		floorContents2.eq(floorIndex2).addClass('floor-content-active').siblings().removeClass('floor-content-active');
		floor2.eq(floorIndex2).addClass('red').siblings().removeClass('red');
	}


	// 右侧导航
	var naviIndex = 0,
		naviBox = $('.right-navi').children('.right-navi-box'),
		naviSub = $('.right-navi-sub').children('div');
	naviBox.mouseover(function(){
		naviIndex = $(this).index();
		naviSub.eq(naviIndex).css({
			right: '38px'
		})
		naviBox.eq(naviIndex).addClass('right-navi-backColor').siblings().removeClass('right-navi-backColor');
	})
	naviBox.mouseout(function(){
		naviSub.css({
			right: '-17px'
		})
		naviBox.removeClass('right-navi-backColor');
	})

})