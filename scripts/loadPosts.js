document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    const errorElement = document.getElementById("error");
    const table = document.getElementById("posts_table");

    const tableBody = table.createTBody();
    tableBody.id = "table-body";

    const urls = generateMultipleQueries(getRandIds());

    urls.forEach(url => fetchData(url));

    function getRandIds() {
        const start = Math.floor(Math.random() * 80);
        const segment = [];

        for (let i = start; i < start + 20; i++) {
            segment.push(i);
        }

        return segment;
    }

    function showPreloader() {
        preloader.style.display = "block";
    }

    function hidePreloader() {
        preloader.style.display = 'none';
    }

    function showError(message) {
        errorElement.textContent = message;
        content.appendChild(errorElement);
    }

    function fetchData(url) {
        showPreloader();

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                hidePreloader();
                renderData(data);
            })
            .catch(error => {
                hidePreloader();
                showError("Something went wrong: " + error.message);
            });
    }

    function renderData(post) {
        const tableBody = document.getElementById("table-body");

        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = post.id;
        cell2.textContent = post.title;
        cell3.textContent = post.userId;
    }

    function generateMultipleQueries(postIds) {
        return postIds.map(id => `https://jsonplaceholder.typicode.com/posts/${id}`);
    }
});