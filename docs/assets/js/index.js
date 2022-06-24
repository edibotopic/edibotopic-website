document.addEventListener("DOMContentLoaded", () => {
    progressFunc();
});

/**
 * Progress bar on post pages.
 */
function progressFunc() {
    const docElem = document.documentElement;
    const docBody = document.body;

    // elements
    const progress = document.getElementById("progress");

    progress &&
        document.addEventListener("scroll", () => {
            const top = docElem["scrollTop"] || docBody["scrollTop"];
            const height = docElem["scrollHeight"] || docBody["scrollHeight"];
            const scroll = (top / (height - docElem.clientHeight)) * 100;
            // update progress
            progress.style.setProperty("--scroll", `${scroll}%`);
            // progress.style.setProperty("background-color", `violet`);
        });
}
