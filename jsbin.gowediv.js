// 3.3★ Сделать игру "Банк на костях" для одного игрока. Сначала пользователь вносит депозит - из этой суммы будут вычитаться ставки и к ней прибавляться выигрыши. Игра заканчивается, если депозит равен нулю. Нельзя делать ставку больше размера депозита. Чтобы досрочно завершить игру и забрать депозит игрок должен сделать ставку размером 0. Правила игры: понтер (игрок) делает ставку на любое число от 1 до 6 (грани игральной кости). Программа "выбрасывает" 3 кости, т.е. показывает 3 случайных числа от 1 до 6. Если хотя бы одна из трех костей выпала той гранью которую загадывал игрок, он получает выигрыш, равный размеру ставки. Если с загаданным числом совпадает 2 грани, получает двойной выигрыш. Если все 3 грани - тройной выигрыш. Если ни одна грань не совпадает - теряет ставку.
//Использовать отдельные функции для выполнения ставки, выбрасывания костей и проверки выигрыша. А весь код игры должен быть внутри функции game().

//noprotect


function game (){
  var playerDeposite;
  var playerEntry;
  var playerDice,CompDice_1,CompDice_2,CompDice_3;
  
  function gameEntry(){
      do {
      var playerEntry=(+prompt("Введите сумму ставки (0 для выхода из игры)", 5));
     if  (playerEntry<0){document.write("Cтавка не может быть отрицательной, вы ввели: " + playerEntry + "<br>"); playerEntry=0; }
     else          
     if (playerEntry>0&&playerEntry>playerDeposite){document.write("У вас нет таких денег,                  пожалуйста введите сумму <br> в пределах вашего депозита, который составляет: " +playerDeposite+  " <br>");}
     else if (playerEntry>0&&playerEntry<=playerDeposite){document.write("Ваша ставка составляет: "              + playerEntry + "<br>"); playerDeposite-=playerEntry; break;}
          
  } while (!(playerEntry<playerDeposite||playerEntry===0));
      
    return playerEntry;
  }
  
  function diceRoll (){
    var dr = Math.floor(Math.random() * 6) + 1;
    
    document.write("Выпал кубик: " + dr + "<br>");
    return dr; 
    
  } 
  
 function playerDice (){
   do {
   var pd=Math.floor(+prompt("Сделайте вашу ставку на любое число от 1 до 6")); 
   } while (!(pd>=1&&pd<7));
     document.write("Вы поставили на : " + pd + "<br>");
     return pd;  
  } 
  
  
  function diceChek (playerDice,CompDice_1,CompDice_2,CompDice_3){
    var multiplier;
       if (playerDice===CompDice_1&&
           playerDice===CompDice_2&&
           playerDice===CompDice_3) multiplier=3;  
       else if ((playerDice===CompDice_1&&playerDice===CompDice_2)||
                (playerDice===CompDice_1&&playerDice===CompDice_3)||
                (playerDice===CompDice_2&&playerDice===CompDice_3)) multiplier=2; 
       else if(playerDice===CompDice_1||
                playerDice===CompDice_2||
                playerDice===CompDice_3) multiplier=1;
         else multiplier=0;
    
    return multiplier; 
  } 
  
  playerDeposite=+prompt("Введите сумму депозита", 50);
 
  do {
    playerEntry= gameEntry(); 
  if  (playerEntry===0){break;}
   
  playerDeposite += playerEntry* diceChek(playerDice(),diceRoll (),diceRoll (),diceRoll ());
  
 if(!confirm("Ваш депозит составляет: " + playerDeposite + " Хотите сыграть еще?")) break;   
    
  } while (playerDeposite>0);
  
if (playerDeposite>0){document.write("Ваш депозит составляет: " + playerDeposite + "<br>"); }
  else (document.write("Вы исчерпали депозит<br>"));
    
}

game ();