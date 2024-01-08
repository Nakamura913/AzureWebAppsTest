from flask import Flask

app = Flask(__name__)

@app.route('/api/test', methods=['GET'])
def api_test():
    return 'This is Test'

if __name__ == '__main__':
    app.run()
