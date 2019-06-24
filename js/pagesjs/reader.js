//reader js

$(document).ready(function(){
    /*if user is logged in show the
    ii)notifications on the top nav
    iii) change content of the dropdown and images
    */
    
   /* if(logged in){
        //follow button
        $('#btmNav').append('<div class="col-3 col-md-3 text-center purple-text font-weight-bold"><button class="btn btn-sm btn-rounded btn-outline-primary">follow</button></div>');
        
        //notifications
        $('#topNav').prepend('<li class="nav-item "><a class="nav-link waves-effect waves-light btn btn-default py-1" tabindex="0" html="true" data-toggle="popover" data-trigger="focus" data-placement="top" title="popover on top"data-content="Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.">1<i class="fa fa-bell"></i> <span class="badge badge-danger ml-2" id="notify">9</span></a></li>');
        
        //change picture
        
        $('#avatar').attr('src','img/layer1.jpg');
   
        //change the content of the dropdrop
        $('#ddContents').empty();
        $('#ddContents').append('<a class="dropdown-item" href="signup.html">Sign up</a>');
   
        
    
    }*/
    
    //the like button
    $('#like').click(function(event){
        event.preventDefault();
       /* if(not logged in){
            toastr.warning('Login first to like this article!','warning',{"preventDuplicates": true,"closeButton": true});
        }else{
            //send ajax request to like the article
            var articleId=;
            
            $.ajax({
               url:'',
               method:'Get',
               dataType:'json',
               data:'',
               statusCode:{
                  404: function()
                      {
                         'do something';
                      }
                },
               success:function(){
           
                },
               error:function(){
            
                }
            });
        }
        
        */
        
        
        
        
        

        
        
    });
    
});