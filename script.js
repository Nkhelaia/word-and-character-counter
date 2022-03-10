const textArea = document.getElementById('content');
const characterCount = document.getElementById('characterCount');
const wordsCount = document.getElementById('wordsCounter');

textArea.oninput = () => {
    let characters = textArea.value;

    characterCount.textContent = characters.replace(/\s/g, '').length;

    let words = textArea.value.split(' ').filter((item) => {
        return item != '';
    });
    wordsCount.textContent = words.length;
}    