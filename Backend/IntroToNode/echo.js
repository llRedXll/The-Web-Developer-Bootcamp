function echo(str, echos) {
    for (var i = 0; i < echos; i++) {
        console.log(str);
    }
}

echo("Echo!!", 10); // Should print "Echo!!" 10 times
echo("Tater Tots", 3); // Should print "Tater Tots" 3 times