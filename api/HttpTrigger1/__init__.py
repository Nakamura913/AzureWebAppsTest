import azure.functions as func
from flask_app.main import app

def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    """
    Each request is redirected to the WSGI handler.
    """
    return func.WsgiMiddleware(app).handle(req, context)
