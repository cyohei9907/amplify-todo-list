#create react app
npx create-react-app@latest .
#install amplify app
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
#get amplify app model
amplify pull --sandboxId b8ee5d9a-bce4-42fb-9c69-141857278645

npm install aws-amplify