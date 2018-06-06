module.exports = {
    getPosList: function(cb) {
        $.ajax({
            url: "/api/position/m/list/",
            data: {
                start: 0,
                count: 10
            },
            success: function(res) {
                cb(res.data);
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
};
