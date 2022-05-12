$("#send").click(function(e) {
    e.preventDefault();

    var date = $("#date-input").val();
    var time = $("#time-input").val();

    var start = moment();
    var end = moment(date + time , "YYYY-MM-DDTHH:mm");
    

    var years = end.diff(start, "years");
    start.add(years, 'years');
    var months = end.diff(start, "months");
    start.add(months, 'months');
    var weeks = end.diff(start, "weeks");
    start.add(weeks, 'weeks');
    var days = end.diff(start, "days");
    start.add(days, 'days');
    var hours = end.diff(start, "hours");
    start.add(hours, 'hours');
    var minutes = end.diff(start, "minutes");
    start.add(minutes, 'minutes');


    if (moment().isAfter(end))
        addOutputOnScreen("That date has passed. Please, enter with a valid date!");
    else if (date == "")
        addOutputOnScreen("Please, enter with a date!");
    else if (time == "")
            addOutputOnScreen("Please, enter with a time!");
    else {
        var output = `${days} days, ${hours}h and ${minutes+1}m left`
        if (weeks != 0) {
            if (weeks == 1)
                output = `${weeks} week, ${output}`;
            else
                output = `${weeks} weeks, ${output}`;
        }
        if (months != 0) {
            if (months == 1)
                output = `${months} month, ${output}`;
            else
                output = `${months} months, ${output}`;
        }
        if (years != 0) {
            if (years == 1)
                output = `${years} year, ${output}`;
            else
                output = `${years} years, ${output}`;
        }
        addOutputOnScreen(output);
    }
})

function addOutputOnScreen(output) {
    let h2 = $("<h2>").attr("id", "output");

    if ($("main > h2").attr("id") == h2.attr("id")) 
        $("main > h2").text(output);
    else {
        h2.text(output);
        $("main").append($("<hr>"));
        $("main").append(h2);
    }
}

