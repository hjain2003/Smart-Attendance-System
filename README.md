# Smart-Attendance-System
A smart attendance system using face recognition

How the application works:

ML oriented python libraries like dlib (initially an ML oriented C++ toolkit later ported to python), OpenCV, numPy, Face_Recognition and os were include in the python file being edited in spyder. The algorithm that used in the application follows finding, posing and encoding of the faces present in the frame.
To locate faces, we used the HOG (Histogram of Oriented Gradients) diagrammatic approach; where each pixel is used to create a vector pointing to the biggest change in gradient in that pixel’s neighborhood. These vectors are then analyzed to create a rough outline of the face. The formed histogram is then compared to a known HOG diagram, and if the patterns match, the computer will identify it.
Posing of the image is used when the subject’s face is not pointing directly at the camera. A deep convolutional neural network is used to locate 68 identifiable points on the human face, which are modified using dlib library in such a way that the object’s HOG diagram becomes similar to the ones in the database (here it’s a face) to allowing it to be identified by the computer, hence locating a face.
Encoding a face allows the computer to cross check the HOG diagram of the subject through a database which consists of pre-classified HOG diagrams, and if they match, the computer will display the information linked to the identified database item on the screen.

