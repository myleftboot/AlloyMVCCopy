function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.detail = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "detail"
    }), "Window", null);
    $.addTopLevelView($.__views.detail);
    $.__views.result = A$(Ti.UI.createLabel({
        color: "#000",
        font: {
            fontWeight: "bold"
        },
        id: "result"
    }), "Label", $.__views.detail);
    $.__views.detail.add($.__views.result);
    _.extend($, $.__views);
    Ti.App.addEventListener("MVC:tab:itemSelected", function(e) {
        $.result.text = e.name + ": $" + e.price;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;