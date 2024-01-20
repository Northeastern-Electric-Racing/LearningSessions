# Linux CLI and VSCode

Welcome to Northeastern Electric Racing's Linux and CLI Capture the Flag!!!!!

We will guide you through the most popular Linux commands to find some secret flags, there are ten in total.

Once you have gotten all flags you will have won!

### Pulling the docker container

run ```docker pull mckeep/linuxcli```

This command pulls the docker container from docker hub, specifically Peyton's Docker Hub which the image is stored remotely

### Running the docker Container

run ```docker run -it mckeep/linuxcli```

This runs the docker image, -i is for interactive mode which is what allows you to enter into the image

You should notice that your terminal looks different, it should look like this ```root@39a7702d90de:/#```

Lets break this down, 
- root -> the user in the image
- @ -> specifies the connection between the user and the tag of the image
- 39a7702d90de -> the tag the image is on
- :/# -> the directory you are currently in "#" is the root directory

### Working in the container
run ```ls```

ls stands for list, it lists all the non hidden directories and files in your current directory

You should see the linux kernel root, we will discuss this more in a later learning session

run ```cd home```

cd stands for change directory, it enters into the directory you supply it

This is the home directory where the users are stored, since theres only a root user, there are no users here, you should make yourself a user directory

run ```mkdir <your name>```

Now run ```ls```

You should see your newly created directory

go into your newly created directory. 

run ```touch flags.txt```

this creates a new text file called flags

run ```nano flags.txt```

nano is a text editor software that is very straightforward compared to other cli text editors such as vim.

You will see that the file is empty, this will be where you store your flags, its time to get your first one

quit out of the program by entering ```control x```

now run ```ls -l```

#### Flag 1
this shows the permissions of all the files in your directory, we discussed permissions in the lecture.

The resulting line is your first flag, you can copy and paste the line into your flags.txt file and saving the file when you exit out of it. 

#### Flag 2 

navigate to the witch_hunt directory, which is under the fun directory in the root directory using the skills you have learned. There you should find a txt file with your next flag, add this flag back to your flags.txt file. 

#### Flag 3

For the next flag we want to know the location of a file in our system. The file is called ```wahoo.txt``` we can accomplish this with the ```find``` command, a useful tool when it comes to something like this is chatgpt, which everyone should have access to through their husky email. I would consult chatgpt on how to find the path to this file in our linux system.

Enter this path into your flags.txt file

#### Flag 4

Now I've been tricking you all right underneath your nose. Theres a secret secret flag in the root directory of the kernel thats JUST BEEN SITTING THERE AND YOU HAD NO IDEA HAHAHAHAHAHHAHAHAHHAHAHAHAHAAH. Try to find it: hint id look at the ```ls --help``` option guide. 