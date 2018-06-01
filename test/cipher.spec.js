describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 'HIJKLMNOPQRSTUVWXYZABCDEFG');

    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdef g" para "abcdefghijklmnopqrstuvwxy z" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxy z"), 'hijklmnopqrstuvwxyzabcdef g');

    });




  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxy z" para "hijklmnopqrstuvwxyzabcdef g" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdef g"), "abcdefghijklmnopqrstuvwxy z");

    });



    describe('cipher.createCipherWithOffset', () => {
      it('deberia ser una funcion', () => {
        assert.equal(typeof cipher.createCipherWithOffset, 'function');
      });
      it('deberia retornar un objeto con dos funciones(encode,decode)con offset fijo', () => {
        assert.property(cipher.createCipherWithOffset(33), 'encode');
        assert.property(cipher.createCipherWithOffset(33), 'decode');

      });
      it('Deberia retornar funciones', () => {
        assert.equal((cipher.createCipherWithOffset(33)).encode("abc"), cipher.encode(33, "abc"));
        assert.equal((cipher.createCipherWithOffset(33)).decode("abc"), cipher.decode(33, "abc"));

      });
    });
  });
});
