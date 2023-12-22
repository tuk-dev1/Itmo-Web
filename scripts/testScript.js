document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const tableBody = document.getElementById('tableBody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const month = document.getElementById('month').value;
        const description = document.getElementById('description').value;

        const row = document.createElement('tr');
        row.innerHTML = `<td class="table_offer__field">${name}</td><td class="table_offer__field">${month}</td><td class="table_offer__field">${description}</td>
                         <td class="table_offer__field"><button class="deleteButton">Delete</button></td>`;

        tableBody.appendChild(row);

        form.reset();

        saveToLocalStorage();

        const deleteButton = row.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function () {
            tableBody.removeChild(row);
            saveToLocalStorage();
        });
    });

    function saveToLocalStorage() {
        const tableRows = Array.from(tableBody.children).map(row => ({
            name: row.children[0].innerText,
            month: row.children[1].innerText,
            description: row.children[2].innerText
        }));

        localStorage.setItem('tableData', JSON.stringify(tableRows));
    }

    function loadFromLocalStorage() {
        const savedData = localStorage.getItem('tableData');

        if (savedData) {
            const parsedData = JSON.parse(savedData);

            parsedData.forEach(data => {
                const row = document.createElement('tr');
                row.innerHTML = `<td class="table_offer__field">${data.name}</td><td class="table_offer__field">${data.month}</td><td class="table_offer__field">${data.description}</td>
                                 <td class="table_offer__field"><button class="deleteButton">Delete</button></td>`;
                tableBody.appendChild(row);

                const deleteButton = row.querySelector('.deleteButton');
                deleteButton.addEventListener('click', function () {
                    tableBody.removeChild(row);
                    saveToLocalStorage();
                });
            });
        }
    }

    loadFromLocalStorage();
});