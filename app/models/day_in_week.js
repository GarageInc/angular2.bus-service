System.register([], function(exports_1) {
    var Day;
    return {
        setters:[],
        execute: function() {
            Day = (function () {
                function Day(index, name, is_selected, is_holiday) {
                    this.index = index;
                    this.name = name;
                    this.is_selected = is_selected;
                    this.is_holiday = is_holiday;
                }
                return Day;
            })();
            exports_1("Day", Day);
        }
    }
});
//# sourceMappingURL=day_in_week.js.map