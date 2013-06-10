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
        var initial_count=0;
        var temp_character;
        for(var character in $("#txtInput").val())
        {
            temp_character=character;
            for(var temp_char in $("#txtInput").val())
            {
                if(initial_count==0)
                {
                    initial_count++;
                    continue;
                }
                else
                {
                    if(temp_character==temp_char)
                    {
                        continue;
                    }
                    else
                    {
                        if( temp_character=='A' || temp_character=='I' || temp_character=='J' || temp_character=='Q' || temp_character=='Y')
                            sum=sum+1;
                        else if(temp_character=='B' || temp_character=='K' || temp_character=='R')
                            sum=sum+2;
                            else if(temp_character=='C' || temp_character=='G' || temp_character=='L' || temp_character=='S')
                                sum=sum+3;
                            else if(temp_character=='D' || temp_character=='M' || temp_character=='T')
                                sum=sum+4;
                                else if(temp_character=='F' || temp_character=='P')
                                    sum=sum+8;
                                else if(temp_character=='E' || temp_character=='H' || temp_character=='N' || temp_character=='X')
                                    sum=sum+5;
                                    else if(temp_character=='U' || temp_character=='V' || temp_character=='W')
                                        sum=sum+6;
                                    else
                                        sum=sum+7;
                    }
                }
            }
        }
        $("#output").html(sum);
    });   
    
});


