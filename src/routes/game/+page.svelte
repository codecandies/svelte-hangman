<script>
  import LetterInput from '$lib/components/LetterInput.svelte';
  import Tries from '$lib/components/Tries.svelte';
  import Word from '$lib/components/Word.svelte';
  import { answer } from '$lib/stores';
  import { question } from '$lib/stores';
  import { tries } from '$lib/stores';

	/** @type {import('./$types').PageData} */
	export let data;

  function updateAnswer(oldAnswer) {
    let newAnswer = oldAnswer || [];

    return newAnswer;
  }

  function generateAnswer() {
    if($answer.length < 1) {
      answer.set(Array($question.length).join(".").split("."));
    }
  }

  function notifyHandler( event ) {
    const letter = event.detail;
    console.log('notify', letter, $question, $answer);
    const index = $question.indexOf(letter);
    if ( index > -1 ) {
      $question.forEach((questionLetter, index) => {
        if (questionLetter === letter) {
          answer.update((a) => {
            a[index] = letter;
            return a;
          });
        }
      });
    } else {
      tries.update((n) => {
        return n > 0 ? n -1 : 0;
      });
    }
  }

  $: {
    question.set(data.word.split(''));
    generateAnswer();
  }
</script>

<h1>Hangman-Spiel</h1>
<p>Das Wort des Tages lautet:</p>
<Word {question} {answer}></Word>
<LetterInput on:notify={notifyHandler}></LetterInput>
<Tries></Tries>
<p><a href="/">Zurück</a></p>
