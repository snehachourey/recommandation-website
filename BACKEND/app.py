from flask import Flask,jsonify
from Data.questions import questions

app = Flask(__name__)

@app.route('/')
def hello():
    return "hello world"

@app.route('/questions')
def get_questions():
    return jsonify(questions)
  
if __name__== "__main__":
 app.run(debug=True)
     
