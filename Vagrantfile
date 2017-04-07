
  Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
   config.vm.box_check_update = false

 
   config.vm.network "forwarded_port", guest: 456, host: 456
   #config.vm.network "forwarded_port", guest: 27017, host: 27017
   #config.vm.network "forwarded_port", guest: 6379, host: 6379
   #config.vm.network "forwarded_port", guest: 5858, host: 5858

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
   config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
   #config.vm.provider "virtualbox" do |vb|
 
   #vb.gui = true
   #vb.memory = "1024"
   #end
   #config.vm.provision "docker" do |d|

    #d.pull_images "mongo"

    #d.build_image "/home/core/share/", args: '-t "app"'

    #d.run "mongo", args: '-p "27017:27017"'

    #d.pull_images "redis"
    
    #d.run "redis", args: '-p "6379:6379"'
   #end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
   
   #config.vm.provision "shell", inline: <<-SHELL
     #apt-get update
     #apt-get install -y apache2
	 #sudo apt-get update
     #cd ~ && sudo curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
     #sudo bash nodesource_setup.sh
     #sudo apt-get update
     #sudo curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     #sudo chmod +x /usr/local/bin/docker-compose
     #sudo docker-compose --version
     #sudo apt-get install -y g++
     #sudo apt-get install -y build-essential
     #sudo apt-get install -y ranger
    # sudo apt-get install -y htop
    # sudo apt-get install -y nodejs
    # sudo npm install -g yarn
    # sudo npm install -g rimraf
     #sudo npm install -g nodemon
     #sudo npm install -g ionic
     #sudo npm install -g cordova
     #sudo npm install -g node-inspector
     #sudo npm install -g gulp
     #sudo npm install -g webpack
     #sudo npm install -g bower
     #sudo npm install -g protractor
     #sudo npm install -g rollup
     #sudo npm install -g typescript
     #sudo apt-get update
     #sudo apt-get -y upgrade
	 
	 #cd /vagrant && sudo npm rebuild 

    ############# BUILD APP ################### 
      #cd /vagrant && sudo rm -r node_modules && sudo npm i
     #cd /vagrant && sudo rm -r node_modules && sudo yarn install
      #cd /vagrant/client/mobile && sudo rm -r node_modules && sudo npm i
     #cd /vagrant/client/mobile && sudo rm -r node_modules && sudo yarn install
      #cd /vagrant/client/mobile && sudo npm run builddev
     #cd /vagrant/client/mobile && sudo yarn run builddev

    ############# INITIALIZE APP ###################
   #SHELL
end
