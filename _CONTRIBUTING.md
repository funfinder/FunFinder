Scrub Master
1. Create development Branch from master Repo
2. Make development Branch Default Branch

Team Member Setup
1. Fork the Repo from https://github.com/funfinder/FunFinder
2. Delete master Branch
3. Clone the repo to your local
4. git checkout -b #your new branch name#
5. 'git remote add upstream https://github.com/funfinder/FunFinder.git'

Push new Feature
1. git add
2. git commit -m #Comment here#
3. git pull --rebase upstream development
4. resolve conflict .
5. git push origin #byour branch name#
6. pull request from github website to FunFinder: development Branch.

Depoly
1. Pull Request from development
