/**
 * Created by Obscurity on 2016/5/28.
 */

(function () {
    $(document).ready(function () {
        var data = [{employee: "Alice", selling: 100},
            {employee: "Bob", selling: 76},
            {employee: "Charlie", selling: 22}];
        var Frame = G2.Frame;
        var Chart = G2.Chart;
        var Stat = G2.Stat;
        var frame = new Frame(data);
        var stat = Stat.treemap("player*selling");
        var chart = new Chart({
            id: 'c1',
            width: 800,
            height: 600
        });
        stat.init();
        var result_frame = stat.exec([frame])[0];
        chart.source(data);
        chart.polygon().position(Stat.treemap('employee*selling')).color("employee");
        chart.tooltip({
            map: {
                title: "销售业绩",
                name: "销售业绩",
                value: "selling"
            }
        });
        chart.render();
        console.log(result_frame.s());
    });
})();