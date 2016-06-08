/**
 * Created by Obscurity on 2016/5/28.
 */

(function () {
    $(document).ready(function () {
        var data = [
            {type: '类型一',value: 10},
            {type: '类型二',value: 15},
            {type: '类型三',value: 15},
            {type: '类型四',value: 20},
            {type: '类型五',value: 40}
        ];
        var chart = new G2.Chart({
            id: 'c1',
            width: 600,
            height: 500
        });
        chart.source(data);
        chart.coord('theta', {
            radius: 0.8,
            inner: 0.1
        }).scale(1, 0.8);
        chart.intervalStack().position('value').color('type');
        chart.render();
    });
})();