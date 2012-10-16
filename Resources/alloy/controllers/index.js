function Controller() {
    function doClick(e) {
        Alloy.createController("detail").getView().open();
        Ti.App.fireEvent("MVC:tab:itemSelected", {
            name: e.rowData.title,
            price: e.rowData.price
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    _.extend($, $.__views);
    var tableData = [ {
        title: "Apples",
        price: "1.25",
        hasChild: !0,
        color: "#000"
    }, {
        title: "Grapes",
        price: "1.50",
        hasChild: !0,
        color: "#000"
    }, {
        title: "Oranges",
        price: "2.50",
        hasChild: !0,
        color: "#000"
    }, {
        title: "Bananas",
        price: "1.50",
        hasChild: !0,
        color: "#000"
    }, {
        title: "Pears",
        price: "1.40",
        hasChild: !0,
        color: "#000"
    }, {
        title: "Kiwis",
        price: "1.00",
        hasChild: !0,
        color: "#000"
    } ];
    $.MasterTable.setData(tableData);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;