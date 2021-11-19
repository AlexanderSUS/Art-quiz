onload ->
on hashchange ->

getLocation() = /#page /type /categoryId /pageNum ->

pageChanger() = REMOVE currentPage && ADD newPage ->

(toggleHomePageStyle()) ->

if newPage is not #home or #settings ->

pageProcessor() ->  

  stuffCategoryPage() -> add content and routes to category page 

  || 

  stuffQuestionPage() -> 

   cleanPreviousAnswers(); ->
   closeModalwindow(); ->
   getAnswers(); <- 
        getData() <-  {getByArtist, getDataByPicture()}
        <- shuffleAnswers() 
  ->
  add question to h4
  append answer's container
  add Images
  add Authors
  add link to modal

  append Modal



  ('.back-btn') .setAttribute('href', `#categories=${this.model.location.type}`)   



show currentPage
