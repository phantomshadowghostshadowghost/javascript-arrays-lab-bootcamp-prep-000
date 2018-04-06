const app = "I don't do much."
 kittens = ['Milo', 'Otis', 'Garfield']









 function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
 }
 function destructivelyPrependKitten(name){
   kittens.unshift(name)
   return kittens
 }
  
  function destructivelyRemoveLastKitten(){
    kittens.pop()
    return kittens
  }
  
 function destructivelyRemoveFirstKitten(name){
   kittens.shift()
   return kittens
 }
 
  function appendKitten(name){
    
    lmd = kittens.push(name)
    return lmd
  }

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
