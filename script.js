var userName = [ 'walaa','zaid','osama','zaina','layan'];
var favpet =" cat"
var userAge ="20"
var w = [ '1' , '2' , '3','4', '5'];


 var userName = prompt('please enter your name?(chooze zaid layan walaa)');
var favpet = prompt('what is you favpet?');

var userAge = prompt('what is your age(less than 20) ?');
if (userAge==20 && favpet=="cat"){document.write("welcome to our club")}
var w = prompt ('how many cat img you love to show in my page please chooze number frome 1-5?')
for(var i = 0; i < w; i++) {
console.log(w [i]);
  document.write('<img src="https://image.shutterstock.com/image-vector/cute-grey-cat-cartoon-260nw-1044708187.jpg"/>')
  }

while (userName == 'walaa' || favpet!=='cat'){
document.write("love cat's" + '' + userName );
break;
}