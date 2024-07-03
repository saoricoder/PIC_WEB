document.getElementById('gradeForm').addEventListener('submit', function(event) {
    let grade = document.getElementById('grade').value;
    if (grade < 0 || grade > 100) {
        event.preventDefault();
        alert('La nota debe estar entre 0 y 100.');
    }
});
