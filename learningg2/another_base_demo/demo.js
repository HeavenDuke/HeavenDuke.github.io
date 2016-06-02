/**
 * Created by Obscurity on 2016/5/28.
 */

(function () {
    $(document).ready(function () {
        var html_dom = $("<div></div>");
        $("body").prepend(html_dom);
        var data = [
            {action: '访问', visitor: 500},
            {action: '浏览', visitor: 400},
            {action: '交互', visitor: 300},
            {action: '下单', visitor: 200},
            {action: '付款', visitor: 100}
        ];
        var chart = new G2.Chart({
            container: html_dom.get(0),
            width : 800,
            height : 400,
            animate: true
        });
        chart.source(data);
        chart.interval().position('action*visitor').color('action'); // create the detail chart
        chart.coord('rect');
        chart.tooltip(true, {
            map: {
                title: 'visitor',
                name: '访问量',
                value: 'visitor'
            }
        });
        chart.render();
    })
})();