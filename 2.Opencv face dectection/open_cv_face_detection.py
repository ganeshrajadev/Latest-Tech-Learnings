import cv2
# loading haarcascade to detect frontal face
cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

video = cv2.VideoCapture('data/avengers.mp4')  # Load video

while True:
    rect, img = video.read()  # Read the video
    if not rect:
        break
    # Convert RGB to Gray to detect edges
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = cascade.detectMultiScale(gray, 1.35, 7)  # Detect possible faces
    if faces is not ():  # List is not empty
        for x, y, w, h in faces:  # Draw Rect in all faces
            cv2.rectangle(img, (x, y), (x+w, y+h), (127, 0, 255), 2)
    cv2.imshow('img', img)  # Display the image
    k = cv2.waitKey(30)
    if k == 27:  # if key pressed is escape quit
        break

video.release()  # release the video
