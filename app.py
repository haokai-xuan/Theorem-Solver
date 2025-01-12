from flask import Flask, render_template, request
from algorithms import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/gcd', methods=['GET', 'POST'])
def gcd_route():
    if request.method == 'POST':
        try:
            a = int(request.form['a'])
            b = int(request.form['b'])
            result = gcd(a, b)
            return render_template('gcd.html', result=result)
        except ValueError:
            return render_template('gcd.html', error="Invalid input! Please enter integers.")
    return render_template('gcd.html')


@app.route('/lindio', methods=['GET', 'POST'])
def lindio_route():
    if request.method == 'POST':
        try:
            a = int(request.form['a'])
            b = int(request.form['b'])
            c = int(request.form['c'])
            result = lindio(a, b, c)
            return render_template('lindio.html', result=result)
        except ValueError:
            return render_template('lindio.html', error="Invalid input! Please enter integers.")
    return render_template('lindio.html')

@app.route('/crt', methods=['GET', 'POST'])
def crt_route():
    result = None
    if request.method == 'POST':
        try:
            a1 = int(request.form['a1'])
            m1 = int(request.form['m1'])
            a2 = int(request.form['a2'])
            m2 = int(request.form['m2'])
            result = crt(a1, m1, a2, m2)
            return render_template('crt.html', result=result)
        except ValueError:
            return render_template('crt.html', error="Invalid input! Please enter integers.")
    return render_template('crt.html', result=result)

@app.route('/lincong', methods=['GET', 'POST'])
def lincong_route():
    if request.method == 'POST':
        try:
            a = int(request.form['a'])
            b = int(request.form['b'])
            m = int(request.form['m'])
            result = lincong(a, b, m)
            return render_template('lincong.html', result=result)
        except ValueError:
            return render_template('lincong.html', error="Invalid input! Please enter integers.")
    return render_template('lincong.html')

@app.route('/rsa', methods=['GET', 'POST'])
def rsa_route():
    if request.method == 'POST':
        try:
            operation = request.form['operation']
            value = int(request.form['value'])
            key = int(request.form['key'])
            n = int(request.form['n'])
            if operation == 'encrypt':
                result = rsa_e(value, key, n)
            elif operation == 'decrypt':
                result = rsa_d(value, key, n)
            return render_template('rsa.html', result=result)
        except ValueError:
            return render_template('rsa.html', error="Invalid input! Please enter integers.")
    return render_template('rsa.html')

if __name__ == '__main__':
    app.run(debug=True)