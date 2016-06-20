/**
 * Created by Obscurity on 2016/5/28.
 */

(function () {

    var getFund = function () {
        var result = [];
        var startDate = new Date("2016-01-01").getTime();
        var endDate = new Date("2017-01-01").getTime();
        for(var date = startDate; date != endDate; date += (3600 * 24000)) {
            var currentDate = new Date(date);
            result.push({
                date: currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + '-' + currentDate.getDate(),
                fund: Math.round(Math.random() * 1000)
            });
        }
        return result;
    };

    $(document).ready(function () {
        var data = getFund();
        var frame = new G2.Frame(data);
        var chart = new G2.Chart({
            id: 'c1',
            width : 800,
            height : 400,
            animate: true
        });
        chart.source(frame);
        chart.line().position('date*fund');
        chart.render();

        var range = new G2.Plugin.range({
            id: "range",
            width: 800,
            height: 25,
            dim: "date"
        });

        range.source(frame);
        range.link(chart);
        range.render();
    });
})();