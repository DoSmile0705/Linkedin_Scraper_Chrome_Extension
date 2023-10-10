from Main import app
from Main.set_url import setURL
from flask import render_template, request, jsonify
Season = ""
Series = ""
@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('popup.html')
@app.route('/index', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        getLinkedinUrl = request.form['linkedinUrl']
        url = setURL(getLinkedinUrl)
        print('This is URL:',url)
    return jsonify({'Error':'Missing Data' })
