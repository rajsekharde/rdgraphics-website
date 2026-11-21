// Copy email address
const copyBtn = document.getElementById("copyEmailBtn");
if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("rdgraphics3d@gmail.com");
            copyBtn.textContent = "Copied";
            setTimeout(() => {
                copyBtn.textContent = "Copy";
            }, 2000);
        } catch {
            copyBtn.textContent = "Copy failed";
        }
    });
}