const randomNumber = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById('input');
const button = document.getElementById('submit');
const info = document.getElementById('info');
const result = document.getElementById('result');
const replay = document.getElementById('replay');
console.log(randomNumber);

let inputValue = input.value;

console.log(typeof inputValue);


let counter=0;


button.addEventListener('click', () => {
  
let preNumber = Number(input.value);    
console.log(preNumber);    
    if(preNumber>100 || preNumber<0){
        info.innerHTML = "0 ile 100 arasında bir sayı giriniz.";}
        
    else{
        counter++;
        result.innerHTML = `${counter}`
        if (preNumber == randomNumber){
            info.innerHTML = "Tebrikler doğru tahmin ettiniz!!"
            result.innerHTML = `${counter}`
            document.getElementById('submit').style.display = "none";
            document.getElementById('replay').style.display = "block";
            document.body.style.backgroundImage = "url('./img/giphy.gif')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundColor = "black";
            replay.addEventListener('click', () => {
                location.reload();
            });

        }
        else if(preNumber > randomNumber){
        
        info.innerHTML = `${preNumber} dan küçük bir sayı giriniz.`
        result.innerHTML = `${counter}`
        }
        else if(preNumber < randomNumber)
        {
        
        info.innerHTML = `${preNumber} den büyük bir sayı giriniz.`
        result.innerHTML = `${counter}`
        }
    }
});


