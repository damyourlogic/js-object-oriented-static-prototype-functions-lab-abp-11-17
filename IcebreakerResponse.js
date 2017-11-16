function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  let returns = []
  emails.forEach(function(email){
    returns.push(new IcebreakerResponse(email))
  })

<<<<<<< HEAD

=======
  
>>>>>>> 0f52ba8c01fb976c4dcacf4a3b702766d342d9d4


  return returns
  new IcebreakerResponse(email)
}

let icebreaker = IcebreakerResponse.BatchCreate(email)
