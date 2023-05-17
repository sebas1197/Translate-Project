load_data()

function load_data() {
    try {

        const table_body = document.querySelector('#table_body')

        fetch('data/vocabulary.json')
            .then(response => {
                return response.json()
            })
            .then(result => {
                table_body.innerHTML = ''
                result.forEach(word => {
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
            })
    } catch (error) {
        console.log(error)
    }
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
    try {

        fetch('data/vocabulary.json')
            .then(response => {
                return response.json()
            })
            .then(result => {
                result.forEach(word => {
                    play_audio(word.word)
                    play_audio_es(word.translate)
                })
            })
    } catch (error) {
        console.log(error)
    }
}