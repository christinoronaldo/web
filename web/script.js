document.addEventListener('DOMContentLoaded', () => {
    const usernameElement = document.getElementById('usernameElement');
    const profilePictureElement = document.getElementById('profilePictureElement');
    const videoElement = document.getElementById('videoElement');
    const titleElement = document.getElementById('titleElement');
    const likesElement = document.getElementById('likesElement');
    const commentsElement = document.getElementById('commentsElement');
    const postDateElement = document.getElementById('postDateElement');
    const musicTitleElement = document.getElementById('musicTitleElement');
    const loadDataButton = document.getElementById('loadDataButton');

    function playVideo(url) {
        videoPlayer.src = url;
        videoPlayer.load();  
        videoPlayer.play();  
    }

    async function loadData() {
        try {
            const response = await fetch('http://localhost:3000/api/recive'); 
            if (response.ok) {
                const data = await response.json();

                usernameElement.textContent = `Username: ${data.username}`;
                profilePictureElement.src = data.profilePicture;
                playVideo(data.videoUrl)
                titleElement.textContent = `Title: ${data.title}`;
                likesElement.textContent = `Likes: ${data.likes}`;
                commentsElement.textContent = `Comments: ${data.comments}`;
                postDateElement.textContent = `Posted on: ${data.postDate}`;
                musicTitleElement.textContent = `Music Title: ${data.musicTitle}`;
            } else {
                console.error('Error retrieving data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    loadData();
});