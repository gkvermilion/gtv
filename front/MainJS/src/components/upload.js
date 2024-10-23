export function renderUpload() {
    // const content = document.getElementById('main-content');
    const upload = document.getElementById('main-content');

    upload.innerHTML = `
        <div class="upload-container">
            <h1 class="upload-title">Upload video</h1>
            <div class="upload-content">
                <div class="upload-area">
                    <i data-lucide="upload-cloud" class="upload-icon"></i>
                    <p>Drag and drop video files to upload</p>
                    <p>Your videos will be private until you publish them.</p>
                    <label for="file-input" class="btn btn-primary">SELECT FILES</label>
                    <input type="file" id="file-input" accept="video/*" style="display: none;">
                </div>
                <form id="upload-form" class="upload-form">
                    <div class="form-group">
                        <label for="title">Title (required)</label>
                        <input type="text" id="title" name="title" required>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" name="description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="thumbnail">Thumbnail</label>
                        <input type="file" id="thumbnail" name="thumbnail" accept="image/*">
                    </div>
                    <div class="form-group">
                        <label for="playlist">Playlist</label>
                        <select id="playlist" name="playlist">
                            <option value="">None</option>
                            <option value="music">Music</option>
                            <option value="vlogs">Vlogs</option>
                            <option value="gaming">Gaming</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Audience</label>
                        <div class="radio-group">
                            <input type="radio" id="yes-kids" name="audience" value="yes">
                            <label for="yes-kids">Yes, it's made for kids</label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" id="no-kids" name="audience" value="no" checked>
                            <label for="no-kids">No, it's not made for kids</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Privacy</label>
                        <div class="radio-group">
                            <input type="radio" id="private" name="privacy" value="private" checked>
                            <label for="private">Private</label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" id="unlisted" name="privacy" value="unlisted">
                            <label for="unlisted">Unlisted</label>
                        </div>
                        <div class="radio-group">
                            <input type="radio" id="public" name="privacy" value="public">
                            <label for="public">Public</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Upload</button>
                </form>
            </div>
        </div>
    `;
    // content.appendChild(upload);

    // Add event listeners
    const fileInput = document.getElementById('file-input');
    const uploadForm = document.getElementById('upload-form');
    const uploadArea = document.querySelector('.upload-area');

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            uploadArea.textContent = `Selected file: ${e.target.files[0].name}`;
        }
    });

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            uploadArea.textContent = `Selected file: ${e.dataTransfer.files[0].name}`;
        }
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Video upload simulation complete!');
    });

    // Initialize Lucide icons
    lucide.createIcons();

}