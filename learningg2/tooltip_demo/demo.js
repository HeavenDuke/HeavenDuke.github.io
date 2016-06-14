/**
 * Created by Obscurity on 2016/5/28.
 */

(function () {
    $(document).ready(function () {
        var data = [
            {action: '访问', visitor: 500},
            {action: '浏览', visitor: 400},
            {action: '交互', visitor: 300},
            {action: '下单', visitor: 200},
            {action: '付款', visitor: 100}
        ];
        var chart = new G2.Chart({
            id: 'c1',
            width : 800,
            height : 400,
            animate: true  // 是否执行动画
        }); // create the chart object
        chart.source(data); // load the data source
        chart.interval().position('action*visitor').color('action'); // create the detail chart
        chart.coord('rect');
        chart.tooltip(true, {
            map: {
                name: '访问量',
                value: 'visitor'
            },
            custom: true,
            html: '<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="ac-title"></h4><ul class="ac-list custom-table"></ul></div>',
            itemTpl: '<li><div>{index}</div><div style="color:{color}">{name}</div><div>{value}</div></li>'
        });
        chart.render();
    });
})();