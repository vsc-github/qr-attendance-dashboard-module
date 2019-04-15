var getDateArray = function(start, end) {
    var arr = {};
    var dt = new Date(start);
    while (dt <= end) {
        var temp = new Date(dt);
        if(Math.random() >= 0.5 && (Number(temp.getDate())%2 === 0) ){
            arr[temp.getDate()+'-'+ ('0' + (temp.getMonth()+1)).slice(-2) +'-'+temp.getFullYear()] = '1555238222236'
        }
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

Object.keys(this.state.list).map((key, index) => {

    let startDate = new Date("2019-01-01");
    let endDate = new Date("2019-12-30");

    let dates = getDateArray(startDate,endDate);

    axios({
        method: 'patch',
        url: `https://attendance-94425.firebaseio.com/attendance/database/students/${this.state.list[key].roll}/timestamps.json`,
        data: dates,
    })
        .then((response) => {
            if (response.status === 200) {
                console.log("Update Success for",this.state.list[key].roll);
                
            }
        })

});