class ImageLoader {
  constructor(imageWidth, imageHeight) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = imageWidth;
    this.canvas.height = imageHeight;
    this.ctx = this.canvas.getContext('2d');
  }
  async getImageData(url) {
    await this.loadImageAsync(url);
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    return imageData;
  }
  loadImageAsync(url) {
    return new Promise((resolve, reject) => {
      this.loadImageCb(url, () => {
        resolve();
      });
    });
  }
  loadImageCb(url, cb) {
    const img = new Image();
    Object.assign(img, {
      maxWidth: this.canvas.width,
      maxHeight: this.canvas.height,
      cover: true,
      crop: true,
      canvas: true,
      crossOrigin: 'Anonymous',
    });

    img.onload = () => {
      if (img.type === 'error') throw `Could not load image: ${url}`;
      else {
        this.ctx.drawImage(img, 0, 0)
        window.setTimeout(() => { cb(); }, 0);
      }
    }
    img.src = url;
  }
}

export default ImageLoader; 