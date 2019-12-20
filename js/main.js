$(function() {
 
   $("#searchUser").on('keyup', function(e) {
      let username = e.target.value;
      
      
       $.ajax({
           url: 'https://api.github.com/users/' + username,
           data: {
               client_id: '137005615f01f731b5a5',
               client_secret: 'caaac37c45bb7d4e8743bbc796e0cc4099e8acbf'
           }
       }).done(function(user){
           
           $.ajax({
             url: 'https://api.github.com/users/' + username + '/repos',
               data: {
               client_id: '137005615f01f731b5a5',
               client_secret: 'caaac37c45bb7d4e8743bbc796e0cc4099e8acbf',
               sort: 'created: asc',
               per_page: 3
               }
                   
           }).done(function(repos){
               
           $.each(repos, function(i, repo) {
                   $("#repos").append(`
                    <div class="panel panel-default">
                    <div class="panel-body">
                        <h4>${repo.name}</h4>

                    <div class="col-md-12 spantop">
                                <span class="label label-default">Forks: ${repo.forks_count}</span>
                                <span class="label label-primary">Followers: ${repo.watchers}</span>
                                <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                            </div>

                            <div class="col-md-12">
                                <a target="_blank" id="viewvode" href="${repo.html_url}">View Code</a>
                            </div>
                    </div>
                    </div>
        
                `)   
      
           });
           });
           
           
           $('.show').html(`
            
        
            <div class="panel panel-default">
             
              <div class="panel-body">

                <div class="col-md-12">
                <h2 id="username">${user.name}</h2>
                </div>
                
                <div class="col-md-3">
                    <img class="thumbnail" src="${user.avatar_url}" alt="Avatar">
                    <a href="${user.html_url}" target="_blank" id="checkprofile" class="btn btn-danger btn-block">Check profile</a>
                </div>

                <div class="col-md-9">
                        <span class="label label-default">Public Repositories: ${user.public_repos}</span>
                        <span class="label label-success">Followers: ${user.followers}</span>
                        <span class="label label-info">Following: ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: <a target="_blank" href="${user.blog}"> ${user.blog}</a></li>
							<li class="list-group-item">Email: ${user.email}</li>
							<li class="list-group-item">GitHub: <a target="_blank" href="${user.html_url}"> ${user.html_url}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">User at: ${user.created_at}</li>
                    </div>
                
                    <div class="col-md-12">
                        <button id="moreinfo" class="btn btn-success">Check more</button>
                    </div>
              </div>
            </div>

            `)
           
                $('#moreinfo').on('click', function(e) {
                         e.preventDefault();
                       $('.showmore').fadeToggle();
                   });
           
          $('.showmore').html(`  
           
            <div id="info">
              <div class="panel panel-default">
              <div class="panel-body">
                <div class="col-md-12">
                 <h3 id="infoH3">Information</h3>
                </div>

                <div class="col-md-12">
                 <h4 id="colorH4">ID</h4>
                </div>
				
                <div class="col-md-12">
                 <p>${user.id}</p>
				<hr />

                <div class="col-md-12">
                 <h4 id="colorH4">About me</h4>
                </div>

                <div class="col-md-12">
                 <p>${user.bio}</p>
                </div>
                
              </div>
              </div>

        <div id="repos">
                <hr />
                <h3>Last Projects</h3>
                
            </div>
            </div>

        `)
       });
       
   });
    
    
    
});

