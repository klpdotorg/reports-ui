'use strict';
function init() {
        
        renderGrants();
}
   
function renderGrants(){
    var data = { 
        "received": {
            "sg_perc": 35,
            "sg_amt": 3500,
            "smg_perc": 55,
            "smg_amt": 5500,
            "tlm_perc": 10,
            "tlm_amt": 1000   
        },
        "expenditure": {
            "sg_perc": 35,
            "sg_amt": 3500,
            "smg_perc": 55,
            "smg_amt": 5500,
            "tlm_perc": 10,
            "tlm_amt": 1000 
        }
    };
    drawStackedBar([ [data["expenditure"]["sg_perc"]],
                     [data["expenditure"]["smg_perc"]],
                     [data["expenditure"]["tlm_perc"]]
                   ],"#chart-expenditure");
    drawStackedBar([ [data["received"]["sg_perc"]],
                     [data["received"]["smg_perc"]],
                     [data["received"]["tlm_perc"]]
                   ],"#chart-received");

    /*<script type="text/html" id="tpl-grants">
<div class="fa fa-circle brand-purple float-left dot-padding"></div>
<div class="float-left grant-label">School Grant</div>
<div class="float-right">INR {{grants.sg_amt}}</div>
<br/>
<div class="fa fa-circle brand-green float-left dot-padding"></div>
<div class="float-left grant-label">School Maintenance Grant</div>
<div class="float-right">INR {{grants.smg_amt}}</div>
<br/>
<div class="fa fa-circle brand-blue float-left dot-padding"></div>
<div class="float-left grant-label">TLM Grant</div>
<div class="float-right">INR {{grants.tlm_amt}}</div>
</script*/
}

function drawStackedBar(data, element_id) {
    new Chartist.Bar(element_id, {
            labels: [''],
            series: data
        }, {
        stackBars: true,
        horizontalBars: true,
        axisX: {
            showGrid: false
        },
        axisY: {
            showGrid: false,
            labelInterpolationFnc: function(value) {
            return'';
        }
    }
    }).on('draw', function(data) {
        if(data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 20px'
            });
        }
    });
}
