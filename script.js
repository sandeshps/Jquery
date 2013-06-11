/**
 * Created with JetBrains WebStorm.
 * User: sandesh
 * Date: 6/10/13
 * Time: 11:34 AM
 * To change this template use File | Settings | File Templates.
 */
 


$(document).ready(function () {
    $("#btn").click(function () {
                    var l= $("#txtInput").val().length;
                    var st = $("#txtInput").val();
                    for( var i=0;i<l;i++)
                        $("#test").append(st[i]);
                    });
    $("#txtInput").keyup(function () {
        var sum=0;
        var text_length= $("#txtInput").val().length;
        var text = $("#txtInput").val();
        $(".display-box").html($("#txtInput").val());
        for(var i=0;i<text_length;i++)
        {
            for( var j=i+1;j<text_length;j++)
            {
                if(text[i]==text[j])
                    continue;
                else
                {
                    if( text[i]=='A' || text[i]=='I' || text[i]=='J' || text[i]=='Q' || text[i]=='Y')
                            sum=sum+1;
                        else if(text[i]=='B' || text[i]=='K' || text[i]=='R')
                            sum=sum+2;
                            else if(text[i]=='C' || text[i]=='G' || text[i]=='L' || text[i]=='S')
                                sum=sum+3;
                            else if(text[i]=='D' || text[i]=='M' || text[i]=='T')
                                sum=sum+4;
                                else if(text[i]=='F' || text[i]=='P')
                                    sum=sum+8;
                                else if(text[i]=='E' || text[i]=='H' || text[i]=='N' || text[i]=='X')
                                    sum=sum+5;
                                    else if(text[i]=='U' || text[i]=='V' || text[i]=='W')
                                        sum=sum+6;
                                    else
                                        sum=sum+7;   
                }
            }
                //$("#test").append(st[i]);
        }
        $("#output").html(sum);
    });   
    
});


