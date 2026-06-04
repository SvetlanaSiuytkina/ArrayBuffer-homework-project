export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }
  
  load(buffer) {
    this.buffer = buffer;
  }
  
  toString() {
    if (!this.buffer) {
      throw new Error('Буфер не загружен');
    }

    const bufferView = new Uint16Array(this.buffer);
    const chars = [];

    for (let i = 0; i < bufferView.length; i++) {
      chars.push(String.fromCharCode(bufferView[i]));   //
    }
  }
}
