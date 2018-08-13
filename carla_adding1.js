function add(){
				 var num1a=0;
				 var num1b=0;
				 var sum1=0;
				 var count1=0;
								 
				 var num2a=0;
				 var num2b=0;
				 var sum2=0;
				 var count2=0;
								 
				 var num3a=0;
				 var num3b=0;
				 var num3c=0;
				 var sum3=0;
				 var count3=0;
				 alert("You are at Level One");	
				 levelone();
				
				function levelone(){
				// problem1
					num1a=(Math.floor(Math.random()*10)+1);
					num1b=(Math.floor(Math.random()*10)+1);
					var response=parseInt(prompt("what is the sum of "+num1a+" and "+num1b+"?"));
					sum1=num1a+num1b;
					if(sum1==response){
						count1++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					
				//problem2
					num1a=(Math.floor(Math.random()*10)+1);
					num1b=(Math.floor(Math.random()*10)+1);
					var response=parseInt(prompt("what is the sum of "+num1a+" and "+num1b+"?"));
					sum1=num1a+num1b;
					if(sum1==response){
						count1++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					
				//problem3
					num1a=(Math.floor(Math.random()*10)+1);
					num1b=(Math.floor(Math.random()*10)+1);
					var response=parseInt(prompt("what is the sum of "+num1a+" and "+num1b+"?"));
					sum1=num1a+num1b;
					if(sum1==response){
						count1++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count1==3){
						alert("You are at Level Two");
						leveltwo();
						return;
					}
					
				//problem4 
				
					num1a=(Math.floor(Math.random()*10)+1);
					num1b=(Math.floor(Math.random()*10)+1);
					var response=parseInt(prompt("what is the sum of "+num1a+" and "+num1b+"?"));
					sum1=num1a+num1b;
					if(sum1==response){
						count1++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count1==3){
						alert("You are at Level Two");
						leveltwo();
						return;
					}
				//problem5 
				
					num1a=(Math.floor(Math.random()*10)+1);
					num1b=(Math.floor(Math.random()*10)+1);
					var response=parseInt(prompt("what is the sum of "+num1a+" and "+num1b+"?"));
					sum1=num1a+num1b;
					if(sum1==response){
						count1++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count1==3){
						alert("You are at Level Two");
						leveltwo();
						return;
					}
					else{
					alert("You need more practice!!!");
					var choice=prompt("Do you want to continue? Y for yes and N for No");
					if(choice=="Y"|| choice=="y"){
						levelone();
					}
					
					}
				}
				
				function leveltwo(){
				//problem1
					num2a=(Math.floor(Math.random()*100)+1);
					num2b=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num2a+" and "+num2b+"?"));
					sum2=num2a+num2b;
					if(sum2==response){
						count2++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
				//problem2
					num2a=(Math.floor(Math.random()*100)+1);
					num2b=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num2a+" and "+num2b+"?"));
					sum2=num2a+num2b;
					if(sum2==response){
						count2++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
				
				//problem3
					num2a=(Math.floor(Math.random()*100)+1);
					num2b=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num2a+" and "+num2b+"?"));
					sum2=num2a+num2b;
					if(sum2==response){
						count2++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count2==3){
						alert("You are at Level Three");
						levelthree();
						return;
					}
				//problem4
					num2a=(Math.floor(Math.random()*100)+1);
					num2b=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num2a+" and "+num2b+"?"));
					sum2=num2a+num2b;
					if(sum2==response){
						count2++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count2==3){
						alert("You are at Level Three");
						levelthree();
						return;
					}
				//problem5
				
					num2a=(Math.floor(Math.random()*100)+1);
					num2b=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num2a+" and "+num2b+"?"));
					sum2=num2a+num2b;
					if(sum2==response){
						count2++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count2==3){
						alert("You are at Level Three");
						levelthree();
						return;
					}
					else{
					alert("You need more practice!!!");
					var choice=prompt("Do you want to continue? Y for yes and N for No");
					if(choice=="Y"|| choice=="y"){
						leveltwo();
					}
					}
				}
				
				function levelthree(){
				//problem1
					num3a=(Math.floor(Math.random()*100)+1);
					num3b=(Math.floor(Math.random()*100)+1);
					num3c=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num3a+" and "+num3b+" and "+num3c+"?"));
					sum3=num3a+num3b+num3c;
					if(sum3==response){
						count3++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
				//problem2
					num3a=(Math.floor(Math.random()*100)+1);
					num3b=(Math.floor(Math.random()*100)+1);
					num3c=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num3a+" and "+num3b+" and "+num3c+"?"));
					sum3=num3a+num3b+num3c;
					if(sum3==response){
						count3++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
				//problem3
					num3a=(Math.floor(Math.random()*100)+1);
					num3b=(Math.floor(Math.random()*100)+1);
					num3c=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num3a+" and "+num3b+" and "+num3c+"?"));
					sum3=num3a+num3b+num3c;
					if(sum3==response){
						count3++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count3==3){
					  alert("That's all floks !!! proceed to multiplication now");
					  return;
					}
				//problem4
					num3a=(Math.floor(Math.random()*100)+1);
					num3b=(Math.floor(Math.random()*100)+1);
					num3c=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num3a+" and "+num3b+" and "+num3c+"?"));
					sum3=num3a+num3b+num3c;
					if(sum3==response){
						count3++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count3==3){
					  alert("That's all floks !!! proceed to multiplication now");
					  return;
					}
				//problem5
					num3a=(Math.floor(Math.random()*100)+1);
					num3b=(Math.floor(Math.random()*100)+1);
					num3c=(Math.floor(Math.random()*100)+1);
					var response=parseInt(prompt("what is the sum of "+num3a+" and "+num3b+" and "+num3c+"?"));
					sum3=num3a+num3b+num3c;
					if(sum3==response){
						count3++;
						alert("correct");
					}
					else{
						alert("incorrect");
					}
					if(count3==3){
					  alert("That's all floks !!! proceed to next test now");
					  return;
					}
					else{
					alert("You need more practice!!!");
					var choice=prompt("Do you want to continue? Y for yes and N for No");
					if(choice=="Y"|| choice=="y"){
						levelthree();
					}
					}
				}
			}