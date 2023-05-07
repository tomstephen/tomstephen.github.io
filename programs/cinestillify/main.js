let inputElement;
let userImage;

function setup() {
    canvas = createCanvas(400, 300);
    canvas.parent('sketch-container');

    inputElement = createFileInput(handleFile);
    inputElement.position(0, 0);

    processButton = createButton("Process Image");
    processButton.position(0, 30);
    processButton.mousePressed(processImage)
}

function processImage() {
    userImage.filter(THRESHOLD, 0.9);
}

function draw() {
    background(100);

    if (userImage != null) {
        let aspectRatio = userImage.width / width;
        let newHeight = userImage.height / aspectRatio;

        image(userImage, 0, 0, width, newHeight);
    }
}

function handleFile(file) {
    print(file);

    if (file.type === 'image') {
        userImage = loadImage(file.data)
    } else {
        userImage = null;
    }
}