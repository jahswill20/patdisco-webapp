document.addEventListener('DOMContentLoaded', () => {
    const uploadContainer = document.getElementById('upload-container');
    const fileInput = document.getElementById('file-input');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadText = document.getElementById('upload-text');
    const textSpan = document.getElementById('text-span');
    const textContent = document.getElementById('textContent');
    const uploadedFileDetails = document.getElementById('uploaded-file-details');
    const uploadedFilename = document.getElementById('uploaded-filename');
    const uploadedFilesize = document.getElementById('uploaded-filesize');
    const downloadIcon = document.getElementById('download-icon');
    const removeIcon = document.getElementById('remove-icon');

    const showUploadedFile = (file) => {
        uploadText.textContent = `${file.name}`;
        uploadIcon.src = '../icons-images/image.png';
        uploadContainer.classList.add('hidden');
        uploadedFileDetails.classList.remove('hidden');
        uploadedFileDetails.classList.add('flex')
        uploadedFilename.textContent = file.name;
        uploadedFilesize.textContent = `(${(file.size / 1024).toFixed(2)} KB)`;

        // Set up download icon click to download the file
        downloadIcon.addEventListener('click', () => {
            const url = URL.createObjectURL(file);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        // Set up remove icon click to reset upload
        removeIcon.addEventListener('click', resetUpload);
    };

    const resetUpload = () => {
        uploadIcon.src = '../icons-images/Vector (2).png';
        uploadText.textContent = 'Drag and drop files here or click to upload';
        textContent.textContent = 'Your ticket will be scanned and populated';
        uploadContainer.classList.remove('hidden');
        uploadedFileDetails.classList.add('hidden');
        fileInput.value = ''; // Clear the file input value
    };

    // Handle click event to open file selector
    uploadContainer.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            showUploadedFile(file);
        }
    });

    // Handle drag and drop events
    uploadContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadContainer.classList.add('border-gray-300');
    });

    uploadContainer.addEventListener('dragleave', () => {
        uploadContainer.classList.remove('border-gray-300');
    });

    uploadContainer.addEventListener('drop', (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            showUploadedFile(file);
        }
    });
});
