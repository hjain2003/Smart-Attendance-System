# Smart-Attendance-System
A smart attendance system using face recognition

How the application works:

ML oriented python libraries like dlib, OpenCV, numPy, Face_Recognition and os were included in the python file being edited in spyder.

#IDENTIFICATION
To locate faces, we used the HOG (Histogram of Oriented Gradients) diagrammatic approach; where each pixel is used to create a vector pointing to the biggest change in gradient in that pixel’s neighborhood. These vectors are then analyzed to create a rough outline of the face. The formed histogram is then compared to a known HOG diagram, and if the patterns match, the computer will identify it.

#STORING
The names of the faces that were being captured by the camera are stored in a csv file along with the date and time.

#WEBSITE
The data being stored in the csv file is converted to a json object which is then being fetched by the website. A student/teacher can view his/her attendance record by typing in their roll numbers. The json file gets updated in sync with the csv file.


