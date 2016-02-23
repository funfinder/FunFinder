Scrum Master
1. Create development branch from master Repo
2. Make development branch the Default branch

Team Member Setup
1. Fork the Repo from https://github.com/funfinder/FunFinder
2. Delete your master branch
3. Clone the repo to your local machine
4. 'git checkout -b #your new branch name#''
5. 'git remote add upstream https://github.com/funfinder/FunFinder.git'

Push new Feature
1. 'git add #filename#'
2. 'git commit -m #"[Feature/File] Add/Remove/Modify: short description"#'
3. 'git pull --rebase upstream development'
4. Resolve conflicts if any.
5. if resolved any conflicts redo git add , commit and then push.
5. 'git push origin #your branch name#'
6. Pull request from github website to FunFinder: development Branch.

Deploy
1. Pull Request from development to master
2. rebuild the master branch
3. 'git push heroku'
4. 'heroku ps:scale web=1'
5. 'heroku open'
