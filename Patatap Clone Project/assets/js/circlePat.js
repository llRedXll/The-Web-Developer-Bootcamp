for (var x = 50; x < 1000; x += 100) {
    for (var y = 50; y < 1000; y += 100) {
        new Path.Circle(new Point(x, y), 10).fillColor = "red";
    }
}