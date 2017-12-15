Object.defineProperty(exports, "__esModule", { value: true });
var WindowContext_1 = require("../Components/WindowContext");
var SubMenu = /** @class */ (function () {
    function SubMenu(targetMenue) {
        this.menu = targetMenue;
        this.submenuOptions = { showTimeout: 0, hideTimeout: 0 };
        if (!!this.menu.attr('data-smartmenus-id'))
            return; // Already enabled
        this.menu.addClass("sm");
        if (this.menu.is(".nav-stacked.dropped-submenu"))
            this.menu.addClass("sm-vertical");
        var options = this.menu.attr("data-submenu-options");
        if (options)
            this.submenuOptions = WindowContext_1.default.toJson(options);
        this.menu.smartmenus(this.submenuOptions);
    }
    return SubMenu;
}());
exports.default = SubMenu;
//# sourceMappingURL=SubMenu.js.map