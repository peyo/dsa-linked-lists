class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

module.exports = _Node