

var tempstring = ""

for(var i = 0; i < 10; ++i) {
    tempstring += "<tr>"
    for(var j = 0; j < 10; ++j) {
        tempstring += '<td id="test' + String(i) + String(j) + '">N</td>'
    }
    tempstring +="</tr>"
}
console.log(tempstring);
