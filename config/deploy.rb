set :application, "fundoo-t"
set :scm, :git
set :scm_verbose, true
set :repository,  "git@github.com:davender112/new_project_testing.git"
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`
set :deploy_via, :checkout

set :runner, 'root'
set :use_sudo, false
set :user, 'root'
set :password, 'qwerty7890'

set :deploy_to, "/home/fundoo-t/#{application}"
default_run_options[:pty] = true

role :app, "106.187.50.34"
role :web, "106.187.50.34"
role :db,  "106.187.50.34", :primary => true

#role :web, "your web-server here"                          # Your HTTP server, Apache/etc
#role :app, "your app-server here"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end