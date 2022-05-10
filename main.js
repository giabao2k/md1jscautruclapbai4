let so = "<table border='1' width='500' cellspacing='0' cellpadding='20'>" ;
for(var i = 1; i <= 10; i++){
    so = so + "<tr>";
    for(var j = 1; j <= 10; j++){
        so = so + "<td>"+ i * j + "</td>";
    }
    so = so + "</tr>";
}
so = so + "</table>";
document.write(so);
