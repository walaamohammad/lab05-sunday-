var userName = [ 'walaa','zaid','osama','zaina','layan'];
var favpet =" cat"
var userAge ="20"

for(var i = 0; i <= userName.length; i++) {
console.log(userName[i]);
  document.write('<img src="https://image.shutterstock.com/image-vector/cute-grey-cat-cartoon-260nw-1044708187.jpg"/>')
  }

 var userName = prompt('please enter your name?');
var favpet = prompt('what is you favpet?');

var userAge = prompt('what is your age ?');
if (userAge==20 && favpet=="cat"){document.write("welcome to our club")}

while (userName !== 'walaa' || favpet!=='cat'){
document.write("love cat's" + '' + userName );
break;
}