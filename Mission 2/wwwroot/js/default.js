//we call a function to access inputs from our form
$("#calc").click(function () {
    //here we declare our variable to calculate the final grade 
    var final_percentage
    final_percentage = (($("#assignment").val() * .55) + ($("#gp").val() * .05) + ($("#quiz").val() * .10) + ($("#exam").val() * .20) + ($("#intex").val() * .10)) * 100
    //the if statements here determine which final grade to print
    if (final_percentage >= 94) {
        alert(final_percentage + " A")
    } else if (final_percentage < 94 && final_percentage >= 90) {
        alert(final_percentage + " A-")
    } else if (final_percentage < 90 && final_percentage >= 87 ) {
        alert(final_percentage + " B+")
    } else if (final_percentage < 87 && final_percentage >= 84)  {
        alert(final_percentage + " B")
    } else if (final_percentage < 84 && final_percentage >= 80)  {
        alert(final_percentage + " B-")
    } else if (final_percentage < 80 && final_percentage >= 77) {
        alert(final_percentage + " C+")
    } else if (final_percentage < 77 && final_percentage >= 74)  {
        alert(final_percentage + " C")
    } else if (final_percentage < 74 && final_percentage >= 70)  {
        alert(final_percentage + " C-")
    } else if (final_percentage < 70 && final_percentage >= 67)  {
        alert(final_percentage + " D+")
    } else if (final_percentage < 67 && final_percentage >= 64)  {
        alert(final_percentage + " D")
    } else if (final_percentage < 64 && final_percentage >= 60)  {
        alert(final_percentage + " D-")
    } else {
        alert(final_percentage + " E")
    }
    
})