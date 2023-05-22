let data = []

load_data()

function load_data() {
    try {

        fetch('data/vocabulary.json')
            .then(response => {
                return response.json()
            })
            .then(result => {
                data = shuffleArray(result)              
                show_data()
            })
    } catch (error) {
        console.log(error)
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  

function show_data() {
    const table_body = document.querySelector('#table_body')

    table_body.innerHTML = ''
    data.forEach(word => {
        table_body.innerHTML += `
                    <tr>
                        <td>${word.word}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="play_audio('${word.word}')">
                                <i class="bi bi-volume-up"></i>
                            </button>
                        </td>
                        <td>${word.translate}</td>
                    </tr>
                `
    })
}

function play_audio(word) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    utterance.lang = 'en-US'; // Establece el idioma en inglés (en-US)

    // Reproduce la pronunciación
    speechSynthesis.speak(utterance);
}

function play_audio_es(word) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    utterance.lang = 'es-ES'; // Establece el idioma en inglés (en-US)

    // Reproduce la pronunciación
    speechSynthesis.speak(utterance);
}

function play_all() {
    data.forEach(word => {
        play_audio(word.word)
        play_audio_es(word.translate)
    })
}