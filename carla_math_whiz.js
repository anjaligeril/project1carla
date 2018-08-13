function add(){
					alert("You are at Level One");	
					leveloneadd();
					
					function leveloneadd(){
						var count1=1;    // counter for storing the number of correct answers
						var choice="y";   // string to store choice of student Y whether to continue until 5 correct answers or  N until a particular number of problems
						var choiceNum=0; // if N store the number of problems to be done
						var count2=1;    // to store the total number of attempts
						//student enter his choice 
						choice=prompt("Do you want to continue only until you get 5 correct answer? Type Y for yes and N for no");
						if(choice=="n"||choice=="N"){
							choiceNum=prompt("How many problems do you want to try in total");
							choice="n";
						}
						else {
							choice="y";
						}
						while((choice=="y" && count1<6)||(choice=="n"&& count2<=choiceNum)){
							var num1a=(Math.floor(Math.random()*10)+1);
							var num1b=(Math.floor(Math.random()*10)+1);
							var response=parseInt(prompt("what is the sum of "+num1a+" and "+num1b+"?"));
							var sum1=num1a+num1b;
							if(sum1==response){
								count1++;
								alert("Correct");
							}
							else{
								alert("Incorrect");
							}
							count2++;
						}
						alert("you completed "+ (count2-1) +" problems and got "+ (count1-1) +" correct");
						//student choose whether to move to next level or stop the session
						var choice2=prompt("Do you want to move to level two ?Type Y for yes and n for No ");
						if (choice2=="y"||choice2=="Y"){
							alert("You are at Level Two");
							leveltwoadd();
						}
						else{
							alert("This session ended...");
						}
					}
					function leveltwoadd(){
						var count1=1;    // counter for storing the number of correct answers
						var choice="y";   // string to store choice of student Y whether to continue until 5 correct answers or  N until a particular number of problems
						var choiceNum=0; // if N store the number of problems to be done
						var count2=1;    // to store the total number of attempts
						//student enter his choice 
						choice=prompt("Do you want to continue only until you get 5 correct answer? Type Y for yes and N for no");
						if(choice=="n"||choice=="N"){
							choiceNum=prompt("How many problems do you want to try in total");
							choice="n";
						}
						else {
							choice="y";
						}
						while((choice=="y" && count1<6)||(choice=="n"&& count2<=choiceNum)){
							var num2a=(Math.floor(Math.random()*100)+1);
							var num2b=(Math.floor(Math.random()*100)+1);
							var response=parseInt(prompt("what is the sum of "+num2a+" and "+num2b+"?"));
							var sum2=num2a+num2b;
							if(sum2==response){
								count1++;
								alert("Correct");
							}
							else{
								alert("Incorrect");
							}
							count2++;
						}
						alert("you completed "+ (count2-1) +" problems and got "+ (count1-1) +" correct");
						//student choose whether to move to next level or stop the session
						var choice2=prompt("Do you want to move to level Three ?Type Y for yes and n for No ");
						if (choice2=="y"||choice2=="Y"){
							alert("You are at Level Three");
							levelthreeadd();
						}
						else{
							alert("This session ended...");
						}
					}
					
					function levelthreeadd(){
						var count1=1;    // counter for storing the number of correct answers
						var choice="y";   // string to store choice of student Y whether to continue until 5 correct answers or  N until a particular number of problems
						var choiceNum=0; // if N store the number of problems to be done
						var count2=1;    // to store the total number of attempts
						//student enter his choice 
						choice=prompt("Do you want to continue only until you get 5 correct answer? Type Y for yes and N for no");
						if(choice=="n"||choice=="N"){
							choiceNum=prompt("How many problems do you want to try in total");
							choice="n";
						}
						else {
							choice="y";
						}
						while((choice=="y" && count1<6)||(choice=="n"&& count2<=choiceNum)){
							var num3a=(Math.floor(Math.random()*100)+1);
							var num3b=(Math.floor(Math.random()*100)+1);
							var num3c=(Math.floor(Math.random()*100)+1);
							var response=parseInt(prompt("what is the sum of "+num3a+" and "+num3b+" and "+num3c+"?"));
							var sum3=num3a+num3b+num3c;
							if(sum3==response){
								count1++;
								alert("Correct");
							}
							else{
								alert("Incorrect");
							}
							count2++;
						}
						alert("you completed "+ (count2-1) +" problems and got "+ (count1-1) +" correct");
						//student choose whether to move to subtraction test  or stop the session
						alert("Congratulations! You have completed 3 levels of Addition...");
						var choice2=prompt("Do you want to move to Subtraction ?Type Y for yes and n for No ");
						if (choice2=="y"||choice2=="Y"){
							alert("Click the subtraction button to begin the test ...");
						}
						else{
							alert("This session ended...");
						}
					}
				}	
				
				function sub(){
					alert("You are at Level One");	
					levelonesub();
					function levelonesub(){
						var count1=1;    // counter for storing the number of correct answers
						var choice="y";   // string to store choice of student Y whether to continue until 5 correct answers or  N until a particular number of problems
						var choiceNum=0; // if N store the number of problems to be done
						var count2=1;    // to store the total number of attempts
						//student enter his choice 
						choice=prompt("Do you want to continue only until you get 5 correct answer? Type Y for yes and N for no");
						if(choice=="n"||choice=="N"){
							choiceNum=prompt("How many problems do you want to try in total");
							choice="n";
						}
						else {
							choice="y";
						}
						while((choice=="y" && count1<6)||(choice=="n"&& count2<=choiceNum)){
							var num1a=(Math.floor(Math.random()*10)+1);
							var num1b=(Math.floor(Math.random()*10)+1);
							if(num1a>=num1b){
								var diff1=num1a-num1b;
								var response=parseInt(prompt("what is the difference between "+num1a+" and "+ num1b + " ?"));
							}
							else{
								var diff1=num1b-num1a;
								var response=parseInt(prompt("what is the difference between "+num1b+" and "+ num1a + " ?"));
							}
							if(response==diff1){
								count1++;
								alert("Correct");
							}
							else{
								alert("Incorrect");
							}
							count2++;
						}
						alert("you completed "+ (count2-1) +" problems and got "+ (count1-1) +" correct");
						//student choose whether to move to next level or stop the session
						var choice2=prompt("Do you want to move to level two ?Type Y for yes and n for No ");
						if (choice2=="y"||choice2=="Y"){
							alert("You are at Level Two");
							leveltwosub();
						}
						else{
							alert("This session ended...");
						}
					}
					function leveltwosub(){
						var count1=1;    // counter for storing the number of correct answers
						var choice="y";   // string to store choice of student Y whether to continue until 5 correct answers or  N until a particular number of problems
						var choiceNum=0; // if N store the number of problems to be done
						var count2=1;    // to store the total number of attempts
						//student enter his choice 
						choice=prompt("Do you want to continue only until you get 5 correct answer? Type Y for yes and N for no");
						if(choice=="n"||choice=="N"){
							choiceNum=prompt("How many problems do you want to try in total");
							choice="n";
						}
						else {
							choice="y";
						}
						while((choice=="y" && count1<6)||(choice=="n"&& count2<=choiceNum)){
							var num2a=(Math.floor(Math.random()*100)+1);
							var num2b=(Math.floor(Math.random()*100)+1);
							if(num2a>=num2b){
								var diff2=num2a-num2b;
								var response=parseInt(prompt("what is the difference between "+num2a+" and "+ num2b + " ?"));
							}
							else{
								var diff2=num2b-num2a;
								var response=parseInt(prompt("what is the difference between "+num2b+" and "+ num2a + " ?"));
							}
							if(response==diff2){
								count1++;
								alert("Correct");
							}
							else{
								alert("Incorrect");
							}
							count2++;
						}
						alert("you completed "+ (count2-1) +" problems and got "+ (count1-1) +" correct");
						//student choose whether to move to next level or stop the session
						alert("Congratulations! You have completed both levels of Substraction.Your session is ended...");
					}
				}