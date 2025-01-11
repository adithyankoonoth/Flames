document.getElementById('flamesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/ /g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/ /g, '');

    let combined = name1 + name2;
    let uniqueLetters = [...new Set(combined)];
    let remainingCount = combined.length - uniqueLetters.length;

    const flames = ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sister'];
    let resultIndex = remainingCount % flames.length;

    document.getElementById('result').innerText = `Result: ${flames[resultIndex]}`;
});