    /**
     * Created with JetBrains WebStorm.
     * User: sandesh
     * Date: 6/10/13
     * Time: 11:34 AM
     * To change this template use File | Settings | File Templates.
     */
     
    
    
    $(document).ready(function () {    
       $("#txtInput").keyup(function () { // Whenever you press any key, this function will get executed 
           displayText(getText());
           result(calculateValue(getText()));
        });           
    });

    // This function will accept the text from the user
    function getText(){
        var input_text=$("#txtInput");
        var text=input_text.val();
        return text;
    }
    
    // This function will display the text into the div, as the user goes on typing
    function displayText(text) {
        var display_text=$(".display-box");
        display_text.html(text);
    }
    
    // This function will calculate the value of the text
    function calculateValue(text) {
        var text_length=text.length;
        var sum=0;
        for(var i=0;i<text_length;i++) // Take each character and calculate the value
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
        return sum;
    }

    // This function will calculate the sum of digits
    function result(value) {
        var remainder;
        var result=0;
        var output_result=$("#output");
        while(value>0)
        {
            remainder=value%10;
            result=result+remainder;
            value=value/10;
        }
        output_result.html(parseInt(result));
    }
            




//var sum=0;
//            var result=0;
//            var remainder;
//            var input_text=$("#txtInput");
//            var text_length= input_text.val().length; // To get the length of the text
//            var text = input_text.val().toUpperCase(); // Convert the text to uppercase
//            var display_text=$(".display-box");
//            var output_result=$("#output");
//            display_text.html(text.toLowerCase()); // Display the text you type, into the div
//            for(var i=0;i<text_length;i++) // Take each character and calculate the value
//            {
//                switch(text[i])
//                    {
//                            case  'A' : case 'I' : case 'J' : case 'Q' :case 'Y' :
//                                sum=sum+1;
//                                break;
//                            case  'B' : case 'K' : case 'R':
//                                sum=sum+2;
//                                break;
//                            case  'C' : case  'G' : case 'L' : case  'S'  : 
//                                sum=sum+3;
//                                break;
//                            case  'D' : case  'M' : case  'T'  :
//                                sum=sum+4;
//                                break;
//                            case  'F' : case  'P'  :
//                                sum=sum+8;
//                                break;
//                            case  'E' : case  'H' : case  'N' : case  'X' : 
//                                sum=sum+5;
//                                break;
//                            case  'U' : case  'V' : case  'W' : 
//                                sum=sum+6;
//                                break;
//                            case  'O' : case  'Z' : 
//                                sum=sum+7;
//                                break;
//                        }       
//            }        
//            while(sum>0) // Add each digit 
//            {
//                remainder=sum%10; // Extract the right most digit
//                result=result+remainder; // Add the right most digit to the existing result value
//                sum=sum/10;     // Find the quotient
//            }
//            output_result.html(parseInt(result)); // Output the result
//        
