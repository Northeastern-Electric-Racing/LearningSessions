### QT/QML Learning Session

Today you will be learning how QML works within Qt. The scope of this demo does not contain signal and slot receptors, or any complex functionality within C++. No C++ Knowledge is required or used in this learning session

We will be implementing settings for the dice example in qt creator.

Open Qt Creator

Choose open project and navigate to this directory, then dice and open the ```CMakeLists.txt``` file to load the project. 

Once the project is loaded select the proper kit for your operating system/qt version in order to configure your project. 

Once the configuration is complete you should see your project directory. 

At the top you will see your CMakeLists.txt file this is the file that is responsible for building your project and interacting with your qt version. It is where you declare all your source code files for cmake to compile. 

Enter into the CMakeLists.txt file you will see some autogenerated code that qt creates to configure the project.

Navigate to the find_package statement on line 13. This is where your program tells qt what packages it will need in order to compile your application. We are working with 3d physics so in addition to the core, gui, and quick libraries that are needed to run a qml application there is also quick3d and quick3dphysics which are libraries used for managing 3d applications

then navigate to target_link_libraries and you will see that these libraries are linked here

The important part of the CMakeLists is your resource files, these determine all the files your project is going to use to run your program. You will see all the qml files that are included along with all the images that are being used and meshes. 

Try building and running your program by pressing the green arrow in the bottom left of qt creator. If you open application output you should see an error that your code wasn't able to find the drawercontent component. This is because you need to add DrawerContent.qml to your resources. 

Once you do that your code should compile and run. 

Play around with the game for a little bit, youll notice that some of the sliders dont work and theres only two options for the gravity. We will be implementing these features ourselves. 

Open `Main.cpp` under `source files`, you will see that we create a QQmlApplicationEngine and then load our `main.qml` resource. 

open `main.qml`, you will see that its our applicationwindow and the root element of our QML Application. 

Youll see some settings and some functions that need to be filled in, in order for the settings to actually work. 

We won't start here but if you scroll down to the drawer, you will see a DrawerContent component, right click on that to open the file. 

Here we will start by filling out the onValueChanged property for the dynamicFrictionSlider. 

This should look almost identitcal to the staticFrictionSlider onValueChanged property. 

Once thats filled out we can go back to main.qml and fill out the setDynamicFriction function to set the settingsDynamicFriction property on the scene component to link the slider to the scene's settings. 

if you do that and then run the app and change the slider you should notice that the dice will roll further when the slider is closer to the left and stop quicker when the slider is to the right. 

Now go back to DrawerContent file and create the restitutionSlider in the same way that the dynamic friction slider and static friction slider are made, then fill out the function in main.qml to link the value to the scene's settings

The last part you will do is create radio buttons for moon and mars gravity using the scenes updateGravity function. Look at how the earth and zero radio buttons are implemented and the value that the function is expecting in main.qml

Run the app, all the settings should be working correctly now. 

If you want to look through the other files to see how the physics are implemented feel free to, youll notice that theres not a whole lot of code, thats the glory of qt/qml, it handles a bunch of the physics and logic in its own libraries and you just have to call their functions/ use their components

Now you understand the basic of QML within qt context, but theres still a bunch more to learn like linking c++ files with qml files to handle more complex business logic with signals and slots, however that will not be covered in this learning session as this is to get you familiar with QML.

Thanks for learning!

Northeastern Electric Racing
