/**
 * Created with JetBrains WebStorm.
 * User: sandesh
 * Date: 6/10/13
 * Time: 11:34 AM
 * To change this template use File | Settings | File Templates.
 */



$(document).ready(function () {
    $("#txtInput").keyup(function () {
        $(".display-box").html($("#txtInput").val());     
        var sum=0;
        var temp_character;
        for(var character in $("#txtInput").val())
        {
            temp_character=character;
            for(var temp_char in $("#txtInput").val())
            {
                
            }
        }
    });
    $("#btnadd").click(function () {
        $("#output").html("hei");
        var sum=0;
        for(var character in $("#txtInput").val())
        {
            if( character=='A' || character=='I' || character=='J' || character=='Q' || character=='Y')
                sum=sum+1;
            else if(character=='B' || character=='K' || character=='R')
                sum=sum+2;
                else if(character=='C' || character=='G' || character=='L' || character=='S')
                    sum=sum+3;
                else if(character=='D' || character=='M' || character=='T')
                    sum=sum+4;
                    else if(character=='F' || character=='P')
                        sum=sum+8;
                    else if(character=='E' || character=='H' || character=='N' || character=='X')
                        sum=sum+5;
                        else if(character=='U' || character=='V' || character=='W')
                            sum=sum+6;
                        else
                        {
                            sum=sum+7;
                            
                        }
        }
        
        $(".display-box").html(" "); // Clear the box
        $(".display-box").html(sum);
    });
    
});


