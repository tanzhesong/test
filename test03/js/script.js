$(function(){
    // 搜索按钮
    $('.logo-caption').mouseover(function(){
        $('.logo-search-list').show();
    }).mouseout(function(){
        $('.logo-search-list').hide();
    });
    $('.logo-search-list').mouseover(function(){
        $('.logo-search-list').show();
        $('.logo-search-list').children('.item').click(function(){
            // console.log($(this).text());
            $('.logo-caption').text($(this).text());
            $('.logo-search-list').hide();
        })
    })
    $('.logo-search-list').mouseout(function(){
        $('.logo-search-list').hide();
    })


    // scheduling按钮
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // 每次重新加载页面时先清空之前的时间表
    $('.middle-box').empty();

    var pageCount = 7,         //总共的页数
        currentPage = 0,       //目前的页数
        days = pageCount * 7,  //总共多少天，用于后面的循环
        date = new Date(),     
        time = date.getTime(); //获取当前以毫秒为单位的时间
        
    //每循环一次，插入一列
    for(var i = 0; i < days; i++){
        var _t = time + i * 86400 * 1000;
        // 获取以毫秒为单位的日期
        var _d = new Date(_t);
        var html = [];

        var w, y, m, d;
        w = week[_d.getDay()];
        y = _d.getFullYear();
        m = _d.getMonth() + 1;
        // 月份小于10时，显示0m
        m = m < 10 ? '0' + m : m;
        d = _d.getDate();
        d = d < 10 ? '0' + d : d;

        // middle-item为一列 date是日期
        html.push('<div class="middle-item">');
        html.push('<div class="date">' + w + '<br>' + y + '-' + m + '-' + d + '</div>');
        html.push('<div class="status"></div>');
        html.push('<div class="status status-full">约满</div>');
        html.push('<div class="status"></div>');
        html.push('</div>');

        // 每一天的安排表插入middle-box大盒子中
        $('.middle-box').append(html.join(''));
    }

    // 科室排班按钮
    $('.prev').click(function(){
        if(currentPage > 0){
            currentPage--;
        }
        changeSchedul();
    })
    $('.next').click(function(){
        if(currentPage < pageCount-1){
            currentPage++;
        }
        // console.log(currentPage);
        changeSchedul();
    })

    var changeSchedul = function(){
        $('.middle-box').css('left','-' + (currentPage * 637) + 'px');
    }


    // 医院选项卡
    var hospital = $('.hospital-navi');
    var navis = $('.item', hospital);
    var items = $('.hospital-navi-content').children('.item');
    var hosIndex = 0;
    // console.log(items);
    navis.click(function(){
        hosIndex = $(this).index();
        // console.log(hosIndex);
        navis.removeClass('hospital-navi-active').eq(hosIndex).addClass('hospital-navi-active');
        items.removeClass('content-active').eq(hosIndex).addClass('content-active');
    })
    
})