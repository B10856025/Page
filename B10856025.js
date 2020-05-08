document.write("<h1 class='sec1';>台南牛點餐價格表</h1>");
document.write("<h2 class='sec2'>折扣內容:1000元以上(含1000元)折100</h2>");
document.write("<table >")
//第0行
document.write("<tr >")
document.write("<td ></td>")
document.write("<td class='sec3' style='color:purple'>套餐1<br>50元</td>")
document.write("<td class='sec3' style='color:purple'>套餐2<br>100元</td>")
document.write("<td class='sec3' style='color:purple'>套餐3<br>150元</td>")
document.write("<td class='sec3' style='color:purple'>套餐4<br>200元</td>")
document.write("<td class='sec3' style='color:purple'>套餐5<br>250元</td>")
document.write("</tr>")
//第1行//
document.write("<tr>")
document.write("<td class='sec3' style='color:purple'> 1 </td>")
for(i=50;i<300;i=i+50){
document.write("<td class='sec3' style='color:green'>"+i+"</td>")
}
document.write("</tr>")
//第2行
document.write(" <tr>")
document.write("<td class='sec3' style='color:purple'> 2 </td>")
for(i=100;i<600;i=i+100){
document.write("<td class='sec3' style='color:green'>"+i+"</td>")
}
document.write("</tr>")
//第3行
document.write(" <tr>")
document.write("<td class='sec3' style='color:purple'> 3 </td>")
for(i=150;i<800;i=i+150){
document.write("<td class='sec3' style='color:green'>"+i+"</td>")
}
document.write("</tr>")
//第4行
document.write(" <tr>")
document.write("<td class='sec3' style='color:purple'> 4 </td>")
for(i=200;i<=1000;i=i+200){
    if(i>=1000){
        document.write("<td class='sec5'>原價:"+ i +"<br>" + (i=i-100) + "</td>")
    }
    else{
    document.write("<td class='sec3' style='color:green'>"+i+"</td>")
    }
}
document.write("</tr>")
//第5行
document.write(" <tr>")
document.write("<td class='sec3' style='color:purple'> 5 </td>")
for(i=250;i<=1250;i=i+250){
    if(i>=1000){
        document.write("<td class='sec5'>原價:"+ i +"<br>" + (i=i-100) + "</td>")
    }
    else{
    document.write("<td class='sec3' style='color:green'>"+i+"</td>")
    }
}
document.write("</tr>")
//第6行
document.write(" <tr>")
document.write("<td class='sec3' style='color:purple'> 6 </td>")
for(i=300;i<=1500;i=i+300){
    if(i>=1000){
        document.write("<td class='sec5'>原價:"+ i +"<br>" + (i=i-100) + "</td>")
    }
    else{
    document.write("<td class='sec3' style='color:green'>"+i+"</td>")
    }
}
document.write("</tr>")
//第7行
document.write(" <tr>")
document.write("<td class='sec3' style='color:purple'> 7 </td>")
for(i=350;i<=1750;i=i+350){
    if(i>=1000){
        document.write("<td class='sec5'>原價:"+ i +"<br>" + (i=i-100) + "</td>")
    }
    else{
    document.write("<td class='sec3' style='color:green'>"+i+"</td>")
    }
}
document.write("</tr>")

document.write("</table>")