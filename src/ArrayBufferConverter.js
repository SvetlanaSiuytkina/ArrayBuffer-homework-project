export default ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }
  
  load(buffer) {
    this.buffer = buffer;
  }
  
  toString() {
    if (this.buffer === null) {
      throw new Error('Буфер не загружен')
    }

    const bufferView = new Uint16Array(buffer);
  }
}