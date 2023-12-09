(function() {
    const startTime = performance.now();
    function displayLoadingTime() {
        const endTime = performance.now();
        const loadingTime = endTime - startTime;
        const loadingStats = document.getElementById("loading-stats");
        loadingStats.innerHTML = `Page loaded in ${loadingTime.toFixed(3) / 1000} seconds`;
    }

    window.addEventListener('load', displayLoadingTime);
})();