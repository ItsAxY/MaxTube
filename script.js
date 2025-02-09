document.addEventListener("DOMContentLoaded", () => {
    function loadVideos() {
        const videoList = document.getElementById("videoList");
        const videoFolder = "videos/"; // Folder containing the videos
        const videoFiles = ["video1.mp4", "video2.mp4", "video3.mp4"]; // Manually list videos
        
        if (videoFiles.length === 0) {
            videoList.innerHTML = "<p>No videos available.</p>";
            return;
        }
        
        videoFiles.forEach(filename => {
            const videoContainer = document.createElement("div");
            videoContainer.classList.add("video-container");
            videoContainer.innerHTML = `
                <div class="video-title">${filename}</div>
                <video controls>
                    <source src="${videoFolder}${filename}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            videoList.appendChild(videoContainer);
        });
    }

    loadVideos(); // Load videos instantly on page load
});
