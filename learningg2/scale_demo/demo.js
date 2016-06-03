/**
 * Created by Obscurity on 2016/5/28.
 */

(function () {

    var grad2angle = function (grad) {
        return grad * Math.PI / 180;
    };

    var initial_x = 0;
    var initial_y = Math.sin(grad2angle(initial_x));
    var data = [{x: initial_x, y: initial_y}];
    var chart = null;
    var DELAY = 50;
    var getMin = function (data) {
        var min = Number.MAX_VALUE;
        for(var index in data) {
            if(data[index].x < min) {
                min = data[index].x;
            }
        }
        return min;
    };

    var getMax = function (data) {
        var max = Number.MIN_VALUE;
        for(var index in data) {
            if(data[index].x > max) {
                max = data[index].x;
            }
        }
        return max;
    };
    var defs = {
        "x": {
            type: "linear",
            alias: "时间",
            min: getMin(data),
            max: Math.min(getMax(data), getMin(data) + 360),
            tickCount: 10
        },
        "y": {
            type: "linear",
            alias: "位移",
            min: -1,
            max: 1,
            tickCount: 10
        }
    };

    var update_data = function (data) {
        if (data.length > 360) {
            data.splice(0, 1);
        }
        var new_record_x = data[data.length - 1].x + 1;
        var new_record_y = Math.sin(grad2angle(new_record_x));
        data.push({x: new_record_x, y: new_record_y});
    };

    var update_chart = function () {
        update_data(data);
        defs = {
            "x": {
                type: "linear",
                alias: "时间",
                min: getMin(data),
                max: Math.min(getMax(data), getMin(data) + 360),
                tickCount: 10
            },
            "y": {
                type: "linear",
                alias: "位移",
                min: -1,
                max: 1,
                tickCount: 10
            }
        };
        chart.source(data, defs);
        chart.line().position('x*y').color('red');
        chart.repaint();
        setTimeout(update_chart, DELAY);
    };

    $(document).ready(function () {
        chart = new G2.Chart({
            id : 'c1',
            width : 800,
            height : 400
        });
        chart.source(data, defs);
        chart.line().position('x*y').color('red');
        chart.render();
        setTimeout(update_chart, DELAY);
    });
})();