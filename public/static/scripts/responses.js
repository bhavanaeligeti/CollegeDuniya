function getBotResponse(input) {
    //rock paper scissors
    input = input.toLowerCase()

    if (input == "course" || input == "courses") {
        return "Choose B.Tech, MBA, MBBS and LAW";
    } 

    else if (input == "b.tech") {
        return "Choose IITS NITS IIITS";
    } 

    else if (input == "iits" || input == "iit") {
        return "IIT Madras, IIT Delhi, IIT Bombay, IIT Kharagpur, IIT Kanpur"
    }

    else if (input == "nits" || input == "nit") {
        return "NIT Tiruchirappalli, NIT Rourkela, NIT Surathkal, NIT Warangal, NIT Calicut"
    }

    else if (input == "iiits" || input == "iiit") {
        return "IIIT Hyderabad, IIIT Bangalore, IIIT Jabalpur, IIT Gwalior, IIIT Allahabad"
    }
    
    else if (input == "mba") {
        return "Choose IIM, Government MBA";
    } 
    
    else if (input == "iim") {
        return "IIM Bangalore, IIM Ahmedabad, IIM Kolkata, IIM Lucknow, IIM Indore";
    } 

    else if (input == "govt mba"  || input == "government mba" || input == "govt. mba") {
        return "SPSU Udaipur, SJIM Bangalore, PIMR Indore, DMS Delhi";
    } 
    
    
   
    else if (input == "mbbs") {
        return "Choose AIIMS, Government MBBS";
    } 

    else if (input == "aiims") {
        return "AIIMS Delhi, AIIMS Jodhpur, AIIMS Raipur, AIIMS Patna, AIIMS Bhopal";
    } 

    else if (input == "govt mbbs"  || input == "government mbbs" || input == "govt. mbbs") {
        return "MMC Chennai, IPGMER Kolkata, AMU Aligarh, MAMC Delhi";
    } 

    else if (input == "law") {
        return "NLSIU Bangalore, NLU New Delhi, MIT-WPU Pune, NALSAR Hyderabad";
    } 
   
    else if (input == "exam" ||  input == "exams" ) {
        return "Choose B.Tech exam, MBA exam, MBBS exam or law exam";
    } 
    else if (input == "b.tech exam") {
        return "Choose JEE MAIN, JEE ADVANCED";
    } 
    else if (input == "jee main") {
        return "It is for nit college for more details visit main page";
    } 
    
    else if (input == "jee advanced") {
        return "It is for iit college for more details visit main page";
    } 

    else if (input == "mba exam") {
        return "IIM Ahmedabad 85, IIM Bangalore	85, IIM Calcutta 85, IIM Lucknow 90";
    } 
    else if (input == "mbbs exam") {
        return "NEET exam for mbbs";
    } 
    else if (input == "law exam") {
        return "Clat exam for law";
    } 
    
 
    // Simple responses
    if (input == "hello") {
        return "How May Help You!";
    } else if ( input == "goodbye"  || input == "bye") {
        return "Talk to you later!";
    }
    else if (input == "hi" || input == "hii" || input == "hey" ) {
        return "How May Help You!";
    }
    else if (input == "ok" || input == "okay") {
        return "Thank you!";
    }
    else if (input == "thanks" || input == "thank you") {
        return "Glad to help you, let me know if you have any further query!";
    }
     else {
        return "I am not able to Understand!";
    }
}