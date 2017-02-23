class Person
  
  constructor:(@firstName, @lastName, @age)->

  getFullName: ()->
    "#{@firstName} #{@lastName}"

  getAge: ()->
    @age

module.exports = Person


#exports.aa = () -> "20"