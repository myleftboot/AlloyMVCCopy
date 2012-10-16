function Controller() {
    function doClick(e) {
        $.navgroup.open(Alloy.createController("detail").getView());
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
    $.__views.MasterWindow = A$(Ti.UI.createWindow({
        title: "Window 1",
        id: "MasterWindow"
    }), "Window", null);
    var __alloyId1 = [];
    $.__views.MasterTable = A$(Ti.UI.createTableView({
        id: "MasterTable"
    }), "TableView", $.__views.MasterWindow);
    $.__views.MasterWindow.add($.__views.MasterTable);
    $.__views.MasterTable.on("click", doClick);
    $.__views.navgroup = A$(Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.MasterWindow,
        id: "navgroup"
    }), "NavigationGroup", $.__views.index);
    $.__views.index.add($.__views.navgroup);
    var __alloyId2 = [];
    $.__views.MasterTable = A$(Ti.UI.createTableView({
        id: "MasterTable"
    }), "TableView", $.__views.MasterWindow);
    $.__views.MasterWindow.add($.__views.MasterTable);
    $.__views.MasterTable.on("click", doClick);
    _.extend($, $.__views);
    Alloy.CFG.navgroup = $.navgroup;
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