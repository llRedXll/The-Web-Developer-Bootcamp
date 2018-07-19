// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});

// Click On X To Delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    // prevents it from running on parent elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

// fade in or out our input by clicking plus icon
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});