/**
 * Created with JetBrains WebStorm.
 * User: sandesh
 * Date: 6/10/13
 * Time: 11:34 AM
 * To change this template use File | Settings | File Templates.
 */
 


$(document).ready(function () {
    
   $("#txtInput").keyup(function () {
        var sum=0;
        var result=0;
        var remainder;
        var text_length= $("#txtInput").val().length; // To get the length of the text
        var text = $("#txtInput").val().toUpperCase(); // Convert the text to uppercase
        $(".display-box").html($("#txtInput").val()); // Display the text you type in the div
        for(var i=0;i<text_length;i++)
        {
            switch(text[i])
                {
                        case  'A' : case 'I' : case 'J' : case 'Q' :case 'Y' :
                            sum=sum+1;
                            break;
                        case  'B' : case 'K' : case 'R':
                            sum=sum+2;
                            break;
                        case  'C' : case  'G' : case 'L' : case  'S'  : 
                            sum=sum+3;
                            break;
                        case  'D' : case  'M' : case  'T'  :
                            sum=sum+4;
                            break;
                        case  'F' : case  'P'  :
                            sum=sum+8;
                            break;
                        case  'E' : case  'H' : case  'N' : case  'X' : 
                            sum=sum+5;
                            break;
                        case  'U' : case  'V' : case  'W' : 
                            sum=sum+6;
                            break;
                        case  'O' : case  'Z' : 
                            sum=sum+7;
                            break;
                    }       
        }        
        while(sum>0)
        {
            remainder=sum%10;
            result=result+remainder;
            sum=sum/10;                        
        }
        $("#output").html(parseInt(result));
    });   
    
});


