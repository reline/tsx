# Setup
https://reactnative.dev/docs/getting-started

Install `node` and `watchman` using `brew`
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew install node
brew install watchman
```

Get TypeScript
```
npm install -g typescript
```

## iOS
Ensure you have XCode installed

Install `cocoapods` using `gem`. It is recommended to install the ruby environment manager as well.
```
brew install rbenv ruby-build
```

~/.bash_profile
```
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
```

```
source ~/.bash_profile

rbenv install {version}
rbenv global {version}
gem update --system
gem install cocoapods
```

## Android
Ensure you have Android Studio installed

Download the jdk
```
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

~/.bash_profile
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
```
source ~/.bash_profile
```

## Almost there
```
git clone https://github.com/reline/tsx && cd tsx
npm install

npx react-native {run-ios} {run-android}
```