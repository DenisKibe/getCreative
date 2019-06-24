//index page js
$('document').ready(function(){
    //trending posts
    for (var i=1; i<4; i++)
    {
        
        if(i==1){
            $('#trendingArt').append('<div class="tab-pane fade  show active" id="panel'+i+'" role="tabpanel"><div class="row"><div class="col-lg-4 col-md-4 p-2"><div class="card card-cascade narrower"><!--CARD IMAGe--><div class="view view-cascade gradient-card-header blue-gradient"><!--Title--><h2 class="card-header-title mb-3">Title of the news</h2><!--Text--><p class="mb-0 float-right"><i class="fa fa-calender mr-2"></i>26.07.2017</p><p class="mb-0 float-left black-text">by:<a href="#" class="black-text"><strong>John Doe</strong></a></p></div><!--card content--><div class="card-body card-body-cascade text-center"><!--Text--><p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p><!--Link--><a href="#" class="orange-text d-flex flex-row-reverse p-2"><h5 class="waves-effect waves-light">Read more<i class="fa fa-angle-double-right ml-2"></i></h5></a></div></div></div><div class="col-lg-4 col-md-4 p-2"><div class="card card-cascade narrower"><!--CARD IMAGe--><div class="view view-cascade gradient-card-header blue-gradient"><!--Title--><h2 class="card-header-title mb-3">Title of the news</h2><!--Text--><p class="mb-0 float-right"><i class="fa fa-calender mr-2"></i>26.07.2017</p><p class="mb-0 float-left">by:<a href="#" class="black-text"><strong>John Doe</strong></a></p></div><!--card content--><div class="card-body card-body-cascade text-center"><!--Text--><p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p><!--Link--><a href="#" class="orange-text d-flex flex-row-reverse p-2"><h5 class="waves-effect waves-light">Read more<i class="fa fa-angle-double-right ml-2"></i></h5></a></div></div></div><div class="col-lg-4 col-md-4 p-2"><div class="card card-cascade narrower"><!--CARD IMAGe--><div class="view view-cascade gradient-card-header blue-gradient"><!--Title--><h2 class="card-header-title mb-3">Title of the news</h2><!--Text--><p class="mb-0 float-right"><i class="fa fa-calender mr-2"></i>26.07.2017</p><p class="mb-0 float-left">by:<a href="#" class="black-text"><strong>John Doe</strong></a></p></div><!--card content--><div class="card-body card-body-cascade text-center"><!--Text--><p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p><!--Link--><a href="#" class="orange-text d-flex flex-row-reverse p-2"><h5 class="waves-effect waves-light">Read more<i class="fa fa-angle-double-right ml-2"></i></h5></a></div></div></div></div></div>');
            
        }
        else{
            
        
           $('#trendingArt').append('<div class="tab-pane fade" id="panel'+i+'" role="tabpanel"><div class="row"><div class="col-lg-4 col-md-4 p-2"><div class="card card-cascade narrower"><!--CARD IMAGe--><div class="view view-cascade gradient-card-header blue-gradient"><!--Title--><h2 class="card-header-title mb-3">Title of the thing</h2><!--Text--><p class="mb-0 float-right"><i class="fa fa-calender mr-2"></i>26.07.2017</p><p class="mb-0 float-left black-text">by:<a href="#" class="black-text"><strong>John Doe</strong></a></p></div><!--card content--><div class="card-body card-body-cascade text-center"><!--Text--><p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p><!--Link--><a href="#" class="orange-text d-flex flex-row-reverse p-2"><h5 class="waves-effect waves-light">Read more<i class="fa fa-angle-double-right ml-2"></i></h5></a></div></div></div><div class="col-lg-4 col-md-4 p-2"><div class="card card-cascade narrower"><!--CARD IMAGe--><div class="view view-cascade gradient-card-header blue-gradient"><!--Title--><h2 class="card-header-title mb-3">Title of the news</h2><!--Text--><p class="mb-0 float-right"><i class="fa fa-calender mr-2"></i>26.07.2017</p><p class="mb-0 float-left">by:<a href="#" class="black-text"><strong>John Doe</strong></a></p></div><!--card content--><div class="card-body card-body-cascade text-center"><!--Text--><p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p><!--Link--><a href="#" class="orange-text d-flex flex-row-reverse p-2"><h5 class="waves-effect waves-light">Read more<i class="fa fa-angle-double-right ml-2"></i></h5></a></div></div></div><div class="col-lg-4 col-md-4 p-2"><div class="card card-cascade narrower"><!--CARD IMAGe--><div class="view view-cascade gradient-card-header blue-gradient"><!--Title--><h2 class="card-header-title mb-3">Title of the news</h2><!--Text--><p class="mb-0 float-right"><i class="fa fa-calender mr-2"></i>26.07.2017</p><p class="mb-0 float-left">by:<a href="#" class="black-text"><strong>John Doe</strong></a></p></div><!--card content--><div class="card-body card-body-cascade text-center"><!--Text--><p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p><!--Link--><a href="#" class="orange-text d-flex flex-row-reverse p-2"><h5 class="waves-effect waves-light">Read more<i class="fa fa-angle-double-right ml-2"></i></h5></a></div></div></div></div></div>');
           
        }
        
        $('#pager').append('<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel'+i+'" role="tab"><strong>'+i+'</strong></a></li>');
    }
    
    
    //recent articles
    for (var i=0; i<4; i++)
    {
        if(i==0){
            $('#featuredArt').append('<div class="carousel-item active"><div class="col-md-4"><!--Excerpt--> <div class="card-body"><a href="" class="green-text"><h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5></a><h4 class="font-weight-bold mb-3">Title of the news</h4><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p><a class="btn btn-success btn-rounded btn-md"> View more</a></div></div><div class="col-md-4"><!--Excerpt--><div class="card-body"><a href="" class="green-text"><h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5></a><h4 class="font-weight-bold mb-3">Title of the news</h4><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p><a class="btn btn-success btn-rounded btn-md"> View more</a></div></div><div class="col-md-4"><!--Excerpt--><div class="card-body"><a href="" class="green-text"><h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5></a><h4 class="font-weight-bold mb-3">Title of the news</h4><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p><a class="btn btn-success btn-rounded btn-md"> View more</a></div></div></div>');            
            $('#indicate').append('<li data-target="#multi-item-example" data-slide-to="'+i+'" class="active"></li>');
       
        }
        else{
            $('#featuredArt').append('<div class="carousel-item"><div class="col-md-4"><!--Excerpt--> <div class="card-body"><a href="" class="green-text"><h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5></a><h4 class="font-weight-bold mb-3">Title of the news</h4><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p><a class="btn btn-success btn-rounded btn-md"> View more</a></div></div><div class="col-md-4"><!--Excerpt--><div class="card-body"><a href="" class="green-text"><h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5></a><h4 class="font-weight-bold mb-3">Title of the news</h4><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p><a class="btn btn-success btn-rounded btn-md"> View more</a></div></div><div class="col-md-4"><!--Excerpt--><div class="card-body"><a href="" class="green-text"><h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5></a><h4 class="font-weight-bold mb-3">Title of the news</h4><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p><a class="btn btn-success btn-rounded btn-md"> View more</a></div></div></div>');            
            $('#indicate').append('<li data-target="#multi-item-example" data-slide-to="'+i+'"></li>');
          
        }
        
        
    }
    /*
    //contents in the side navbar
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
    */
    
    $('#passLogin').on('focusout',function(){
        if($('#passLogin').val().length ==0){
            $('#passLogin').removeClass('valid').removeClass('invalid').addClass('validate');
            
        }
        else if($('#passLogin').val().length <6 && $('#passLogin').val().length>0){
            $('#passLabel').attr('data-error','less');
            $('#passLogin').addClass('invalid').removeClass('validate');
            
        }else
        {
            $('#passLabel').attr('data-success','good');
            $('#passLogin').addClass('valid').removeClass('invalid');
            
            
        }
        
        if($('#passLogin').hasClass('valid') && $('#emailLogin').hasClass('valid')){
            $('#btnLogin').removeClass('disabled');
        }
    });
    
    $('#btnLogin').click(function(){
       var email=$('#emailLogin').val();
       var passWord=$('#passLogin').val();
       
        $.ajax({
        url:'login.php',
        method:'POST',
        dataType:'json',
        data:JSON.stringify({'email':email,'password':passWord}),
        statusCode:{
            404: function()
            {
                'do something';
            }
        },
        success:function(){
           //append the writer button
           $('mainPart').append('<div class="fixed-action-btn" style="bottom: 45px; right: 24px;"><a class="btn-floating btn-lg red" href="writer.html"><i class="fa fa-pencil-alt"></i></a></div>');
   
           //change the image on the navbar on successful login
           $('#avatar').attr('src','img/layer1.jpg');
   
           //change the content of the dropdrop
           $('#ddContents').empty();
           $('#ddContents').append('<a class="dropdown-item" href="signup.html">Sign up</a>');

        },
        error:function(){
            alert('not yet');
        }
    });
    });
    
    
       
});