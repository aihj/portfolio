from flask import Flask

import os

 
# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/data')
def get_time():


    path = 'C:/Users/hmcte/Desktop/portfolio/image'

    img_path = path +'/'+ os.listdir(path)[-1]
 
    # Returning an api for showing in  reactjs
    return {
    
        "Path": img_path,
        "Result": 0
        }
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)