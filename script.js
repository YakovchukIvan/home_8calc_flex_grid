"use strict"
const btnStart = document.getElementById('btnStart')

// масив із слів
const words = [
  'рівне',
  'львів',
  'київ',
  'одеса',
  'ужгород'
]

btnStart.onclick = function () {
    // рандомне слово
  let word = words[Math.floor(Math.random() * words.length)]

  // масив відповідей
  let answerArray = [];

  // Заповнюємо масив _ для відгаданих букв
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  let remainingLetters = word.length;
  let attempts = 2;
  


  if (btnStart) {
    console.log('good');
    console.log("attempts:", attempts)
    // Ігровий процес
    while (remainingLetters > 0 && attempts > 0) {
      // Показуємо гравцю його прогрес
      alert(answerArray.join(" "));
    
      // Отримуємо варіанти відповідей від гравця
      let guess = prompt("Вгадайте букву або натисніть «Скасувати», щоб припинити гру");

      console.log(guess.toLowerCase());
      if (guess === null) {
        // Виходимо з ігрового циклу
        break
      } else if (guess.length !== 1) {
        alert("Будь ласка, введіть одну літеру")
      } else {
        // Оновлюємо стан гри за допомогою змінного параметру guess
        for (let i = 0; i < word.length; i++) {
          if(word[i] === guess.toLowerCase()) {
            answerArray[i] = guess.toLowerCase();
            remainingLetters--;
          }
        }
        attempts--;
        console.log("attempts:", attempts)
      }
      // Кінець ігрового циклу
    }

    // Показуємо відповідь і вітаємо гравця
    if (attempts === 0) {
      alert('Нажаль ви витратили всі спроби. Спробуйте ще');
    } else {
      alert(answerArray.join(" "));
      alert("Хороша робота! Відповідь була " + word);  
    }
  }
}








