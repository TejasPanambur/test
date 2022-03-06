from flask import Flask, render_template, request,url_for,redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

app = Flask(__name__,static_url_path='/static')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.String(200),primary_key=True)
    label = db.Column(db.String(200),nullable=False)

    def __repr__(self):
        return '<Task %r>'% self.id

@app.route('/')
def index():
    return render_template('main.html')

@app.route('/test', methods=['POST'])
def test():
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(output['id'],output['label'])
    #task = Todo.query.get_or_404(output['id'])
    #print(task)
    new_task = Todo(id=output['id'],label=output['label'])
    try:
        db.session.merge(new_task)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was an error'

    #result = json.loads(output) #this converts the json output to a python dictionary
    #print(result) # Printing the new dictionary
    #print(type(result))#this shows the json converted as a python dictionary
    return output


if __name__ == '__main__':
    app.run(debug=True)