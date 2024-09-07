fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersContainer = document.getElementById('users-container');
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.className = 'user-block';
            userBlock.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                    <a href="user-details.html?userId=${user.id}" class="details-button">View Details</a>
                `;
            usersContainer.appendChild(userBlock);
        });
    });

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userDetails = document.getElementById('user-details');
            userDetails.innerHTML = `
                    <h2>User Details</h2>
                    <p>ID: ${user.id}</p>
                    <p>Name: ${user.name}</p>
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Address: ${user.address.street}, ${user.address.city}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                    <p>Company: ${user.company.name}</p>
                `;

            document.getElementById('user-posts-button').addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postsContainer = document.getElementById('posts-container');
                        postsContainer.innerHTML = '';  // Clear any previous posts
                        posts.forEach(post => {
                            const postBlock = document.createElement('div');
                            postBlock.className = 'post-block';
                            postBlock.innerHTML = `
                                    <p>Title: ${post.title}</p>
                                    <a href="post-details.html?postId=${post.id}" class="details-button">View Post</a>
                                `;
                            postsContainer.appendChild(postBlock);
                        });
                    });
            });
        });
}

const postId = urlParams.get('postId');

if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetails = document.getElementById('post-details');
            postDetails.innerHTML = `
                    <h2>Post Details</h2>
                    <p>ID: ${post.id}</p>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>
                `;

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(comments => {
                    const commentsContainer = document.getElementById('comments-container');
                    comments.forEach(comment => {
                        const commentBlock = document.createElement('div');
                        commentBlock.className = 'comment-block';
                        commentBlock.innerHTML = `
                                <p>Name: ${comment.name}</p>
                                <p>Email: ${comment.email}</p>
                                <p>Body: ${comment.body}</p>
                            `;
                        commentsContainer.appendChild(commentBlock);
                    });
                });
        });
}

